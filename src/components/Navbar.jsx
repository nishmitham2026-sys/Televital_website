import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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

  const isActive = (path) => location.pathname === path;
  const isDropdownActive = (prefix) => location.pathname.startsWith(prefix);

  return (
    <nav class="navbar navbar-expand-lg navbar-light sticky-top glass-header py-3">
      <div class="container">
        {/* Brand Logo */}
        <Link class="navbar-brand d-flex align-items-center" to="/" onClick={() => setIsOpen(false)}>
          <img
            src={window.getAssetPath(`images/logo.png`)}
            alt="TeleVital Logo"
            style={{ height: '42px', width: 'auto' }}
            class="me-2"
          />
        </Link>

        {/* Mobile Toggle */}
        <button
          class="navbar-toggler border-0 shadow-none"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div class={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-1">
            <li class="nav-item">
              <Link
                class={`nav-link px-3 fw-medium ${isActive('/') ? 'text-secondary active' : 'text-primary'}`}
                to="/"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>

            <li class="nav-item">
              <Link
                class={`nav-link px-3 fw-medium ${isActive('/telemedicine') ? 'text-secondary active' : 'text-primary'}`}
                to="/telemedicine"
                onClick={() => setIsOpen(false)}
              >
                Telemedicine
              </Link>
            </li>

            <li class="nav-item">
              <Link
                class={`nav-link px-3 fw-medium ${isActive('/home-care') ? 'text-secondary active' : 'text-primary'}`}
                to="/home-care"
                onClick={() => setIsOpen(false)}
              >
                eHealth
              </Link>
            </li>

            {/* eLearning Dropdown */}
            <li class="nav-item dropdown">
              <a
                class={`nav-link dropdown-toggle px-3 fw-medium ${isDropdownActive('/elearning') ? 'text-secondary active' : 'text-primary'}`}
                href="#"
                id="elearningDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                eLearning
              </a>
              <ul class="dropdown-menu border-0 shadow" aria-labelledby="elearningDropdown">
                <li><Link class="dropdown-item" to="/elearning" onClick={() => setIsOpen(false)}>Overview</Link></li>
                <li><Link class="dropdown-item" to="/elearning/rural-education" onClick={() => setIsOpen(false)}>Rural Education</Link></li>
                <li><Link class="dropdown-item" to="/elearning/technical-education" onClick={() => setIsOpen(false)}>Technical Education</Link></li>
                <li><Link class="dropdown-item" to="/elearning/medical-education" onClick={() => setIsOpen(false)}>Medical Education</Link></li>
              </ul>
            </li>

            {/* Case Studies Dropdown */}
            <li class="nav-item dropdown">
              <a
                class={`nav-link dropdown-toggle px-3 fw-medium ${isDropdownActive('/case-studies') ? 'text-secondary active' : 'text-primary'}`}
                href="#"
                id="caseStudiesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Case Studies
              </a>
              <ul class="dropdown-menu border-0 shadow" aria-labelledby="caseStudiesDropdown" style={{ minWidth: '240px' }}>
                <li><Link class="dropdown-item" to="/case-studies" onClick={() => setIsOpen(false)}>All Case Studies</Link></li>
                <li><hr class="dropdown-divider" /></li>
                <li><Link class="dropdown-item" to="/case-studies/meditac-nasa" onClick={() => setIsOpen(false)}>MedITAC/NASA</Link></li>
                <li><Link class="dropdown-item" to="/case-studies/isro-telemedicine-network" onClick={() => setIsOpen(false)}>ISRO Telemedicine Network</Link></li>
                <li><Link class="dropdown-item" to="/case-studies/pan-africa-initiative" onClick={() => setIsOpen(false)}>Pan-Africa Initiative</Link></li>
                <li><Link class="dropdown-item" to="/case-studies/rural-education-kscst-iisc" onClick={() => setIsOpen(false)}>Rural Education (KSCST/IISc)</Link></li>
                <li><Link class="dropdown-item" to="/case-studies/arizona-telemedicine-project" onClick={() => setIsOpen(false)}>Arizona Telemedicine</Link></li>
                <li><Link class="dropdown-item" to="/case-studies/real-time-ambulance-monitoring-in-japan" onClick={() => setIsOpen(false)}>Ambulance Monitoring (Japan)</Link></li>
                <li><Link class="dropdown-item" to="/case-studies/homecare-on-cable-set-top-boxes-in-texas" onClick={() => setIsOpen(false)}>Cable Homecare (Texas)</Link></li>
              </ul>
            </li>

            {/* Media Dropdown */}
            <li class="nav-item dropdown">
              <a
                class={`nav-link dropdown-toggle px-3 fw-medium ${isDropdownActive('/media') ? 'text-secondary active' : 'text-primary'}`}
                href="#"
                id="mediaDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Media
              </a>
              <ul class="dropdown-menu border-0 shadow" aria-labelledby="mediaDropdown">
                <li><Link class="dropdown-item" to="/media/video" onClick={() => setIsOpen(false)}>Video</Link></li>
                <li><Link class="dropdown-item" to="/media/in-news" onClick={() => setIsOpen(false)}>In News</Link></li>
                <li><Link class="dropdown-item" to="/media/testimonial" onClick={() => setIsOpen(false)}>Testimonials</Link></li>
                <li><Link class="dropdown-item" to="/media/image-gallery" onClick={() => setIsOpen(false)}>Gallery</Link></li>
              </ul>
            </li>

            <li class="nav-item">
              <Link
                class={`nav-link px-3 fw-medium ${isActive('/about') ? 'text-secondary active' : 'text-primary'}`}
                to="/about"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>

            <li class="nav-item">
              <Link
                class={`nav-link px-3 fw-medium ${isActive('/contact') ? 'text-secondary active' : 'text-primary'}`}
                to="/contact"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>

            <li class="nav-item d-none d-lg-block ms-2">
              <a
                class="btn btn-primary-custom rounded-pill"
                href="#"
                onClick={handleLogin}
              >
                Login
              </a>
            </li>

            <li class="nav-item d-lg-none mt-2 px-3">
              <a
                class="btn btn-primary-custom rounded-pill w-100"
                href="#"
                onClick={handleLogin}
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
