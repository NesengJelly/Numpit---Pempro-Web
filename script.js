document.getElementById('btnOrder').addEventListener('click', function() {
  const layananSelect = document.getElementById('layanan');
  const nama = document.getElementById('nama').value.trim();
  const lokasi = document.getElementById('lokasi').value.trim();
  const catatan = document.getElementById('catatan').value.trim();

  if (!nama || !lokasi || !catatan) {
    alert('Harap isi semua kolom form sebelum memesan!');
    return;
  }

  const jenisLayanan = layananSelect.options[layananSelect.selectedIndex].text;
  const noAdmin = '6281234567890'; // Ganti dengan nomor WhatsApp admin/runner

  const pesan = `Halo Numpit, saya mau pesan jasa titip:\n\n` +
                `*Nama:* ${nama}\n` +
                `*Lokasi:* ${lokasi}\n` +
                `*Layanan:* ${jenisLayanan}\n` +
                `*Detail Pesanan:* ${catatan}\n\n` +
                `Mohon dikonfirmasi ya, terima kasih!`;

  const urlWA = `https://wa.me/${noAdmin}?text=${encodeURIComponent(pesan)}`;
  window.open(urlWA, '_blank');
});