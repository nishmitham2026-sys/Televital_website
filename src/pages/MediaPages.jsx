import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ImageLightbox from '../components/ImageLightbox';

export default function MediaPages() {
  const location = useLocation();
  const path = location.pathname;
  const [activeImage, setActiveImage] = useState(null);
  const [newsFilter, setNewsFilter] = useState('all');

  const videos = [
    { title: 'Televital Featured on NBC (MedITAC/NASA)', url: 'https://www.youtube.com/embed/RGWPk4yiZRU' },
    { title: 'TeleVital - Comoros Apollo - African Mission', url: 'https://www.youtube.com/embed/CqHfpNX7JRQ' },
    { title: 'LifeSaving Surgery on VCU News', url: 'https://www.youtube.com/embed/dSp5SReeZEk' },
    { title: 'Telemedicine Inauguration by Prime Minister of India', url: 'https://www.youtube.com/embed/YMIzNv1UOMA' },
    { title: 'ISRO Telemedicine', url: 'https://www.youtube.com/embed/08uiuglj9g8' }
  ];

  const testimonials = [
    {
      quote: 'TeleVital’s VitalWeb link provided the same information I would have received if I had been physically in the operating room. VitalWeb represents a significant advance in telemedicine with far-reaching benefits for both healthcare professionals and their patients.',
      author: 'Dr. Lynne Gehr',
      role: 'Anesthesia Specialist from Virginia Commonwealth University in Richmond',
      avatar: '//1.gravatar.com/avatar/01abfc750a0c942167651c40d088531d?s=68&r=pg&d=mm'
    },
    {
      quote: 'It is a matter of transporting so much information about a patient that you really understand what is going on with that distant situation as though you were there and knowing that much can send back solutions that will work.',
      author: 'Dr. Ronald Merrell',
      role: 'Chairman of Surgery at Virginia Commonwealth University’s School of Medicine',
      avatar: '//1.gravatar.com/avatar/01abfc750a0c942167651c40d088531d?s=68&r=pg&d=mm'
    },
    {
      quote: 'The quality of the video and audio was absolutely amazing considering the 64Kbps bandwidth although at the same time the vital signs were also being sent. Almost nine hours of live anesthesia monitoring (vitals and audio/video) was performed on one day without the slightest hiccup.',
      author: 'Nathaniel Marriam',
      role: 'Media Director, MedITAC',
      avatar: '//1.gravatar.com/avatar/01abfc750a0c942167651c40d088531d?s=68&r=pg&d=mm'
    },
    {
      quote: 'No other company has transmitted diagnostic medical data in real-time over such a low bandwidth satellite connection. The capabilities of TeleVital technology are unmeasurable.',
      author: 'Chuck Doarn',
      role: 'Executive Director, MedITAC/NASA',
      avatar: '//1.gravatar.com/avatar/01abfc750a0c942167651c40d088531d?s=68&r=pg&d=mm'
    }
  ];

  const newsItems = [
    { id: 0, src: '/images/Eenadu-paper-2015.jpg', type: 'local', title: 'NTR School E-Learning launch clipping in Eenadu' },
    { id: 1, src: '/images/vartha-march-2015.jpg', type: 'local', title: 'Nara Bhuvaneshwari launches NTR E-Learning clipping' },
    { id: 2, src: '/images/in-news/nigeria-luth.jpg', type: 'international', title: 'LUTH test-runs telemedicine equipment (The Nation Nigeria)' },
    { id: 3, src: '/images/in-news/seychelles.jpg', type: 'international', title: 'Healthcare available at click of button (Seychelles Nation)' },
    { id: 4, src: '/images/in-news/news-2008-1.png', type: 'international', title: 'Victoria Hospital now linked to specialists abroad (Seychelles Nation)' },
    { id: 5, src: '/images/in-news/news-2008.png', type: 'international', title: 'Victoria Hospital telemedicine link launch clipping' }
  ];

  const galleryItems = [
    { id: 0, src: '/images/footergallery/televital-footer4.jpg', title: 'Late President Shri A.P.J Abdul Kalam' },
    { id: 1, src: '/images/footergallery/televital-footer5.jpg', title: 'Ex-President Shri Pranab Mukherjee' },
    { id: 2, src: '/images/footergallery/Decu1.jpg', title: 'Hon Defence Minister Shri Rajnath Singh' },
    { id: 3, src: '/images/footergallery/UP1.jpg', title: 'UP CM Shri Yogi Adithyanath' },
    { id: 4, src: '/images/footergallery/Decu2.jpeg', title: 'Army Telemedicine Demonstration' },
    { id: 5, src: '/images/footergallery/UP2.jpg', title: 'UP Telemedicine Inauguration' },
    { id: 6, src: '/images/footergallery/Toli.jpeg', title: 'E-Learning Class Session' },
    { id: 7, src: '/images/footergallery/televital-footer7.jpg', title: 'Clinical Training Lecture' },
    { id: 8, src: '/images/footergallery/Bhutan.JPG', title: 'Bhutan Telemedicine Commissioning' },
    { id: 9, src: '/images/footergallery/televital-footer1.jpg', title: 'Telemedicine Console Demo' },
    { id: 10, src: '/images/footergallery/televital-footer6.jpg', title: 'Seychelles Specialist Demonstration' },
    { id: 11, src: '/images/footergallery/televital-footer2.jpg', title: 'Super-Specialty Hospital Link' },
    { id: 12, src: '/images/televital-footer1.jpg', title: 'TeleVital Server Control' },
    { id: 13, src: '/images/televital-footer2.jpg', title: 'Dialysis and Vital Sign Sync' },
    { id: 14, src: '/images/televital-foooter3.jpg', title: 'Rural Classroom Setups' },
    { id: 15, src: '/images/televital-footer4.jpg', title: 'Emergency Ambulance ECG link' },
    { id: 16, src: '/images/televital-footer5.jpg', title: 'ECG Signal Streams' },
    { id: 17, src: '/images/televital-footer6.jpg', title: 'Super Specialty Doctor Panel' },
    { id: 18, src: '/images/televital-footer8.jpg', title: 'African Hospital Connection' },
    { id: 19, src: '/images/televital-footer9.jpg', title: 'Satellite Telehealth Setup' }
  ];

  // ==========================================
  // RENDER: Video page
  // ==========================================
  const renderVideos = () => (
    <div>
      <div class="text-center mb-5">
        <h1 class="fw-extrabold text-primary mb-2">Video Gallery</h1>
        <p class="text-muted small">Watch historical coverage, surgery streams, and documentaries detailing TeleVital implementations.</p>
      </div>
      <div class="row g-4">
        {videos.map((vid, idx) => (
          <div key={idx} class="col-md-6 col-lg-4">
            <div class="card border-0 shadow-sm rounded-3 overflow-hidden h-100">
              <div class="ratio ratio-16x9">
                <iframe 
                  src={vid.url} 
                  title={vid.title} 
                  allowFullScreen
                  class="border-0"
                ></iframe>
              </div>
              <div class="card-body video-card-body p-3 text-start">
                <h5 class="fw-bold text-primary font-heading fs-6 mb-0">{vid.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // ==========================================
  // RENDER: In News page
  // ==========================================
  const renderInNews = () => {
    const filteredNews = newsItems.filter(item => newsFilter === 'all' || item.type === newsFilter);
    return (
      <div>
        <div class="text-center mb-4">
          <h1 class="fw-extrabold text-primary mb-2">In News</h1>
          <p class="text-muted small">Newspaper clippings, press releases, and articles featuring TeleVital deployments worldwide.</p>
          
          <div class="d-flex justify-content-center mt-3">
            <div class="nav nav-pills bg-white p-2 rounded-pill border shadow-sm" style={{ width: 'fit-content' }}>
              <button 
                class={`nav-link rounded-pill px-4 fw-medium border-0 ${newsFilter === 'all' ? 'bg-secondary text-white' : 'text-primary'}`}
                onClick={() => setNewsFilter('all')}
              >
                Show All
              </button>
              <button 
                class={`nav-link rounded-pill px-4 fw-medium border-0 ${newsFilter === 'international' ? 'bg-secondary text-white' : 'text-primary'}`}
                onClick={() => setNewsFilter('international')}
              >
                International
              </button>
            </div>
          </div>
        </div>

        <div class="row g-4">
          {filteredNews.map((item) => (
            <div key={item.id} class="col-sm-6 col-md-4">
              <div 
                class="img-hover-scale" 
                style={{ height: '260px' }}
                onClick={() => setActiveImage(item)}
              >
                <img 
                  src={item.src} 
                  alt={item.title} 
                  class="w-100 h-100 object-fit-cover" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // ==========================================
  // RENDER: Testimonials page
  // ==========================================
  const renderTestimonials = () => (
    <div>
      <div class="text-center mb-5">
        <h1 class="fw-extrabold text-primary mb-2">Testimonials</h1>
        <p class="text-muted small">Hear from clinical directors, chief surgeons, and space center managers utilizing TeleVital solutions.</p>
      </div>
      <div class="row g-4">
        {testimonials.map((test, idx) => (
          <div key={idx} class="col-md-6">
            <div class="premium-card testimonial-card p-4 h-100">
              <p class="text-muted fs-6 italic lh-lg mb-4 flex-grow-1">
                "{test.quote}"
              </p>
              <div class="d-flex align-items-center mt-auto border-top pt-3">
                <img 
                  src={test.avatar} 
                  alt={test.author} 
                  class="testimonial-avatar me-3" 
                />
                <div class="text-start">
                  <h5 class="fw-bold text-primary mb-0 font-heading fs-6">{test.author}</h5>
                  <span class="text-muted small">{test.role}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // ==========================================
  // RENDER: Image Gallery page
  // ==========================================
  const renderGallery = () => (
    <div>
      <div class="text-center mb-5">
        <h1 class="fw-extrabold text-primary mb-2">Image Gallery</h1>
        <p class="text-muted small">Review our archive of telemedicine installations, e-learning classrooms, and historical government milestones.</p>
      </div>
      <div class="row g-3">
        {galleryItems.map((item) => (
          <div key={item.id} class="col-sm-6 col-md-4 col-lg-3">
            <div 
              class="img-hover-scale position-relative" 
              style={{ height: '200px' }}
              onClick={() => setActiveImage(item)}
            >
              <img 
                src={item.src} 
                alt={item.title} 
                class="w-100 h-100 object-fit-cover" 
              />
              <div class="position-absolute bottom-0 start-0 end-0 bg-dark bg-opacity-75 p-2 text-center text-white small opacity-0 hover-opacity-100 transition-opacity">
                {item.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const getSubpageTitle = () => {
    if (path === '/media/video') return 'Video';
    if (path === '/media/in-news') return 'In News';
    if (path === '/media/testimonial') return 'Testimonial';
    return 'Gallery';
  };

  return (
    <div class="py-5 bg-light">
      <div class="container">
        {/* Navigation Breadcrumbs */}
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb custom-breadcrumb mb-4">
            <li class="breadcrumb-item"><Link to="/" class="text-primary font-sm">Home</Link></li>
            <li class="breadcrumb-item"><a href="#" class="text-primary font-sm">Media</a></li>
            <li class="breadcrumb-item active text-muted font-sm" aria-current="page">{getSubpageTitle()}</li>
          </ol>
        </nav>

        {/* Dynamic Media Render */}
        {path === '/media/video' && renderVideos()}
        {path === '/media/in-news' && renderInNews()}
        {path === '/media/testimonial' && renderTestimonials()}
        {path === '/media/image-gallery' && renderGallery()}

        {/* Lightbox Rendering */}
        {activeImage && (
          <ImageLightbox image={activeImage} onClose={() => setActiveImage(null)} />
        )}
      </div>
    </div>
  );
}
