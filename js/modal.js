/* ============================================================
   MODAL — Project & Certificate detail popups
   ============================================================ */

function openProjectModal(idx) {
  const p = projectData[idx];
  const techHtml = p.tech.map(t => `<span class="tech-badge">${t}</span>`).join('');
  const featHtml = p.features.map(f => `<li>${f}</li>`).join('');

  const liveBtn = p.liveUrl && p.liveUrl !== '#'
    ? `<a href="${p.liveUrl}" target="_blank" class="btn btn-secondary">
         <i class="fas fa-external-link-alt"></i> Live Demo
       </a>`
    : `<a href="#" class="btn btn-secondary"
         onclick="showToast('Live demo coming soon!'); return false;">
         <i class="fas fa-external-link-alt"></i> Live Demo
       </a>`;

  const ghBtn = p.githubUrl && p.githubUrl !== '#'
    ? `<a href="${p.githubUrl}" target="_blank" class="btn btn-primary">
         <i class="fab fa-github"></i> View Code
       </a>`
    : `<a href="#" class="btn btn-primary"
         onclick="showToast('GitHub link coming soon!'); return false;">
         <i class="fab fa-github"></i> View Code
       </a>`;

  document.getElementById('modal-content').innerHTML = `
    <div class="modal-banner ${p.bannerClass}">${p.emoji}</div>
    <div class="modal-title">${p.title}</div>
    <div class="modal-desc">${p.desc}</div>
    <div class="project-tech" style="margin-bottom:20px">${techHtml}</div>
    <div class="modal-features">
      <h4>Key Features</h4>
      <ul>${featHtml}</ul>
    </div>
    <div class="modal-links">${ghBtn}${liveBtn}</div>`;

  openModal();
}

function openCertModal(idx) {
  const c = certData[idx];
  const viewBtn = c.link && c.link !== '#'
    ? `<a href="${c.link}" target="_blank" class="btn btn-primary">
         <i class="fas fa-external-link-alt"></i> View Certificate
       </a>`
    : `<a href="#" class="btn btn-primary"
         onclick="showToast('Certificate link coming soon!'); return false;">
         <i class="fas fa-external-link-alt"></i> View Certificate
       </a>`;

  document.getElementById('modal-content').innerHTML = `
    <div class="modal-banner ${c.bgClass}">${c.emoji}</div>
    <div class="modal-title">${c.title}</div>
    <div style="color:var(--accent);font-weight:600;margin-bottom:8px">${c.org}</div>
    <div style="color:var(--text-muted);font-size:0.85rem;margin-bottom:24px">
      <i class="fas fa-calendar"></i> ${c.date}
    </div>
    <div class="modal-desc">
      This certification from <strong>${c.org}</strong> validates expertise in the
      relevant domain and reflects a commitment to continuous professional development.
    </div>
    <div class="modal-links">${viewBtn}</div>`;

  openModal();
}

function openModal() {
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-overlay').addEventListener('click', e => {
  if (e.target === document.getElementById('modal-overlay')) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});