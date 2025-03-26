function downloadCorrectPDF() {
    const lang = document.documentElement.lang;
    const isDark = document.body.classList.contains('dark-mode');
    const theme = isDark ? 'd' : 'l';

    const fileName = `al-${lang}-${theme}.pdf`;
    const filePath = `images/pdf/${fileName}`;
    window.open(filePath, '_blank');
}