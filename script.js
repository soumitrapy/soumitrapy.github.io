// Add cool visual effects
// Example: animated background particles

document.addEventListener('DOMContentLoaded', () => {
  // Simple floating particles effect
  const effect = document.querySelector('.visual-effect');
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = '12px';
    particle.style.height = '12px';
    particle.style.borderRadius = '50%';
    particle.style.background = '#ffd700';
    particle.style.opacity = Math.random() * 0.7 + 0.3;
    particle.style.left = Math.random() * 95 + '%';
    particle.style.top = Math.random() * 90 + '%';
    particle.style.boxShadow = `0 0 16px #ffd700`;
    effect.appendChild(particle);
  }
});
