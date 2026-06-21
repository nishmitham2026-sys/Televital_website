import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ImageLightbox from '../components/ImageLightbox';

export default function CaseStudies() {
  const location = useLocation();
  const path = location.pathname;
  const [filter, setFilter] = useState('all');
  const [activeUPImage, setActiveUPImage] = useState(null);

  const cases = [
    {
      id: 'meditac-nasa',
      title: 'MedITAC/NASA',
      region: 'usa-japan',
      icon: 'bi-rocket-takeoff-fill',
      summary: 'First reported remote anesthesia monitoring over the Internet in Ecuador mobile surgical rigs, using 64Kbps satellite links.',
      link: '/case-studies/meditac-nasa'
    },
    {
      id: 'arizona-telemedicine-project',
      title: 'Arizona Telemedicine Project',
      region: 'usa-japan',
      icon: 'bi-activity',
      summary: 'Asthma screening and monitoring for elementary schools in Phoenix, storing oximetry logs for remote responses.',
      link: '/case-studies/arizona-telemedicine-project'
    },
    {
      id: 'real-time-ambulance-monitoring-in-japan',
      title: 'Real-time Ambulance Monitoring in Japan',
      region: 'usa-japan',
      icon: 'bi-truck-flatbed',
      summary: 'Wireless real-time 12-lead ECG and video streaming during ambulance transport with Ehime Medical University.',
      link: '/case-studies/real-time-ambulance-monitoring-in-japan'
    },
    {
      id: 'homecare-on-cable-set-top-boxes-in-texas',
      title: 'Homecare on Cable Set-Top-Boxes in Texas',
      region: 'usa-japan',
      icon: 'bi-tv-fill',
      summary: 'Delivering interactive health questionnaires and vital sign streaming to home TVs via cable set-top boxes.',
      link: '/case-studies/homecare-on-cable-set-top-boxes-in-texas'
    },
    {
      id: 'isro-telemedicine-network',
      title: 'ISRO Telemedicine Network',
      region: 'india-africa',
      icon: 'bi-globe-asia-australia',
      summary: 'Powering 327 turn-key telemedicine installations across remote hospitals and islands in the Indian subcontinent.',
      link: '/case-studies/isro-telemedicine-network'
    },
    {
      id: 'pan-africa-initiative',
      title: 'Pan-Africa Initiative',
      region: 'india-africa',
      icon: 'bi-globe-europe-africa',
      summary: 'Initiated by former President Dr. Kalam to connect 53 African Union nations with super specialty hospitals in India.',
      link: '/case-studies/pan-africa-initiative'
    },
    {
      id: 'rural-education-kscst-iisc',
      title: 'Rural Education (KSCST/IISc)',
      region: 'india-africa',
      icon: 'bi-mortarboard-fill',
      summary: 'Deploying Virtual Science Labs in 10 backward taluka high schools in Karnataka with IISc and KSCST endorsement.',
      link: '/case-studies/rural-education-kscst-iisc'
    }
  ];

  const filteredCases = cases.filter(c => filter === 'all' || c.region === filter);

  // ==========================================
  // VIEW: Case Studies List Catalog
  // ==========================================
  const renderCatalog = () => (
    <div>
      <div class="text-center mb-5">
        <span class="text-secondary fw-semibold uppercase letter-spacing-1 font-sm d-block mb-1">Our Global Impact</span>
        <h1 class="fw-extrabold text-primary mb-3">Case Studies</h1>
        <p class="text-muted max-w-700 mx-auto small">
          Explore our real-world deployments and clinical networks built in collaboration with leading international agencies, space centers, and ministries.
        </p>

        {/* Filter Pills */}
        <div class="d-flex justify-content-center mt-4">
          <div class="nav nav-pills bg-white p-2 rounded-pill border shadow-sm" style={{ width: 'fit-content' }}>
            <button 
              class={`nav-link rounded-pill px-4 fw-medium border-0 ${filter === 'all' ? 'bg-secondary text-white' : 'text-primary'}`}
              onClick={() => setFilter('all')}
            >
              Show All
            </button>
            <button 
              class={`nav-link rounded-pill px-4 fw-medium border-0 ${filter === 'usa-japan' ? 'bg-secondary text-white' : 'text-primary'}`}
              onClick={() => setFilter('usa-japan')}
            >
              USA & Japan
            </button>
            <button 
              class={`nav-link rounded-pill px-4 fw-medium border-0 ${filter === 'india-africa' ? 'bg-secondary text-white' : 'text-primary'}`}
              onClick={() => setFilter('india-africa')}
            >
              India & Africa
            </button>
          </div>
        </div>
      </div>

      <div class="row g-4 mb-5">
        {filteredCases.map((c) => (
          <div key={c.id} class="col-md-6 col-lg-4">
            <div class="premium-card bg-white p-4 text-start h-100 d-flex flex-column">
              <div class="bg-secondary bg-opacity-10 p-3 rounded-3 text-secondary mb-3" style={{ width: 'fit-content' }}>
                <i class={`bi ${c.icon} fs-3`}></i>
              </div>
              <h4 class="fw-bold text-primary font-heading mb-2">{c.title}</h4>
              <p class="text-muted small lh-base mb-4 flex-grow-1">{c.summary}</p>
              <Link to={c.link} class="btn btn-secondary-custom rounded-pill mt-auto font-sans font-sm" style={{ width: 'fit-content' }}>
                Read Case Study <i class="bi bi-arrow-right ms-1"></i>
              </Link>
            </div>
          </div>
        ))}

        {/* Specialized Item: Uttar Pradesh Telemedicine Lightbox Trigger */}
        {(filter === 'all' || filter === 'india-africa') && (
          <div class="col-md-6 col-lg-4">
            <div class="premium-card bg-white p-4 text-start h-100 d-flex flex-column">
              <div class="bg-secondary bg-opacity-10 p-3 rounded-3 text-secondary mb-3" style={{ width: 'fit-content' }}>
                <i class="bi bi-images fs-3"></i>
              </div>
              <h4 class="fw-bold text-primary font-heading mb-2">Uttar Pradesh Telemedicine</h4>
              <p class="text-muted small lh-base mb-4 flex-grow-1">
                Visual documentation of the Uttar Pradesh Telemedicine system and mobile health clinic launches. Click to view full newspaper clipping.
              </p>
              <button 
                class="btn btn-primary-custom rounded-pill mt-auto font-sans font-sm"
                onClick={() => setActiveUPImage({ src: '/images/footergallery/UP1.jpg', title: 'Uttar Pradesh Telemedicine Initiative' })}
                style={{ width: 'fit-content' }}
              >
                View News Clipping <i class="bi bi-eye ms-1"></i>
              </button>
            </div>
          </div>
        )}
      </div>
      
      {activeUPImage && (
        <ImageLightbox image={activeUPImage} onClose={() => setActiveUPImage(null)} />
      )}
    </div>
  );

  // ==========================================
  // VIEW: NASA/MedITAC
  // ==========================================
  const renderNASA = () => (
    <div class="bg-white rounded-4 p-4 p-md-5 border shadow-sm">
      <span class="text-secondary fw-semibold uppercase letter-spacing-1 font-sm d-block mb-1">NASA Program Partner</span>
      <h2 class="fw-bold text-primary font-heading mb-2">MedITAC / NASA Collaboration</h2>
      <h4 class="text-muted fw-normal font-heading fs-5 mb-4">First reported remote anesthesia monitoring over the Internet</h4>

      <p class="text-muted small lh-lg">
        Virginia Commonwealth University (VCU) based **Medical Informatics and Technology Applications Consortium (MedITAC)**, a NASA Research Partnership Center, partnered with TeleVital to monitor remote surgeries in Ecuador during 2001 and 2002.
      </p>
      <p class="text-muted small lh-lg">
        Surgeries were performed in the Cinterandes Foundation Mobile Surgical Facility in Sucúa, Ecuador. The first case, an open cholecystectomy, saw the first known transmission of real-time physiologic parameters for distant anesthetic monitoring. Dr. Lynne Gehr monitored the transmitted data at her desktop in Virginia, 3,000 miles away, utilizing a single 64Kbps satellite connection, while Dr. Patricio Escandon served as the attending anesthesiologist on site.
      </p>
      <p class="text-muted small lh-lg">
        The system allowed real-time streaming of audio, video, EKG, SpO2, pulse, respiration rate, and ETCO2 from a standard laptop to Virginia, while archiving data in San Jose, California. Dr. Gehr was even able to remotely detect an anomaly in the patient's heart rhythm and notify the surgeon, Dr. Ronald C. Merrell, who immediately corrected the issue.
      </p>

      <blockquote class="border-start border-4 border-secondary bg-light p-3 my-4 rounded-3 small italic text-muted font-sans">
        "The experience of sitting at my desktop computer in Virginia monitoring a patient's vital signs during an operation in Ecuador was quite remarkable. TeleVital’s VitalWeb link provided the same information I would have received if I had been physically in the operating room."
        <span class="d-block mt-2 fw-bold text-primary font-sans small">— Dr. Lynne Gehr, MCV/VCU Anesthesiologist</span>
      </blockquote>

      <div class="row g-4 mt-4 pt-4 border-top">
        <div class="col-md-6">
          <h5 class="fw-bold text-primary font-heading">Case Study Resources</h5>
          <ul class="list-unstyled d-flex flex-column gap-2 small text-muted">
            <li>
              <a href="http://www.anesthesia-analgesia.org/content/102/5/1463.full" target="_blank" rel="noopener noreferrer" class="text-secondary hover-teal">
                <i class="bi bi-file-earmark-text text-danger me-1"></i> Whitepaper: Remote Anesthetic Monitoring (Satellite)
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=RGWPk4yiZRU" target="_blank" rel="noopener noreferrer" class="text-secondary hover-teal">
                <i class="bi bi-youtube text-danger me-1"></i> NBC News: LifeSaver HighTech Surgery Video
              </a>
            </li>
            <li>
              <a href="/downloads/NASAReport.pdf" target="_blank" class="text-secondary hover-teal">
                <i class="bi bi-file-earmark-pdf text-danger me-1"></i> TeleVital in NASA's Annual Report (PDF)
              </a>
            </li>
            <li>
              <a href="/downloads/Pilot_Proj.pdf" target="_blank" class="text-secondary hover-teal">
                <i class="bi bi-file-earmark-pdf text-danger me-1"></i> MedITAC Pilot Project Report (PDF)
              </a>
            </li>
          </ul>
        </div>
        <div class="col-md-6 bg-light p-4 rounded-3">
          <h5 class="fw-bold text-primary font-heading">Key Breakthroughs</h5>
          <p class="small text-muted mb-0 lh-base">
            No other company had successfully transmitted multi-parameter diagnostic medical data in real-time over such a low-bandwidth (64Kbps) connection. This enabled telemedicine to function in remote, under-connected, and economically disadvantaged areas without requiring broadband lines.
          </p>
        </div>
      </div>

      <div class="mt-4 pt-2">
        <Link to="/case-studies" class="btn btn-primary-custom rounded-pill">
          <i class="bi bi-arrow-left me-2"></i> Back to Case Studies List
        </Link>
      </div>
    </div>
  );

  // ==========================================
  // VIEW: Arizona Telemedicine Project
  // ==========================================
  const renderArizona = () => (
    <div class="bg-white rounded-4 p-4 p-md-5 border shadow-sm text-center">
      <div class="bg-secondary bg-opacity-10 p-3 rounded-circle mx-auto mb-3" style={{ width: 'fit-content' }}>
        <i class="bi bi-activity text-secondary fs-2"></i>
      </div>
      <span class="text-secondary fw-semibold uppercase letter-spacing-1 font-sm d-block mb-1">USA Public Health</span>
      <h2 class="fw-bold text-primary font-heading mb-3">Arizona Telemedicine Program</h2>
      <h5 class="text-muted fw-normal font-heading fs-5 mb-4">Asthma Screenings at Lowell Elementary School in Phoenix</h5>
      
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <p class="text-muted small lh-lg text-start mb-4">
            The Arizona Telemedicine Program is a large, multidisciplinary, university-based program providing telemedicine services, distance learning, and informatics training to communities throughout Arizona.
          </p>
          <p class="text-muted small lh-lg text-start mb-4">
            As an initiative of this program, the department utilized TeleVital’s technology at Lowell Elementary School of Phoenix. During 2002, students exhibiting signs or symptoms of asthma were regularly screened using spirometry and oximetry tests. The test results were securely uploaded to a central server, allowing medical specialists throughout Arizona to access records and prescribe timely responses, safeguarding pediatric care.
          </p>
          <Link to="/case-studies" class="btn btn-primary-custom rounded-pill mt-3">
            <i class="bi bi-arrow-left me-2"></i> Back to Case Studies
          </Link>
        </div>
      </div>
    </div>
  );

  // ==========================================
  // VIEW: Real-time Ambulance Monitoring in Japan
  // ==========================================
  const renderJapan = () => (
    <div class="bg-white rounded-4 p-4 p-md-5 border shadow-sm text-center">
      <div class="bg-secondary bg-opacity-10 p-3 rounded-circle mx-auto mb-3" style={{ width: 'fit-content' }}>
        <i class="bi bi-truck-flatbed text-secondary fs-2"></i>
      </div>
      <span class="text-secondary fw-semibold uppercase letter-spacing-1 font-sm d-block mb-1">Japan Wireless Demonstration</span>
      <h2 class="fw-bold text-primary font-heading mb-3">Ambulance Vital Sign Streaming</h2>
      <h5 class="text-muted fw-normal font-heading fs-5 mb-4">Ehime Medical University Transport Project</h5>
      
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <p class="text-muted small lh-lg text-start mb-4">
            Ehime Medical University executed a wireless patient monitoring demonstration project in Ehime, Japan, coordinated by Dr. Eizen Kimura, M.D. Ph.D., IT Director of Ehime Medical University.
          </p>
          <p class="text-muted small lh-lg text-start mb-4">
            The project demonstrated the extreme flexibility of TeleVital’s VitalWare technologies, allowing moving vehicles (ambulances) to remain connected to a wireless Wi-Fi network during emergency transport. The demonstration showed an ambulance driving from a car accident site while the patient's 12-lead ECG and real-time video was streamed over Cisco's WLAN. Doctors in the hospital were able to log in and monitor the patient in transit to prepare immediate surgical interventions.
          </p>
          <Link to="/case-studies" class="btn btn-primary-custom rounded-pill mt-3">
            <i class="bi bi-arrow-left me-2"></i> Back to Case Studies
          </Link>
        </div>
      </div>
    </div>
  );

  // ==========================================
  // VIEW: Homecare on Set-Top-Boxes in Texas
  // ==========================================
  const renderTexas = () => (
    <div class="bg-white rounded-4 p-4 p-md-5 border shadow-sm text-center">
      <div class="bg-secondary bg-opacity-10 p-3 rounded-circle mx-auto mb-3" style={{ width: 'fit-content' }}>
        <i class="bi bi-tv-fill text-secondary fs-2"></i>
      </div>
      <span class="text-secondary fw-semibold uppercase letter-spacing-1 font-sm d-block mb-1">Texas Broadband Telehealth</span>
      <h2 class="fw-bold text-primary font-heading mb-3">Homecare via Cable Set-Top Boxes</h2>
      <h5 class="text-muted fw-normal font-heading fs-5 mb-4">Telehealth Broadband LLC - Healthium Service</h5>
      
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <p class="text-muted small lh-lg text-start mb-4">
            Telehealth Broadband, LLC is a subsidiary of Security Broadband Corporation, which holds strategic alliances with major North American cable operators reaching over 70 million homes.
          </p>
          <p class="text-muted small lh-lg text-start mb-4">
            The Healthium service leverage broadband and consumer TV set-top-boxes to deliver interactive health services directly to chronic disease patients and post-surgical patients. It reduces the cost of care and improves outcomes by providing affordable, professionally monitored health evaluations, TV-based vital signs collection, and questionnaire responses over the cable network.
          </p>
          <Link to="/case-studies" class="btn btn-primary-custom rounded-pill mt-3">
            <i class="bi bi-arrow-left me-2"></i> Back to Case Studies
          </Link>
        </div>
      </div>
    </div>
  );

  // ==========================================
  // VIEW: ISRO Telemedicine Network
  // ==========================================
  const renderISRO = () => (
    <div class="bg-white rounded-4 p-4 p-md-5 border shadow-sm text-center">
      <div class="bg-secondary bg-opacity-10 p-3 rounded-circle mx-auto mb-3" style={{ width: 'fit-content' }}>
        <i class="bi bi-globe-asia-australia text-secondary fs-2"></i>
      </div>
      <span class="text-secondary fw-semibold uppercase letter-spacing-1 font-sm d-block mb-1">ISRO Sponsored Projects</span>
      <h2 class="fw-bold text-primary font-heading mb-3">ISRO Telemedicine Network</h2>
      <h5 class="text-muted fw-normal font-heading fs-5 mb-4">Powering turn-key clinics in Karnataka, Jammu & Kashmir, and remote islands</h5>
      
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <p class="text-muted small lh-lg text-start mb-4">
            In India, TeleVital is the preferred technology provider for the Indian Space Research Organisation (ISRO) sponsored projects. We have the unique experience of implementing more than 327 telemedicine installations throughout the country.
          </p>
          <p class="text-muted small lh-lg text-start mb-4">
            This satellite-based health network links specialty super-hospitals in urban centers to remote clinics in the Andaman & Nicobar Islands, hilly terrains of Jammu & Kashmir, and rural villages, saving lives through instant expert consultations.
          </p>
          <div class="mt-4 pt-3 border-top text-start">
            <a href="/downloads/ISRO-Telemedicine-Initiative.pdf" target="_blank" class="btn btn-outline-danger btn-sm rounded-pill">
              <i class="bi bi-file-earmark-pdf me-1"></i> Read ISRO Telemedicine Initiative (PDF)
            </a>
          </div>
          <Link to="/case-studies" class="btn btn-primary-custom rounded-pill mt-4">
            <i class="bi bi-arrow-left me-2"></i> Back to Case Studies
          </Link>
        </div>
      </div>
    </div>
  );

  // ==========================================
  // VIEW: Pan-Africa Initiative
  // ==========================================
  const renderAfrica = () => (
    <div class="bg-white rounded-4 p-4 p-md-5 border shadow-sm">
      <span class="text-secondary fw-semibold uppercase letter-spacing-1 font-sm d-block mb-1">Ministry of External Affairs (Govt of India)</span>
      <h2 class="fw-bold text-primary font-heading mb-2">The PAN-African e-Network Project</h2>
      <h5 class="text-muted fw-normal font-heading fs-5 mb-4">Conceived by Ex-President Dr. A.P.J. Abdul Kalam</h5>

      <p class="text-muted small lh-lg">
        The Pan-African e-Network initiative was proposed by former President Dr. APJ Abdul Kalam in 2004 to connect all 53 nations of the African Union with India by a satellite and fiber-optic network. The network provides infra-structure for tele-education, telemedicine, internet, video conferencing, and VoIP services.
      </p>
      <p class="text-muted small lh-lg">
        Funded by the Government of India (budgeted at US$117 Million), Telecommunications Consultants India Ltd (TCIL) served as the turnkey implementing agency. TeleVital was selected by TCIL to supply telemedicine software and support to remote hospitals in 42 countries, 5 African Super Specialty hospitals, and 12 Indian Super Specialty hospitals.
      </p>
      <p class="text-muted small lh-lg">
        The network facilitates online and offline clinical consultations, along with Continuing Medical Education (CME) diploma and certificate programs for medical practitioners.
      </p>

      <div class="row g-4 mt-4 pt-4 border-top">
        <div class="col-md-6">
          <h5 class="fw-bold text-primary font-heading">Initiative Documents</h5>
          <a href="/downloads/Pilot_Proj.pdf" target="_blank" class="small text-secondary hover-teal d-flex align-items-center gap-1">
            <i class="bi bi-file-earmark-pdf text-danger"></i> MEA Pilot Project Report (PDF)
          </a>
        </div>
        <div class="col-md-6">
          <h5 class="fw-bold text-primary font-heading">Countries Reached</h5>
          <p class="small text-muted mb-0 lh-base">
            TeleMedicine units have been successfully commissioned across 42 African nations, enabling super-specialists in Indian hospitals to consult on complex patient conditions live.
          </p>
        </div>
      </div>

      <div class="mt-4 pt-2">
        <Link to="/case-studies" class="btn btn-primary-custom rounded-pill">
          <i class="bi bi-arrow-left me-2"></i> Back to Case Studies List
        </Link>
      </div>
    </div>
  );

  // ==========================================
  // VIEW: Rural Education (KSCST/IISc)
  // ==========================================
  const renderKSCST = () => (
    <div class="bg-white rounded-4 p-4 p-md-5 border shadow-sm">
      <span class="text-secondary fw-semibold uppercase letter-spacing-1 font-sm d-block mb-1">State Science Council Collaboration</span>
      <h2 class="fw-bold text-primary font-heading mb-2">eLearning in Rural High Schools</h2>
      <h5 class="text-muted fw-normal font-heading fs-5 mb-4">Virtual Laboratories Established via KSCST, KSTePS, and DST-GOK</h5>

      <p class="text-muted small lh-lg">
        Established in 1975, the Karnataka State Council for Science and Technology (KSCST) along with the Indian Institute of Science (IISc) launched Virtual Laboratories in 10 rural high schools located in backward talukas of Karnataka.
      </p>
      <p class="text-muted small lh-lg">
        The objective is to improve the quality of education via collaborative learning through state-of-the-art IT platforms and electronic content. The system simulates a real classroom experience, allowing students to visualize complex concepts, perform webinars, participate in webinars, and engage in formative assessments.
      </p>

      <div class="row g-4 mt-4 pt-4 border-top">
        <div class="col-md-6">
          <h5 class="fw-bold text-primary font-heading">Key Project Objectives</h5>
          <ul class="list-unstyled d-flex flex-column gap-2 small text-muted">
            <li><i class="bi bi-dot text-secondary"></i> Support live online classes for remote education</li>
            <li><i class="bi bi-dot text-secondary"></i> Pool academic resources across schools</li>
            <li><i class="bi bi-dot text-secondary"></i> Enable students to browse digital content independently</li>
            <li><i class="bi bi-dot text-secondary"></i> Conduct webinars and breakout discussions</li>
          </ul>
        </div>
        <div class="col-md-6">
          <h5 class="fw-bold text-primary font-heading">Achievements</h5>
          <ul class="list-unstyled d-flex flex-column gap-2 small text-muted">
            <li><i class="bi bi-check text-secondary"></i> High student engagement in virtual science experiments</li>
            <li><i class="bi bi-check text-secondary"></i> Increased enrollment numbers in participating rural schools</li>
            <li><i class="bi bi-check text-secondary"></i> At least 20% improvement in exam result metrics</li>
          </ul>
        </div>
      </div>

      <div class="mt-4 pt-2">
        <Link to="/case-studies" class="btn btn-primary-custom rounded-pill">
          <i class="bi bi-arrow-left me-2"></i> Back to Case Studies List
        </Link>
      </div>
    </div>
  );

  return (
    <div class="py-5 bg-light">
      <div class="container">
        {/* Navigation Breadcrumb */}
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb custom-breadcrumb mb-4">
            <li class="breadcrumb-item"><Link to="/" class="text-primary font-sm">Home</Link></li>
            {path === '/case-studies' ? (
              <li class="breadcrumb-item active text-muted font-sm" aria-current="page">Case Studies</li>
            ) : (
              <>
                <li class="breadcrumb-item"><Link to="/case-studies" class="text-primary font-sm">Case Studies</Link></li>
                <li class="breadcrumb-item active text-muted font-sm" aria-current="page">
                  {path.split('/').pop().replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                </li>
              </>
            )}
          </ol>
        </nav>

        {/* Dynamic Route Render */}
        {path === '/case-studies' && renderCatalog()}
        {path === '/case-studies/meditac-nasa' && renderNASA()}
        {path === '/case-studies/arizona-telemedicine-project' && renderArizona()}
        {path === '/case-studies/real-time-ambulance-monitoring-in-japan' && renderJapan()}
        {path === '/case-studies/homecare-on-cable-set-top-boxes-in-texas' && renderTexas()}
        {path === '/case-studies/isro-telemedicine-network' && renderISRO()}
        {path === '/case-studies/pan-africa-initiative' && renderAfrica()}
        {path === '/case-studies/rural-education-kscst-iisc' && renderKSCST()}

      </div>
    </div>
  );
}
