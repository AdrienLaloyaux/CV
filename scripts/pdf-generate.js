function generatePDF() {
    console.log("?? D�but de la g�n�ration du PDF...");

    const element = document.getElementById('cvContent');
    if (!element) {
        console.error("? �l�ment avec l'ID 'cvContent' introuvable !");
        return;
    }

    const bgSectionsIds = ['experienceBg', 'educationBg', 'hobbiesBg'];
    const bgSections = bgSectionsIds.map(id => document.getElementById(id));
    const originalStyles = bgSections.map(el => el?.style.backgroundImage || '');

    bgSections.forEach(el => {
        if (el) el.style.backgroundImage = 'none';
    });

    html2pdf().set({
        margin: 0.5,
        filename: 'CV-Adrien-Laloyaux.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    })
        .from(element)
        .save()
        .then(() => {
            console.log("? PDF t�l�charg� avec succ�s !");
            bgSections.forEach((el, i) => {
                if (el) el.style.backgroundImage = originalStyles[i];
            });
        })
        .catch(function (err) {
            console.error("? Erreur lors de la g�n�ration du PDF :", err);
            bgSections.forEach((el, i) => {
                if (el) el.style.backgroundImage = originalStyles[i];
            });
        });
}