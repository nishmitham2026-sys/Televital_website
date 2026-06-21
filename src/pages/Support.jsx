import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Support() {
  const triggerFAQ = () => {
    Swal.fire({
      title: 'Patient Help & FAQs',
      html: `
        <div class="text-start font-sans small">
          <h6 class="fw-bold text-primary mb-1">How do I schedule an appointment?</h6>
          <p class="text-muted mb-3">Log into the patient portal, navigate to 'Appointments', select a practitioner, choose a slot, and click 'Confirm'.</p>
          <h6 class="fw-bold text-primary mb-1">Are video calls encrypted?</h6>
          <p class="text-muted mb-3">Yes, all consultations use end-to-end encryption to comply with international health standards.</p>
          <h6 class="fw-bold text-primary mb-1">What devices are supported?</h6>
          <p class="text-muted mb-0">The portal operates on Chrome and Firefox on Windows, MacOS, Android, and iOS devices.</p>
        </div>
      `,
      confirmButtonText: 'Got it!',
      confirmButtonColor: '#00a896',
      customClass: {
        popup: 'rounded-4 p-4 font-sans',
        confirmButton: 'rounded-pill px-4 py-2 border-0'
      }
    });
  };

  const triggerTutorials = () => {
    Swal.fire({
      title: 'Video Guide Tutorials',
      html: `
        <div class="text-start font-sans small">
          <ul class="list-unstyled d-flex flex-column gap-2 mb-0">
            <li><i class="bi bi-play-circle-fill text-danger me-2"></i> <a href="#" class="text-secondary fw-medium">Setting up Your Profile (2 mins)</a></li>
            <li><i class="bi bi-play-circle-fill text-danger me-2"></i> <a href="#" class="text-secondary fw-medium">Syncing Oximetry & ECG Logs (4 mins)</a></li>
            <li><i class="bi bi-play-circle-fill text-danger me-2"></i> <a href="#" class="text-secondary fw-medium">Prescription Checkout (3 mins)</a></li>
          </ul>
        </div>
      `,
      confirmButtonColor: '#00a896',
      customClass: {
        popup: 'rounded-4 p-4 font-sans',
        confirmButton: 'rounded-pill px-4 py-2'
      }
    });
  };

  return (
    <div class="py-5 bg-light">
      <div class="container">
        {/* Breadcrumbs */}
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb custom-breadcrumb mb-4">
            <li class="breadcrumb-item"><Link to="/" class="text-primary font-sm">Home</Link></li>
            <li class="breadcrumb-item active text-muted font-sm" aria-current="page">Support</li>
          </ol>
        </nav>

        {/* Intro */}
        <div class="text-center mb-5">
          <span class="text-secondary fw-semibold uppercase letter-spacing-1 font-sm d-block mb-1">Resource Center</span>
          <h1 class="fw-extrabold text-primary mb-3">TeleVital Support Center</h1>
          <p class="text-muted max-w-700 mx-auto small">
            We are dedicated to providing assistance, manuals, and technical resources to patients, doctors, and hospital administrators to ensure a seamless telemedicine experience.
          </p>
        </div>

        <div class="row g-4 mb-5">
          {/* Card 1: Patients */}
          <div class="col-lg-4">
            <div class="premium-card bg-white p-4 h-100 text-center">
              <div class="bg-secondary bg-opacity-10 p-3 rounded-circle mx-auto mb-3" style={{ width: 'fit-content' }}>
                <i class="bi bi-people text-secondary fs-3"></i>
              </div>
              <h3 class="fw-bold text-primary font-heading mb-3">For Patients</h3>
              
              <div class="d-flex flex-column gap-3 text-start small text-muted flex-grow-1 font-sans">
                <div>
                  <h6 class="fw-bold text-primary font-heading mb-1">Frequently Asked Questions</h6>
                  <p class="mb-0">Find answers to questions about account access, scheduling, and billing files.</p>
                </div>
                <div>
                  <h6 class="fw-bold text-primary font-heading mb-1">Video Tutorials</h6>
                  <p class="mb-0">Explore guides on how to connect your vitals monitoring equipment correctly.</p>
                </div>
              </div>

              <div class="d-flex flex-column gap-2 mt-4 pt-3 border-top">
                <button onClick={triggerFAQ} class="btn btn-outline-primary btn-sm rounded-pill">
                  Launch FAQs <i class="bi bi-question-circle ms-1"></i>
                </button>
                <button onClick={triggerTutorials} class="btn btn-outline-secondary btn-sm rounded-pill">
                  Watch Video Guides <i class="bi bi-play-circle ms-1"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Doctors */}
          <div class="col-lg-4">
            <div class="premium-card bg-white p-4 h-100 text-center">
              <div class="bg-secondary bg-opacity-10 p-3 rounded-circle mx-auto mb-3" style={{ width: 'fit-content' }}>
                <i class="bi bi-person-workspace text-secondary fs-3"></i>
              </div>
              <h3 class="fw-bold text-primary font-heading mb-3">For Doctors</h3>
              
              <div class="d-flex flex-column gap-3 text-start small text-muted flex-grow-1 font-sans">
                <div>
                  <h6 class="fw-bold text-primary font-heading mb-1">Provider Knowledge Base</h6>
                  <p class="mb-0">Access detailed documentation on diagnosing reports and prescribing online.</p>
                </div>
                <div>
                  <h6 class="fw-bold text-primary font-heading mb-1">Webinars & Training</h6>
                  <p class="mb-0">Participate in monthly webinars to learn about advanced telemetry integrations.</p>
                </div>
              </div>

              <div class="d-flex flex-column gap-2 mt-4 pt-3 border-top">
                <a href="mailto:info@televital.com" class="btn btn-outline-primary btn-sm rounded-pill">
                  Contact Provider Support <i class="bi bi-envelope ms-1"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: Hospitals */}
          <div class="col-lg-4">
            <div class="premium-card bg-white p-4 h-100 text-center">
              <div class="bg-secondary bg-opacity-10 p-3 rounded-circle mx-auto mb-3" style={{ width: 'fit-content' }}>
                <i class="bi bi-building-check text-secondary fs-3"></i>
              </div>
              <h3 class="fw-bold text-primary font-heading mb-3">For Hospitals</h3>
              
              <div class="d-flex flex-column gap-3 text-start small text-muted flex-grow-1 font-sans">
                <div>
                  <h6 class="fw-bold text-primary font-heading mb-1">Administrator Hub</h6>
                  <p class="mb-0">Find guides on hospital registration, user management, and roles routing.</p>
                </div>
                <div>
                  <h6 class="fw-bold text-primary font-heading mb-1">Custom Solutions & APIs</h6>
                  <p class="mb-0">Explore our integration APIs to connect VitalWare with your hospital HIS/EMR database.</p>
                </div>
              </div>

              <div class="d-flex flex-column gap-2 mt-4 pt-3 border-top">
                <a href="mailto:info@televital.com" class="btn btn-outline-primary btn-sm rounded-pill">
                  Contact Hospital Support <i class="bi bi-headset ms-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
