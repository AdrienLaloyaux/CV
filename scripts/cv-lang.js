function setLanguage(lang) {
    const allLangs = ['fr', 'en'];
    document.documentElement.lang = lang;
    allLangs.forEach(l => {
        document.querySelectorAll('[lang="' + l + '"]').forEach(el => {
            el.style.display = (l === lang) ? '' : 'none';
        });
    });
} 