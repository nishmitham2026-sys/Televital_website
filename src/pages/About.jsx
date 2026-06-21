import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function About() {
  const handleSignUp = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Join TeleVital Ecosystem',
      html: `
        <div class="text-start mb-3">
          <label for="reg-role" class="form-label font-sans text-muted small">Select Your Role</label>
          <select id="reg-role" class="form-select rounded-pill py-2 px-3">
            <option value="patient">Patient</option>
            <option value="doctor">Medical Practitioner</option>
            <option value="hospital">Hospital Administrator</option>
          </select>
        </div>
        <div class="text-start mb-3">
          <label for="reg-name" class="form-label font-sans text-muted small">Full Name</label>
          <input id="reg-name" class="form-control rounded-pill py-2 px-3" placeholder="Enter your full name">
        </div>
        <div class="text-start mb-3">
          <label for="reg-email" class="form-label font-sans text-muted small">Email Address</label>
          <input id="reg-email" type="email" class="form-control rounded-pill py-2 px-3" placeholder="Enter email address">
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: 'Register Now',
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
        const name = document.getElementById('reg-name').value;
        const email = document.getElementById('reg-email').value;
        const role = document.getElementById('reg-role').value;
        if (!name || !email) {
          Swal.showValidationMessage('Please fill out all fields');
          return false;
        }
        return { name, email, role };
      }
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Registration Successful!',
          text: `Thank you for registering, ${result.value.name}. A registration packet has been sent to ${result.value.email}.`,
          icon: 'success',
          confirmButtonColor: '#00a896',
          confirmButtonText: 'Great!',
          customClass: {
            popup: 'rounded-4 font-sans',
            confirmButton: 'rounded-pill px-4 py-2'
          }
        });
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
            <li class="breadcrumb-item active text-muted font-sm" aria-current="page">About</li>
          </ol>
        </nav>

        {/* Hero Welcome */}
        <div class="bg-white rounded-4 p-4 p-md-5 border shadow-sm mb-5">
          <div class="row align-items-center g-4">
            <div class="col-lg-7">
              <span class="text-secondary fw-semibold uppercase letter-spacing-1 font-sm d-block mb-1">Our Mission & Legacy</span>
              <h1 class="fw-extrabold text-primary mb-3">Welcome to TeleVital</h1>
              <p class="lead text-muted lh-base font-sm">
                Experience the Next Evolution in Healthcare with TeleVital – Your Bridge to Superior Health!
              </p>
              <p class="text-muted small lh-lg mb-0">
                At TeleVital, we're more than just a telemedicine software company; we're pioneers in redefining how healthcare is perceived and accessed. Our advanced telemedicine platform acts as a conduit, seamlessly connecting patients with healthcare professionals and medical institutions, ensuring every virtual health experience is top-tier.
              </p>
            </div>
            <div class="col-lg-5">
              <div class="p-4 bg-light rounded-3 border text-center">
                <i class="bi bi-eye-fill text-secondary fs-1 mb-3"></i>
                <h4 class="fw-bold text-primary font-heading mb-2">Our Vision</h4>
                <p class="text-muted small lh-lg mb-0">
                  Crafting and propelling pioneering platforms, we envision a world where everyone can access and share pivotal information in healthcare, erasing the confines of time and space.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Value Propositions */}
        <h3 class="fw-bold text-primary font-heading mb-4 text-center">Why Choose TeleVital?</h3>
        <div class="row g-4 mb-5">
          <div class="col-md-6 col-lg-3">
            <div class="premium-card bg-white p-4 h-100 text-center">
              <div class="bg-secondary bg-opacity-10 p-3 rounded-circle mx-auto mb-3" style={{ width: 'fit-content' }}>
                <i class="bi bi-clock-history text-secondary fs-3"></i>
              </div>
              <h5 class="fw-bold text-primary font-heading">Uninterrupted Care</h5>
              <p class="text-muted small mb-0 lh-base">Embrace care without bounds. Geography and time constraints fade, paving the way for virtual consultations.</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3">
            <div class="premium-card bg-white p-4 h-100 text-center">
              <div class="bg-secondary bg-opacity-10 p-3 rounded-circle mx-auto mb-3" style={{ width: 'fit-content' }}>
                <i class="bi bi-shield-check text-secondary fs-3"></i>
              </div>
              <h5 class="fw-bold text-primary font-heading">Unwavering Security</h5>
              <p class="text-muted small mb-0 lh-base">We treasure trust. Adhering to premier standards, TeleVital promises secure healthcare compliance.</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3">
            <div class="premium-card bg-white p-4 h-100 text-center">
              <div class="bg-secondary bg-opacity-10 p-3 rounded-circle mx-auto mb-3" style={{ width: 'fit-content' }}>
                <i class="bi bi-ui-checks text-secondary fs-3"></i>
              </div>
              <h5 class="fw-bold text-primary font-heading">Simplicity Best</h5>
              <p class="text-muted small mb-0 lh-base">Our intuitive interfaces simplify interactions, making virtual visits simple for patients and doctors alike.</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3">
            <div class="premium-card bg-white p-4 h-100 text-center">
              <div class="bg-secondary bg-opacity-10 p-3 rounded-circle mx-auto mb-3" style={{ width: 'fit-content' }}>
                <i class="bi bi-diagram-3 text-secondary fs-3"></i>
              </div>
              <h5 class="fw-bold text-primary font-heading">Tailored Solutions</h5>
              <p class="text-muted small mb-0 lh-base">From individual doctors to sprawling hospital chains, TeleVital adaptively scales to your needs.</p>
            </div>
          </div>
        </div>

        {/* Key Offerings */}
        <div class="bg-white rounded-4 p-4 p-md-5 border shadow-sm mb-5">
          <h3 class="fw-bold text-primary font-heading mb-4 text-center">Platform Key Offerings</h3>
          <div class="row g-4">
            <div class="col-md-6">
              <div class="d-flex align-items-start gap-3">
                <i class="bi bi-camera-video text-secondary fs-4"></i>
                <div>
                  <h5 class="fw-bold text-primary font-heading">Teleconsultations</h5>
                  <p class="text-muted small lh-base">Engage with healthcare experts through crisp, low-bandwidth video consultations, making remote medicine personal again.</p>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="d-flex align-items-start gap-3">
                <i class="bi bi-chat-left-dots text-secondary fs-4"></i>
                <div>
                  <h5 class="fw-bold text-primary font-heading">Secure Messaging</h5>
                  <p class="text-muted small lh-base">Engage in secure dialogues, share medical reports, ECG files, and receive real-time advice from doctors.</p>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="d-flex align-items-start gap-3">
                <i class="bi bi-folder2-open text-secondary fs-4"></i>
                <div>
                  <h5 class="fw-bold text-primary font-heading">Digital Health Records</h5>
                  <p class="text-muted small lh-base">Streamline and consolidate your health histories digitally, granting clinicians instant review capabilities with proper credentials.</p>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="d-flex align-items-start gap-3">
                <i class="bi bi-clipboard2-check text-secondary fs-4"></i>
                <div>
                  <h5 class="fw-bold text-primary font-heading">Efficient Prescription Management</h5>
                  <p class="text-muted small lh-base">Request prescriptions and have them routed directly to local pharmacies, expediting clinical pick-ups.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Banner */}
        <div class="bg-secondary text-white rounded-4 p-5 text-center shadow-lg border-0 position-relative overflow-hidden">
          <div class="position-relative z-1">
            <h2 class="fw-bold mb-3">Embark on Your TeleVital Journey</h2>
            <p class="max-w-600 mx-auto text-white-50 fs-5 mb-4">
              Revel in modern-day clinical connectivity. Dive into the TeleVital experience and take charge of your healthcare journey.
            </p>
            <div class="d-flex justify-content-center gap-3 flex-wrap">
              <a href="#" onClick={handleSignUp} class="btn btn-primary-custom rounded-pill bg-primary border-primary">
                Sign Up Now <i class="bi bi-chevron-right ms-1"></i>
              </a>
              <Link to="/contact" class="btn btn-light text-primary rounded-pill px-4 py-2 fw-medium border-0">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
