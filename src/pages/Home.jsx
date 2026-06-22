import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const partners = [
    { name: 'NASA', logo: window.getAssetPath('images/logo/nasa.jpg') },
    { name: 'ISRO', logo: window.getAssetPath('images/logo/isro.jpg') },
    { name: 'TCIL', logo: window.getAssetPath('images/logo/tcil.jpg') },
    { name: 'KSCST', logo: window.getAssetPath('images/kscst.jpg') },
    { name: 'IISc', logo: window.getAssetPath('images/logo/iisc.jpg') },
    { name: 'Narayana', logo: window.getAssetPath('images/logo/narayana.jpg') },
    { name: 'Manipal', logo: window.getAssetPath('images/manipal.jpg') },
    { name: 'Asian Heart', logo: window.getAssetPath('images/logo/asian-heart-institute.jpg') },
    { name: 'Star Health', logo: window.getAssetPath('images/logo/start-health.jpg') },
    { name: 'Nevada', logo: window.getAssetPath('images/logo/nevada.jpg') },
    { name: 'Intel', logo: window.getAssetPath('images/logo/intel.jpg') },
    { name: 'Indian Railways', logo: window.getAssetPath('images/logo/indian-railways.jpg') },
    { name: 'Indus International', logo: window.getAssetPath('images/indus-international-school.jpg') },
    { name: 'Veterans Affairs', logo: window.getAssetPath('images/veterans-affairs.jpg') },
    { name: 'Arizona Telemedicine', logo: window.getAssetPath('images/arizona-telemedicine.jpg') },
    { name: 'HP', logo: window.getAssetPath('images/hp.jpg') }
  ];

  return (
    <div>
      {/* Hero Carousel */}
      <div id="homeHeroCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="6000">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#homeHeroCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#homeHeroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#homeHeroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#homeHeroCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>

        <div class="carousel-inner">
          {/* Slide 1 */}
          <div class="carousel-item active slide-left-img" style={{ height: '550px' }}>
            <img src={window.getAssetPath(`images/RPM_2.jpg`)} class="d-block w-100 h-100 object-fit-cover carousel-img-1" alt="RPM and CCM" />
            <div class="container h-100 position-absolute top-0 start-50 translate-middle-x">
              <div class="carousel-caption text-start" style={{ bottom: '15%', right: '12px', left: 'auto' }}>
                <div class="carousel-overlay-card">
                  <span class="badge bg-secondary mb-2 px-3 py-2 rounded-pill font-sans uppercase">Services</span>
                  <h1 class="text-white fw-bold mb-3">RPM and Chronic Care</h1>
                  <p class="text-white-50 mb-4 lh-base font-sm">
                    TeleVital's Remote Patient Monitoring (RPM) and Chronic Care Management (CCM) solutions help healthcare providers deliver remote patient care with timely evidence-based interventions and proactive personalized care.
                  </p>
                  <a href={window.getAssetPath('images/TeleVital_RPM_CCM_Brochure_Final.pdf')} target="_blank" class="btn btn-secondary-custom rounded-pill">
                    <i class="bi bi-file-earmark-pdf me-2"></i>Download Brochure
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div class="carousel-item slide-left-img" style={{ height: '550px' }}>
            <img src={window.getAssetPath(`images/televital-1.jpg`)} class="d-block w-100 h-100 object-fit-cover carousel-img-2" alt="Remote Anesthesia" />
            <div class="container h-100 position-absolute top-0 start-50 translate-middle-x">
              <div class="carousel-caption text-start" style={{ bottom: '15%', right: '12px', left: 'auto' }}>
                <div class="carousel-overlay-card">
                  <span class="badge bg-secondary mb-2 px-3 py-2 rounded-pill font-sans">First in Industry</span>
                  <h1 class="text-white fw-bold mb-3">Remote Anesthesia Monitoring</h1>
                  <p class="text-white-50 mb-4 lh-base">
                    We are the first Telemedicine Company to execute a remote anesthesia monitoring solution over the Internet in partnership with NASA’s MedITAC consortium.
                  </p>
                  <Link to="/case-studies/meditac-nasa" class="btn btn-secondary-custom rounded-pill">
                    Learn More <i class="bi bi-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div class="carousel-item slide-left-img" style={{ height: '550px' }}>
            <img src={window.getAssetPath(`images/tv-slider-2.jpg`)} class="d-block w-100 h-100 object-fit-cover carousel-img-3" alt="ISRO Network" />
            <div class="container h-100 position-absolute top-0 start-50 translate-middle-x">
              <div class="carousel-caption text-start" style={{ bottom: '15%', right: '12px', left: 'auto' }}>
                <div class="carousel-overlay-card">
                  <span class="badge bg-secondary mb-2 px-3 py-2 rounded-pill font-sans">Scale & Reach</span>
                  <h1 class="text-white fw-bold mb-3">Connecting 400+ Hospitals</h1>
                  <p class="text-white-50 mb-4 lh-base">
                    Partnered with Indian Space Research Organisation (ISRO), we have reached the remotest villages in Karnataka, Andaman & Nicobar Islands, Jammu & Kashmir, and the North Eastern region.
                  </p>
                  <Link to="/case-studies/isro-telemedicine-network" class="btn btn-secondary-custom rounded-pill">
                    Explore Case Study <i class="bi bi-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 4 */}
          <div class="carousel-item slide-right-img" style={{ height: '550px' }}>
            <img src={window.getAssetPath(`images/tv-slider-3.jpg`)} class="d-block w-100 h-100 object-fit-cover carousel-img-4" alt="PAN African Network" />
            <div class="container h-100 position-absolute top-0 start-50 translate-middle-x">
              <div class="carousel-caption text-start" style={{ bottom: '15%', left: '12px', right: 'auto' }}>
                <div class="carousel-overlay-card">
                  <span class="badge bg-secondary mb-2 px-3 py-2 rounded-pill font-sans">Global Impact</span>
                  <h1 class="text-white fw-bold mb-3">PAN-African e-Network</h1>
                  <p class="text-white-50 mb-4 lh-base">
                    TeleVital's software is used by TCIL to deliver telemedicine services to 42+ countries in the African Union, an initiative sponsored by the Ministry of External Affairs, Govt. of India.
                  </p>
                  <Link to="/case-studies/pan-africa-initiative" class="btn btn-secondary-custom rounded-pill">
                    Know More <i class="bi bi-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#homeHeroCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#homeHeroCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      {/* Intro / Decade of Telemedicine Section */}
      <section class="section-padding bg-white">
        <div class="container text-center">
          <span class="text-secondary fw-semibold uppercase letter-spacing-2 font-sm d-block mb-2">A Legacy of Care</span>
          <h2 class="section-title center fw-bold text-primary mb-4">Decade of Telemedicine Experience</h2>
          <p class="lead text-muted max-w-700 mx-auto fs-5 mb-4">
            "Indian Telemedicine Company of the Year for 2009"
          </p>
          <div class="d-flex justify-content-center">
            <Link to="/about" class="btn btn-primary-custom rounded-pill px-4">
              Awarded by Frost & Sullivan <i class="bi bi-award ms-2 text-warning"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Core Offerings Cards */}
      <section class="section-padding bg-light-accent">
        <div class="container">
          <div class="row g-4">
            {/* Offering 1 */}
            <div class="col-md-4">
              <div class="premium-card">
                <div class="mb-4">
                  <img src={window.getAssetPath(`images/user1-telemedicine.jpg`)} alt="Telemedicine" class="img-fluid rounded-3 mb-3 shadow-sm w-100" style={{ height: '180px', objectFit: 'cover' }} />
                </div>
                <h4 class="fw-bold mb-3 text-primary">Telemedicine</h4>
                <p class="text-muted small flex-grow-1 lh-base">
                  With our telemedicine platform, we connect super specialty hospitals to smaller hospitals, clinics, and ambulances, saving lives and making healthcare ubiquitous.
                </p>
                <Link to="/telemedicine" class="btn btn-secondary-custom rounded-pill mt-4">
                  Explore Services <i class="bi bi-chevron-right ms-1"></i>
                </Link>
              </div>
            </div>

            {/* Offering 2 */}
            <div class="col-md-4">
              <div class="premium-card">
                <div class="mb-4">
                  <img src={window.getAssetPath(`images/user2-ehealth.jpg`)} alt="eHealth" class="img-fluid rounded-3 mb-3 shadow-sm w-100" style={{ height: '180px', objectFit: 'cover' }} />
                </div>
                <h4 class="fw-bold mb-3 text-primary">eHealth</h4>
                <p class="text-muted small flex-grow-1 lh-base">
                  With eHealth, we bring healthcare to your doorstep, connecting apartments and residences in urban locations with our state-of-the-art telemedicine facilities.
                </p>
                <Link to="/home-care" class="btn btn-secondary-custom rounded-pill mt-4">
                  Explore Services <i class="bi bi-chevron-right ms-1"></i>
                </Link>
              </div>
            </div>

            {/* Offering 3 */}
            <div class="col-md-4">
              <div class="premium-card">
                <div class="mb-4">
                  <img src={window.getAssetPath(`images/user3-elearning.jpg`)} alt="eLearning" class="img-fluid rounded-3 mb-3 shadow-sm w-100" style={{ height: '180px', objectFit: 'cover' }} />
                </div>
                <h4 class="fw-bold mb-3 text-primary">eLearning</h4>
                <p class="text-muted small flex-grow-1 lh-base">
                  Our eLearning platform is designed to deliver Medical, Technical & Rural Health Education to students studying Medicine, Engineering, and high school.
                </p>
                <Link to="/elearning" class="btn btn-secondary-custom rounded-pill mt-4">
                  Explore Services <i class="bi bi-chevron-right ms-1"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Here is a look at what we've been working (Historic Gallery Grid) */}
      <section class="section-padding bg-white">
        <div class="container">
          <div class="text-center mb-5">
            <h2 class="section-title center fw-bold text-primary">Here is a look at what we have been working</h2>
            <p class="text-muted max-w-700 mx-auto small">
              With our portfolio extending PAN India and Africa, we at TeleVital have worked with the world's most respected agencies like NASA, ISRO, TCIL, IISc, and KSCST. Currently, we have an installation base of 500+ hospitals in 55+ countries and eLearning centers across Karnataka.
            </p>
          </div>

          <div class="row g-3">
            {/* Gallery Images (6) */}
            <div class="col-sm-6 col-md-4">
              <div class="img-hover-scale" style={{ height: '220px' }}>
                <img src={window.getAssetPath(`images/footergallery/Decu1.jpg`)} alt="Gallery 1" title="Hon Defence Minister Shri Rajnath Singh" />
              </div>
            </div>
            <div class="col-sm-6 col-md-4">
              <div class="img-hover-scale" style={{ height: '220px' }}>
                <img src={window.getAssetPath(`images/footergallery/UP1.jpg`)} alt="Gallery 2" title="UP CM Shri Yogi Adithyanath" />
              </div>
            </div>
            <div class="col-sm-6 col-md-4">
              <div class="img-hover-scale" style={{ height: '220px' }}>
                <img src={window.getAssetPath(`images/footergallery/Decu2.jpeg`)} alt="Gallery 3" title="Army Telemedicine" />
              </div>
            </div>
            <div class="col-sm-6 col-md-4">
              <div class="img-hover-scale" style={{ height: '220px' }}>
                <img src={window.getAssetPath(`images/footergallery/UP2.jpg`)} alt="Gallery 4" title="UP Telemedicine Inaguration" />
              </div>
            </div>
            <div class="col-sm-6 col-md-4">
              <div class="img-hover-scale" style={{ height: '220px' }}>
                <img src={window.getAssetPath(`images/footergallery/televital-footer4.jpg`)} alt="Gallery 5" title="Late President Shri A.P.J Abdul Kalam" />
              </div>
            </div>
            <div class="col-sm-6 col-md-4">
              <div class="img-hover-scale" style={{ height: '220px' }}>
                <img src={window.getAssetPath(`images/footergallery/televital-footer5.jpg`)} alt="Gallery 6" title="Ex-President Shri Pranab Mukherjee" />
              </div>
            </div>
          </div>

          <div class="text-center mt-4">
            <Link to="/media/image-gallery" class="btn btn-primary-custom rounded-pill">
              View Complete Gallery <i class="bi bi-images ms-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Clients & Partners Infinite Marquee */}
      <section class="py-5 bg-light border-top border-bottom">
        <div class="container text-center mb-4">
          <h3 class="fw-bold text-primary font-heading mb-1">Clients & Partners</h3>
          <p class="text-muted small">Collaborations with leading space, government, and healthcare institutions worldwide</p>
        </div>
        <div class="marquee-container">
          <div class="marquee-content">
            {/* Render items twice to allow seamless loop */}
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} class="marquee-item">
                <img src={partner.logo} alt={partner.name} title={partner.name} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
