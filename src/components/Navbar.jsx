import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest('.dropdown')) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsOpen(false);

    Swal.fire({
      title: 'Portal Secure Login',
      html: `
        <div class="text-start mb-3">
          <label for="swal-input1" class="form-label font-sans text-muted small">Username / Email</label>
          <input id="swal-input1" class="form-control rounded-pill py-2 px-3" placeholder="Enter username or email">
        </div>
        <div class="text-start mb-2">
          <label for="swal-input2" class="form-label font-sans text-muted small">Password</label>
          <input id="swal-input2" type="password" class="form-control rounded-pill py-2 px-3" placeholder="Enter password">
        </div>
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: 'Log In',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#00a896',
      cancelButtonColor: '#64748b',
      customClass: {
        popup: 'rounded-4 shadow-lg p-4 font-sans',
        title: 'fs-4 fw-bold text-primary mb-3',
        confirmButton: 'rounded-pill px-4 py-2 fw-medium border-0',
        cancelButton: 'rounded-pill px-4 py-2 fw-medium border-0',
      },
      preConfirm: () => {
        const username = document.getElementById('swal-input1').value;
        const password = document.getElementById('swal-input2').value;
        if (!username || !password) {
          Swal.showValidationMessage('Please enter both username and password');
          return false;
        }
        return { username, password };
      }
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Success!',
          text: `Welcome back, ${result.value.username}!`,
          icon: 'success',
          confirmButtonColor: '#00a896',
          confirmButtonText: 'Go to Dashboard',
          customClass: {
            popup: 'rounded-4 font-sans',
            confirmButton: 'rounded-pill px-4 py-2'
          }
        });
      }
    });
  };

  const normalizePath = (p) => {
    let clean = decodeURIComponent(p)
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
    if (clean.endsWith('/') && clean.length > 1) {
      clean = clean.slice(0, -1);
    }
    return clean;
  };
  const isActive = (path) => normalizePath(location.pathname) === normalizePath(path);
  const isDropdownActive = (prefix) => normalizePath(location.pathname).startsWith(normalizePath(prefix));

  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top glass-header py-3">
      <div className="container">
        {/* Brand Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/" onClick={() => { setIsOpen(false); setOpenDropdown(null); }}>
          <img
            src={window.getAssetPath(`images/logo.png`)}
            alt="TeleVital Logo"
            style={{ height: '42px', width: 'auto' }}
            className="me-2"
          />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-1">
            <li className="nav-item">
              <Link
                className={`nav-link px-3 fw-medium ${isActive('/') ? 'text-secondary active' : 'text-primary'}`}
                to="/"
                onClick={() => { setIsOpen(false); setOpenDropdown(null); }}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link px-3 fw-medium ${isActive('/telemedicine') ? 'text-secondary active' : 'text-primary'}`}
                to="/telemedicine"
                onClick={() => { setIsOpen(false); setOpenDropdown(null); }}
              >
                Telemedicine
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link px-3 fw-medium ${isActive('/home-care') ? 'text-secondary active' : 'text-primary'}`}
                to="/home-care"
                onClick={() => { setIsOpen(false); setOpenDropdown(null); }}
              >
                eHealth
              </Link>
            </li>

            {/* eLearning Dropdown */}
            <li className={`nav-item dropdown ${openDropdown === 'elearning' ? 'show' : ''}`}>
              <a
                className={`nav-link dropdown-toggle px-3 fw-medium ${isDropdownActive('/elearning') ? 'text-secondary active' : 'text-primary'}`}
                href="#"
                id="elearningDropdown"
                role="button"
                aria-expanded={openDropdown === 'elearning' ? 'true' : 'false'}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenDropdown(openDropdown === 'elearning' ? null : 'elearning');
                }}
              >
                eLearning
              </a>
              <ul className={`dropdown-menu border-0 shadow ${openDropdown === 'elearning' ? 'show' : ''}`} aria-labelledby="elearningDropdown">
                <li><Link className="dropdown-item" to="/elearning" onClick={() => { setIsOpen(false); setOpenDropdown(null); }}>Overview</Link></li>
                <li><Link className="dropdown-item" to="/elearning/rural-education" onClick={() => { setIsOpen(false); setOpenDropdown(null); }}>Rural Education</Link></li>
                <li><Link className="dropdown-item" to="/elearning/technical-education" onClick={() => { setIsOpen(false); setOpenDropdown(null); }}>Technical Education</Link></li>
                <li><Link className="dropdown-item" to="/elearning/medical-education" onClick={() => { setIsOpen(false); setOpenDropdown(null); }}>Medical Education</Link></li>
              </ul>
            </li>

            {/* Case Studies Dropdown */}
            <li className={`nav-item dropdown ${openDropdown === 'case-studies' ? 'show' : ''}`}>
              <a
                className={`nav-link dropdown-toggle px-3 fw-medium ${isDropdownActive('/case-studies') ? 'text-secondary active' : 'text-primary'}`}
                href="#"
                id="caseStudiesDropdown"
                role="button"
                aria-expanded={openDropdown === 'case-studies' ? 'true' : 'false'}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenDropdown(openDropdown === 'case-studies' ? null : 'case-studies');
                }}
              >
                Case Studies
              </a>
              <ul className={`dropdown-menu border-0 shadow ${openDropdown === 'case-studies' ? 'show' : ''}`} aria-labelledby="caseStudiesDropdown" style={{ minWidth: '240px' }}>
                <li><Link className="dropdown-item" to="/case-studies" onClick={() => { setIsOpen(false); setOpenDropdown(null); }}>All Case Studies</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/case-studies/meditac-nasa" onClick={() => { setIsOpen(false); setOpenDropdown(null); }}>MedITAC/NASA</Link></li>
                <li><Link className="dropdown-item" to="/case-studies/isro-telemedicine-network" onClick={() => { setIsOpen(false); setOpenDropdown(null); }}>ISRO Telemedicine Network</Link></li>
                <li><Link className="dropdown-item" to="/case-studies/pan-africa-initiative" onClick={() => { setIsOpen(false); setOpenDropdown(null); }}>Pan-Africa Initiative</Link></li>
                <li><Link className="dropdown-item" to="/case-studies/rural-education-kscst-iisc" onClick={() => { setIsOpen(false); setOpenDropdown(null); }}>Rural Education (KSCST/IISc)</Link></li>
                <li><Link className="dropdown-item" to="/case-studies/arizona-telemedicine-project" onClick={() => { setIsOpen(false); setOpenDropdown(null); }}>Arizona Telemedicine</Link></li>
                <li><Link className="dropdown-item" to="/case-studies/real-time-ambulance-monitoring-in-japan" onClick={() => { setIsOpen(false); setOpenDropdown(null); }}>Ambulance Monitoring (Japan)</Link></li>
                <li><Link className="dropdown-item" to="/case-studies/homecare-on-cable-set-top-boxes-in-texas" onClick={() => { setIsOpen(false); setOpenDropdown(null); }}>Cable Homecare (Texas)</Link></li>
              </ul>
            </li>

            {/* Media Dropdown */}
            <li className={`nav-item dropdown ${openDropdown === 'media' ? 'show' : ''}`}>
              <a
                className={`nav-link dropdown-toggle px-3 fw-medium ${isDropdownActive('/media') ? 'text-secondary active' : 'text-primary'}`}
                href="#"
                id="mediaDropdown"
                role="button"
                aria-expanded={openDropdown === 'media' ? 'true' : 'false'}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenDropdown(openDropdown === 'media' ? null : 'media');
                }}
              >
                Media
              </a>
              <ul className={`dropdown-menu border-0 shadow ${openDropdown === 'media' ? 'show' : ''}`} aria-labelledby="mediaDropdown">
                <li><Link className="dropdown-item" to="/media/video" onClick={() => { setIsOpen(false); setOpenDropdown(null); }}>Video</Link></li>
                <li><Link className="dropdown-item" to="/media/in-news" onClick={() => { setIsOpen(false); setOpenDropdown(null); }}>In News</Link></li>
                <li><Link className="dropdown-item" to="/media/testimonial" onClick={() => { setIsOpen(false); setOpenDropdown(null); }}>Testimonials</Link></li>
                <li><Link className="dropdown-item" to="/media/image-gallery" onClick={() => { setIsOpen(false); setOpenDropdown(null); }}>Gallery</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link px-3 fw-medium ${isActive('/about') ? 'text-secondary active' : 'text-primary'}`}
                to="/about"
                onClick={() => { setIsOpen(false); setOpenDropdown(null); }}
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link px-3 fw-medium ${isActive('/contact') ? 'text-secondary active' : 'text-primary'}`}
                to="/contact"
                onClick={() => { setIsOpen(false); setOpenDropdown(null); }}
              >
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link px-3 fw-medium ${isActive('/privacy') ? 'text-secondary active' : 'text-primary'}`}
                to="/privacy"
                onClick={() => { setIsOpen(false); setOpenDropdown(null); }}
              >
                Privacy
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link px-3 fw-medium ${isActive('/support') ? 'text-secondary active' : 'text-primary'}`}
                to="/support"
                onClick={() => { setIsOpen(false); setOpenDropdown(null); }}
              >
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
