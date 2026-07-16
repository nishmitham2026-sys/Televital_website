import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './LiveVisitorAnalytics.css';

const LOCATIONS = [
  { code: 'IN', name: 'India', ipPrefix: '152.57.109' },
  { code: 'US', name: 'United States', ipPrefix: '198.51.100' },
  { code: 'JP', name: 'Japan', ipPrefix: '203.0.113' },
  { code: 'ZA', name: 'South Africa', ipPrefix: '197.80.244' },
  { code: 'GB', name: 'United Kingdom', ipPrefix: '82.165.97' },
  { code: 'DE', name: 'Germany', ipPrefix: '93.184.216' },
  { code: 'AU', name: 'Australia', ipPrefix: '1.1.1' }
];

const SEED_LOGS = [
  { id: 'seed-1', code: 'IN', name: 'India', timestamp: '26 Jun, 20:18', durationText: '7m 53s' },
  { id: 'seed-2', code: 'IN', name: 'India', timestamp: '26 Jun, 20:17', durationText: '1m 28s' },
  { id: 'seed-3', code: 'IN', name: 'India', timestamp: '26 Jun, 18:24', durationText: '10m 7s' }
];

const HEATMAP_SECTIONS = ['Home', 'About', 'Features', 'Impact', 'Partner'];

const generateRandomIP = (prefix) => {
  const lastOctet = Math.floor(Math.random() * 254) + 1;
  return `${prefix}.${lastOctet}`;
};

const formatDuration = (seconds) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return [
    h.toString().padStart(2, '0'),
    m.toString().padStart(2, '0'),
    s.toString().padStart(2, '0')
  ].join(':');
};

const formatLogDuration = (seconds) => {
  if (seconds < 1) return '1s';
  if (seconds < 60) return `${seconds}s`;
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return s > 0 ? `${m}m ${s}s` : `${m}m`;
};

const formatPathDuration = (seconds) => {
  if (seconds === 0) return '0s';
  if (seconds < 60) return `${seconds}s`;
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return s > 0 ? `${m}m ${s}s` : `${m}m`;
};

const formatBrowsePathWithDurations = (history) => {
  return history
    .map(step => `${step.name} (${formatPathDuration(step.duration)})`)
    .join(' -> ');
};

const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'Tablet';
  }
  if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/i.test(ua)) {
    return 'Mobile';
  }
  return 'Desktop';
};

const getBrowserName = () => {
  const ua = navigator.userAgent;
  if (ua.indexOf("Firefox") > -1) return "Firefox";
  if (ua.indexOf("SamsungBrowser") > -1) return "Samsung Browser";
  if (ua.indexOf("Opera") > -1 || ua.indexOf("OPR") > -1) return "Opera";
  if (ua.indexOf("Trident") > -1) return "Internet Explorer";
  if (ua.indexOf("Edge") > -1 || ua.indexOf("Edg") > -1) return "Edge";
  if (ua.indexOf("Chrome") > -1) return "Chrome";
  if (ua.indexOf("Safari") > -1) return "Safari";
  return "Unknown";
};

const formatLogTimestamp = (date) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const d = date.getDate();
  const m = months[date.getMonth()];
  const hrs = date.getHours().toString().padStart(2, '0');
  const mins = date.getMinutes().toString().padStart(2, '0');
  return `${d} ${m}, ${hrs}:${mins}`;
};

