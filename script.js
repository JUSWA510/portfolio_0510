// Data
const journalEntries = [
  { 
    id: 1, 
    image: 'image1/1.jpg', 
    title: 'Worldtech Information Solutions, Inc.', 
    location: 'Cebu City', 
    date: 'Day 1', 
    description: 'Worldtech Information Solutions, Inc. is a technology-driven company based in Cebu that provides innovative IT products and solutions for businesses and organizations. The company specializes in software development, IT systems, and technology services designed to improve efficiency and support digital transformation.' 
  },
  { 
    id: 2, 
    image: 'image1/2.jpg', 
    title: 'MATA TECHNOLOGIES Inc.', 
    location: 'Cebu City', 
    date: 'Day 1', 
    description: 'MATA Technologies, Inc. is an IT solutions company that delivers innovative technology services and systems to support business operations and digital transformation. The company focuses on providing reliable, efficient, and customized IT solutions tailored to client needs.' 
  },
  { 
    id: 3, 
    image: 'image1/3.jpg', 
    title: 'Educational Tour Destination', 
    location: 'Tagbilaran City, Bohol', 
    date: 'Day 2', 
    description: 'Bohol is a beautiful province in the Philippines, known for its rich cultural heritage, stunning natural landscapes, and vibrant tourism industry. It is home to famous attractions such as the Chocolate Hills, Panglao Island, and the Philippine tarsier, one of the world\'s smallest primates.' 
  },
  { 
    id: 4, 
    image: 'image1/5.jpg', 
    title: 'REVAN IT CEBU', 
    location: 'Cebu City', 
    date: 'Day 2', 
    description: 'Revan IT Cebu is a technology company specializing in IT solutions, software development, and digital services for businesses and organizations. The company focuses on creating innovative, efficient, and reliable solutions to address real-world IT challenges.' 
  },
  { 
    id: 5, 
    image: 'image1/4.jpg', 
    title: 'Sugbo Church', 
    location: 'Basilica Minore del Santo Niño de Cebu', 
    date: 'Day 1', 
    description: 'Sugbo Church, located in Cebu City, is a historic and iconic church known for its rich cultural and religious heritage. It features classic architectural design, intricate details, and a serene atmosphere that reflects the deep faith and traditions of the local community.' 
  },
  { 
    id: 6, 
    image: 'image1/7.jpg', 
    title: 'CodeChum', 
    location: 'Cebu City', 
    date: 'Day 1', 
    description: 'CodeChum is an innovative EdTech startup based in Cebu, Philippines that provides a web-based learning platform designed to make programming education more accessible, interactive, and effective. The platform supports a built-in programming curriculum aligned with educational standards.' 
  },
];

const certificates = [
  { id: 1, image: 'image2/2.png', title: 'Certificate of Completion', issuer: 'CodeChum', date: '2025' },
  { id: 2, image: 'image2/1.jpg', title: 'Participation Award', issuer: 'WATT Program', date: '2025' },
  { id: 3, image: 'image2/3.png', title: 'Certificate of Completion', issuer: 'Great Learning', date: '2024' },
  { id: 4, image: 'image2/4.png', title: 'Dean\'s List', issuer: 'Academic Excellence', date: '2024' }
];

const scannedPages = [
  { id: 1, image: 'image/name.jpg', caption: 'NAME' },
  { id: 2, image: 'image/sched.jpg', caption: 'SCHEDULE' },
  { id: 3, image: 'image/revan.jpg', caption: 'REVAN IT CEBU' },
  { id: 4, image: 'image/worldtech.jpg', caption: 'WORLDTECH INFORMATION SOLUTIONS, INC.' },
  { id: 5, image: 'image/codechum.jpg', caption: 'CODECHUM' },
  { id: 6, image: 'image/tarser.jpg', caption: 'T.A.R.S.I.E.R 117' },
  { id: 7, image: 'image/mata.jpg', caption: 'MATA TECHNOLOGIES, INC.' },
  { id: 8, image: 'image/evualate.jpg', caption: 'IMPRESSION SHEET' },
];

