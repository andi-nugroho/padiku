Tolong buatkan implementasi arsitektur hibrida untuk project Next.js App Router UMKM PADIKU dengan ketentuan berikut:

1. **Pertahankan Homepage:** Biarkan section-section utama tetap ada di halaman utama (`src/app/page.tsx`) dengan ringkasan yang interaktif (seperti *Kenapa PADIKU*, *Proses Produksi*, cuplikan *Katalog Produk*, dan *Tanya Jawab*). Tambahkan *call-toaction button* di setiap ringkasan section yang mengarah ke halaman *routing* terpisah.
2. **Buat Halaman Routing Terpisah:**
   - Buat folder `src/app/katalog/page.tsx` untuk menampilkan halaman katalog produk UMKM secara lengkap (grid produk, kategori, dll).
   - Buat folder `src/app/tentang-kami/page.tsx` atau halaman *routing* pendukung lainnya jika diperlukan untuk ekspansi informasi.
3. **Navigasi & Header/Footer:** Pastikan menu navigasi di atas (*Navbar*) terhubung dengan benar, di mana sebagian menu melakukan *smooth scroll* ke section di homepage dan sebagian lagi (seperti Katalog Produk) mengarah langsung ke URL rute terpisah (`/katalog`).

Pastikan struktur komponen modular, menggunakan TypeScript yang bersih, tidak ada *broken link*, dan makes no mistakes!