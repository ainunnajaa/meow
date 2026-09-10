// Fungsi untuk membuat efek hati berjatuhan di background
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '💖';

    // Posisi acak dari kiri ke kanan
    heart.style.left = Math.random() * 100 + 'vw';

    // Ukuran acak
    heart.style.fontSize = (Math.random() * 1.5 + 0.5) + 'rem';

    // Durasi animasi acak
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';

    const container = document.getElementById('hearts-container');
    if (container) {
        container.appendChild(heart);
    }

    // Hapus hati setelah animasi selesai
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Menjalankan fungsi setiap 300ms
setInterval(createHeart, 300);
