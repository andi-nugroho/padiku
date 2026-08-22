# 🌿 PANORA APP
## Climate-Smart RWA Agriculture Infrastructure
### Product Requirement Document

| Field | Detail |
|---|---|
| **Project Name** | Panora App — Climate-Smart RWA Agriculture Infrastructure |
| **Version** | 1.0 (Deep Detail & Logic Implementation) |
| **Status** | Active Draft |
| **Author** | Prasetio |
| **Last Updated** | April 2026 |

---

## 1. Arsitektur Produk & Logika Bagi Hasil

Sistem menggunakan **Waterfall Payment Logic** yang tertanam dalam Smart Contract Solana. Seluruh alur pendanaan, pencairan milestone, dan distribusi keuntungan dieksekusi secara on-chain untuk menjamin transparansi dan keamanan bagi semua pihak.

### 1.1 Skema Profit Split (Net Profit)

Setelah hasil panen dijual ke off-taker, pendapatan kotor (Gross Revenue) dikurangi Modal Awal (COGS/Principal). Sisa keuntungan (Net Profit) kemudian dibagi sesuai skema berikut:

| Penerima | Porsi (%) | Keterangan |
|---|---|---|
| Petani | 55% | Masuk ke yield-account petani; dapat dicairkan ke IDR. |
| Investor | 35% | Masuk ke claimable-vault staker secara proporsional. |
| Platform & Ekosistem | 10% | 4% Biaya Operasional Panora · 4% Insentif Ketua Kelompok Tani (Node Agent) · 2% Emergency Insurance Fund |

---

## 2. Fitur Utama (Functional Requirements)

### 2.1 Modul Pendanaan: "Panora Vaults"

Vault merupakan unit pendanaan berbasis smart contract yang dibuat untuk setiap musim tanam dan komoditas. Contoh identifier: `CHILI-GH-SUBANG-Q2-26`.

- **Vault Creation:** Kontrak pintar unik per musim tanam/komoditas.
- **Locking Period:** Dana dikunci selama masa tanam (90–110 hari).
- **Milestone-Based Disbursement:** Dana tidak dicairkan sekaligus, melainkan bertahap:
  - 40% — Pembangunan/persiapan Greenhouse & benih.
  - 30% — Pemeliharaan (pupuk/nutrisi) di tengah masa tanam.
  - 30% — Biaya panen & logistik.

### 2.2 Modul Lapangan: "Field Agent Interface"

Antarmuka khusus bagi Ketua Kelompok Tani (Node Agent) untuk mengelola aktivitas lapangan dan memenuhi syarat pencairan milestone dana.

- **Farmer Onboarding:** KYC sederhana untuk anggota kelompok tani.
- **IoT Dashboard:** Pemantauan sensor kelembapan dan suhu dalam Greenhouse secara real-time.
- **Proof-of-Activity (PoA):** Unggah foto lahan beserta aktivitas (tanam, pemupukan, panen) yang dilengkapi timestamp dan geotagging sebagai syarat pencairan milestone.

### 2.3 Modul RWA & Traceability: "NFT Commodity Passport"

Setiap batch hasil panen wajib di-minting sebagai **cNFT (Compressed NFT)** di blockchain Solana, berfungsi sebagai sertifikat digital komoditas yang dapat diverifikasi oleh siapapun.

- Metadata NFT mencakup: ID Petani, Lokasi Greenhouse, Jenis Benih, Rekam Data IoT, dan Tanggal Panen.
- **EUDR Compliance:** Fitur otomatis melampirkan koordinat poligon lahan guna memenuhi regulasi ekspor anti-deforestasi.

---

## 3. Strategi Produk Berdasarkan Media Tanam

Panora mengkategorikan komoditas ke dalam tiga segmen berdasarkan metode tanam, target pasar, dan model nilai yang ditawarkan kepada investor maupun off-taker.

| Kategori | Komoditas | Metode | Positioning & Nilai Jual |
|---|---|---|---|
| **High Value** | Cabai, Bawang, Tomat | Greenhouse (GH) | Supply stabil, bebas pestisida berlebih, minim risiko gagal panen. Cocok untuk pasar ritel modern & ketahanan pangan nasional. |
| **Export RWA** | Kopi, Kakao, Vanila | Open Field / Hybrid | Fokus pada traceability NFT. Menjual narasi "Sustainability" dan "Ethical Sourcing" ke trader mancanegara. |
| **Bulk Commodity** | Padi, Jagung | Open Field | Fokus pada volume masif. Penjaminan oleh off-taker (Bulog/Gudang) sebagai kolateral pembiayaan. |

---

## 4. Mitigasi Risiko (Operational & Technical)

### 4.1 Risiko "Petani Nakal" (Side-Selling)

Risiko side-selling — petani menjual hasil panen di luar ekosistem Panora — dimitigasi melalui dua mekanisme berlapis:

- **Social Collateral (Tanggung Renteng):** Jika satu petani dalam kelompok melakukan side-selling, seluruh kelompok tidak akan mendapatkan pendanaan pada musim berikutnya. Tekanan sosial menjadi penjamin utama.
- **Whitelisted Off-takers:** Pembayaran hanya sah jika berasal dari wallet off-taker yang telah terdaftar dan diverifikasi dalam sistem Panora. Smart contract otomatis menolak pembayaran dari sumber tidak dikenal.

### 4.2 Risiko Gagal Panen (Non-GH / Open Field)