const getPageFriendlyName = (path) => {
  if (path === '/' || path === '/Televital_website/') return 'Home';
  const clean = path.replace(/^\/Televital_website/, '').replace(/^\//, '').split('/')[0];
  if (!clean) return 'Home';
  
  const mapping = {
    'telemedicine': 'Telemedicine',
    'home-care': 'eHealth',
    'home_care': 'eHealth',
    'elearning': 'eLearning',
    'case-studies': 'Case Studies',
    'media': 'Media',
    'about': 'About',
    'contact': 'Contact',
    'privacy': 'Privacy',
    'support': 'Support'
  };
  
  return mapping[clean.toLowerCase()] || clean.charAt(0).toUpperCase() + clean.slice(1);
};

export default function LiveVisitorAnalytics() {
  const [isOpen, setIsOpen] = useState(false);
  const routeLocation = useLocation();

  // Active Session State
  const [selectedCountry, setSelectedCountry] = useState(LOCATIONS[0]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [sessionIP, setSessionIP] = useState(() => generateRandomIP(LOCATIONS[0].ipPrefix));
  const [duration, setDuration] = useState(0);
  const [activeSection, setActiveSection] = useState('Home');
  const [scrollHits, setScrollHits] = useState(1);
  const [browsePath, setBrowsePath] = useState(['Home']);
  const [pathHistory, setPathHistory] = useState([{ name: 'Home', duration: 0 }]);
  const [deviceType] = useState(() => getDeviceType());
  const [browser] = useState(() => getBrowserName());
  
  // Unique Session ID for the lifetime of this browser tab
  const [sessionId, setSessionId] = useState(() => {
    let sid = sessionStorage.getItem('televital_session_id');
    if (!sid) {
      sid = 'session_' + Math.random().toString(36).substring(2, 15) + '_' + Date.now();
      sessionStorage.setItem('televital_session_id', sid);
    }
    return sid;
  });
  
  const [heatmap, setHeatmap] = useState({
    Home: 1,
    About: 0,
    Features: 0,
    Impact: 0,
    Partner: 0
  });

  // Logs state
  const [logs, setLogs] = useState(() => {
    const saved = localStorage.getItem('televital_analytics_logs');
    return saved ? JSON.parse(saved) : SEED_LOGS;
  });

  // Keep track of the current duration in a ref to archive correctly on location change
  const durationRef = useRef(duration);

  // Additional refs for capturing the latest telemetry state in unload/unmount handlers
  const selectedCountryRef = useRef(selectedCountry);
  const selectedStateRef = useRef(selectedState);
  const selectedCityRef = useRef(selectedCity);
  const sessionIPRef = useRef(sessionIP);
  const scrollHitsRef = useRef(scrollHits);
  const activeSectionRef = useRef(activeSection);
  const browsePathRef = useRef(browsePath);
  const pathHistoryRef = useRef(pathHistory);
  const deviceTypeRef = useRef(deviceType);
  const browserRef = useRef(browser);
  const routeLocationRef = useRef(routeLocation);
  const sessionIdRef = useRef(sessionId);

  // Update refs in an effect to avoid mutating refs during render
  useEffect(() => {
    durationRef.current = duration;
    selectedCountryRef.current = selectedCountry;
    selectedStateRef.current = selectedState;
    selectedCityRef.current = selectedCity;
    sessionIPRef.current = sessionIP;
    scrollHitsRef.current = scrollHits;
    activeSectionRef.current = activeSection;
    browsePathRef.current = browsePath;
    pathHistoryRef.current = pathHistory;
    deviceTypeRef.current = deviceType;
    browserRef.current = browser;
    routeLocationRef.current = routeLocation;
    sessionIdRef.current = sessionId;
  });

  const hasSentTelemetry = useRef(false);

  // Send telemetry payload to Google Sheets script URL
  const sendTelemetryToGoogleSheet = (telemetryData) => {
    const baseUrl = 'https://script.google.com/macros/s/AKfycbzK0RT0NE5l0fDMnXGlVgPRr3Dpw_BrUHgPXQsopdk-LSuag7V0YerFFRMntKDm8NtW/exec';
    const now = new Date();
    const timestamp = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
    
    // Support all capitalization and space/underscore variations in query parameters for maximum compatibility with e.parameter
    const queryParams = new URLSearchParams({
      // Column A: Date
      'Date': timestamp,
      'date': timestamp,
      'timestamp': timestamp,
      
      // Column B: Duration
      'Duration': telemetryData.durationText,
      'duration': telemetryData.durationText,
      'sessionDuration': telemetryData.durationText,
      
      // Column C: selectedCountry
      'selectedCountry': telemetryData.selectedCountry,
      'selectedcountry': telemetryData.selectedCountry,
      'location': telemetryData.selectedCountry,
      
      // Column D: Country IP address
      'Country IP address': telemetryData.sessionIP,
      'Country_IP_address': telemetryData.sessionIP,
      'country_ip_address': telemetryData.sessionIP,
      'countryIPaddress': telemetryData.sessionIP,
      'countryipaddress': telemetryData.sessionIP,
      'sessionIP': telemetryData.sessionIP,
      'sessionip': telemetryData.sessionIP,
      'ipAddress': telemetryData.sessionIP,
      'ipaddress': telemetryData.sessionIP,
      
      // Column E: scrollHits
      'scrollHits': String(telemetryData.scrollHits),
      'scrollhits': String(telemetryData.scrollHits),
      'scroll_hits': String(telemetryData.scrollHits),
      'pageHits': String(telemetryData.scrollHits),
      'pagehits': String(telemetryData.scrollHits),
      
      // Column F: browsePath
      'browsePath': telemetryData.browsePath,
      'browsepath': telemetryData.browsePath,
      'browse_path': telemetryData.browsePath,
      'path': telemetryData.browsePath,
      
      // Column G: Device Type
      'Device Type': telemetryData.deviceType,
      'deviceType': telemetryData.deviceType,
      'devicetype': telemetryData.deviceType,
      
      // Column H: Browser
      'Browser': telemetryData.browser,
      'browser': telemetryData.browser,
      
      // Column I: Session ID
      'Session ID': telemetryData.sessionId,
      'Session_ID': telemetryData.sessionId,
      'sessionId': telemetryData.sessionId,
      
      // State / Region
      'State': telemetryData.selectedState || '',
      'state': telemetryData.selectedState || '',
      'Region': telemetryData.selectedState || '',
      'region': telemetryData.selectedState || '',

      // City Name
      'City': telemetryData.selectedCity || '',
      'city': telemetryData.selectedCity || ''
    }).toString();
    
    const url = `${baseUrl}?${queryParams}`;
    
    // Support all capitalization and space/underscore variations in JSON body
    const fullPayload = {
      'Date': timestamp,
      'date': timestamp,
      'timestamp': timestamp,
      'Duration': telemetryData.durationText,
      'duration': telemetryData.durationText,
      'sessionDuration': telemetryData.durationText,
      'selectedCountry': telemetryData.selectedCountry,
      'selectedcountry': telemetryData.selectedCountry,
      'location': telemetryData.selectedCountry,
      'Country IP address': telemetryData.sessionIP,
      'Country_IP_address': telemetryData.sessionIP,
      'country_ip_address': telemetryData.sessionIP,
      'countryIPaddress': telemetryData.sessionIP,
      'countryipaddress': telemetryData.sessionIP,
      'sessionIP': telemetryData.sessionIP,
      'sessionip': telemetryData.sessionIP,
      'ipAddress': telemetryData.sessionIP,
      'ipaddress': telemetryData.sessionIP,
      'scrollHits': telemetryData.scrollHits,
      'scrollhits': telemetryData.scrollHits,
      'scroll_hits': telemetryData.scrollHits,
      'pageHits': telemetryData.scrollHits,
      'pagehits': telemetryData.scrollHits,
      'browsePath': telemetryData.browsePath,
      'browsepath': telemetryData.browsePath,
      'browse_path': telemetryData.browsePath,
      'path': telemetryData.browsePath,
      'Device Type': telemetryData.deviceType,
      'deviceType': telemetryData.deviceType,
      'devicetype': telemetryData.deviceType,
      'Browser': telemetryData.browser,
      'browser': telemetryData.browser,
      'Session ID': telemetryData.sessionId,
      'Session_ID': telemetryData.sessionId,
      'sessionId': telemetryData.sessionId,
      'State': telemetryData.selectedState || '',
      'state': telemetryData.selectedState || '',
      'Region': telemetryData.selectedState || '',
      'region': telemetryData.selectedState || '',
      'City': telemetryData.selectedCity || '',
      'city': telemetryData.selectedCity || ''
    };
    
    fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(fullPayload),
      keepalive: true
    })
    .then(() => console.log('Telemetry successfully sent to Google Sheet:', fullPayload))
    .catch((err) => console.error('Failed to send telemetry to Google Sheet:', err));
  };

  const sendCurrentSessionTelemetry = () => {
    if (durationRef.current > 0 && !hasSentTelemetry.current) {
      hasSentTelemetry.current = true;
      const durationFormatted = formatDuration(durationRef.current);
      sendTelemetryToGoogleSheet({
        selectedCountry: selectedCountryRef.current.name,
        sessionIP: sessionIPRef.current,
        scrollHits: scrollHitsRef.current,
        browsePath: formatBrowsePathWithDurations(pathHistoryRef.current),
        deviceType: deviceTypeRef.current,
        browser: browserRef.current,
        durationText: durationFormatted,
        sessionId: sessionIdRef.current,
        selectedState: selectedStateRef.current,
        selectedCity: selectedCityRef.current
      });
    }
  };

  // Real-time Timer Effect
  useEffect(() => {
    const timer = setInterval(() => {
      setDuration(prev => prev + 1);
      setPathHistory(prev => {
        if (prev.length === 0) return prev;
        const updated = [...prev];
        const lastIdx = updated.length - 1;
        updated[lastIdx] = {
          ...updated[lastIdx],
          duration: updated[lastIdx].duration + 1
        };
        return updated;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Geolocation Auto-Detection on page load
  useEffect(() => {
    // 1. Try to load location from sessionStorage cache first (0ms load, bypasses rate limits)
    const cachedGeo = sessionStorage.getItem('televital_cached_geo');
    if (cachedGeo) {
      try {
        const data = JSON.parse(cachedGeo);
        if (data.countryCode && data.countryName) {
          setSelectedCountry({
            code: data.countryCode,
            name: data.countryName
          });
          setSessionIP(data.ip || '');
          setSelectedState(data.state || '');
          setSelectedCity(data.city || '');
          return;
        }
      } catch (e) {
        console.warn('Failed to parse cached geo:', e);
      }
    }

    const fetchPublicIP = async () => {
      // Try ipify.org (JSON, supports CORS, extremely reliable)
      try {
        const res = await fetch('https://api64.ipify.org?format=json');
        if (res.ok) {
          const data = await res.json();
          if (data.ip) return data.ip;
        }
      } catch (e) {
        console.warn('ipify failed, trying icanhazip:', e);
      }

      // Try icanhazip.com (Text, supports CORS, hosted by Cloudflare, very fast)
      try {
        const res = await fetch('https://icanhazip.com/');
        if (res.ok) {
          const text = await res.text();
          if (text) return text.trim();
        }
      } catch (e) {
        console.warn('icanhazip failed, trying ip.sb:', e);
      }

      // Try ip.sb (Text, supports CORS)
      try {
        const res = await fetch('https://api.ip.sb/ip');
        if (res.ok) {
          const text = await res.text();
          if (text) return text.trim();
        }
      } catch (e) {
        console.warn('ip.sb failed:', e);
      }

      throw new Error('All IP services failed');
    };

    const fetchGeoLocation = async () => {
      try {
        // 2. Fetch user's real public IP via CORS-compliant IP services
        const ip = await fetchPublicIP();
        
        // Immediately record the real IP address to state
        setSessionIP(ip);

        // 3. Query our Apps Script web app (hosted on google.com, never blocked) to perform server-side geolocation
        const baseUrl = 'https://script.google.com/macros/s/AKfycbzK0RT0NE5l0fDMnXGlVgPRr3Dpw_BrUHgPXQsopdk-LSuag7V0YerFFRMntKDm8NtW/exec';
        const geoResponse = await fetch(`${baseUrl}?action=getGeo&ip=${ip}`);
        if (geoResponse.ok) {
          const geoData = await geoResponse.json();
          if (geoData.countryCode && geoData.countryName) {
            setSelectedCountry({
              code: geoData.countryCode,
              name: geoData.countryName
            });
            setSelectedState(geoData.regionName || '');
            setSelectedCity(geoData.cityName || '');

            // Save to cache to prevent rate-limiting on page reloads
            sessionStorage.setItem('televital_cached_geo', JSON.stringify({
              countryCode: geoData.countryCode,
              countryName: geoData.countryName,
              state: geoData.regionName || '',
              city: geoData.cityName || '',
              ip: ip
            }));
            return; // Geolocation successful!
          }
        }
      } catch (err) {
        console.warn('Google Sheets proxy lookup failed, attempting direct client-side fallback:', err);
      }

      // 4. Fallback direct client-side geolocation APIs if the Google proxy/trace fails
      try {
        // Try db-ip.com first (supports HTTPS, free, CORS-friendly, very reliable)
        let response = await fetch('https://api.db-ip.com/v2/free/self');
        let data;
        if (response.ok) {
          data = await response.json();
          if (data.countryCode && data.countryName) {
            setSelectedCountry({
              code: data.countryCode,
              name: data.countryName
            });
            if (data.ipAddress) setSessionIP(data.ipAddress);
            setSelectedState(data.stateProv || '');
            setSelectedCity(data.city || '');
            
            sessionStorage.setItem('televital_cached_geo', JSON.stringify({
              countryCode: data.countryCode,
              countryName: data.countryName,
              state: data.stateProv || '',
              city: data.city || '',
              ip: data.ipAddress || ''
            }));
            return;
          }
        }

        // Try freeipapi.com as second option (supports HTTPS, high rate limits, no API key needed)
        response = await fetch('https://freeipapi.com/api/json');
        if (response.ok) {
          data = await response.json();
          if (data.countryCode && data.countryName) {
            setSelectedCountry({
              code: data.countryCode,
              name: data.countryName
            });
            if (data.ipAddress) setSessionIP(data.ipAddress);
            setSelectedState(data.regionName || '');
            setSelectedCity(data.cityName || '');
            
            sessionStorage.setItem('televital_cached_geo', JSON.stringify({
              countryCode: data.countryCode,
              countryName: data.countryName,
              state: data.regionName || '',
              city: data.cityName || '',
              ip: data.ipAddress || ''
            }));
            return;
          }
        }

        // Try ipwho.is as third option (supports HTTPS, free, CORS-friendly)
        response = await fetch('https://ipwho.is/');
        if (response.ok) {
          data = await response.json();
          if (data.success && data.country_code && data.country) {
            setSelectedCountry({
              code: data.country_code,
              name: data.country
            });
            if (data.ip) setSessionIP(data.ip);
            setSelectedState(data.region || '');
            setSelectedCity(data.city || '');
            
            sessionStorage.setItem('televital_cached_geo', JSON.stringify({
              countryCode: data.country_code,
              countryName: data.country,
              state: data.region || '',
              city: data.city || '',
              ip: data.ip || ''
            }));
            return;
          }
        }

        // Try ipapi.co as fourth option (supports HTTPS, free tier limited to 1000 requests/day)
        response = await fetch('https://ipapi.co/json/');
        if (response.ok) {
          data = await response.json();
          if (data.country_code && data.country_name) {
            setSelectedCountry({
              code: data.country_code,
              name: data.country_name
            });
            if (data.ip) setSessionIP(data.ip);
            setSelectedState(data.region || '');
            setSelectedCity(data.city || '');
            
            sessionStorage.setItem('televital_cached_geo', JSON.stringify({
              countryCode: data.country_code,
              countryName: data.country_name,
              state: data.region || '',
              city: data.city || '',
              ip: data.ip || ''
            }));
            return;
          }
        }

        // Try ipinfo.io as fifth option (supports HTTPS, free, very popular)
        response = await fetch('https://ipinfo.io/json');
        if (response.ok) {
          data = await response.json();
          if (data.country && data.ip) {
            const countryName = data.country === 'IN' ? 'India' : data.country === 'US' ? 'United States' : data.country;
            setSelectedCountry({
              code: data.country,
              name: countryName
            });
            if (data.ip) setSessionIP(data.ip);
            setSelectedState(data.region || '');
            setSelectedCity(data.city || '');
            
            sessionStorage.setItem('televital_cached_geo', JSON.stringify({
              countryCode: data.country,
              countryName: countryName,
              state: data.region || '',
              city: data.city || '',
              ip: data.ip || ''
            }));
            return;
          }
        }
      } catch (err) {
        console.warn('Could not auto-detect visitor location, using default simulation:', err);
      }
    };

    fetchGeoLocation();
  }, []);

  const handleSectionTransition = (sectionName) => {
    setActiveSection(current => {
      if (current === sectionName) return current;

      // Update state if section changed
      setScrollHits(prev => prev + 1);
      setBrowsePath(prev => {
        // Only add if it's different from the last element to prevent consecutive duplicates
        if (prev[prev.length - 1] === sectionName) return prev;
        return [...prev, sectionName];
      });

      setPathHistory(prev => {
        if (prev.length > 0 && prev[prev.length - 1].name === sectionName) return prev;
        return [...prev, { name: sectionName, duration: 0 }];
      });

      // Update heatmap (only if it is one of our 5 tracked sections)
      if (HEATMAP_SECTIONS.includes(sectionName)) {
        setHeatmap(prev => ({
          ...prev,
          [sectionName]: prev[sectionName] + 1
        }));
      }

      return sectionName;
    });
  };

  // Send telemetry on page unload, visibility change, or component unmount
  useEffect(() => {
    const handleUnload = () => {
      sendCurrentSessionTelemetry();
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sendCurrentSessionTelemetry();
      } else if (document.visibilityState === 'visible') {
        hasSentTelemetry.current = false;
      }
    };

    window.addEventListener('beforeunload', handleUnload);
    window.addEventListener('pagehide', handleUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('beforeunload', handleUnload);
      window.removeEventListener('pagehide', handleUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      handleUnload();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Track Active Section & Page Views
  useEffect(() => {
    const friendlyPageName = getPageFriendlyName(routeLocation.pathname);

    if (friendlyPageName !== 'Home') {
      // If we navigate away from Home page, set active section to the page friendly name
      setTimeout(() => {
        handleSectionTransition(friendlyPageName);
      }, 0);
      return;
    }

    // We are on the Home page. Set up Intersection Observer for sections.
    const sectionIds = [
      { id: 'hero-section', name: 'Home' }, // Carousel can map to Home
      { id: 'homeHeroCarousel', name: 'Home' }, // Fallback standard carousel ID
      { id: 'about-section', name: 'About' },
      { id: 'features-section', name: 'Features' },
      { id: 'impact-section', name: 'Impact' },
      { id: 'partner-section', name: 'Partner' }
    ];

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px', // Matches viewport focus region
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const matched = sectionIds.find(s => s.id === entry.target.id);
          if (matched) {
            handleSectionTransition(matched.name);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Fallback: If no sections are intersecting or found yet, default to Home
    setTimeout(() => {
      handleSectionTransition('Home');
    }, 0);

    return () => observer.disconnect();
  }, [routeLocation.pathname]);

  // Change simulated visitor location
  const handleCountryChange = (e) => {
    const code = e.target.value;
    const nextCountry = LOCATIONS.find(l => l.code === code) || LOCATIONS[0];
    
    // 1. Archive current session to logs (if duration > 0)
    if (durationRef.current > 0) {
      const timestamp = formatLogTimestamp(new Date());
      const durationText = formatLogDuration(durationRef.current);
      const newLog = {
        id: `log-${Date.now()}`,
        code: selectedCountry.code,
        name: selectedCountry.name,
        state: selectedState,
        timestamp,
        durationText
      };

      // Send telemetry to Google Sheet
      sendTelemetryToGoogleSheet({
        selectedCountry: selectedCountry.name,
        sessionIP: sessionIP,
        scrollHits: scrollHits,
        browsePath: formatBrowsePathWithDurations(pathHistory),
        deviceType: deviceType,
        browser: browser,
        durationText: formatDuration(durationRef.current),
        sessionId: sessionId,
        selectedState: selectedState,
        selectedCity: selectedCity
      });

      hasSentTelemetry.current = true;

      setLogs(prev => {
        const updated = [newLog, ...prev];
        localStorage.setItem('televital_analytics_logs', JSON.stringify(updated));
        return updated;
      });
    }

    // 2. Setup next session
    const nextSessionId = 'session_' + Math.random().toString(36).substring(2, 15) + '_' + Date.now();
    sessionStorage.setItem('televital_session_id', nextSessionId);
    setSessionId(nextSessionId);
    hasSentTelemetry.current = false;

    setSelectedCountry(nextCountry);
    setSessionIP(generateRandomIP(nextCountry.ipPrefix));
    setSelectedState('');
    setSelectedCity('');
    setDuration(0);
    setScrollHits(1);
    
    const initialSection = getPageFriendlyName(routeLocation.pathname);
    setBrowsePath([initialSection]);
    setActiveSection(initialSection);
    setPathHistory([{ name: initialSection, duration: 0 }]);
    
    // Reset heatmap (landing on initialSection gets 1 hit, others 0)
    const freshHeatmap = { Home: 0, About: 0, Features: 0, Impact: 0, Partner: 0 };
    if (HEATMAP_SECTIONS.includes(initialSection)) {
      freshHeatmap[initialSection] = 1;
    } else {
      freshHeatmap.Home = 1; // Default
    }
    setHeatmap(freshHeatmap);
  };

  // Clear Session Logs
  const handleClearLogs = () => {
    setLogs([]);
    localStorage.removeItem('televital_analytics_logs');
  };

  // Calculate heatmap percentages
  const totalHeatmapHits = Object.values(heatmap).reduce((a, b) => a + b, 0);

  return (
    <>
      {/* Floating Action Button Launcher */}
      {!isOpen && (
        <button 
          className="analytics-launcher shadow-lg"
          onClick={() => setIsOpen(true)}
          aria-label="Open Live Visitor Analytics"
        >
          <div className="telemetry-pulse"></div>
          <i className="bi bi-activity text-white fs-4"></i>
          <span className="badge bg-danger rounded-pill badge-live">LIVE</span>
        </button>
      )}

      {/* Drawer Overlay Backdrop */}
      {isOpen && <div className="analytics-backdrop" onClick={() => setIsOpen(false)}></div>}

      {/* Slide-out Drawer Panel */}
      <div className={`analytics-drawer ${isOpen ? 'open' : ''}`}>
        {/* Drawer Header */}
        <div className="analytics-header d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <div className="shield-icon-container me-3 text-emerald">
              <i className="bi bi-shield-fill-check fs-3"></i>
            </div>
            <div>
              <h5 className="mb-0 fw-bold text-dark font-heading">Live Visitor Analytics</h5>
              <small className="text-muted">Real-time engagement telemetry</small>
            </div>
          </div>
          <button 
            type="button" 
            className="btn-close-analytics btn border-0 p-2 text-secondary hover-text-dark" 
            onClick={() => setIsOpen(false)}
            aria-label="Close"
          >
            <i className="bi bi-x-lg fs-5"></i>
          </button>
        </div>

        {/* Drawer Body content (scrollable) */}
        <div className="analytics-body">
          {/* Active Session Cards */}
          <div className="analytics-section">
            <h6 className="section-subtitle fw-bold text-dark mb-3">Active Session</h6>
            
            <div className="row g-3">
              {/* Card 1: Country & IP */}
              <div className="col-6">
                <div className="analytics-card">
                  <div className="card-flag-code font-heading">{selectedCountry.code}</div>
                  <div 
                    className="card-value-primary text-teal font-heading text-truncate w-100 px-1"
                    title={`${selectedCountry.name}${selectedState ? `, ${selectedState}` : ''}${selectedCity ? `, ${selectedCity}` : ''}`}
                  >
                    {selectedCountry.name}{selectedState ? `, ${selectedState}` : ''}{selectedCity ? `, ${selectedCity}` : ''}
                  </div>
                  <div className="card-label-secondary">
                    LOCATION (IP: {sessionIP})
                  </div>
                </div>
              </div>

              {/* Card 2: Duration */}
              <div className="col-6">
                <div className="analytics-card">
                  <div className="card-icon text-muted">
                    <i className="bi bi-clock"></i>
                  </div>
                  <div className="card-value-primary text-teal font-heading">
                    {formatDuration(duration)}
                  </div>
                  <div className="card-label-secondary">DURATION</div>
                </div>
              </div>

              {/* Card 3: Active Section */}
              <div className="col-6">
                <div className="analytics-card">
                  <div className="card-icon text-muted">
                    <i className="bi bi-eye"></i>
                  </div>
                  <div className="card-value-primary text-teal font-heading text-truncate w-100 px-1" title={activeSection}>
                    {activeSection}
                  </div>
                  <div className="card-label-secondary">ACTIVE SECTION</div>
                </div>
              </div>

              {/* Card 4: Total Scroll Hits */}
              <div className="col-6">
                <div className="analytics-card">
                  <div className="card-icon text-muted">
                    <i className="bi bi-layers"></i>
                  </div>
                  <div className="card-value-primary text-teal font-heading">
                    {scrollHits}
                  </div>
                  <div className="card-label-secondary">TOTAL SCROLL HITS</div>
                </div>
              </div>

              {/* Card 5: Device Type */}
              <div className="col-6">
                <div className="analytics-card">
                  <div className="card-icon text-muted">
                    <i className={`bi bi-${deviceType === 'Mobile' ? 'phone' : deviceType === 'Tablet' ? 'tablet' : 'laptop'}`}></i>
                  </div>
                  <div className="card-value-primary text-teal font-heading">
                    {deviceType}
                  </div>
                  <div className="card-label-secondary">DEVICE TYPE</div>
                </div>
              </div>

              {/* Card 6: Browser */}
              <div className="col-6">
                <div className="analytics-card">
                  <div className="card-icon text-muted">
                    <i className="bi bi-globe"></i>
                  </div>
                  <div className="card-value-primary text-teal font-heading text-truncate w-100 px-1" title={browser}>
                    {browser}
                  </div>
                  <div className="card-label-secondary">BROWSER</div>
                </div>
              </div>
            </div>
          </div>

          {/* Section Browse Path */}
          <div className="analytics-section">
            <h6 className="section-subtitle fw-bold text-dark mb-1">Section Browse Path</h6>
            <p className="small text-muted mb-2">Chronological order of sections scrolled (with durations)</p>
            <div className="browse-path-container d-flex flex-wrap align-items-center gap-2 p-3 bg-light rounded-3 border">
              {pathHistory.map((step, idx) => (
                <React.Fragment key={idx}>
                  {idx > 0 && <i className="bi bi-chevron-right text-muted small"></i>}
                  <span className="badge-browse-section d-inline-flex align-items-center">
                    {step.name}
                    <span className="badge-step-duration text-muted ms-1">
                      ({formatPathDuration(step.duration)})
                    </span>
                  </span>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Section View Heatmap */}
          <div className="analytics-section">
            <h6 className="section-subtitle fw-bold text-dark mb-1">Section View Heatmap</h6>
            <p className="small text-muted mb-3">Popularity breakdown by viewport triggers</p>
            
            <div className="heatmap-container d-flex flex-column gap-3">
              {HEATMAP_SECTIONS.map(secName => {
                const count = heatmap[secName] || 0;
                const percentage = totalHeatmapHits > 0 
                  ? Math.round((count / totalHeatmapHits) * 100) 
                  : 0;

                return (
                  <div key={secName} className="heatmap-row">
                    <div className="d-flex justify-content-between small mb-1">
                      <span className="fw-semibold text-dark">{secName}</span>
                      <span className="text-muted">{count} Hits ({percentage}%)</span>
                    </div>
                    <div className="progress heatmap-progress-bar" style={{ height: '6px' }}>
                      <div 
                        className="progress-bar heatmap-fill bg-teal" 
                        role="progressbar" 
                        style={{ width: `${percentage}%` }} 
                        aria-valuenow={percentage} 
                        aria-valuemin="0" 
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Simulator Controls */}
          <div className="analytics-section">
            <div className="simulator-controls-card p-3 rounded-3 border bg-light">
              <h6 className="fw-bold text-dark mb-3 d-flex align-items-center">
                <i className="bi bi-gear-fill me-2 text-secondary"></i>
                Simulator Controls
              </h6>
              
              <div className="mb-1">
                <label htmlFor="countrySimSelect" className="form-label small text-muted mb-2">
                  Simulate Visitor Location:
                </label>
                <select 
                  id="countrySimSelect" 
                  className="form-select select-simulator rounded-3 font-sans"
                  value={selectedCountry.code} 
                  onChange={handleCountryChange}
                >
                  {LOCATIONS.map(loc => (
                    <option key={loc.code} value={loc.code}>
                      {loc.code} {loc.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-3">
                <label htmlFor="stateSimInput" className="form-label small text-muted mb-2">
                  Simulate Visitor State:
                </label>
                <input 
                  type="text"
                  id="stateSimInput" 
                  className="form-control select-simulator rounded-3 font-sans"
                  placeholder="Enter state (e.g. Karnataka)"
                  value={selectedState} 
                  onChange={(e) => setSelectedState(e.target.value)}
                />
              </div>

              <div className="mt-3">
                <label htmlFor="citySimInput" className="form-label small text-muted mb-2">
                  Simulate Visitor City:
                </label>
                <input 
                  type="text"
                  id="citySimInput" 
                  className="form-control select-simulator rounded-3 font-sans"
                  placeholder="Enter city (e.g. Bengaluru)"
                  value={selectedCity} 
                  onChange={(e) => setSelectedCity(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Local Session Logs */}
          <div className="analytics-section pb-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="section-subtitle fw-bold text-dark mb-0">Local Session Logs</h6>
              {logs.length > 0 && (
                <button 
                  type="button" 
                  className="btn btn-link text-danger text-decoration-none p-0 small font-sans"
                  onClick={handleClearLogs}
                >
                  Clear Logs
                </button>
              )}
            </div>

            {logs.length === 0 ? (
              <div className="text-center py-4 text-muted small border rounded-3 bg-white">
                No session logs available.
              </div>
            ) : (
              <div className="session-logs-list d-flex flex-column gap-2">
                {logs.map(log => (
                  <div key={log.id} className="log-item p-3 border rounded-3 bg-white d-flex align-items-center justify-content-between shadow-sm">
                    <div>
                      <div className="d-flex align-items-center">
                        <span className="badge bg-light text-dark border me-2 small fw-bold">{log.code}</span>
                        <strong className="text-dark small">
                          {log.name}{log.state ? `, ${log.state}` : ''}
                        </strong>
                      </div>
                      <div className="text-muted small mt-1" style={{ fontSize: '0.75rem' }}>{log.timestamp}</div>
                    </div>
                    <div>
                      <span className="badge badge-duration-pill">{log.durationText}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
