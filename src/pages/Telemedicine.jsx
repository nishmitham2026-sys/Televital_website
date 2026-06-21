import React from 'react';
import { Link } from 'react-router-dom';

export default function Telemedicine() {
  const features = [
    'Software framework connecting remote doctors, specialist doctors, and medical equipment',
    'Fully server-based & browser-based architecture',
    'Standards-based design supporting DICOM / HL7 compliance',
    'Highly scalable infrastructure suitable for single clinics to large national networks',
    'Secure, encrypted access to patient medical data enabling remote consultations and second opinions',
    'Fully integrated Electronic Medical Records (EMR) system',
    'Optimal usage and minimization of bandwidth, hardware, and client devices',
    'Supports both online real-time streaming and offline store-and-forward configurations',
    'Scheduling facility to enable smooth tele-consultations across clinical networks',
    'Management Information System (MIS) for administrators to aggregate consultation stats',
    'User-friendly, menu-driven software interface',
    'Comprehensive online help and walkthrough resources'
  ];

  return (
    <div class="py-5 bg-light">
      <div class="container">
        {/* Breadcrumbs */}
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb custom-breadcrumb mb-4">
            <li class="breadcrumb-item"><Link to="/" class="text-primary font-sm">Home</Link></li>
            <li class="breadcrumb-item active text-muted font-sm" aria-current="page">Telemedicine</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div class="row align-items-center mb-5 g-4">
          <div class="col-lg-7">
            <span class="text-secondary fw-semibold uppercase letter-spacing-1 font-sm d-block mb-1">Our Core Technology</span>
            <h1 class="fw-extrabold text-primary mb-3">Telemedicine Services</h1>
            <p class="lead text-muted lh-base font-sm mb-0">
              For decades, telemedicine has been used to bring healthcare services to patients in distant locations. Telemedicine improves access to patients and allows physicians and health facilities to expand their reach, beyond distances. Given the deficient availability of healthcare facilities throughout the world in both rural and urban areas, telemedicine has a unique advantage of reaching millions of needy patients.
            </p>
          </div>
          <div class="col-lg-5">
            <div class="rounded-4 overflow-hidden shadow">
              <img src={window.getAssetPath(`images/televital-telemedicine.jpg`)} alt="Telemedicine" class="img-fluid w-100 object-fit-cover" style={{ minHeight: '300px' }} />
            </div>
          </div>
        </div>

        {/* VitalWare & Features Row */}
        <div class="row g-4 mb-5">
          <div class="col-md-6">
            <div class="premium-card bg-white p-4 h-100">
              <div class="d-flex align-items-center mb-3">
                <div class="bg-secondary bg-opacity-10 p-3 rounded-circle me-3">
                  <i class="bi bi-cpu text-secondary fs-3"></i>
                </div>
                <h3 class="fw-bold text-primary mb-0 font-heading">VitalWare Software</h3>
              </div>
              <p class="text-muted small lh-lg">
                VitalWare is the proprietary software product of TeleVital. It is an open architecture software engine that supports the real-time streaming and remote viewing of raw and interpreted clinical data, vital signs, medical images, and more.
              </p>
              <p class="text-muted small lh-lg mb-0">
                The software interconnect framework connects doctors, patients, and clinical equipment remotely over the Internet, eliminating computing complexity in backend systems and thereby reducing costs at the client end. Secure access to patient medical data from anywhere makes remote consultation and second opinions easier than ever.
              </p>
            </div>
          </div>

          <div class="col-md-6">
            <div class="premium-card bg-white p-4 h-100">
              <div class="d-flex align-items-center mb-3">
                <div class="bg-secondary bg-opacity-10 p-3 rounded-circle me-3">
                  <i class="bi bi-sliders text-secondary fs-3"></i>
                </div>
                <h3 class="fw-bold text-primary mb-0 font-heading">Key Features</h3>
              </div>
              <ul class="list-unstyled d-flex flex-column gap-2 mb-0">
                {features.map((feature, idx) => (
                  <li key={idx} class="d-flex align-items-start gap-2 small text-muted">
                    <i class="bi bi-check-circle-fill text-secondary mt-1 small"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Legacy / Projects Section */}
        <div class="bg-white rounded-4 p-4 p-md-5 shadow-sm border mb-4">
          <div class="text-center mb-5">
            <h2 class="fw-bold text-primary font-heading mb-2">A Decade of Telemedicine Experience</h2>
            <p class="text-muted max-w-700 mx-auto small">
              TeleVital's presence in the American and Indian markets spans over a period of 10 years, and has implemented more than 515 Telemedicine installations throughout the world.
            </p>
          </div>

          <div class="row g-4">
            {/* MedITAC */}
            <div class="col-lg-4 col-md-6">
              <div class="p-3 border rounded-3 h-100 d-flex flex-column bg-light bg-opacity-50">
                <div class="d-flex align-items-center mb-3">
                  <img src={window.getAssetPath(`images/logo/nasa.jpg`)} alt="NASA" class="img-fluid rounded me-2 shadow-sm" style={{ width: '45px', height: '45px', objectFit: 'contain' }} />
                  <h5 class="fw-bold text-primary mb-0 font-heading">MedITAC/NASA</h5>
                </div>
                <p class="text-muted small flex-grow-1 lh-base">
                  In the US, the Commercial Space Center of NASA utilized TeleVital's technology solutions for over two years. The 2002 annual report of NASA features the success of these telehealth solutions.
                </p>
                <div class="d-flex flex-column gap-2 mt-3 pt-2 border-top">
                  <a href="https://www.youtube.com/watch?v=RGWPk4yiZRU" target="_blank" rel="noopener noreferrer" class="small text-secondary hover-teal">
                    <i class="bi bi-youtube me-1 text-danger"></i> Video: NBC Surgery Highlight
                  </a>
                  <a href="http://www.anesthesia-analgesia.org/content/102/5/1463.full" target="_blank" rel="noopener noreferrer" class="small text-secondary hover-teal">
                    <i class="bi bi-file-earmark-text me-1"></i> Whitepaper: Anesthesia Magazine
                  </a>
                  <Link to="/case-studies/meditac-nasa" class="small text-primary hover-teal fw-medium">
                    Read MedITAC Case Study <i class="bi bi-arrow-right ms-1"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* ISRO */}
            <div class="col-lg-4 col-md-6">
              <div class="p-3 border rounded-3 h-100 d-flex flex-column bg-light bg-opacity-50">
                <div class="d-flex align-items-center mb-3">
                  <img src={window.getAssetPath(`images/logo/isro.jpg`)} alt="ISRO" class="img-fluid rounded me-2 shadow-sm" style={{ width: '45px', height: '45px', objectFit: 'contain' }} />
                  <h5 class="fw-bold text-primary mb-0 font-heading">ISRO Network</h5>
                </div>
                <p class="text-muted small flex-grow-1 lh-base">
                  In India, TeleVital is the preferred Telemedicine solution provider to the Indian Space Research Organisation (ISRO) sponsored projects, implementing over 327 turn-key projects across the subcontinent.
                </p>
                <div class="d-flex flex-column gap-2 mt-3 pt-2 border-top">
                  <a href="/downloads/ISRO-Telemedicine-Initiative.pdf" target="_blank" class="small text-secondary hover-teal">
                    <i class="bi bi-file-earmark-pdf me-1 text-danger"></i> ISRO Telemedicine Initiative PDF
                  </a>
                  <Link to="/case-studies/isro-telemedicine-network" class="small text-primary hover-teal fw-medium mt-auto">
                    Read ISRO Case Study <i class="bi bi-arrow-right ms-1"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* PAN-Africa */}
            <div class="col-lg-4 col-md-12">
              <div class="p-3 border rounded-3 h-100 d-flex flex-column bg-light bg-opacity-50">
                <div class="d-flex align-items-center mb-3">
                  <img src={window.getAssetPath(`images/logo/tcil.jpg`)} alt="TCIL" class="img-fluid rounded me-2 shadow-sm" style={{ width: '45px', height: '45px', objectFit: 'contain' }} />
                  <h5 class="fw-bold text-primary mb-0 font-heading">Pan-Africa Initiative</h5>
                </div>
                <p class="text-muted small flex-grow-1 lh-base">
                  TCIL acts as the Nodal implementing agency for the PAN-AFRICAN E-NETWORK. TeleVital has supplied telemedicine software and support to 42 countries in the African Union and 12 Indian Super Specialty Hospitals.
                </p>
                <div class="d-flex flex-column gap-2 mt-3 pt-2 border-top">
                  <Link to="/case-studies/pan-africa-initiative" class="small text-primary hover-teal fw-medium mt-auto">
                    Read Pan-Africa Case Study <i class="bi bi-arrow-right ms-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
