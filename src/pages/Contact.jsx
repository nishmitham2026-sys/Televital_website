import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    
    if (!name || !email || !subject || !message) {
      Swal.fire({
        title: 'Validation Error',
        text: 'Please fill out all required fields.',
        icon: 'error',
        confirmButtonColor: '#0c2340',
        confirmButtonText: 'OK',
        customClass: {
          popup: 'rounded-4 font-sans'
        }
      });
      return;
    }

    Swal.fire({
      title: 'Sending Message...',
      didOpen: () => {
        Swal.showLoading();
      },
      allowOutsideClick: false,
      customClass: {
        popup: 'rounded-4 font-sans'
      }
    });

    // Mock network transmission latency
    setTimeout(() => {
      Swal.close();
      Swal.fire({
        title: 'Message Sent!',
        text: `Thank you, ${name}. Your message has been sent successfully. Our team will contact you shortly.`,
        icon: 'success',
        confirmButtonColor: '#00a896',
        confirmButtonText: 'Great!',
        customClass: {
          popup: 'rounded-4 font-sans',
          confirmButton: 'rounded-pill px-4 py-2'
        }
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div class="py-5 bg-light">
      <div class="container">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb custom-breadcrumb mb-4">
            <li class="breadcrumb-item"><Link to="/" class="text-primary font-sm">Home</Link></li>
            <li class="breadcrumb-item active text-muted font-sm" aria-current="page">Contact</li>
          </ol>
        </nav>

        <div class="text-center mb-5">
          <span class="text-secondary fw-semibold uppercase letter-spacing-1 font-sm d-block mb-1">Get In Touch</span>
          <h1 class="fw-extrabold text-primary mb-3">Contact TeleVital</h1>
          <p class="text-muted max-w-700 mx-auto small">
            Whether you are a patient, medical professional, or hospital administrator, our teams in India and the US are ready to support your telehealth needs.
          </p>
        </div>

        <div class="row g-4 mb-5">
          {/* Location Cards */}
          <div class="col-lg-5 d-flex flex-column gap-4">
            {/* India Address */}
            <div class="premium-card bg-white p-4">
              <div class="d-flex align-items-center mb-3">
                <div class="bg-secondary bg-opacity-10 p-2 rounded-circle me-3 text-secondary">
                  <i class="bi bi-geo-alt-fill fs-4"></i>
                </div>
                <h4 class="fw-bold text-primary mb-0 font-heading">India Headquarters</h4>
              </div>
              <address class="small text-muted lh-lg mb-3 font-sans">
                <strong class="text-primary d-block mb-1">TeleVital India Pvt. Ltd.</strong>
                PESIT Tech Park, 2nd Floor,<br />
                100 Feet Ring Road, BSK III Stage,<br />
                BANGALORE - 560 085.
              </address>
              <div class="border-top pt-2 small text-muted font-sans">
                <div class="d-flex justify-content-between mb-1">
                  <span>Sales Assistance:</span>
                  <span class="text-primary fw-medium">+91 9448090037</span>
                </div>
                <div class="d-flex justify-content-between mb-1">
                  <span>Technical Support:</span>
                  <span class="text-primary fw-medium">+91 9448489895</span>
                </div>
                <div class="d-flex justify-content-between mb-1">
                  <span>Customer Support:</span>
                  <span class="text-primary fw-medium">+91 9448100040</span>
                </div>
                <div class="d-flex justify-content-between">
                  <span>General Queries:</span>
                  <span class="text-primary fw-medium">+91 9448090038</span>
                </div>
              </div>
            </div>

            {/* US Address */}
            <div class="premium-card bg-white p-4">
              <div class="d-flex align-items-center mb-3">
                <div class="bg-secondary bg-opacity-10 p-2 rounded-circle me-3 text-secondary">
                  <i class="bi bi-geo-alt-fill fs-4"></i>
                </div>
                <h4 class="fw-bold text-primary mb-0 font-heading">US Branch</h4>
              </div>
              <address class="small text-muted lh-lg mb-3 font-sans">
                <strong class="text-primary d-block mb-1">TeleVital Solutions</strong>
                2350 Mission College Blvd #777,<br />
                Santa Clara, CA 95054,<br />
                USA
              </address>
              <div class="border-top pt-2 small text-muted font-sans d-flex justify-content-between">
                <span>Phone Assistance:</span>
                <span class="text-primary fw-medium">+1 (408) 441 6732</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div class="col-lg-7">
            <div class="bg-white rounded-4 p-4 p-md-5 border shadow-sm h-100">
              <h3 class="fw-bold text-primary font-heading mb-4">Send Us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div class="row g-3">
                  <div class="col-md-6">
                    <label for="name" class="form-label small text-muted font-sans">Full Name <span class="text-danger">*</span></label>
                    <input 
                      type="text" 
                      class="form-control rounded-pill py-2 px-3 small" 
                      id="name"
                      name="name"
                      placeholder="Enter name"
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="email" class="form-label small text-muted font-sans">Email Address <span class="text-danger">*</span></label>
                    <input 
                      type="email" 
                      class="form-control rounded-pill py-2 px-3 small" 
                      id="email" 
                      name="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div class="col-md-12">
                    <label for="phone" class="form-label small text-muted font-sans">Phone Number (Optional)</label>
                    <input 
                      type="tel" 
                      class="form-control rounded-pill py-2 px-3 small" 
                      id="phone" 
                      name="phone"
                      placeholder="e.g. +91 9876543210"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div class="col-md-12">
                    <label for="subject" class="form-label small text-muted font-sans">Subject <span class="text-danger">*</span></label>
                    <input 
                      type="text" 
                      class="form-control rounded-pill py-2 px-3 small" 
                      id="subject" 
                      name="subject"
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div class="col-md-12">
                    <label for="message" class="form-label small text-muted font-sans">Message Content <span class="text-danger">*</span></label>
                    <textarea 
                      class="form-control rounded-4 py-2 px-3 small" 
                      id="message" 
                      name="message"
                      rows="5" 
                      placeholder="Enter message text here..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div class="col-12 mt-4 text-end">
                    <button type="submit" class="btn btn-secondary-custom rounded-pill px-4">
                      Submit Message <i class="bi bi-send-fill ms-2 font-sm"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
