import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const newsItems = [
    { id: 0, thumb: window.getAssetPath('images/footergallery/televital-footer1.jpg'), full: window.getAssetPath('images/footergallery/televital-footer1.jpg'), title: 'Telemedicine News 1' },
    { id: 1, thumb: window.getAssetPath('images/footergallery/televital-footer2.jpg'), full: window.getAssetPath('images/footergallery/televital-footer2.jpg'), title: 'Telemedicine News 2' },
    { id: 2, thumb: window.getAssetPath('images/footergallery/Decu1.jpg'), full: window.getAssetPath('images/footergallery/Decu1.jpg'), title: 'Defence Telemedicine' },
    { id: 3, thumb: window.getAssetPath('images/footergallery/televital-footer4.jpg'), full: window.getAssetPath('images/footergallery/televital-footer4.jpg'), title: 'Rural Telemedicine' },
    { id: 4, thumb: window.getAssetPath('images/footergallery/televital-footer5.jpg'), full: window.getAssetPath('images/footergallery/televital-footer5.jpg'), title: 'Ex-President Pranab Mukherjee' },
    { id: 5, thumb: window.getAssetPath('images/footergallery/televital-footer6.jpg'), full: window.getAssetPath('images/footergallery/televital-footer6.jpg'), title: 'Seychelles Victoria Hospital' }
  ];

  return (
    <footer class="footer-light-blue pt-5 mt-auto">
      <div class="container pb-4">
        <div class="row g-4">
          
          {/* Column 1: Mission */}
          <div class="col-md-6 col-lg-3">
            <h5 class="text-white border-bottom border-secondary border-2 pb-2 mb-3 fw-bold" style={{ width: 'fit-content' }}>
              Our Mission
            </h5>
            <p class="text-white-50 small lh-lg">
              Healthcare & Education are the vital pillars of our society and we are dedicated to improve Access to Quality Medical Care and Educational Content Delivery through Advanced Technologies.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div class="col-md-6 col-lg-3 ps-lg-4">
            <h5 class="text-white border-bottom border-secondary border-2 pb-2 mb-3 fw-bold" style={{ width: 'fit-content' }}>
              Services
            </h5>
            <ul class="list-unstyled d-flex flex-column gap-2 small">
              <li>
                <Link to="/telemedicine" class="text-white-50 hover-teal" onClick={() => window.scrollTo(0,0)}>
                  <i class="bi bi-chevron-right me-1 small"></i> Telemedicine
                </Link>
              </li>
              <li>
                <Link to="/home-care" class="text-white-50 hover-teal" onClick={() => window.scrollTo(0,0)}>
                  <i class="bi bi-chevron-right me-1 small"></i> eHealth
                </Link>
              </li>
              <li>
                <Link to="/elearning" class="text-white-50 hover-teal" onClick={() => window.scrollTo(0,0)}>
                  <i class="bi bi-chevron-right me-1 small"></i> eLearning
                </Link>
              </li>
              <li>
                <Link to="/privacy" class="text-white-50 hover-teal" onClick={() => window.scrollTo(0,0)}>
                  <i class="bi bi-chevron-right me-1 small"></i> Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/support" class="text-white-50 hover-teal" onClick={() => window.scrollTo(0,0)}>
                  <i class="bi bi-chevron-right me-1 small"></i> Support Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: In News Thumbnails */}
          <div class="col-md-6 col-lg-3">
            <h5 class="text-white border-bottom border-secondary border-2 pb-2 mb-3 fw-bold" style={{ width: 'fit-content' }}>
              In News
            </h5>
            <div class="row g-2">
              {newsItems.map((item) => (
                <div key={item.id} class="col-4">
                  <div 
                    class="img-hover-scale" 
                    style={{ height: '60px', overflow: 'hidden', borderRadius: '6px' }}
                    onClick={() => setActiveImage(item)}
                  >
                    <img 
                      src={item.thumb} 
                      alt={item.title} 
                      class="img-fluid w-100 h-100 object-fit-cover" 
                    />
                  </div>
                </div>
              ))}
            </div>
            <div class="mt-3">
              <Link to="/media/in-news" class="text-secondary small fw-medium hover-teal" onClick={() => window.scrollTo(0,0)}>
                View In News Page <i class="bi bi-arrow-right small ms-1"></i>
              </Link>
            </div>
          </div>

          {/* Column 4: Contact Us */}
          <div class="col-md-6 col-lg-3">
            <h5 class="text-white border-bottom border-secondary border-2 pb-2 mb-3 fw-bold" style={{ width: 'fit-content' }}>
              Contact Us
            </h5>
            <ul class="list-unstyled d-flex flex-column gap-2 small text-white-50">
              <li class="d-flex align-items-start gap-2">
                <i class="bi bi-telephone-fill text-secondary mt-1"></i>
                <div>
                  <span class="d-block text-white font-sans font-sm">India: 080 26420001</span>
                  <span class="d-block">Sales: 9448090037</span>
                  <span class="d-block">Tech Support: 9448489895</span>
                </div>
              </li>
              <li class="d-flex align-items-center gap-2">
                <i class="bi bi-telephone-fill text-secondary"></i>
                <span>US: +1 (408) 441 6732</span>
              </li>
              <li class="d-flex align-items-center gap-2">
                <i class="bi bi-envelope-fill text-secondary"></i>
                <a href="mailto:info@televital.com" class="text-white-50 hover-teal">info@televital.com</a>
              </li>
            </ul>
          </div>
        </div>

        <hr class="border-secondary opacity-25 my-4" />

        <div class="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <span class="small text-white-50">
            &copy; {new Date().getFullYear()} TeleVital. All Rights Reserved. (India Edition)
          </span>
          <button 
            onClick={scrollToTop} 
            class="btn btn-link text-white-50 text-decoration-none small hover-teal p-0 border-0"
          >
            Go to Top <i class="bi bi-arrow-up ms-1"></i>
          </button>
        </div>
      </div>

      {/* Floating Scroll Top Button */}
      <button 
        onClick={scrollToTop} 
        class={`btn-scroll-top ${showScroll ? 'visible' : ''}`}
        aria-label="Scroll to top"
      >
        <i class="bi bi-arrow-up-short fs-4"></i>
      </button>

      {/* Local Image Modal Lightbox */}
      {activeImage && (
        <div 
          class="modal show d-block" 
          style={{ backgroundColor: 'rgba(12, 35, 64, 0.85)', zIndex: 1050 }}
          onClick={() => setActiveImage(null)}
        >
          <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content border-0 bg-transparent" onClick={(e) => e.stopPropagation()}>
              <div class="modal-header border-0 pe-4">
                <button 
                  type="button" 
                  class="btn-close btn-close-white" 
                  aria-label="Close"
                  onClick={() => setActiveImage(null)}
                ></button>
              </div>
              <div class="modal-body text-center p-0">
                <img 
                  src={activeImage.full} 
                  alt={activeImage.title} 
                  class="img-fluid rounded-3 shadow-lg"
                  style={{ maxHeight: '80vh', objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
