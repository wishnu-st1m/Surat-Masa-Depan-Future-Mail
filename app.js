document.getElementById('send').addEventListener('click', () => {
            const statusDiv = document.getElementById('status');
            statusDiv.textContent = 'Mengirim surat ke masa depan...';
            // Di sini nanti Anda akan menambahkan logika fetch/API call.
            setTimeout(() => {
                statusDiv.textContent = 'Surat berhasil dijadwalkan!';
            }, 1500);
        });

        document.addEventListener('DOMContentLoaded', () => {
    // Ambil elemen-elemen utama
    const profilePage = document.getElementById('profile-page');
    const futureMailApp = document.getElementById('future-mail-app');
    const profileIconBtn = document.getElementById('profile-icon-btn');
    const backToAppBtn = document.getElementById('back-to-app-btn');
});
