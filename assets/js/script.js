function sendToWhatsApp() {
  // Nomor WhatsApp tujuan (ganti dengan nomor Anda, pastikan format internasional tanpa + atau 00)
  const whatsappNumber = "6285721122232";

  // Ambil nilai dari input form
  const name = document.getElementById("inputName").value;
  const email = document.getElementById("inputEmail").value;
  const subject = document.getElementById("inputSubject").value;
  const message = document.getElementById("inputMessage").value;

  // Cek apakah semua field WAJIB sudah diisi
  if (!name || !email || !subject || !message) {
    alert("Mohon lengkapi semua bidang yang bertanda bintang (*).");
    return; // Hentikan proses jika ada field kosong
  }

  // Susun template pesan WhatsApp
  const whatsappMessage = `
Halo Irfan,
Saya *${name}* (${email}) ingin menghubungi Anda.

*Subjek:* ${subject}
*Pesan:* ${message}
    `.trim();

  // Encode pesan agar aman dikirim melalui URL
  const encodedMessage = encodeURIComponent(whatsappMessage);

  // Buat link WhatsApp
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  // Buka link di tab baru
  window.open(whatsappURL, "_blank");

  // Kosongkan formulir setelah pengiriman (opsional)
  document.getElementById("contactForm").reset();
}
