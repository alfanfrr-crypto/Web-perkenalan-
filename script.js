function kirimPesan() {
  const nomorWA = "6287888702611"; // 
  const pesan = "Halo Alfan, aku sudah lihat website perkenalan kamu😊";

  const url = "https://wa.me/" + nomorWA + "?text=" + encodeURIComponent(pesan);
  window.open(url, "_blank");
}
document.addEventListener("DOMContentLoaded", function () {
  const emojis = ["✨", "💙", "😊", "🌸", "☁️", "⭐"];
  const container = document.getElementById("emoji-rain");

  if (!container) return;

  function createEmoji() {
    const emoji = document.createElement("div");
    emoji.className = "emoji";
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.animationDuration = 8 + Math.random() * 4 + "s";

    container.appendChild(emoji);

    setTimeout(() => {
      emoji.remove();
    }, 8000);
  }

  setInterval(createEmoji, 1500);
});