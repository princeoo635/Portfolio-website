/* ============================================================
   FILTERS — Projects & Certificates category filtering
   ============================================================ */

function filterProjects(cat, btn) {
  document.querySelectorAll('#projects-grid .project-card').forEach(c => {
    const show = cat === 'all' || c.dataset.category === cat;
    c.style.display = show ? 'block' : 'none';
    c.style.animation = show ? 'fadeInUp 0.4s both' : '';
  });
  document.querySelectorAll('#projects .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function filterCerts(cat, btn) {
  document.querySelectorAll('#certs-grid .cert-card').forEach(c => {
    const show = cat === 'all' || c.dataset.certCat === cat;
    c.style.display = show ? 'block' : 'none';
  });
  document.querySelectorAll('#certificates .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}
