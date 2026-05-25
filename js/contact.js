/* ============================================================
   CONTACT FORM — Validation & Submit animation
   ============================================================ */

function submitForm() {
  const name    = document.getElementById('form-name').value.trim();
  const email   = document.getElementById('form-email').value.trim();
  const message = document.getElementById('form-message').value.trim();

  if (!name || !email || !message) {
    showToast('⚠️ Please fill all required fields');
    return;
  }

  const btn = document.querySelector('.form-submit');
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  btn.disabled = true;

  /* Simulate network request */
  setTimeout(() => {
    btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
    btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
    showToast('✅ Your message has been sent successfully!');

    /* Clear fields */
    document.getElementById('form-name').value    = '';
    document.getElementById('form-email').value   = '';
    document.getElementById('form-subject').value = '';
    document.getElementById('form-message').value = '';

    /* Reset button after delay */
    setTimeout(() => {
      btn.innerHTML    = '<i class="fas fa-paper-plane"></i> Send Message';
      btn.style.background = '';
      btn.disabled     = false;
    }, 3000);
  }, 1500);
}
