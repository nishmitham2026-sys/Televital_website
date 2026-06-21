import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function ELearning() {
  const location = useLocation();
  const path = location.pathname;

  const specs = [
    'Video streaming solution compatible with Chrome, Firefox on Windows, Android, and iPads',
    'Responsive design optimized for PCs, laptops, tablets, and mobiles',
    'Simple and rich interface supporting video searching, sorting, and indexing',
    'Videos displayed with modern thumbnails, categories, and custom metadata',
    'User-friendly video player with full screen, seek previews, and resolution switching',
    'Intuitive admin dashboard to upload videos, keywords, and FTP sync options',
    'Automatic transcoding to multiple resolutions for low-bandwidth viewer support',
    'Watermarking feature to manage content copyright and intellectual property',
    'Role-based access controls to secure sensitive lectures and courses',
    'Usage metrics and analytics for teachers to track viewer statistics',
    'Personal note-taking during video playback with sharing options',
    'Related video recommendations showing next to active player',
    'Interactive documents linking (e.g. show a PDF at 3:10, a quiz at 10:00, and a photo at 20:00)',
    'Video recommendation lists targetable to individual students or class groups'
  ];

  const ruralSchools = [
    'Government Girls Urdu School, Gurmathkal, Yadgiri',
    'Government High School Jahageer Gudadar, Kushtagi (T), Koppal (D)',
    'Government Pre-University College Kokathanur, Athani (T), Belgaum (D)',
    'Valaballari Shri Channabaseveswara High School, Gudadur, Sindhanur (T), Raichur (D)',
    'Government Girls High School, Athani Post, Dharwad (D)',
    'Government Girls High School, Gulbarga',
    'Government Junior College Kudur, Magadi (T), Ramanagar (D)',
    'Government Junior College Harohalli, Kanakpura (T), Ramanagar (D)',
    'Government Junior College for Girls, Channapatna, Ramanagar (D)',
    'Government Junior College Madhugiri, Tumkur (D)'
  ];

  // ==========================================
  // VIEW: Overview
  // ==========================================
  const renderOverview = () => (
    <div>
      <div class="row align-items-center mb-5 g-4">
        <div class="col-lg-7">
          <span class="text-secondary fw-semibold uppercase letter-spacing-1 font-sm d-block mb-1">E-Learning Hub</span>
          <h1 class="fw-extrabold text-primary mb-3">eLearning System</h1>
          <p class="lead text-muted lh-base font-sm">
            A video archival and streaming system customized for educational institutions and teaching hospitals. Most suited for organizations where educational videos are recorded on a regular basis and hosted securely for their students or employees.
          </p>
        </div>
        <div class="col-lg-5">
          <div class="row g-3">
            <div class="col-6">
              <img src={window.getAssetPath(`images/deployment.jpg`)} alt="Deployment" class="img-fluid rounded-3 shadow-sm w-100 object-fit-cover" style={{ height: '180px' }} />
            </div>
            <div class="col-6">
              <img src={window.getAssetPath(`images/deployment1.jpg`)} alt="Deployment Setup" class="img-fluid rounded-3 shadow-sm w-100 object-fit-cover" style={{ height: '180px' }} />
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-4 p-4 p-md-5 shadow-sm border mb-5">
        <h3 class="fw-bold text-primary font-heading mb-4">Technical Specifications</h3>
        <div class="row">
          <div class="col-md-6">
            <ul class="list-unstyled d-flex flex-column gap-3 mb-0">
              {specs.slice(0, 7).map((spec, idx) => (
                <li key={idx} class="d-flex align-items-start gap-2 small text-muted">
                  <i class="bi bi-patch-check-fill text-secondary mt-1 small"></i>
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>
          <div class="col-md-6">
            <ul class="list-unstyled d-flex flex-column gap-3 mb-0">
              {specs.slice(7).map((spec, idx) => (
                <li key={idx} class="d-flex align-items-start gap-2 small text-muted">
                  <i class="bi bi-patch-check-fill text-secondary mt-1 small"></i>
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* eLearning Divisions */}
      <h3 class="fw-bold text-primary font-heading mb-4 text-center">Our eLearning Programs</h3>
      <div class="row g-4">
        <div class="col-md-4">
          <div class="premium-card bg-white p-4 text-center">
            <div class="bg-secondary bg-opacity-10 p-3 rounded-circle mx-auto mb-3" style={{ width: 'fit-content' }}>
              <i class="bi bi-book text-secondary fs-3"></i>
            </div>
            <h4 class="fw-bold text-primary font-heading mb-2">Rural Education</h4>
            <p class="text-muted small lh-base mb-4">
              Providing Virtual Classroom consoles with local offline servers to bring syllabus-based animations to rural students.
            </p>
            <Link to="/elearning/rural-education" class="btn btn-secondary-custom rounded-pill mt-auto">
              View Program <i class="bi bi-chevron-right ms-1"></i>
            </Link>
          </div>
        </div>

        <div class="col-md-4">
          <div class="premium-card bg-white p-4 text-center">
            <div class="bg-secondary bg-opacity-10 p-3 rounded-circle mx-auto mb-3" style={{ width: 'fit-content' }}>
              <i class="bi bi-laptop text-secondary fs-3"></i>
            </div>
            <h4 class="fw-bold text-primary font-heading mb-2">Technical Education</h4>
            <p class="text-muted small lh-base mb-4">
              Lecture archiving and searching tools implemented at leading technological research institutions.
            </p>
            <Link to="/elearning/technical-education" class="btn btn-secondary-custom rounded-pill mt-auto">
              View Program <i class="bi bi-chevron-right ms-1"></i>
            </Link>
          </div>
        </div>

        <div class="col-md-4">
          <div class="premium-card bg-white p-4 text-center">
            <div class="bg-secondary bg-opacity-10 p-3 rounded-circle mx-auto mb-3" style={{ width: 'fit-content' }}>
              <i class="bi bi-heart-pulse text-secondary fs-3"></i>
            </div>
            <h4 class="fw-bold text-primary font-heading mb-2">Medical Education</h4>
            <p class="text-muted small lh-base mb-4">
              Real-time surgical broadcast feeds to virtual classrooms and Q&A sync boards for surgery students.
            </p>
            <Link to="/elearning/medical-education" class="btn btn-secondary-custom rounded-pill mt-auto">
              View Program <i class="bi bi-chevron-right ms-1"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  // ==========================================
  // VIEW: Rural Education
  // ==========================================
  const renderRural = () => (
    <div>
      <div class="bg-white rounded-4 p-4 p-md-5 shadow-sm border mb-4">
        <span class="text-secondary fw-semibold uppercase letter-spacing-1 font-sm d-block mb-1">Rural Empowerment</span>
        <h2 class="fw-bold text-primary font-heading mb-4">Syllabus-Based Rural Education</h2>

        <h4 class="fw-bold text-primary mb-3">Challenges in Rural Classrooms</h4>
        <p class="text-muted small lh-lg">
          Quality of education is a major concern in rural schools as there is a huge shortage of good and committed teachers. In addition, there are major challenges such as power shortages, very poor or complete lack of internet connectivity, and lack of IT personnel to maintain computers. Some government schools are overly packed, leading to low teacher-student ratios.
        </p>

        <h4 class="fw-bold text-primary mt-4 mb-3">Virtual Classroom Solution</h4>
        <p class="text-muted small lh-lg">
          Considering these conditions, our solution offers syllabus-based electronic educational content along with user-friendly ways to access it, with bidirectional features. Based on our decade-long experience in remotest areas, we developed the **"Virtual Classroom"** console to stream content using a local Wi-Fi router from a local server.
        </p>
        <p class="text-muted small lh-lg">
          The end terminal laptops are hard-disk-less (increasing reliability) and run for 8 hours on a battery charge. Students can stream content recommended by teachers and answer questions that pop up during video playback.
        </p>
        <p class="text-muted small lh-lg">
          Science teachers explain complex concepts like DNA replication using 3D animations, history teachers show walks through the Harappan Civilization, and geography teachers show block mountains forming, capturing the complete attention of every student.
        </p>

        <div class="row g-4 mt-4 pt-3 border-top">
          <div class="col-md-6">
            <h5 class="fw-bold text-primary font-heading">Solution Benefits</h5>
            <ul class="list-unstyled d-flex flex-column gap-2 small text-muted">
              <li><i class="bi bi-check-lg text-secondary me-2"></i> Improves teacher effectiveness and classroom productivity</li>
              <li><i class="bi bi-check-lg text-secondary me-2"></i> Brings abstract and difficult curriculum concepts to life</li>
              <li><i class="bi bi-check-lg text-secondary me-2"></i> Makes learning an enjoyable and fun experience</li>
              <li><i class="bi bi-check-lg text-secondary me-2"></i> Improves student scores and overall academic results</li>
              <li><i class="bi bi-check-lg text-secondary me-2"></i> Enables instant formative assessment of learning outcomes</li>
            </ul>
          </div>
          <div class="col-md-6 bg-light p-4 rounded-3">
            <h5 class="fw-bold text-primary font-heading"><i class="bi bi-newspaper text-secondary me-2"></i>In News</h5>
            <p class="small text-muted lh-base">
              The concept is endorsed by the **Karnataka State Council for Science and Technology (KSCST)** and the **Indian Institute of Science (IISc)**. Read the full news coverage detailed in the Bangalore Mirror:
            </p>
            <a href="http://www.bangaloremirror.com/Bangalore/Others/A-new-wave-of-learning-sweeps-rural-classrooms/articleshow/45609617.cms" target="_blank" rel="noopener noreferrer" class="btn btn-outline-primary btn-sm rounded-pill mt-2">
              Read Bangalore Mirror Article <i class="bi bi-box-arrow-up-right ms-1"></i>
            </a>
          </div>
        </div>

        <h4 class="fw-bold text-primary mt-5 mb-3 text-center">Virtual Laboratories Established</h4>
        <div class="table-responsive">
          <table class="table table-striped table-hover align-middle border text-start small">
            <thead class="table-primary text-white">
              <tr>
                <th scope="col" style={{ width: '60px' }} class="text-center">#</th>
                <th scope="col">School Name & Location</th>
              </tr>
            </thead>
            <tbody>
              {ruralSchools.map((school, idx) => (
                <tr key={idx}>
                  <td class="text-center font-sans fw-bold text-secondary">{idx + 1}</td>
                  <td class="font-sans text-muted">{school}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  // ==========================================
  // VIEW: Technical Education
  // ==========================================
  const renderTechnical = () => (
    <div>
      <div class="bg-white rounded-4 p-4 p-md-5 shadow-sm border mb-4 text-center">
        <div class="bg-secondary bg-opacity-10 p-3 rounded-circle mx-auto mb-3" style={{ width: 'fit-content' }}>
          <i class="bi bi-mortarboard text-secondary fs-2"></i>
        </div>
        <span class="text-secondary fw-semibold uppercase letter-spacing-1 font-sm d-block mb-1">Higher Academia</span>
        <h2 class="fw-bold text-primary font-heading mb-4">Technical Education System</h2>

        <div class="row justify-content-center">
          <div class="col-lg-8">
            <p class="text-muted lh-lg mb-4">
              Our solution enables premier technical institutes to record important lectures. These video recordings are archived and cataloged dynamically, making them available to students to review at their convenience. Students can search lectures, sort by topic, view presentation decks, and create notes directly on the video player timeline.
            </p>
            <div class="card border border-primary border-opacity-25 bg-light p-4 rounded-3 text-start mb-4">
              <h5 class="fw-bold text-primary font-heading d-flex align-items-center gap-2">
                <i class="bi bi-check-circle-fill text-secondary"></i> Featured Implementation: IISc Bangalore
              </h5>
              <p class="small text-muted mb-0 lh-base mt-2">
                Implemented at the prestigious Indian Institute of Science (IISc), Bangalore. The system records complex seminars, research panels, and engineering modules, enabling continuous learning access across departments.
              </p>
            </div>
            <Link to="/elearning" class="btn btn-primary-custom rounded-pill mt-3">
              <i class="bi bi-arrow-left me-2"></i> Back to eLearning Hub
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  // ==========================================
  // VIEW: Medical Education
  // ==========================================
  const renderMedical = () => (
    <div>
      <div class="bg-white rounded-4 p-4 p-md-5 shadow-sm border mb-4">
        <div class="row align-items-center g-4">
          <div class="col-lg-7">
            <span class="text-secondary fw-semibold uppercase letter-spacing-1 font-sm d-block mb-1">Clinical Classrooms</span>
            <h2 class="fw-bold text-primary font-heading mb-3">Medical & Surgical Education</h2>
            <p class="text-muted small lh-lg">
              In most teaching hospitals, getting a large class of students to watch detailed surgeries inside sterile operating theatres is challenging due to space, hygiene, and infrastructure constraints.
            </p>
            <p class="text-muted small lh-lg">
              With the TeleVital surgical streaming console, live high-definition feeds from overhead camera rigs and laparoscopes are streamed directly to remote student terminal screens. Students can chat live with the surgeon during active Q&A panels, ask questions immediately post-op, and access complete video logs of surgery techniques.
            </p>
            <div class="p-3 border rounded bg-light mt-4">
              <h6 class="fw-bold text-primary mb-1 font-heading"><i class="bi bi-broadcast text-secondary me-2"></i>FMPC - 2015 Live Surgery Broadcast</h6>
              <p class="small text-muted mb-0">
                Broadcasted live by TeleVital, the Family Medicine Practice Conference showcased real-time laparoscopic surgeries to thousands of student specialists remotely, demonstrating the power of live medical streaming.
              </p>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="p-4 bg-light border rounded-3 text-center">
              <i class="bi bi-heart-pulse-fill text-danger fs-1 mb-3"></i>
              <h5 class="fw-bold text-primary font-heading">Surgical Live Sync</h5>
              <ul class="list-unstyled text-start small text-muted d-flex flex-column gap-2 mt-3">
                <li><i class="bi bi-dot text-secondary"></i> Sterile video routing from OT</li>
                <li><i class="bi bi-dot text-secondary"></i> Interactive real-time audio with surgeons</li>
                <li><i class="bi bi-dot text-secondary"></i> High fidelity diagnostic signal overlays</li>
                <li><i class="bi bi-dot text-secondary"></i> Complete surgical catalog archives</li>
              </ul>
              <Link to="/elearning" class="btn btn-secondary-custom rounded-pill w-100 mt-4">
                Back to Overview
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div class="py-5 bg-light">
      <div class="container">
        {/* Navigation Breadcrumb */}
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb custom-breadcrumb mb-4">
            <li class="breadcrumb-item"><Link to="/" class="text-primary font-sm">Home</Link></li>
            {path === '/elearning' ? (
              <li class="breadcrumb-item active text-muted font-sm" aria-current="page">eLearning</li>
            ) : (
              <>
                <li class="breadcrumb-item"><Link to="/elearning" class="text-primary font-sm">eLearning</Link></li>
                <li class="breadcrumb-item active text-muted font-sm" aria-current="page">
                  {path.split('/').pop().replace('-', ' ').replace(/\b\w/g, c => c.toUpperCase())}
                </li>
              </>
            )}
          </ol>
        </nav>

        {/* Dynamic Route Render */}
        {path === '/elearning' && renderOverview()}
        {path === '/elearning/rural-education' && renderRural()}
        {path === '/elearning/technical-education' && renderTechnical()}
        {path === '/elearning/medical-education' && renderMedical()}

      </div>
    </div>
  );
}
