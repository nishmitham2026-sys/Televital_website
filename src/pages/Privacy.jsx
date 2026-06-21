import React from 'react';
import { Link } from 'react-router-dom';

export default function Privacy() {
  return (
    <div class="py-5 bg-light">
      <div class="container">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb custom-breadcrumb mb-4">
            <li class="breadcrumb-item"><Link to="/" class="text-primary font-sm">Home</Link></li>
            <li class="breadcrumb-item active text-muted font-sm" aria-current="page">Privacy</li>
          </ol>
        </nav>

        <div class="bg-white rounded-4 p-4 p-md-5 border shadow-sm max-w-900 mx-auto">
          <h1 class="fw-extrabold text-primary mb-3">Privacy Policy</h1>
          <p class="text-muted small lh-lg">
            Welcome to TeleVital. This Privacy Policy outlines our practices regarding the collection, use, and protection of personal information when you use our healthcare services application ("the App"). By accessing or using the App, you agree to the terms and practices described in this Privacy Policy.
          </p>

          <hr class="my-4" />

          {/* Section 1 */}
          <h3 class="fw-bold text-primary font-heading fs-5 mt-4 mb-3">1. Information We Collect</h3>
          <ul class="list-unstyled d-flex flex-column gap-3 ps-2">
            <li class="d-flex align-items-start gap-2">
              <i class="bi bi-circle-fill text-secondary mt-2" style={{ fontSize: '6px' }}></i>
              <div>
                <strong class="text-primary font-sans small d-block">Personal Information</strong>
                <span class="text-muted small">We may collect personal information such as your name, contact information, date of birth, gender, and other relevant healthcare details during registration.</span>
              </div>
            </li>
            <li class="d-flex align-items-start gap-2">
              <i class="bi bi-circle-fill text-secondary mt-2" style={{ fontSize: '6px' }}></i>
              <div>
                <strong class="text-primary font-sans small d-block">Health Data</strong>
                <span class="text-muted small">We may collect health-related data, including medical history, prescriptions, treatment records, and other clinical information necessary to provide consultation and clinical monitoring services.</span>
              </div>
            </li>
            <li class="d-flex align-items-start gap-2">
              <i class="bi bi-circle-fill text-secondary mt-2" style={{ fontSize: '6px' }}></i>
              <div>
                <strong class="text-primary font-sans small d-block">Device Information</strong>
                <span class="text-muted small">We automatically collect information about your device, including its type, model, operating system, IP address, and mobile network information for app diagnostics, analytics, and security audits.</span>
              </div>
            </li>
          </ul>

          {/* Section 2 */}
          <h3 class="fw-bold text-primary font-heading fs-5 mt-4 mb-3">2. How We Use Your Information</h3>
          <ul class="list-unstyled d-flex flex-column gap-3 ps-2">
            <li class="d-flex align-items-start gap-2">
              <i class="bi bi-circle-fill text-secondary mt-2" style={{ fontSize: '6px' }}></i>
              <div>
                <strong class="text-primary font-sans small d-block">Providing Services</strong>
                <span class="text-muted small">We use your personal and health-related information to provide access to our healthcare services, including virtual consultations, appointments, prescription routing, and telemetry readings.</span>
              </div>
            </li>
            <li class="d-flex align-items-start gap-2">
              <i class="bi bi-circle-fill text-secondary mt-2" style={{ fontSize: '6px' }}></i>
              <div>
                <strong class="text-primary font-sans small d-block">Improving the Platform</strong>
                <span class="text-muted small">We analyze usage metrics to improve our features, customize your user interface experience, and optimize video streaming codecs for low-bandwidth networks.</span>
              </div>
            </li>
            <li class="d-flex align-items-start gap-2">
              <i class="bi bi-circle-fill text-secondary mt-2" style={{ fontSize: '6px' }}></i>
              <div>
                <strong class="text-primary font-sans small d-block">Communications</strong>
                <span class="text-muted small">We use contact records to send app notifications, appointment reminders, emergency care updates, and newsletters related to TeleVital updates.</span>
              </div>
            </li>
          </ul>

          {/* Section 3 */}
          <h3 class="fw-bold text-primary font-heading fs-5 mt-4 mb-3">3. Data Security & Retention</h3>
          <p class="text-muted small lh-lg ps-2">
            We implement advanced encryption standards (AES-256 for data at rest, SSL/TLS for data in transit) and access control protocols to safeguard your records against unauthorized access, leakage, or alterations. We retain clinical data strictly as required to fulfill treatment protocols or comply with national healthcare storage regulations.
          </p>

          {/* Section 4 */}
          <h3 class="fw-bold text-primary font-heading fs-5 mt-4 mb-3">4. Non-Identifying Analytics</h3>
          <p class="text-muted small lh-lg ps-2">
            The following diagnostic metrics, which are not linked to your identity, may be collected for performance monitoring:
          </p>
          <div class="row g-2 ps-2 mb-3">
            <div class="col-sm-6">
              <div class="bg-light p-2 border rounded text-center small text-muted font-sans fw-medium">
                Health & Fitness Diagnostics
              </div>
            </div>
            <div class="col-sm-6">
              <div class="bg-light p-2 border rounded text-center small text-muted font-sans fw-medium">
                Coarse Location & Search History
              </div>
            </div>
            <div class="col-sm-6">
              <div class="bg-light p-2 border rounded text-center small text-muted font-sans fw-medium">
                Device IDs & App Usage Metrics
              </div>
            </div>
            <div class="col-sm-6">
              <div class="bg-light p-2 border rounded text-center small text-muted font-sans fw-medium">
                Other App Interaction logs
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <h3 class="fw-bold text-primary font-heading fs-5 mt-4 mb-3">5. Your Choices & Contact</h3>
          <p class="text-muted small lh-lg ps-2">
            You reserve the right to access, correct, delete, or restrict processing of your personal information stored inside the TeleVital portal. Please write to us at <a href="mailto:info@televital.com" class="text-secondary fw-semibold">info@televital.com</a> to request record updates.
          </p>
        </div>
      </div>
    </div>
  );
}
