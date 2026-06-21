import React from 'react';

export default function ImageLightbox({ image, onClose }) {
  if (!image) return null;

  return (
    <div 
      class="modal show d-block" 
      style={{ backgroundColor: 'rgba(12, 35, 64, 0.9)', zIndex: 1060 }}
      onClick={onClose}
    >
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content border-0 bg-transparent" onClick={(e) => e.stopPropagation()}>
          <div class="modal-header border-0 pe-4 py-2">
            {image.title && <h5 class="modal-title text-white font-heading">{image.title}</h5>}
            <button 
              type="button" 
              class="btn-close btn-close-white ms-auto" 
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div class="modal-body text-center p-0">
            <img 
              src={image.src || image.full} 
              alt={image.title || 'Enlarged Image'} 
              class="img-fluid rounded-3 shadow-lg" 
              style={{ maxHeight: '80vh', objectFit: 'contain' }}
            />
            {image.description && (
              <div class="p-3 text-white-50 small font-sans mt-2">
                {image.description}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
