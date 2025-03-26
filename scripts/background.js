function applyRandomSectionBackground(sectionId, colors, lineCount = 25) {
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

window.onload = function () {
  applyRandomSectionBackground("experienceBg", ["#4A89DC", "#007BFF", "#5D9CEC"]);
  applyRandomSectionBackground("educationBg", ["#37BC9B", "#20C997", "#48CFAD"]);
  applyRandomSectionBackground("hobbiesBg", ["#FFA500", "#FF8C00", "#FFC107"]);
};
