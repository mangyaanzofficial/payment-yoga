function copyToClipboard(text) {
  const tempInput = document.createElement("input");
  tempInput.style.position = "fixed";
  tempInput.style.opacity = 0;
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  try {
    document.execCommand("copy");
    showToast("✅ Nomor Dana berhasil disalin!");
  } catch (err) {
    showToast("❌ Gagal menyalin.");
  }
  document.body.removeChild(tempInput);
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

function downloadQRIS() {
  const link = document.createElement('a');
  link.href = 'https://files.catbox.moe/0qwo3e.jpg';
  link.download = 'QRIS-Payment.jpg';
  link.click();
}

window.addEventListener('click', () => {
  const music = document.getElementById('bg-music');
  if (music && music.paused) music.play();
});