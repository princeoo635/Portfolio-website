/* ============================================================
   TYPING TEXT EFFECT — Hero section role cycling
   ============================================================ */

const roles   = ['Backend Developer', 'Full Stack Developer', 'MCA Graduate', 'API Architect', 'Problem Solver'];
let ri = 0, ci = 0, deleting = false;
const typedEl = document.getElementById('typed-text');

function typeLoop() {
  const word = roles[ri];

  if (!deleting) {
    typedEl.textContent = word.slice(0, ++ci);
    if (ci === word.length) {
      deleting = true;
      setTimeout(typeLoop, 2000);
      return;
    }
  } else {
    typedEl.textContent = word.slice(0, --ci);
    if (ci === 0) {
      deleting = false;
      ri = (ri + 1) % roles.length;
    }
  }

  setTimeout(typeLoop, deleting ? 60 : 110);
}

setTimeout(typeLoop, 1000);
