window.addEventListener('DOMContentLoaded', () => {
    const bubble = document.querySelector('.intro-bubble');
    if (localStorage.getItem('bubbleDismissed')) {
        bubble.style.display = 'none';
    } else {
        setTimeout(() => {
            bubble.style.display = 'none';
            localStorage.setItem('bubbleDismissed', 'true');
        }, 5000);
    }
});