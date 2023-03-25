document.addEventListener('DOMContentLoaded', () => {
    const e = document.querySelector('.greeting')
    e.classList.remove('text-red')
    e.classList.add('text-green')
    e.innerHTML = 'JS was loaded successfully.';
})