const photos = [
  { image: 'image3/1.jpg', caption: 'Pool Shot', category: 'scenery' },
  { image: 'image3/2.jpg', caption: 'Beautiful view', category: 'group' },
  { image: 'image3/3.jpg', caption: 'Sunset', category: 'scenery' },
  { image: 'image3/4.jpg', caption: 'Beautiful view', category: 'scenery' },
  { image: 'image3/5.jpg', caption: 'Beautiful view', category: 'scenery' },
  { image: 'image1/1.jpg', caption: 'Orientation', category: 'activity' },
  { image: 'image3/6.jpg', caption: 'Workshop participation', category: 'activity' },
  { image: 'image3/7.jpg', caption: 'Beautiful view', category: 'scenery' },
  { image: 'image3/12.jpg', caption: 'Beautiful view', category: 'scenery' },
  { image: 'image3/9.jpg', caption: 'View', category: 'scenery' },
  { image: 'image3/15.jpg', caption: '0.5 picture', category: 'group' },
  { image: 'image1/3.jpg', caption: 'Beautiful view', category: 'group' },
  { image: 'image3/10.jpg', caption: 'Beautiful view', category: 'scenery' },
  { image: 'image3/11.jpg', caption: 'Beautiful view', category: 'scenery' },
  { image: 'image3/13.jpg', caption: 'Beautiful view', category: 'group' },
  { image: 'image3/20.jpg', caption: 'Beautiful view', category: 'group' },
  { image: 'image3/101.jpg', caption: 'Beautiful view', category: 'group' },
  { image: 'image3/103.jpg', caption: 'Beautiful view', category: 'group' },
  { image: 'image3/104.jpg', caption: 'Beautiful view', category: 'group' },
  { image: 'image3/106.jpg', caption: 'Beautiful view', category: 'group' },
  { image: 'image3/107.jpg', caption: 'Beautiful view', category: 'scenery' },
];

// Create floating particles
function createParticles() {
  const container = document.getElementById('particles');
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 20 + 's';
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
    container.appendChild(particle);
  }
}

// Header scroll effect
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Close menu when clicking nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});

// Render journal entries
function renderJournal() {
  const grid = document.getElementById('journalGrid');
  
  journalEntries.forEach(entry => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-image">
        <img src="${entry.image}" alt="${entry.title}">
        <div class="card-overlay">👁️</div>
      </div>
      <div class="card-content">
        <div class="card-meta">
          <span>📍 ${entry.location}</span>
          <span>📅 ${entry.date}</span>
        </div>
        <h3 class="card-title">${entry.title}</h3>
        <p class="card-description">${entry.description}</p>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Render certificates
function renderCertificates() {
  const grid = document.getElementById('certGrid');
  
  certificates.forEach(cert => {
    const card = document.createElement('div');
    card.className = 'card cert-card';
    card.innerHTML = `
      <div class="card-image">
        <img src="${cert.image}" alt="${cert.title}">
      </div>
      <div class="card-content">
        <h3 class="card-title">${cert.title}</h3>
        <p class="card-description">${cert.issuer} • ${cert.date}</p>
      </div>
    `;
    card.addEventListener('click', () => openLightbox(cert.image, cert.title));
    grid.appendChild(card);
  });
}

// Render scanned pages
function renderPages() {
  const grid = document.getElementById('pagesGrid');
  
  scannedPages.forEach(page => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.cursor = 'pointer';
    card.innerHTML = `
      <div class="card-image" style="height: 350px;">
        <img src="${page.image}" alt="${page.caption}">
        <div class="card-overlay">🔍</div>
      </div>
      <div class="card-content" style="padding: 1rem; text-align: center;">
        <h4 class="card-title" style="font-size: 1rem; margin: 0;">${page.caption}</h4>
      </div>
    `;
    card.addEventListener('click', () => openLightbox(page.image, page.caption));
    grid.appendChild(card);
  });
}

// Gallery filters
let currentFilter = 'all';

function renderFilters() {
  const filters = document.getElementById('filters');
  const categories = ['all', ...new Set(photos.map(p => p.category))];
  
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = `filter-btn ${cat === currentFilter ? 'active' : ''}`;
    btn.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    btn.addEventListener('click', () => {
      currentFilter = cat;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGallery();
    });
    filters.appendChild(btn);
  });
}

// Render gallery
function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = '';
  
  const filtered = currentFilter === 'all' ? photos : photos.filter(p => p.category === currentFilter);
  
  filtered.forEach(photo => {
    const item = document.createElement('div');
    item.className = 'masonry-item';
    item.innerHTML = `<img src="${photo.image}" alt="${photo.caption}">`;
    item.addEventListener('click', () => openLightbox(photo.image, photo.caption));
    grid.appendChild(item);
  });
}

// Lightbox functionality
function openLightbox(src, caption) {
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  const cap = document.getElementById('lightboxCaption');
  
  img.src = src;
  cap.textContent = caption;
  lightbox.classList.add('active');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
}

// Close lightbox on button click
document.getElementById('closeLightbox').addEventListener('click', closeLightbox);

// Close lightbox on background click
document.getElementById('lightbox').addEventListener('click', (e) => {
  if (e.target.id === 'lightbox') {
    closeLightbox();
  }
});

// Close lightbox on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', () => {
  createParticles();
  renderJournal();
  renderCertificates();
  renderPages();
  renderFilters();
  renderGallery();
});