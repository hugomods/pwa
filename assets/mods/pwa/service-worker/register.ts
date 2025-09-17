if ('serviceWorker' in navigator) {
  window.addEventListener('DOMContentLoaded', function() {
    const idx = document.getElementById('service-worker-index');
    if (idx && idx.dataset.src) {
      navigator.serviceWorker.register(idx.dataset.src);
      idx.parentNode?.removeChild(idx);
    }
  });
}
