import React, { useState, useEffect } from 'react';
import { ExternalLink, Trophy, ShieldCheck, Milestone, FileText, X } from 'lucide-react';
import { certificates, achievements } from '../data/certificates';

const CertificationsAchievements = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  // Keyboard shortcut (Esc) to close lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedMedia(null);
      }
    };
    if (selectedMedia) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedMedia]);

  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Accreditation</span>
          <h2 className="section-title">Certifications & wins</h2>
        </div>

        {/* Certifications Grid */}
        <h3 className="timeline-column-title" style={{ marginBottom: '24px' }}>
          <ShieldCheck size={20} className="column-icon" />
          <span>Professional certifications</span>
        </h3>

        <div className="certs-grid" style={{ marginBottom: '48px' }}>
          {certificates.map((cert) => {
            const isPdf = cert.image?.toLowerCase().endsWith('.pdf');

            return (
              <div
                key={cert.id || cert.title}
                className="cert-card"
                onClick={() => {
                  if (isPdf) {
                    window.open(cert.image, '_blank', 'noopener,noreferrer');
                  } else {
                    setSelectedMedia(cert);
                  }
                }}
                style={{ cursor: 'pointer' }}
              >
                <div className="cert-image-container">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    loading="lazy"
                    className="cert-image"
                  />
                  {isPdf && (
                    <div className="pdf-badge">
                      <FileText size={16} />
                      <span>PDF Document</span>
                    </div>
                  )}
                </div>

                <div className="cert-content">
                  <h4 className="cert-title">{cert.title}</h4>
                  <div className="cert-meta">
                    <span className="cert-issuer">{cert.issuer}</span>
                    <span className="cert-dot">•</span>
                    <span className="cert-date">{cert.date}</span>
                  </div>
                  <p className="cert-desc">{cert.description}</p>

                  <div className="cert-card-action">
                    {isPdf ? (
                      <span className="cert-verify">
                        <span>Open PDF</span>
                        <ExternalLink size={12} />
                      </span>
                    ) : (
                      <span className="cert-verify">
                        <span>View certificate</span>
                        <ExternalLink size={12} />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Wins / Contest Milestones Sub-area */}
        {achievements && achievements.length > 0 && (
          <>
            <h3 className="timeline-column-title" style={{ marginBottom: '24px' }}>
              <Milestone size={20} className="column-icon" />
              <span>Milestones & contest wins</span>
            </h3>
            <div className="achievements-grid">
              {achievements.map((ach, index) => (
                <div key={index} className="achievement-card">
                  <div className="achievement-header">
                    <div className="achievement-icon">
                      <Trophy size={18} />
                    </div>
                    <span className="achievement-rank">{ach.rank}</span>
                  </div>
                  <h4 className="achievement-title">{ach.title}</h4>
                  <h5 className="achievement-org">{ach.org}</h5>
                  <p className="achievement-desc">{ach.desc}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div
          className="lightbox-overlay"
          onClick={() => setSelectedMedia(null)}
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lightbox-close-btn"
              onClick={() => setSelectedMedia(null)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            <img
              src={selectedMedia.image}
              alt={selectedMedia.title}
              className="lightbox-image"
            />
            <div className="lightbox-details">
              <h4>{selectedMedia.title}</h4>
              <p className="lightbox-meta">{selectedMedia.issuer} • {selectedMedia.date}</p>
              <p className="lightbox-desc">{selectedMedia.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificationsAchievements;
