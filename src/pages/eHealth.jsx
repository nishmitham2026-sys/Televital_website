import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function EHealth() {
  const [activeTab, setActiveTab] = useState('patients');

  const patientFeatures = [
    { icon: 'bi-journal-medical', text: 'Maintain a secure personal health record online' },
    { icon: 'bi-camera-video', text: 'Book appointments and connect via video consultations with top doctors' },
    { icon: 'bi-droplet', text: 'Request home collection of diagnostic lab samples ordered by physicians' },
    { icon: 'bi-capsule', text: 'Get prescription medicines delivered directly to your doorstep' }
  ];

  const doctorFeatures = [
    { icon: 'bi-chat-right-text', text: 'Hold high-definition video consultations with remote patients' },
    { icon: 'bi-clipboard2-pulse', text: 'Order laboratory tests and receive verified digital reports online' },
    { icon: 'bi-prescription', text: 'Issue secure digital prescriptions instantly' }
  ];

  const providerFeatures = [
    { icon: 'bi-cart-check', text: 'Receive instant orders for laboratory tests and pharmacy prescriptions' },
    { icon: 'bi-truck', text: 'Dispatch collection agents to patient homes and upload diagnostics reports' },
    { icon: 'bi-box-seam', text: 'Pack and deliver prescribed medications directly to patient residences' }
  ];

  return (
    <div class="py-5 bg-light">
      <div class="container">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb custom-breadcrumb mb-4">
            <li class="breadcrumb-item"><Link to="/" class="text-primary font-sm">Home</Link></li>
            <li class="breadcrumb-item active text-muted font-sm" aria-current="page">eHealth</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div class="row align-items-center mb-5 g-4">
          <div class="col-lg-6">
            <span class="text-secondary fw-semibold uppercase letter-spacing-1 font-sm d-block mb-1">Healthcare at Your Doorstep</span>
            <h1 class="fw-extrabold text-primary mb-3">eHealth Solutions</h1>
            <p class="lead text-muted lh-base font-sm">
              Patients can now access quality healthcare from the comfort of their homes. Consult specialists virtually, arrange home diagnostic sample collections, and get prescribed medicines delivered—all with simple digital clicks.
            </p>
          </div>
          <div class="col-lg-6">
            <div class="row g-3">
              <div class="col-6">
                <img src="/images/homecare.jpg" alt="Home Care 1" class="img-fluid rounded-3 shadow-sm w-100 object-fit-cover" style={{ height: '200px' }} />
              </div>
              <div class="col-6">
                <img src="/images/homecare1.jpg" alt="Home Care 2" class="img-fluid rounded-3 shadow-sm w-100 object-fit-cover" style={{ height: '200px' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed Interactive Section */}
        <div class="bg-white rounded-4 p-4 p-md-5 shadow-sm border mb-4">
          <div class="text-center mb-4">
            <h2 class="fw-bold text-primary font-heading mb-2">Our Ecosystem Platform</h2>
            <p class="text-muted small">Select your role to view specialized system features built to connect you seamlessly</p>
          </div>

          <div class="d-flex justify-content-center mb-4">
            <div class="nav nav-pills bg-light p-2 rounded-pill shadow-sm" style={{ width: 'fit-content' }}>
              <button 
                class={`nav-link rounded-pill px-4 fw-medium border-0 ${activeTab === 'patients' ? 'bg-secondary text-white' : 'text-primary'}`}
                onClick={() => setActiveTab('patients')}
              >
                <i class="bi bi-person-fill me-2"></i> For Patients
              </button>
              <button 
                class={`nav-link rounded-pill px-4 fw-medium border-0 ${activeTab === 'doctors' ? 'bg-secondary text-white' : 'text-primary'}`}
                onClick={() => setActiveTab('doctors')}
              >
                <i class="bi bi-heart-pulse-fill me-2"></i> For Doctors
              </button>
              <button 
                class={`nav-link rounded-pill px-4 fw-medium border-0 ${activeTab === 'providers' ? 'bg-secondary text-white' : 'text-primary'}`}
                onClick={() => setActiveTab('providers')}
              >
                <i class="bi bi-shop me-2"></i> Labs & Pharmacies
              </button>
            </div>
          </div>

          {/* Tab Content Display */}
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <div class="row g-4 mt-2">
                {activeTab === 'patients' && patientFeatures.map((feat, idx) => (
                  <div key={idx} class="col-md-6">
                    <div class="p-3 border rounded-3 h-100 d-flex bg-light bg-opacity-50">
                      <div class="text-secondary fs-3 me-3 mt-1">
                        <i class={`bi ${feat.icon}`}></i>
                      </div>
                      <div>
                        <h5 class="fw-semibold text-primary font-heading">Patient Service</h5>
                        <p class="text-muted small mb-0 lh-base">{feat.text}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {activeTab === 'doctors' && doctorFeatures.map((feat, idx) => (
                  <div key={idx} class="col-md-4">
                    <div class="p-3 border rounded-3 h-100 d-flex flex-column bg-light bg-opacity-50 text-center align-items-center">
                      <div class="text-secondary fs-2 mb-2">
                        <i class={`bi ${feat.icon}`}></i>
                      </div>
                      <h5 class="fw-semibold text-primary font-heading">Doctor Portal</h5>
                      <p class="text-muted small mb-0 lh-base">{feat.text}</p>
                    </div>
                  </div>
                ))}

                {activeTab === 'providers' && providerFeatures.map((feat, idx) => (
                  <div key={idx} class="col-md-4">
                    <div class="p-3 border rounded-3 h-100 d-flex flex-column bg-light bg-opacity-50 text-center align-items-center">
                      <div class="text-secondary fs-2 mb-2">
                        <i class={`bi ${feat.icon}`}></i>
                      </div>
                      <h5 class="fw-semibold text-primary font-heading">Provider Sync</h5>
                      <p class="text-muted small mb-0 lh-base">{feat.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
