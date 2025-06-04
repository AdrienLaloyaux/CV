function applyRandomSectionBackground(sectionId, colors, lineCount = 55) {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = section.offsetWidth;
    canvas.height = section.offsetHeight;

    for (let i = 0; i < lineCount; i++) {
        const x1 = Math.random() * canvas.width;
        const y1 = Math.random() * canvas.height;
        const x2 = x1 + Math.random() * 500 - 250;
        const y2 = y1 + Math.random() * 500 - 250;

        ctx.strokeStyle = colors[Math.floor(Math.random() * colors.length)];
        ctx.globalAlpha = Math.random() * 0.4 + 0.3;
        ctx.lineWidth = Math.random() * 3 + 1;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }

    section.style.backgroundImage = `url(${canvas.toDataURL()})`;
    section.style.backgroundSize = 'cover';
    section.style.backgroundRepeat = 'no-repeat';
    section.style.backgroundPosition = 'center';
}

const sections = [
    { id: "experienceBg", colors: ["#4A89DC", "#007BFF", "#5D9CEC"] },
    { id: "educationBg", colors: ["#37BC9B", "#20C997", "#48CFAD"] },
    { id: "hobbiesBg", colors: ["#FFA500", "#FF8C00", "#FFC107"] },
    { id: "projectsBg", colors: ["#8A2BE2", "#9B30FF", "#A052D3", "#9370DB", "#BA55D3", "#DDA0DD"] },
    { id: "skillsBg", colors: ["#8A2BE2", "#9B30FF", "#A052D3"] }
];

function renderAllBackgrounds() {
    sections.forEach(({ id, colors }) => {
        applyRandomSectionBackground(id, colors);
    });
}

window.onload = renderAllBackgrounds;