Untuk komoditas open field yang rentan terhadap cuaca ekstrem, Panora mengintegrasikan mekanisme asuransi parametrik berbasis oracle:

- **Parametric Oracle:** Data cuaca real-time diintegrasikan ke blockchain. Jika curah hujan tercatat melebihi atau di bawah ambang batas normal, klaim asuransi dicairkan secara otomatis kepada Investor untuk melindungi modal pokok.

---

## 5. Alur Dana — User Journey (Investor)

Berikut adalah alur lengkap dari perspektif investor, mulai dari penyetoran dana hingga penerimaan keuntungan:

| Step | Fase | Deskripsi |
|---|---|---|
| 1 | **Staking** | Investor menaruh USDC ke dalam Vault (contoh: `CHILI-GH-SUBANG`). Smart contract mencetak Participation Token (PT) sebagai bukti kepemilikan proporsional. |
| 2 | **Activation** | Ketua Kelompok Tani memverifikasi lahan siap tanam melalui Field Agent Interface, disertai bukti foto dan data geotagging. |
| 3 | **Growth** | Investor memantau progres lahan secara real-time via foto Proof-of-Activity dan data sensor IoT di dalam aplikasi. |
| 4 | **Sales** | Panen selesai. Off-taker yang telah diwhitelist melakukan pembayaran langsung ke Smart Contract Panora. |
| 5 | **Claim** | Investor menerima kembali 100% modal pokok beserta 35% dari net profit, langsung ke wallet masing-masing. |

---

## 6. Modul Secondary Market (Liquidity Layer)

Secondary Market merupakan lapisan likuiditas yang memungkinkan investor untuk memperdagangkan hak kepemilikan vault sebelum masa panen berakhir, sehingga mengeliminasi risiko lock-in dana jangka panjang.

### 6.1 Konsep Teknis: Yield-Bearing Token Receipt

Saat investor menyetorkan dana ke dalam Vault, smart contract tidak hanya mengunci dana, tetapi juga mencetak (minting) **Participation Token (PT)** atau **Yield-NFT** sebagai bukti kepemilikan.

- **Fungsi:** Token merepresentasikan hak atas Modal Pokok + Estimasi Bagi Hasil di akhir musim tanam.
- **Standar Token:** Menggunakan SPL Token atau Metaplex Core di Solana agar dapat diperdagangkan secara instan.

### 6.2 Fitur Utama Secondary Market

- **Instant Listing:** Investor dapat memasang harga jual atas "hak panen" di pasar sekunder Panora kapan saja selama masa tanam.
- **Real-time Valuation (Oracle Based):** Harga dasar token bergerak mengikuti progres lahan. Semakin mendekati masa panen dengan data IoT yang sehat, semakin tinggi valuasi token di pasar sekunder karena risiko gagal panen mengecil.
- **Transfer of Rights:** Saat token berpindah tangan, smart contract secara otomatis mengalihkan distribusi profit (skema 35% investor) kepada pemegang token terakhir pada saat settlement.

### 6.3 Struktur Smart Contract — Secondary Market

| Komponen | Logika & Deskripsi |
|---|---|
| **Token Metadata** | Menyimpan progres lahan (contoh: `"Day 45 of 90"`) agar pembeli di pasar sekunder mengetahui status aset yang dibeli secara transparan. |
| **Price Floor Logic** | Mencegah penjualan di bawah harga modal (predatory pricing) untuk menjaga stabilitas dan kepercayaan ekosistem Panora. |
| **Royalty Split** | Setiap transaksi di pasar sekunder dikenakan royalti kecil (0.5%) yang dialokasikan ke Emergency Insurance Fund untuk perlindungan petani. |

### 6.4 Keuntungan Strategis

| Pihak | Manfaat |
|---|---|
| **Investor** | Menghilangkan risiko likuiditas. Investor dapat "exit" kapan saja tanpa harus menunggu masa panen selesai, sehingga lebih percaya diri menempatkan dana lebih besar. |
| **Platform** | Menciptakan volume transaksi tambahan. Setiap transaksi di Secondary Market dikenakan trading fee (±1%) yang masuk ke kas operasional Panora. |
| **Petani** | Tidak terganggu oleh pergantian pemilik modal. Aktivitas lapangan berjalan normal karena seluruh transfer hak terjadi di lapisan blockchain. |

---

## 7. Business Narrative: "Climate-Smart Agriculture" (CSA)

Panora tidak sekadar membangun aplikasi — Panora membangun **Infrastruktur Adaptasi Iklim** yang menggabungkan teknologi blockchain, IoT, dan model keuangan inklusif untuk ketahanan pangan nasional.

| Pilar | Peran dalam Ekosistem |
|---|---|
| 🌿 **Greenhouse** | Perlindungan fisik dari dampak perubahan iklim: suhu ekstrem, kekeringan, dan curah hujan tidak menentu. |
| ⛓️ **Blockchain** | Perlindungan finansial & transparansi data. Semua transaksi, pencairan, dan distribusi profit terjadi on-chain dan dapat diaudit siapa saja. |
| ⚖️ **55/35 Split** | Keadilan ekonomi untuk keberlanjutan sosial — model bagi hasil yang proporsional memastikan petani sejahtera sekaligus investor mendapat imbal hasil kompetitif. |

Dengan tiga pilar ini, Panora memposisikan diri bukan hanya sebagai platform investasi pertanian, tetapi sebagai **infrastruktur kritikal** yang menghubungkan petani Indonesia dengan pasar modal global secara adil, transparan, dan berkelanjutan.
