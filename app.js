/* ============================================
   JasaKu — Main Application v2
   OTP Auth, Random Mitra Assignment, Smart Payment
   ============================================ */

// ---- CATEGORIES ----
const CATEGORIES = [
  // === JASA MAGER (Prioritas Utama) ===
  { id: 'bersih', name: 'Jasa Bersih', icon: '🧹', color: '#4cc9f0', desc: 'Bersih rumah, kantor, kos', basePrice: 50000 },
  { id: 'angkut', name: 'Jasa Angkut', icon: '🚛', color: '#118ab2', desc: 'Angkut barang, pindahan, buang sampah besar', basePrice: 100000 },
  { id: 'kirim-mobil', name: 'Kirim Barang (Mobil)', icon: '🚗', color: '#2d6a4f', desc: 'Kirim barang besar pakai mobil pick-up/box', basePrice: 75000 },
  { id: 'kirim-motor', name: 'Kirim Barang (Motor)', icon: '🏍️', color: '#3a0ca3', desc: 'Kirim barang kecil/dokumen pakai motor', basePrice: 15000 },
  { id: 'belanja', name: 'Jasa Belanja', icon: '🛒', color: '#f72585', desc: 'Belikan barang apapun', prepay: true, basePrice: 10000 },
  { id: 'antar', name: 'Jasa Antar Jemput', icon: '📦', color: '#4361ee', desc: 'Antar jemput barang/dokumen/orang', basePrice: 15000 },
  { id: 'cuci', name: 'Jasa Cuci', icon: '👕', color: '#457b9d', desc: 'Cuci baju, sepatu, helm, motor', basePrice: 20000 },
  { id: 'antri', name: 'Jasa Antri', icon: '🧍', color: '#06d6a0', desc: 'Antri di mana saja biar kamu rebahan', basePrice: 15000 },
  { id: 'suruh', name: 'Jasa Suruh', icon: '🏃', color: '#e76f51', desc: 'Disuruh apa aja bisa, tinggal rebahan!', basePrice: 10000 },
  { id: 'titip', name: 'Jasa Titip Beli', icon: '🛍️', color: '#f77f00', desc: 'Titip beli makanan/barang dari mana saja', prepay: true, basePrice: 10000 },
  // === JASA LAINNYA ===
  { id: 'masak', name: 'Jasa Masak', icon: '🍳', color: '#e63946', desc: 'Masak makanan pesanan di rumahmu', basePrice: 35000 },
  { id: 'perbaikan', name: 'Jasa Perbaikan', icon: '🔧', color: '#bc6c25', desc: 'Perbaiki AC, listrik, pipa, elektronik', basePrice: 75000 },
  { id: 'tukang', name: 'Jasa Tukang', icon: '🔨', color: '#8338ec', desc: 'Tukang bangunan, cat, las', basePrice: 75000 },
  { id: 'ketik', name: 'Jasa Ketik', icon: '⌨️', color: '#7209b7', desc: 'Ketik dokumen, skripsi, tugas', basePrice: 20000 },
  { id: 'fotokopi', name: 'Jasa Fotokopi', icon: '🖨️', color: '#9b5de5', desc: 'Print, fotokopi, scan', basePrice: 10000 },
  { id: 'desain', name: 'Jasa Desain', icon: '🎨', color: '#d62828', desc: 'Desain grafis & editing', basePrice: 50000 },
  { id: 'sopir', name: 'Jasa Sopir', icon: '🚕', color: '#00bbf9', desc: 'Sopir pribadi/rental', basePrice: 100000 },
  { id: 'tutor', name: 'Jasa Tutor', icon: '📚', color: '#264653', desc: 'Les privat & bimbingan', basePrice: 50000 },
  { id: 'foto', name: 'Jasa Foto', icon: '📸', color: '#e9c46a', desc: 'Fotografi & videografi', basePrice: 100000 },
  { id: 'lainnya', name: 'Jasa Lainnya', icon: '✨', color: '#4361ee', desc: 'Apa aja bisa disuruh!', basePrice: 10000 },
];

// Categories that require pre-payment (titip belikan)
const PREPAY_CATEGORIES = ['belanja', 'titip'];

// ---- TEST / SEED DATA ----
const SEED_USERS = [
  // === ADMIN ===
  { id: 'admin1', name: 'Admin JasaKu', role: 'admin', phone: '080000000000', email: 'admin@jasaku.com', avatar: '', isBanned: false },
  // === MITRA ===
  { id: 'mitra1', name: 'Andi Pratama', phone: '081200001111', role: 'mitra', city: 'Tuban', avatar: '', rating: 4.8, reviewCount: 124, bio: 'Siap disuruh apa aja! Pengalaman 3 tahun. Cepat, amanah, dan terpercaya.', skills: ['suruh', 'antar', 'belanja', 'antri', 'titip', 'kirim-motor'], isAvailable: true, completedJobs: 234, bankAccount: 'BCA 1234567890 a/n Andi Pratama' },
  { id: 'mitra2', name: 'Sari Dewi', phone: '081200002222', role: 'mitra', city: 'Tuban', avatar: '', rating: 4.9, reviewCount: 89, bio: 'Spesialis jasa ketik cepat & rapi. Skripsi, tugas, laporan, proposal. Bisa juga desain poster.', skills: ['ketik', 'fotokopi', 'desain'], isAvailable: true, completedJobs: 156, bankAccount: 'BNI 0987654321 a/n Sari Dewi' },
  { id: 'mitra3', name: 'Budi Santoso', phone: '081200003333', role: 'mitra', city: 'Tuban', avatar: '', rating: 4.7, reviewCount: 56, bio: 'Tukang bersih profesional. Rumah, kos, kantor jadi kinclong! Juga bantu angkut barang.', skills: ['bersih', 'cuci', 'angkut', 'tukang'], isAvailable: true, completedJobs: 98, bankAccount: 'BRI 1122334455 a/n Budi Santoso' },
  { id: 'mitra4', name: 'Rina Marlina', phone: '081200004444', role: 'mitra', city: 'Tuban', avatar: '', rating: 4.6, reviewCount: 43, bio: 'Jago masak berbagai masakan rumahan. Terima pesanan catering dan titip beli makanan.', skills: ['masak', 'belanja', 'titip'], isAvailable: true, completedJobs: 87, bankAccount: 'Mandiri 5566778899 a/n Rina Marlina' },
  { id: 'mitra5', name: 'Dimas Kurniawan', phone: '081200005555', role: 'mitra', city: 'Tuban', avatar: '', rating: 4.9, reviewCount: 201, bio: 'Servis lengkap! Antar jemput, kirim barang, angkut, sopir pribadi. Pengalaman 5 tahun.', skills: ['suruh', 'antar', 'belanja', 'antri', 'titip', 'sopir', 'kirim-mobil', 'kirim-motor', 'angkut'], isAvailable: true, completedJobs: 312, bankAccount: 'BCA 9988776655 a/n Dimas Kurniawan' },
  { id: 'mitra6', name: 'Putri Ayu', phone: '081200006666', role: 'mitra', city: 'Tuban', avatar: '', rating: 4.8, reviewCount: 67, bio: 'Jasa ketik express dan desain grafis. Bisa poster, banner, undangan. Juga terima foto produk.', skills: ['ketik', 'desain', 'fotokopi', 'foto'], isAvailable: false, completedJobs: 145, bankAccount: 'Dana 081200006666 a/n Putri Ayu' },
  // === PELANGGAN ===
  { id: 'plg1', name: 'Ahmad Rizky', phone: '082100001111', role: 'pelanggan', city: 'Tuban', avatar: '', rating: 0, reviewCount: 0 },
  { id: 'plg2', name: 'Fitri Handayani', phone: '082100002222', role: 'pelanggan', city: 'Tuban', avatar: '', rating: 0, reviewCount: 0 },
];

const SEED_ORDERS = [
  {
    id: 'ord001', pelangganId: 'plg1', mitraId: 'mitra1', category: 'suruh',
    title: 'Tolong ambilkan paket di JNE',
    description: 'Ambilkan paket saya di JNE Jl. Panglima Sudirman, nomor resi JT12345678. Antar ke rumah saya.',
    status: 'completed', address: 'Jl. Pemuda No. 12, Tuban', scheduledDate: '2026-07-05T10:00',
    serviceFee: 15000, itemCost: 0, totalPrice: 15000,
    paymentMethod: 'cash', paymentStatus: 'paid',
    createdAt: '2026-07-05T09:30:00', chat: [], hasReviewed: true
  },
  {
    id: 'ord002', pelangganId: 'plg1', mitraId: 'mitra2', category: 'ketik',
    title: 'Ketik skripsi BAB 3',
    description: 'Tolong ketikkan tulisan tangan BAB 3 skripsi saya. Kurang lebih 25 halaman. Format sesuai template kampus.',
    status: 'in_progress', address: 'Via online (kirim file)', scheduledDate: '2026-07-07T14:00',
    serviceFee: 125000, itemCost: 0, totalPrice: 125000,
    paymentMethod: 'transfer', paymentStatus: 'unpaid',
    createdAt: '2026-07-07T08:00:00', chat: [
      { senderId: 'plg1', text: 'Mbak Sari, saya kirim foto tulisan tangannya ya', time: '2026-07-07T08:05:00' },
      { senderId: 'mitra2', text: 'Siap kak, silakan kirim. Nanti saya kerjakan hari ini', time: '2026-07-07T08:07:00' },
    ], hasReviewed: false
  },
  {
    id: 'ord003', pelangganId: 'plg2', mitraId: 'mitra5', category: 'belanja',
    title: 'Belikan bahan masak di pasar',
    description: 'Tolong belikan: ayam 1kg, bawang merah 250gr, cabai rawit 100gr, tomat 500gr, minyak goreng 1L',
    status: 'accepted', address: 'Jl. Basuki Rahmat No. 5, Tuban', scheduledDate: '2026-07-07T08:00',
    serviceFee: 10000, itemCost: 75000, totalPrice: 85000,
    paymentMethod: 'transfer', paymentStatus: 'prepaid',
    createdAt: '2026-07-07T07:00:00', chat: [], hasReviewed: false
  }
];

const SEED_REVIEWS = [
  { id: 'r1', orderId: 'ord001', serviceCategory: 'suruh', mitraId: 'mitra1', userId: 'plg1', userName: 'Ahmad R.', rating: 5, text: 'Cepat banget! Paket diambil dalam 20 menit. Mantap!', date: '2026-07-05' },
  { id: 'r2', serviceCategory: 'suruh', mitraId: 'mitra1', userId: 'u2', userName: 'Fitri N.', rating: 5, text: 'Ramah dan bisa diandalkan. Sering pakai jasa ini buat antar dokumen.', date: '2026-06-28' },
  { id: 'r3', serviceCategory: 'ketik', mitraId: 'mitra2', userId: 'u3', userName: 'Rizky A.', rating: 5, text: 'Skripsi saya diketik rapi banget, sesuai format yang diminta. Recommended!', date: '2026-06-25' },
  { id: 'r4', serviceCategory: 'bersih', mitraId: 'mitra3', userId: 'u4', userName: 'Maya S.', rating: 4, text: 'Rumah jadi bersih kinclong. Pekerjaannya teliti dan rapi.', date: '2026-06-20' },
  { id: 'r5', serviceCategory: 'antar', mitraId: 'mitra5', userId: 'u5', userName: 'Hendra W.', rating: 5, text: 'Antar paket express, sampai dengan selamat. Pelayanan top!', date: '2026-07-03' },
  { id: 'r6', serviceCategory: 'antri', mitraId: 'mitra5', userId: 'u1', userName: 'Ahmad R.', rating: 5, text: 'Disuruh antriin di bank, saya tinggal kerja. Hemat waktu banget!', date: '2026-07-05' },
  { id: 'r7', serviceCategory: 'ketik', mitraId: 'mitra6', userId: 'u6', userName: 'Dewi L.', rating: 5, text: 'Ketik proposal 20 halaman cuma 2 jam. Hasilnya rapi sesuai template.', date: '2026-07-02' },
  { id: 'r8', serviceCategory: 'belanja', mitraId: 'mitra1', userId: 'u7', userName: 'Irfan M.', rating: 4, text: 'Belanjaannya sesuai list, nggak ada yang kelewat. Good job!', date: '2026-06-30' },
];

// ---- UTILITIES ----
function generateId() { return Date.now().toString(36) + Math.random().toString(36).substr(2, 9); }
function formatPrice(p) { return p === 0 ? 'Negosiasi' : 'Rp ' + p.toLocaleString('id-ID'); }
function formatDate(d) { return new Date(d).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }); }
function formatDateTime(d) { return new Date(d).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }); }
function getInitials(n) { return n.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2); }
function timeAgo(d) { const s = Math.floor((new Date() - new Date(d)) / 1000); if (s < 60) return 'Baru saja'; if (s < 3600) return Math.floor(s / 60) + 'm lalu'; if (s < 86400) return Math.floor(s / 3600) + 'j lalu'; return Math.floor(s / 86400) + 'h lalu'; }
function getCat(id) { return CATEGORIES.find(c => c.id === id); }
function isPrepay(catId) { return PREPAY_CATEGORIES.includes(catId); }

// ---- STATE ----
const S = {
  user: null, page: 'landing', prevPage: null,
  users: [], orders: [], reviews: [],
  // Auth flow state
  authStep: 'phone', // phone | otp | register
  authPhone: '', authRole: 'pelanggan', authOtp: '',
  authInitialized: false,
  // Mitra registration skills
  regSkills: [],

  init() {
    if (!window.firebaseDB) {
      setTimeout(() => this.init(), 100);
      return;
    }
    
    // Auth Listener
    window.fa.onAuthStateChanged(window.firebaseAuth, async (user) => {
      const isFirstLoad = !this.authInitialized;
      if (user) {
        const isPassword = user.providerData.some(p => p.providerId === 'password');
        if (isPassword && !user.emailVerified) {
          if (isFirstLoad) { this.authInitialized = true; R.init(); }
          return;
        }

        // Fetch user from db
        const docRef = window.fs.doc(window.firebaseDB, "users", user.uid);
        const docSnap = await window.fs.getDoc(docRef);
        if (docSnap.exists()) {
          const udata = docSnap.data();
          if (udata.isBanned) {
            toast('Akun Anda telah dinonaktifkan oleh Admin.', 'error');
            window.fa.signOut(window.firebaseAuth);
            if (isFirstLoad) { this.authInitialized = true; R.init(); }
            return;
          }
          this.user = udata;
          if (isFirstLoad) { this.authInitialized = true; R.init(); }
          else if (this.page === 'landing' || this.page === 'auth') R.go(this.user.role === 'admin' ? 'admin' : (this.user.role === 'mitra' ? 'mitra' : 'dashboard'));
        } else {
          // New user -> Registration
          this.authEmail = user.email || '';
          this.authUser = user;
          this.authStep = 'register';
          if (isFirstLoad) { this.authInitialized = true; R.init(); }
          else if (this.page !== 'auth') R.go('auth'); else render('auth');
        }
      } else {
        this.user = null;
        if (isFirstLoad) { this.authInitialized = true; R.init(); }
        else if (['dashboard', 'mitra', 'katalog', 'riwayat', 'profil', 'pesan', 'chat', 'detail-order', 'admin'].includes(this.page)) {
          R.go('landing');
        }
      }
    });

    // Listen to orders
    window.fs.onSnapshot(window.fs.collection(window.firebaseDB, "orders"), (snapshot) => {
      this.orders = snapshot.docs.map(doc => doc.data());
      if (['dashboard', 'mitra', 'riwayat'].includes(this.page)) render(this.page, {id: window.location.hash.split('/')[2]});
    });

    // Listen to users
    window.fs.onSnapshot(window.fs.collection(window.firebaseDB, "users"), (snapshot) => {
      this.users = snapshot.docs.map(doc => doc.data());
      if (this.users.length === 0) {
        SEED_USERS.forEach(su => window.fs.setDoc(window.fs.doc(window.firebaseDB, "users", su.id), su));
      } else {
        // update local user state if it changes remotely
        if (this.user) {
           const remoteUser = this.users.find(u => u.id === this.user.id);
           if (remoteUser) {
             if (remoteUser.isBanned) {
               toast('Akun Anda telah dinonaktifkan oleh Admin.', 'error');
               window.fa.signOut(window.firebaseAuth);
             } else {
               this.user = remoteUser;
             }
           }
        }
      }
      if (['katalog', 'mitra', 'profil', 'admin'].includes(this.page)) render(this.page, {id: window.location.hash.split('/')[2]});
    });
    
    // Listen to reviews
    window.fs.onSnapshot(window.fs.collection(window.firebaseDB, "reviews"), (snapshot) => {
      this.reviews = snapshot.docs.map(doc => doc.data());
    });
  },
  save() {
    // using firestore directly
  },
  login(u) { }, // managed by firestore
  logout() { }, // managed by firebase Auth
  getMitra(id) { return this.users.find(u => u.id === id); },
  getActiveMitraForSkill(skill) {
    return this.users.filter(u => {
      if (u.role !== 'mitra' || !u.isAvailable || u.isBanned || !u.skills || !u.skills.includes(skill)) return false;
      const isBusy = this.orders.some(o => o.mitraId === u.id && ['accepted', 'in_progress'].includes(o.status));
      return !isBusy;
    });
  },
  getRandomMitra(skill) {
    const available = this.getActiveMitraForSkill(skill);
    if (available.length === 0) return null;
    return available[Math.floor(Math.random() * available.length)];
  },
  getOrdersFor(uid) { return this.orders.filter(o => o.pelangganId === uid || o.mitraId === uid); },
  getReviewsForMitra(mid) { return this.reviews.filter(r => r.mitraId === mid); },
};

// ---- TOAST ----
function toast(msg, type = 'info') {
  const c = document.getElementById('toastContainer');
  const icons = { success: 'check_circle', error: 'error', info: 'info', warning: 'warning' };
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerHTML = `<span class="material-icons-round">${icons[type]}</span><span>${msg}</span>`;
  c.appendChild(t);
  setTimeout(() => { t.classList.add('toast-exit'); setTimeout(() => t.remove(), 300); }, 3000);
}

// ---- ROUTER ----
const R = {
  go(page, p = {}) {
    S.prevPage = S.page; 
    S.prevParam = S.currentParam || {};
    S.page = page; 
    S.currentParam = p;
    window.location.hash = `#/${page}${p.id ? '/' + p.id : ''}`;
    render(page, p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
  back() {
    if (S.prevPage) this.go(S.prevPage, S.prevParam);
    else this.go(S.user?.role === 'mitra' ? 'mitra' : 'dashboard');
  },
  init() {
    const h = window.location.hash.slice(2) || '';
    const [page, id] = h.split('/');
    if (S.user && ['landing', 'auth'].includes(page || 'landing')) {
      this.go(S.user.role === 'mitra' ? 'mitra' : 'dashboard'); return;
    }
    this.go(page || 'landing', { id });
  }
};

// ---- RENDER ----
function render(page, p = {}) {
  const app = document.getElementById('app');
  const nav = document.getElementById('bottomNav');
  const withNav = ['dashboard', 'mitra', 'katalog', 'riwayat', 'profil'];
  const guarded = ['dashboard', 'mitra', 'katalog', 'riwayat', 'profil', 'pesan', 'chat', 'detail-order', 'kelola-jasa', 'tambah-jasa', 'admin'];

  if (S.user && withNav.includes(page)) { nav.classList.remove('hidden'); updateNav(page); }
  else nav.classList.add('hidden');

  if (!S.authInitialized) {
    app.innerHTML = `<div style="height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center"><div class="assignment-spinner">🔄</div><p style="margin-top:16px;color:var(--text-tertiary)">Memuat...</p></div>`;
    return;
  }

  if (guarded.includes(page) && !S.user) { R.go('auth'); return; }
  if (page === 'admin' && S.user.role !== 'admin') { toast('Akses Ditolak', 'error'); R.go('landing'); return; }
  if (['katalog', 'pesan'].includes(page) && S.user && S.user.role === 'mitra') { toast('Mitra tidak dapat memesan jasa', 'warning'); R.go('mitra'); return; }

  const pages = {
    landing: renderLanding, auth: () => renderAuth(),
    dashboard: renderDashboard, mitra: renderMitraDashboard,
    katalog: () => renderKatalog(p), pesan: () => renderPesan(p.id),
    riwayat: renderRiwayat, profil: renderProfil,
    chat: () => renderChat(p.id), 'detail-order': () => renderDetailOrder(p.id),
    'kelola-jasa': renderKelolaJasa, 'tambah-jasa': renderTambahJasa,
    'mitra-profil': () => renderMitraProfil(p.id),
    admin: renderAdminDashboard,
  };

  app.innerHTML = `<div class="page-enter">${(pages[page] || renderLanding)()}</div>`;
  bindEvents(page, p);
}

function updateNav(page) {
  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.page === page || (page === 'mitra' && el.dataset.page === 'dashboard'));
  });
  const kat = document.getElementById('nav-katalog');
  if (kat) kat.style.display = (S.user && S.user.role === 'mitra') ? 'none' : 'flex';
}

// ---- HEADER ----
function hdr(title, back = false, right = '') {
  return `<header class="app-header">
    ${back ? `<button class="header-back" onclick="R.back()"><span class="material-icons-round">arrow_back</span></button>` : `<div class="header-logo"><img src="logo.png" alt="Logo" class="logo-img">JasaKu</div>`}
    ${title ? `<h1 class="header-title">${title}</h1>` : ''}
    <div class="header-actions">${right}
      <button class="theme-toggle" onclick="toggleTheme()"><span class="material-icons-round" id="themeIcon">${document.documentElement.dataset.theme === 'dark' ? 'light_mode' : 'dark_mode'}</span></button>
    </div>
  </header>`;
}

// ---- LANDING ----
function renderLanding() {
  return `${hdr()}
  <div class="launch-banner">
    <span class="material-icons-round" style="font-size:18px;margin-right:6px">place</span>
    Hadir Perdana di Tuban, Jawa Timur! Kota lainnya segera menyusul...
  </div>
  <main>
    <section class="hero">
      <div class="hero-content">
        <div class="hero-badge">🚀 #1 Platform Jasa Suruh</div>
        <h1>Butuh Bantuan?<br><span class="gradient-text">Suruh Aja!</span></h1>
        <p>Dari jasa ketik, belanja, antar barang, sampai hal simpel yang kamu butuhkan. Tinggal pesan, beres!</p>
        <div class="hero-actions">
          <button class="btn btn-primary btn-lg" onclick="S.authRole='pelanggan';R.go('auth')">
            <span class="material-icons-round">rocket_launch</span> Mulai Sekarang
          </button>
          <button class="btn btn-outline btn-lg" onclick="S.authRole='mitra';R.go('auth')">
            💼 Gabung Jadi Mitra
          </button>
        </div>
      </div>
    </section>

    <section class="how-it-works container">
      <div class="section-header" style="justify-content:center;margin-bottom:var(--space-xl)">
        <h2 class="section-title" style="font-size:var(--text-2xl);text-align:center">Cara Kerjanya Gampang Banget</h2>
      </div>
      <div class="steps-grid">
        <div class="step-card"><div class="step-number">1</div><h3>Pilih Jasa</h3><p>Pilih kategori jasa yang kamu butuhkan. Mau disuruh apa aja, ada!</p></div>
        <div class="step-card"><div class="step-number">2</div><h3>Mitra Datang</h3><p>Sistem otomatis carikan mitra terdekat yang online. Mereka konfirmasi dulu sebelum mulai.</p></div>
        <div class="step-card"><div class="step-number">3</div><h3>Selesai & Bayar</h3><p>Setelah jasa selesai, bayar tunai atau transfer. Gampang!</p></div>
      </div>
    </section>

    <section class="container" style="padding:var(--space-2xl) var(--space-md)">
      <div class="section-header"><h2 class="section-title">Kategori Jasa</h2></div>
      <div class="category-grid">
        ${CATEGORIES.slice(0, 8).map(c => `
          <div class="category-item" onclick="S.authRole='pelanggan';R.go('auth')">
            <div class="category-icon" style="background:${c.color}15">${c.icon}</div>
            <span class="category-name">${c.name}</span>
          </div>`).join('')}
      </div>
    </section>

    <section class="container" style="padding-bottom:var(--space-3xl)">
      <div class="section-header" style="justify-content:center;margin-bottom:var(--space-xl)">
        <h2 class="section-title" style="font-size:var(--text-2xl);text-align:center">Kata Mereka</h2>
      </div>
      <div class="marquee-container">
        <div class="marquee-track">
          ${[...SEED_REVIEWS, ...SEED_REVIEWS].map(r => `
            <div class="testimonial-card" style="min-width:300px; white-space:normal">
              <div class="review-stars">${'<span class="material-icons-round">star</span>'.repeat(r.rating)}</div>
              <p class="testimonial-text">"${r.text}"</p>
              <div class="testimonial-author">
                <div class="avatar avatar-sm">${getInitials(r.userName)}</div>
                <div><div class="testimonial-author-name">${r.userName}</div><div class="testimonial-author-role">Pelanggan JasaKu</div></div>
              </div>
            </div>`).join('')}
        </div>
      </div>
    </section>

    <section style="background:var(--gradient-hero);padding:var(--space-3xl) var(--space-md);text-align:center;color:white">
      <h2 style="font-family:var(--font-heading);font-weight:800;font-size:var(--text-3xl);margin-bottom:var(--space-md)">Mau Jadi Mitra & Dapat Penghasilan?</h2>
      <p style="opacity:0.9;max-width:400px;margin:0 auto var(--space-xl);font-size:var(--text-lg)">Daftar, pilih keahlianmu, dan mulai terima pesanan!</p>
      <button class="btn btn-lg" style="background:white;color:var(--primary-600);font-weight:700" onclick="S.authRole='mitra';R.go('auth')">
        <span class="material-icons-round">handshake</span> Daftar Jadi Mitra
      </button>
    </section>
  </main>`;
}

// ---- AUTH (OTP WhatsApp) ----
function renderAuth() {
  const step = S.authStep;
  const isMitra = S.authRole === 'mitra';
  const totalSteps = isMitra ? 4 : 3; // phone, otp, profile, [skills for mitra]

  const stepMap = {
    phone: 1, otp: 2, register: 3, skills: 4
  };
  const currentStep = stepMap[step] || 1;

  let stepDots = '';
  for (let i = 1; i <= totalSteps; i++) {
    const state = i < currentStep ? 'done' : (i === currentStep ? 'active' : '');
    stepDots += `<div class="step-progress-item">
      <div class="step-progress-dot ${state}">${i < currentStep ? '✓' : i}</div>
      ${i < totalSteps ? `<div class="step-progress-line ${i < currentStep ? 'done' : ''}"></div>` : ''}
    </div>`;
  }

  let content = '';
  if (step === 'phone') {
    content = renderAuthPhone();
  } else if (step === 'otp') {
    content = renderAuthOtp();
  } else if (step === 'register') {
    content = renderAuthRegister();
  } else if (step === 'skills') {
    content = renderAuthSkills();
  }

  return `${hdr('', false)}
  <div class="auth-page">
    <div class="auth-card">
      <div class="step-progress">${stepDots}</div>
      ${content}
      <div style="text-align:center;margin-top:var(--space-lg)">
        <button class="btn btn-ghost btn-sm" onclick="S.authStep='phone';R.go('${S.user ? (S.user.role === 'mitra' ? 'mitra' : 'dashboard') : 'landing'}')">
          <span class="material-icons-round">arrow_back</span> Kembali
        </button>
      </div>
    </div>
  </div>`;
}

function renderAuthPhone() {
  return `
    <div class="auth-header">
      <div style="font-size:48px;margin-bottom:var(--space-md)">🚀</div>
      <h1>Masuk / Daftar</h1>
      <p>Pilih peranmu dan masuk ke akunmu</p>
    </div>

    <div class="role-selector" id="roleSelector">
      <div class="role-option ${S.authRole === 'pelanggan' ? 'selected' : ''}" data-role="pelanggan" onclick="S.authRole='pelanggan';document.querySelectorAll('.role-option').forEach(e=>e.classList.remove('selected'));this.classList.add('selected')">
        <div class="role-icon">🛒</div><h3>Pelanggan</h3><p>Cari & pesan jasa</p>
      </div>
      <div class="role-option ${S.authRole === 'mitra' ? 'selected' : ''}" data-role="mitra" onclick="S.authRole='mitra';document.querySelectorAll('.role-option').forEach(e=>e.classList.remove('selected'));this.classList.add('selected')">
        <div class="role-icon">💼</div><h3>Mitra</h3><p>Tawarkan jasamu</p>
      </div>
    </div>

    <form onsubmit="event.preventDefault(); loginWithEmail();" style="margin-top:var(--space-xl)">
      <div class="form-group">
        <label class="form-label">Email</label>
        <div class="form-input-icon">
          <span class="material-icons-round input-icon">email</span>
          <input type="email" class="form-input" id="authEmailInput" placeholder="email@contoh.com" required>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Password</label>
        <div class="form-input-icon">
          <span class="material-icons-round input-icon">lock</span>
          <input type="password" class="form-input" id="authPasswordInput" placeholder="Min. 6 karakter" required minlength="6">
        </div>
      </div>
      <div style="display:flex;gap:12px;margin-top:var(--space-md)">
        <button type="submit" class="btn btn-primary" style="flex:1">
          <span class="material-icons-round">login</span> Masuk
        </button>
        <button type="button" class="btn btn-ghost" style="flex:1;background:var(--gray-100)" onclick="registerWithEmail()">
          <span class="material-icons-round">person_add</span> Daftar
        </button>
      </div>
      <div style="text-align:right; margin-top:8px">
        <a href="#" onclick="event.preventDefault(); handleForgotPassword()" style="font-size:12px;color:var(--primary-500);text-decoration:none;font-weight:600">Lupa Password?</a>
      </div>
    </form>
    
    <div style="text-align:center;margin:var(--space-lg) 0;color:var(--text-tertiary);font-size:var(--text-sm)">
      Atau gunakan cara lain
    </div>
    
    <button class="btn btn-block btn-lg" style="background:white;color:#333;border:1px solid #ddd;font-weight:600;display:flex;align-items:center;justify-content:center;gap:12px" onclick="loginWithGoogle()">
      <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" style="width:24px;height:24px"> Lanjutkan dengan Google
    </button>
  `;
}

function renderAuthOtp() { return ''; }

function renderAuthRegister() {
  return `
    <div class="auth-header">
      <div style="font-size:48px;margin-bottom:var(--space-md)">${S.authRole === 'mitra' ? '💼' : '🎉'}</div>
      <h1>Lengkapi Profil</h1>
      <p>Hanya butuh beberapa info untuk memulai</p>
    </div>

    <form id="regForm">
      <div class="form-group">
        <label class="form-label">Nama Lengkap</label>
        <div class="form-input-icon">
          <span class="material-icons-round input-icon">person</span>
          <input type="text" class="form-input" id="regName" placeholder="Nama lengkap kamu" required>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Nomor WhatsApp</label>
        <div class="form-input-icon">
          <span class="material-icons-round input-icon">phone</span>
          <input type="tel" class="form-input" id="regPhone" placeholder="Contoh: 081234567890" required>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Kota</label>
        <div class="form-input-icon">
          <span class="material-icons-round input-icon">location_on</span>
          <input type="text" class="form-input" id="regCity" placeholder="Contoh: Tuban" required>
        </div>
      </div>
      ${S.authRole === 'mitra' ? `
        <div class="form-group">
          <label class="form-label">Bio / Deskripsi Diri</label>
          <textarea class="form-textarea" id="regBio" placeholder="Ceritakan keahlianmu dan pengalamanmu..." required style="min-height:80px"></textarea>
        </div>
        <div class="form-group">
          <label class="form-label">Rekening / E-Wallet (untuk terima transfer)</label>
          <div class="form-input-icon">
            <span class="material-icons-round input-icon">account_balance</span>
            <input type="text" class="form-input" id="regBank" placeholder="BCA 1234567890 a/n Nama" required>
          </div>
        </div>
      ` : ''}
      <button type="submit" class="btn btn-primary btn-block btn-lg" style="margin-top:var(--space-md)">
        ${S.authRole === 'mitra' ? '<span class="material-icons-round">arrow_forward</span> Lanjut Pilih Keahlian' : '<span class="material-icons-round">check_circle</span> Daftar Sekarang'}
      </button>
    </form>`;
}

function renderAuthSkills() {
  return `
    <div class="auth-header">
      <div style="font-size:48px;margin-bottom:var(--space-md)">🛠️</div>
      <h1>Pilih Keahlianmu</h1>
      <p>Pilih kategori jasa yang bisa kamu kerjakan. Bisa pilih lebih dari satu!</p>
    </div>

    <div class="skill-selector" id="skillSelector">
      ${CATEGORIES.filter(c => c.id !== 'lainnya').map(c => `
        <div class="skill-option ${S.regSkills.includes(c.id) ? 'selected' : ''}" data-skill="${c.id}" onclick="toggleSkill('${c.id}')">
          <span class="skill-emoji">${c.icon}</span>
          <span class="skill-name">${c.name.replace('Jasa ', '')}</span>
        </div>
      `).join('')}
    </div>

    <div style="text-align:center;margin-bottom:var(--space-md);font-size:var(--text-sm);color:var(--text-tertiary)">
      ${S.regSkills.length} keahlian dipilih
    </div>

    <button class="btn btn-primary btn-block btn-lg" onclick="completeRegistration()">
      <span class="material-icons-round">check_circle</span> Selesai & Mulai
    </button>`;
}

// ---- DASHBOARD PELANGGAN ----
function renderDashboard() {
  const u = S.user;
  const active = S.orders.filter(o => o.pelangganId === u.id && !['completed', 'cancelled'].includes(o.status));

  return `${hdr()}
  <div class="container">
    <div class="dashboard-greeting">
      <h1>Halo, ${u.name.split(' ')[0]}! 👋</h1>
      <p>Mau disuruh apa hari ini?</p>
    </div>

    <div class="search-bar">
      <span class="material-icons-round search-icon">search</span>
      <input type="text" placeholder="Cari jasa... ketik, antar, belanja..." id="dashSearch">
    </div>

    ${active.length > 0 ? active.map(o => `
      <div class="active-order-banner" onclick="R.go('detail-order',{id:'${o.id}'})">
        <span class="material-icons-round" style="font-size:32px">pending_actions</span>
        <div class="order-info"><h4>Pesanan Aktif</h4><p>${o.title} — ${statusLabel(o.status)}</p></div>
        <span class="material-icons-round">chevron_right</span>
      </div>
    `).join('') : ''}

    <div class="section-header"><h2 class="section-title">Pilih Jasa</h2><button class="section-link" onclick="R.go('katalog')">Semua</button></div>
    <div class="category-grid">
      ${CATEGORIES.slice(0, 8).map(c => `
        <div class="category-item" onclick="R.go('pesan',{id:'${c.id}'})">
          <div class="category-icon" style="background:${c.color}15">${c.icon}</div>
          <span class="category-name">${c.name}</span>
        </div>`).join('')}
    </div>

    <div class="section-header"><h2 class="section-title">Kategori Lainnya</h2></div>
    <div class="category-grid" style="margin-bottom:var(--space-xl)">
      ${CATEGORIES.slice(8).map(c => `
        <div class="category-item" onclick="R.go('pesan',{id:'${c.id}'})">
          <div class="category-icon" style="background:${c.color}15">${c.icon}</div>
          <span class="category-name">${c.name}</span>
        </div>`).join('')}
    </div>

    <div class="section-header"><h2 class="section-title">⭐ Mitra Terbaik</h2></div>
    <div style="margin-bottom:var(--space-xl)">
      ${S.users.filter(u => u.role === 'mitra' && u.isAvailable && !u.isBanned).sort((a, b) => b.rating - a.rating).slice(0, 4).map(m => renderMitraCard(m)).join('')}
    </div>
  </div>`;
}

// ---- MITRA DASHBOARD ----
function renderMitraDashboard() {
  const u = S.user;
  const myOrders = S.orders.filter(o => o.mitraId === u.id);
  const pending = myOrders.filter(o => o.status === 'pending');
  const active = myOrders.filter(o => ['accepted', 'in_progress'].includes(o.status));
  const done = myOrders.filter(o => o.status === 'completed');
  const earnings = done.reduce((s, o) => s + (o.serviceFee || o.totalPrice || 0), 0);

  return `${hdr()}
  <div class="container">
    <div class="dashboard-greeting"><h1>Halo, ${u.name.split(' ')[0]}! 💼</h1><p>Dashboard Mitra</p></div>

    <div class="mitra-status-bar">
      <div class="mitra-status-text">
        <strong><span class="status-indicator ${u.isAvailable ? 'online' : 'offline'}"></span>
        ${u.isAvailable ? 'Online — Siap Terima Pesanan' : 'Offline — Tidak Menerima'}</strong>
        <span>Toggle untuk ubah status</span>
      </div>
      <label class="toggle-switch"><input type="checkbox" id="mitraToggle" ${u.isAvailable ? 'checked' : ''}><span class="toggle-slider"></span></label>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon" style="background:rgba(67,97,238,0.1);color:var(--primary-500)"><span class="material-icons-round">payments</span></div>
        <div class="stat-value" style="font-size:var(--text-lg)">${formatPrice(earnings)}</div>
        <div class="stat-label">Pendapatan</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon" style="background:rgba(16,185,129,0.1);color:var(--success-500)"><span class="material-icons-round">check_circle</span></div>
        <div class="stat-value">${done.length}</div><div class="stat-label">Selesai</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon" style="background:rgba(245,158,11,0.1);color:var(--warning-500)"><span class="material-icons-round">star</span></div>
        <div class="stat-value">${u.rating || '0'}</div><div class="stat-label">Rating</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon" style="background:rgba(247,37,133,0.1);color:var(--accent-400)"><span class="material-icons-round">home_repair_service</span></div>
        <div class="stat-value">${(u.skills || []).length}</div><div class="stat-label">Keahlian</div>
      </div>
    </div>

    <div style="margin-bottom:var(--space-lg)">
      <label class="form-label">Keahlian Kamu:</label>
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:var(--space-xs)">
        ${(u.skills || []).map(sk => { const c = getCat(sk); return c ? `<span class="chip selected">${c.icon} ${c.name.replace('Jasa ','')}</span>` : ''; }).join('')}
      </div>
    </div>

    ${pending.length > 0 ? `
      <div class="section-header"><h2 class="section-title">📥 Pesanan Masuk</h2><span class="badge badge-accent">${pending.length} baru</span></div>
      ${pending.map(o => renderMitraOrderCard(o)).join('')}
    ` : ''}

    ${active.length > 0 ? `
      <div class="section-header"><h2 class="section-title">🔄 Sedang Dikerjakan</h2></div>
      ${active.map(o => renderMitraOrderCard(o)).join('')}
    ` : ''}

    ${pending.length === 0 && active.length === 0 ? `
      <div class="empty-state">
        <div class="empty-icon">📭</div><h3>Belum Ada Pesanan</h3>
        <p>Pastikan statusmu <strong>Online</strong> supaya bisa terima pesanan!</p>
      </div>
    ` : ''}
  </div>`;
}

// ---- KATALOG ----
function renderKatalog(p = {}) {
  const cat = p.id || 'semua';
  return `${hdr('Katalog Jasa')}
  <div class="container" style="padding-top:var(--space-md)">
    <div class="filter-pills">
      <button class="filter-pill ${cat === 'semua' ? 'active' : ''}" onclick="R.go('katalog',{id:'semua'})">Semua</button>
      ${CATEGORIES.map(c => `
        <button class="filter-pill ${cat === c.id ? 'active' : ''}" onclick="R.go('katalog',{id:'${c.id}'})">${c.icon} ${c.name.replace('Jasa ','')}</button>
      `).join('')}
    </div>

    <div class="section-header"><h2 class="section-title">Pesan Langsung</h2></div>
    <div class="category-grid" style="margin-bottom:var(--space-xl)">
      ${(cat === 'semua' ? CATEGORIES : CATEGORIES.filter(c => c.id === cat)).map(c => {
        const available = S.getActiveMitraForSkill(c.id).length;
        return `<div class="category-item" onclick="R.go('pesan',{id:'${c.id}'})">
          <div class="category-icon" style="background:${c.color}15">${c.icon}</div>
          <span class="category-name">${c.name}</span>
          <span style="font-size:10px;color:${available > 0 ? 'var(--success-500)' : 'var(--danger-500)'}">${available} mitra online</span>
        </div>`;
      }).join('')}
    </div>

    <div class="section-header"><h2 class="section-title">Mitra Online</h2></div>
    ${S.users.filter(u => u.role === 'mitra' && u.isAvailable && !u.isBanned && (cat === 'semua' || (u.skills && u.skills.includes(cat)))).map(m => renderMitraCard(m)).join('') || '<div class="empty-state"><div class="empty-icon">😴</div><h3>Tidak Ada Mitra Online</h3><p>Coba lagi nanti</p></div>'}
  </div>`;
}

// ---- FORM PESAN (Random Assignment) ----
function renderPesan(catId) {
  const cat = getCat(catId) || CATEGORIES[CATEGORIES.length - 1];
  const availableCount = S.getActiveMitraForSkill(cat.id).length;

  return `${hdr('Pesan ' + cat.name, true)}
  <div class="container" style="padding-top:var(--space-md)">
    <div class="card" style="margin-bottom:var(--space-lg);cursor:default">
      <div class="card-body" style="display:flex;align-items:center;gap:var(--space-md)">
        <div style="font-size:40px;width:56px;height:56px;border-radius:var(--radius-lg);display:flex;align-items:center;justify-content:center;background:${cat.color}15">${cat.icon}</div>
        <div style="flex:1">
          <div style="font-weight:700;font-size:var(--text-lg)">${cat.name}</div>
          <div style="font-size:var(--text-xs);color:var(--text-tertiary)">${cat.desc}</div>
          <div style="font-size:var(--text-xs);color:${availableCount > 0 ? 'var(--success-500)' : 'var(--danger-500)'};margin-top:4px">
            <span class="status-indicator ${availableCount > 0 ? 'online' : 'offline'}"></span>
            ${availableCount} mitra online
          </div>
        </div>
      </div>
    </div>

    <form id="orderForm">
      <div class="form-group">
        <label class="form-label">Judul Tugas</label>
        <input type="text" class="form-input" id="orderTitle" placeholder="Contoh: Belikan makan siang, Ketik skripsi BAB 2..." required>
      </div>

      <div class="form-group">
        <label class="form-label">Detail Tugas / Permintaan</label>
        <textarea class="form-textarea" id="orderDesc" placeholder="Jelaskan detail lengkap tugas yang kamu minta..." required style="min-height:120px"></textarea>
      </div>

      <div class="form-group">
        <label class="form-label">Alamat / Lokasi Tujuan</label>
        <div class="form-input-icon">
          <span class="material-icons-round input-icon">location_on</span>
          <input type="text" class="form-input" id="orderAddr" placeholder="Alamat lengkap tujuan" required>
        </div>
        <div id="pickerMap" style="height:200px;width:100%;border-radius:var(--radius-md);margin-top:8px;z-index:1"></div>
        <div style="margin-top:8px;display:flex;gap:8px">
          <input type="hidden" id="orderCoords" value="">
          <button type="button" class="btn btn-outline" style="flex:1;font-size:13px;padding:8px" onclick="getLocation(this)">
            <span class="material-icons-round" style="font-size:16px;margin-right:4px">my_location</span> Deteksi GPS
          </button>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Kapan Dibutuhkan?</label>
        <div class="form-input-icon">
          <span class="material-icons-round input-icon">event</span>
          <input type="datetime-local" class="form-input" id="orderDate" required>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Biaya Jasa (Sesuai Standar Kategori)</label>
        <div id="feeOptions">
          <div class="payment-option selected" onclick="selectFee(this, ${cat.basePrice})">
            <div class="payment-icon">🏷️</div>
            <div><div class="payment-label">Standar</div><div class="payment-desc">${formatPrice(cat.basePrice)}</div></div>
            <div class="payment-check"><span class="material-icons-round" style="font-size:16px">check</span></div>
          </div>
          <div class="payment-option" onclick="selectFee(this, ${cat.basePrice + 10000})">
            <div class="payment-icon">⚡</div>
            <div><div class="payment-label">Prioritas (Lebih Cepat)</div><div class="payment-desc">${formatPrice(cat.basePrice + 10000)}</div></div>
            <div class="payment-check"><span class="material-icons-round" style="font-size:16px">check</span></div>
          </div>
          <div class="payment-option" onclick="selectFeeCustom(this)">
            <div class="payment-icon">💰</div>
            <div style="flex:1"><div class="payment-label">Beri Harga Lebih (Tips)</div>
              <input type="number" id="orderFeeCustom" class="form-input" style="padding:4px 8px;margin-top:4px;display:none" placeholder="Minimal ${cat.basePrice}" min="${cat.basePrice}">
            </div>
            <div class="payment-check"><span class="material-icons-round" style="font-size:16px">check</span></div>
          </div>
        </div>
        <input type="hidden" id="orderFee" value="${cat.basePrice}">
      </div>

      <div class="form-group">
        <label class="form-label">Metode Pembayaran (Setelah Selesai)</label>
        <div id="paymentOptions">
          <div class="payment-option selected" onclick="selectPayment('cash')">
            <div class="payment-icon">💵</div>
            <div><div class="payment-label">Bayar Tunai</div><div class="payment-desc">Bayar ke mitra setelah jasa selesai</div></div>
            <div class="payment-check"><span class="material-icons-round" style="font-size:16px">check</span></div>
          </div>
          <div class="payment-option" onclick="selectPayment('transfer')">
            <div class="payment-icon">🏦</div>
            <div><div class="payment-label">Transfer Bank / E-Wallet</div><div class="payment-desc">Transfer ke rekening mitra setelah selesai</div></div>
            <div class="payment-check"><span class="material-icons-round" style="font-size:16px">check</span></div>
          </div>
        </div>
        <input type="hidden" id="orderPayment" value="cash">
      </div>

      <div class="card-glass" style="padding:var(--space-md);margin:var(--space-md) 0">
        <h4 style="font-weight:600;margin-bottom:var(--space-sm)">Sistem Pencocokan Mitra</h4>
        <p style="font-size:var(--text-sm);color:var(--text-secondary);line-height:1.6">
          Setelah kamu kirim pesanan, sistem akan <strong>otomatis memilih mitra</strong> yang sedang online dan ahli di bidang ini.
          Mitra harus <strong>konfirmasi dulu</strong> sebelum mulai mengerjakan. Kamu juga bisa hubungi mitra via WhatsApp.
        </p>
      </div>

      <button type="submit" class="btn btn-primary btn-block btn-lg" style="margin:var(--space-lg) 0 var(--space-xl)">
        <span class="material-icons-round">send</span> Kirim Pesanan
      </button>
    </form>
  </div>`;
}

// ---- RIWAYAT ----
function renderRiwayat() {
  const orders = S.getOrdersFor(S.user.id);
  const isMitra = S.user.role === 'mitra';
  const activeO = orders.filter(o => ['pending', 'accepted', 'in_progress'].includes(o.status));
  const doneO = orders.filter(o => o.status === 'completed');
  const cancelO = orders.filter(o => o.status === 'cancelled');

  return `${hdr('Pesanan')}
  <div class="container" style="padding-top:var(--space-md)">
    <div class="tabs" id="orderTabs">
      <button class="tab active" data-tab="aktif" onclick="switchTab('aktif')">Aktif (${activeO.length})</button>
      <button class="tab" data-tab="selesai" onclick="switchTab('selesai')">Selesai (${doneO.length})</button>
      <button class="tab" data-tab="batal" onclick="switchTab('batal')">Batal (${cancelO.length})</button>
    </div>
    <div id="tab-aktif">${activeO.length > 0 ? activeO.map(o => isMitra ? renderMitraOrderCard(o) : renderOrderCard(o)).join('') : emptyState('📋', 'Tidak Ada Pesanan Aktif', 'Pesanan aktif akan muncul di sini')}</div>
    <div id="tab-selesai" style="display:none">${doneO.length > 0 ? doneO.map(o => isMitra ? renderMitraOrderCard(o) : renderOrderCard(o)).join('') : emptyState('✅', 'Belum Ada Selesai', '')}</div>
    <div id="tab-batal" style="display:none">${cancelO.length > 0 ? cancelO.map(o => isMitra ? renderMitraOrderCard(o) : renderOrderCard(o)).join('') : emptyState('🚫', 'Tidak Ada Dibatalkan', '')}</div>
  </div>`;
}

// ---- DETAIL ORDER ----
function renderDetailOrder(id) {
  const o = S.orders.find(x => x.id === id);
  if (!o) return notFound();
  const isMitra = S.user.role === 'mitra';
  const other = isMitra ? S.users.find(u => u.id === o.pelangganId) : S.getMitra(o.mitraId);
  const cat = getCat(o.category);
  const statuses = ['pending', 'accepted', 'in_progress', 'completed'];
  const labels = ['Menunggu', 'Diterima', 'Dikerjakan', 'Selesai'];

  return `${hdr('Detail Pesanan', true)}
  <div class="container" style="padding-top:var(--space-md)">
    <div class="card" style="margin-bottom:var(--space-lg);cursor:default">
      <div class="card-body">
        <div class="order-card-header">
          <span class="order-card-id">#${o.id.slice(-6).toUpperCase()}</span>
          ${statusBadge(o.status)}
        </div>
        <div style="display:flex;align-items:center;gap:var(--space-sm);margin:var(--space-sm) 0">
          <span style="font-size:24px">${cat ? cat.icon : '✨'}</span>
          <span class="badge badge-primary">${cat ? cat.name : 'Jasa'}</span>
        </div>
        <h3 class="order-card-title">${o.title}</h3>
        <p class="order-card-detail">${o.description || ''}</p>
      </div>
    </div>

    <h3 style="font-family:var(--font-heading);font-weight:700;margin-bottom:var(--space-md)">Status</h3>
    <div class="status-tracker" style="margin-bottom:var(--space-lg)">
      ${statuses.map((s, i) => {
        const ci = statuses.indexOf(o.status === 'cancelled' ? 'pending' : o.status);
        const state = o.status === 'cancelled' ? '' : (i < ci ? 'completed' : (i === ci ? 'active' : ''));
        return `<div class="status-step ${state}"><div class="status-dot"><span class="material-icons-round">check</span></div><span class="status-label">${labels[i]}</span></div>`;
      }).join('')}
    </div>

    ${o.startedAt ? `
      <div class="card" style="margin-bottom:var(--space-lg);cursor:default;background:var(--bg-glass-strong)">
        <div class="card-body" style="text-align:center">
          <div style="font-size:var(--text-xs);color:var(--text-tertiary);margin-bottom:4px">Waktu Pengerjaan</div>
          <div id="liveTimer" style="font-family:monospace;font-size:24px;font-weight:700;color:var(--primary-600)">--:--:--</div>
        </div>
      </div>
    ` : ''}

    ${['accepted', 'in_progress'].includes(o.status) ? `<div id="liveMap"></div>` : ''}

    ${o.status === 'cancelled' ? '<div style="text-align:center;padding:var(--space-md);background:rgba(239,68,68,0.08);border-radius:var(--radius-lg);margin-bottom:var(--space-lg)"><span style="font-size:32px">❌</span><p style="font-weight:600;color:var(--danger-500)">Pesanan Dibatalkan</p></div>' : ''}

    ${other ? `
      <div class="card" style="margin-bottom:var(--space-lg);cursor:default">
        <div class="card-body" style="display:flex;align-items:center;gap:var(--space-md)">
          <div class="avatar">${getInitials(other.name)}</div>
          <div style="flex:1">
            <div style="font-weight:600">${other.name}</div>
            <div style="font-size:var(--text-xs);color:var(--text-tertiary)">${isMitra ? 'Pelanggan' : 'Mitra'} · ${other.phone || ''}</div>
          </div>
          <div style="display:flex;gap:var(--space-xs)">
            <button class="btn btn-sm btn-secondary" onclick="R.go('chat',{id:'${o.id}'})"><span class="material-icons-round" style="font-size:18px">chat</span></button>
            <a href="https://wa.me/62${(other.phone||'').replace(/^0/,'')}" target="_blank" class="btn btn-sm btn-whatsapp-outline" style="padding:8px"><span class="material-icons-round" style="font-size:18px">open_in_new</span></a>
          </div>
        </div>
      </div>
    ` : ''}

    <div class="card" style="cursor:default;margin-bottom:var(--space-lg)">
      <div class="card-body">
        <h4 style="font-weight:600;margin-bottom:var(--space-sm)">Detail Pesanan</h4>
        ${detailRow('Alamat', o.address || '-')}
        ${detailRow('Jadwal', o.scheduledDate ? formatDateTime(o.scheduledDate) : '-')}
        ${detailRow('Dibuat', formatDateTime(o.createdAt))}
        <div class="divider" style="margin:var(--space-sm) 0"></div>
        <h4 style="font-weight:600;margin-bottom:var(--space-sm)">Pembayaran</h4>
        ${detailRow('Metode', o.paymentMethod === 'cash' ? '💵 Tunai' : '🏦 Transfer')}
        ${detailRow('Status Bayar', paymentStatusLabel(o.paymentStatus))}
        ${detailRow('Biaya Jasa', formatPrice(o.serviceFee || 0))}
        <div class="divider" style="margin:var(--space-sm) 0"></div>
        <div style="display:flex;justify-content:space-between">
          <span style="font-weight:700;font-size:var(--text-lg)">Total</span>
          <span class="price-tag" style="font-size:var(--text-xl)">${formatPrice(o.totalPrice)}</span>
        </div>
        ${!isMitra && other && o.paymentMethod === 'transfer' && o.paymentStatus !== 'paid' ? `
          <div style="margin-top:var(--space-md);padding:var(--space-md);background:var(--bg-tertiary);border-radius:var(--radius-md)">
            <p style="font-size:var(--text-sm);font-weight:600;margin-bottom:4px">Transfer ke:</p>
            <p style="font-size:var(--text-sm);color:var(--text-secondary)">${other.bankAccount || 'Rekening belum diatur'}</p>
          </div>
        ` : ''}
      </div>
    </div>

    ${renderOrderActions(o, isMitra)}

    ${o.status === 'completed' && !isMitra && !o.hasReviewed ? renderReviewForm(o.id) : ''}
  </div>`;
}

function renderOrderActions(o, isMitra) {
  if (o.status === 'completed' || o.status === 'cancelled') return '';
  let btns = '';
  if (isMitra && o.status === 'pending') {
    btns = `<div style="display:flex;flex-direction:column;gap:12px">
      <button class="btn btn-success btn-block" onclick="updateOrder('${o.id}','accepted')"><span class="material-icons-round">check</span> Terima Pesanan</button>
      <button class="btn btn-danger btn-block" onclick="updateOrder('${o.id}','cancelled')"><span class="material-icons-round">close</span> Tolak</button>
    </div>`;
  } else if (isMitra && o.status === 'accepted') {
    btns = `<button class="btn btn-primary btn-block" onclick="updateOrder('${o.id}','in_progress')"><span class="material-icons-round">play_arrow</span> Mulai Kerjakan</button>`;
  } else if (isMitra && o.status === 'in_progress') {
    btns = `<button class="btn btn-success btn-block" onclick="updateOrder('${o.id}','completed')"><span class="material-icons-round">check_circle</span> Selesaikan & Minta Bayar</button>`;
  } else if (!isMitra && o.status === 'pending') {
    btns = `<button class="btn btn-danger btn-block" onclick="updateOrder('${o.id}','cancelled')"><span class="material-icons-round">close</span> Batalkan Pesanan</button>`;
  } else if (!isMitra && o.status === 'completed') {
    btns = '';
  }
  if (!isMitra && ['accepted', 'in_progress', 'completed'].includes(o.status) && o.paymentStatus !== 'paid') {
    btns += `<button class="btn btn-primary btn-block" onclick="confirmPayment('${o.id}')"><span class="material-icons-round">payments</span> Konfirmasi Sudah Bayar</button>`;
  }
  return btns ? `<div style="display:flex;flex-direction:column;gap:var(--space-sm);margin-bottom:var(--space-xl)">${btns}</div>` : '';
}

function renderReviewForm(orderId) {
  return `
    <div class="card" style="cursor:default;margin-bottom:var(--space-xl)">
      <div class="card-body">
        <h4 style="font-weight:600;margin-bottom:var(--space-md);text-align:center">Beri Rating & Ulasan</h4>
        <div class="star-rating" id="reviewStars" style="justify-content:center;margin-bottom:var(--space-md)">
          ${[1,2,3,4,5].map(i => `<span class="material-icons-round star" data-value="${i}" onclick="setRating(${i})">star</span>`).join('')}
        </div>
        <textarea class="form-textarea" id="reviewText" placeholder="Tulis ulasanmu..." style="min-height:80px"></textarea>
        <button class="btn btn-primary btn-block" style="margin-top:var(--space-md)" onclick="submitReview('${orderId}')">
          <span class="material-icons-round">rate_review</span> Kirim Ulasan
        </button>
      </div>
    </div>`;
}

// ---- CHAT ----
function renderChat(orderId) {
  const o = S.orders.find(x => x.id === orderId);
  if (!o) return notFound();
  const isMe = S.user.id === o.pelangganId;
  const otherName = isMe ? (S.getMitra(o.mitraId)?.name || 'Mitra') : (S.users.find(u => u.id === o.pelangganId)?.name || 'Pelanggan');
  const msgs = o.chat || [];

  return `${hdr(otherName, true)}
  <div class="chat-container">
    <div class="chat-messages" id="chatMessages">
      ${msgs.length > 0 ? msgs.map(m => `
        <div class="chat-bubble ${m.senderId === S.user.id ? 'sent' : 'received'}">
          ${m.text}<div class="chat-time">${timeAgo(m.time)}</div>
        </div>
      `).join('') : '<div style="text-align:center;padding:var(--space-xl);color:var(--text-tertiary)"><p style="font-size:var(--text-sm)">Belum ada pesan. Mulai percakapan!</p></div>'}
    </div>
    <div class="chat-input-bar">
      <input type="text" placeholder="Ketik pesan..." id="chatInput">
      <button class="chat-send-btn" onclick="sendChat('${orderId}')"><span class="material-icons-round">send</span></button>
    </div>
  </div>`;
}

// ---- PROFIL ----
function renderProfil() {
  const u = S.user;
  const orders = S.getOrdersFor(u.id);
  const done = orders.filter(o => o.status === 'completed').length;

  return `${hdr('Profil')}
  <div class="container" style="padding-top:var(--space-md)">
    <div class="profile-header">
      <div class="avatar avatar-xl" style="margin:0 auto var(--space-md)">${getInitials(u.name)}</div>
      <h2 style="font-family:var(--font-heading);font-weight:700;font-size:var(--text-xl)">${u.name}</h2>
      <div style="color:var(--text-tertiary);font-size:var(--text-sm);margin-top:2px">📱 +62${u.phone}</div>
      <span class="badge ${u.role === 'mitra' ? 'badge-primary' : 'badge-success'}" style="margin-top:var(--space-sm)">${u.role === 'mitra' ? '💼 Mitra' : '🛒 Pelanggan'}</span>
      ${u.role === 'mitra' && u.skills ? `
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:center;margin-top:var(--space-sm)">
          ${u.skills.map(sk => { const c = getCat(sk); return c ? `<span class="chip" style="font-size:11px">${c.icon} ${c.name.replace('Jasa ','')}</span>` : ''; }).join('')}
        </div>
      ` : ''}
      <div class="profile-stats">
        <div class="profile-stat"><div class="profile-stat-value">${done}</div><div class="profile-stat-label">${u.role === 'mitra' ? 'Selesai' : 'Pesanan'}</div></div>
        <div class="profile-stat"><div class="profile-stat-value">${u.rating || '—'}</div><div class="profile-stat-label">Rating</div></div>
        <div class="profile-stat"><div class="profile-stat-value">${u.city || '—'}</div><div class="profile-stat-label">Kota</div></div>
      </div>
    </div>
    <div class="divider"></div>
    <div class="profile-menu">
      <div class="profile-menu-item" onclick="showEditProfile()"><span class="material-icons-round">edit</span><span>Edit Profil</span><span class="material-icons-round chevron">chevron_right</span></div>
      ${u.role === 'mitra' ? `<div class="profile-menu-item" onclick="showEditSkills()"><span class="material-icons-round">build</span><span>Edit Keahlian</span><span class="material-icons-round chevron">chevron_right</span></div>` : ''}
      <div class="profile-menu-item" onclick="R.go('riwayat')"><span class="material-icons-round">receipt_long</span><span>Riwayat Pesanan</span><span class="material-icons-round chevron">chevron_right</span></div>
      <div class="profile-menu-item" onclick="toggleTheme()"><span class="material-icons-round">dark_mode</span><span>Mode Gelap</span>
        <label class="toggle-switch" style="margin-left:auto"><input type="checkbox" ${document.documentElement.dataset.theme === 'dark' ? 'checked' : ''} onchange="toggleTheme()"><span class="toggle-slider"></span></label>
      </div>
      <div class="profile-menu-item" onclick="showAbout()"><span class="material-icons-round">info</span><span>Tentang JasaKu</span><span class="material-icons-round chevron">chevron_right</span></div>
      <div class="divider"></div>
      <div class="profile-menu-item danger" onclick="doLogout()"><span class="material-icons-round">logout</span><span>Keluar</span></div>
    </div>
  </div>`;
}

// ---- MITRA PROFIL (public view) ----
function renderMitraProfil(mitraId) {
  const m = S.getMitra(mitraId);
  if (!m) return notFound();
  const reviews = S.getReviewsForMitra(mitraId);

  return `${hdr(m.name, true)}
  <div class="container" style="padding-top:var(--space-md)">
    <div class="profile-header">
      <div class="avatar avatar-xl" style="margin:0 auto var(--space-md)">${getInitials(m.name)}</div>
      <h2 style="font-family:var(--font-heading);font-weight:700;font-size:var(--text-xl)">${m.name}</h2>
      <div style="display:flex;align-items:center;justify-content:center;gap:var(--space-sm);margin-top:var(--space-xs)">
        <span class="status-indicator ${m.isAvailable ? 'online' : 'offline'}"></span>
        <span style="font-size:var(--text-sm);color:var(--text-tertiary)">${m.isAvailable ? 'Online' : 'Offline'} · ${m.city}</span>
      </div>
      <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:center;margin-top:var(--space-sm)">
        ${(m.skills || []).map(sk => { const c = getCat(sk); return c ? `<span class="chip selected">${c.icon} ${c.name.replace('Jasa ','')}</span>` : ''; }).join('')}
      </div>
      <div class="profile-stats">
        <div class="profile-stat"><div class="profile-stat-value">${m.completedJobs || 0}</div><div class="profile-stat-label">Selesai</div></div>
        <div class="profile-stat"><div class="profile-stat-value">${m.rating || '—'}</div><div class="profile-stat-label">Rating</div></div>
        <div class="profile-stat"><div class="profile-stat-value">${m.reviewCount || 0}</div><div class="profile-stat-label">Ulasan</div></div>
      </div>
    </div>

    ${m.bio ? `<div class="card" style="cursor:default;margin-bottom:var(--space-lg)"><div class="card-body"><h4 style="font-weight:600;margin-bottom:var(--space-xs)">Tentang</h4><p style="font-size:var(--text-sm);color:var(--text-secondary);line-height:1.7">${m.bio}</p></div></div>` : ''}

    <div style="display:flex;gap:var(--space-sm);margin-bottom:var(--space-lg)">
      <a href="https://wa.me/62${(m.phone||'').replace(/^0/,'')}" target="_blank" class="btn btn-whatsapp btn-block">
        <span class="material-icons-round">open_in_new</span> Hubungi via WA
      </a>
    </div>

    <div class="section-header"><h2 class="section-title">Ulasan (${reviews.length})</h2></div>
    ${reviews.length > 0 ? reviews.map(r => `
      <div class="review-card">
        <div class="review-header"><div class="avatar avatar-sm">${getInitials(r.userName)}</div><div><div class="review-name">${r.userName}</div><div class="review-date">${formatDate(r.date)}</div></div></div>
        <div class="review-stars">${'<span class="material-icons-round" style="font-size:14px">star</span>'.repeat(r.rating)}</div>
        <p class="review-text">${r.text}</p>
      </div>
    `).join('') : '<p style="color:var(--text-tertiary);font-size:var(--text-sm)">Belum ada ulasan.</p>'}
  </div>`;
}

// ---- SHARED COMPONENTS ----
function renderMitraCard(m) {
  return `
    <div class="mitra-card" onclick="R.go('mitra-profil',{id:'${m.id}'})">
      <div class="avatar">${getInitials(m.name)}</div>
      <div class="mitra-info">
        <div class="mitra-name">${m.name}</div>
        <div class="mitra-meta">
          <span class="service-card-rating"><span class="material-icons-round" style="font-size:14px">star</span> ${m.rating}</span>
          <span>${m.completedJobs || 0} tugas</span>
          <span>· ${m.city || ''}</span>
        </div>
        <div class="mitra-skills">
          ${(m.skills || []).slice(0, 4).map(sk => { const c = getCat(sk); return c ? `<span class="chip">${c.icon} ${c.name.replace('Jasa ','')}</span>` : ''; }).join('')}
          ${(m.skills || []).length > 4 ? `<span class="chip">+${m.skills.length - 4}</span>` : ''}
        </div>
      </div>
      <span class="status-indicator ${m.isAvailable ? 'online' : 'offline'}" style="align-self:flex-start;margin-top:6px"></span>
    </div>`;
}

function renderOrderCard(o) {
  const cat = getCat(o.category);
  return `
    <div class="order-card" onclick="R.go('detail-order',{id:'${o.id}'})">
      <div class="order-card-header"><span class="order-card-id">#${o.id.slice(-6).toUpperCase()}</span>${statusBadge(o.status)}</div>
      <div style="display:flex;align-items:center;gap:var(--space-sm);margin-bottom:var(--space-xs)">
        <span style="font-size:20px">${cat ? cat.icon : '✨'}</span>
        <span class="order-card-title" style="margin-bottom:0">${o.title}</span>
      </div>
      <div class="order-card-detail">${o.description ? o.description.substring(0, 80) + '...' : ''}</div>
      <div class="order-card-footer">
        <span class="order-card-price">${formatPrice(o.totalPrice)}</span>
        <div class="order-card-actions">
          <button class="btn btn-sm btn-secondary" onclick="event.stopPropagation();R.go('chat',{id:'${o.id}'})"><span class="material-icons-round" style="font-size:16px">chat</span></button>
        </div>
      </div>
    </div>`;
}

function renderMitraOrderCard(o) {
  const cat = getCat(o.category);
  const pelanggan = S.users.find(u => u.id === o.pelangganId);
  return `
    <div class="order-card" onclick="R.go('detail-order',{id:'${o.id}'})">
      <div class="order-card-header"><span class="order-card-id">#${o.id.slice(-6).toUpperCase()}</span>${statusBadge(o.status)}</div>
      <div style="display:flex;align-items:center;gap:var(--space-sm);margin-bottom:var(--space-sm)">
        <div class="avatar avatar-sm">${pelanggan ? getInitials(pelanggan.name) : '?'}</div>
        <span style="font-weight:500;font-size:var(--text-sm)">${pelanggan ? pelanggan.name : 'Pelanggan'}</span>
        ${pelanggan ? `<a href="https://wa.me/62${(pelanggan.phone||'').replace(/^0/,'')}" target="_blank" onclick="event.stopPropagation()" class="btn btn-sm btn-whatsapp-outline" style="padding:4px 8px;margin-left:auto;font-size:10px">WA</a>` : ''}
      </div>
      <div style="display:flex;align-items:center;gap:var(--space-xs);margin-bottom:var(--space-xs)">
        <span style="font-size:20px">${cat ? cat.icon : '✨'}</span>
        <span class="order-card-title" style="margin-bottom:0">${o.title}</span>
      </div>
      <div class="order-card-detail">${o.description ? o.description.substring(0, 80) + '...' : ''}</div>
      <div class="order-card-footer">
        <span class="order-card-price">${formatPrice(o.totalPrice)}</span>
        <div class="order-card-actions">
          ${o.status === 'pending' ? `
            <button class="btn btn-sm btn-success" onclick="event.stopPropagation();updateOrder('${o.id}','accepted')"><span class="material-icons-round" style="font-size:16px">check</span> Terima</button>
            <button class="btn btn-sm btn-danger" onclick="event.stopPropagation();updateOrder('${o.id}','cancelled')"><span class="material-icons-round" style="font-size:16px">close</span></button>
          ` : `<button class="btn btn-sm btn-secondary" onclick="event.stopPropagation();R.go('chat',{id:'${o.id}'})"><span class="material-icons-round" style="font-size:16px">chat</span></button>`}
        </div>
      </div>
    </div>`;
}

function statusBadge(s) {
  const m = { pending: ['Menunggu Mitra', 'badge-warning'], accepted: ['Diterima', 'badge-primary'], in_progress: ['Dikerjakan', 'badge-accent'], completed: ['Selesai', 'badge-success'], cancelled: ['Dibatalkan', 'badge-danger'] };
  const [l, c] = m[s] || [s, 'badge-primary'];
  return `<span class="badge ${c}">${l}</span>`;
}
function statusLabel(s) { return { pending: 'Menunggu Mitra', accepted: 'Diterima', in_progress: 'Dikerjakan', completed: 'Selesai', cancelled: 'Dibatalkan' }[s] || s; }
function paymentStatusLabel(s) { return { unpaid: '🔴 Belum Dibayar', prepaid: '🟡 Barang Sudah Dibayar', paid: '🟢 Lunas' }[s] || '🔴 Belum Dibayar'; }
function detailRow(label, val) { return `<div style="display:flex;justify-content:space-between;margin-bottom:var(--space-sm);font-size:var(--text-sm)"><span style="color:var(--text-tertiary)">${label}</span><span style="font-weight:500;text-align:right;max-width:60%">${val}</span></div>`; }
function emptyState(icon, title, desc) { return `<div class="empty-state"><div class="empty-icon">${icon}</div><h3>${title}</h3><p>${desc}</p></div>`; }
function notFound() { return `${hdr('', true)}<div class="empty-state" style="min-height:60vh;display:flex;flex-direction:column;align-items:center;justify-content:center"><div class="empty-icon">😵</div><h3>Tidak Ditemukan</h3><button class="btn btn-primary" onclick="R.back()">Kembali</button></div>`; }

// ---- KELOLA JASA (NOT NEEDED WITH NEW SYSTEM - redirect to profil) ----
function renderKelolaJasa() { return renderProfil(); }
function renderTambahJasa() { return renderProfil(); }

// ---- EVENT BINDING ----
function bindEvents(page, p) {
  if (page === 'auth') {
    // OTP auto-jump
    setTimeout(() => {
      document.querySelectorAll('.otp-input-group input').forEach((inp, i, all) => {
        inp.addEventListener('input', () => {
          if (inp.value.length === 1) {
            inp.classList.add('filled');
            if (i < all.length - 1) all[i + 1].focus();
          }
        });
        inp.addEventListener('keydown', (e) => {
          if (e.key === 'Backspace' && !inp.value && i > 0) { all[i - 1].focus(); all[i - 1].classList.remove('filled'); }
        });
      });
      // OTP timer
      if (S.authStep === 'otp') startOtpTimer();
    }, 100);
    // Register form
    document.getElementById('regForm')?.addEventListener('submit', handleRegSubmit);
  }
  if (page === 'pesan') {
    const d = document.getElementById('orderDate');
    if (d) { const n = new Date(); n.setHours(n.getHours() + 1); d.value = n.toISOString().slice(0, 16); }
    document.getElementById('orderForm')?.addEventListener('submit', (e) => handleNewOrder(e, p.id));
    
    const customInput = document.getElementById('orderFeeCustom');
    if(customInput) {
      customInput.addEventListener('input', (e) => {
        const val = parseInt(e.target.value) || parseInt(customInput.min);
        document.getElementById('orderFee').value = val;
      });
    }
    setTimeout(() => { if (typeof initPickerMap === 'function') initPickerMap(); }, 100);
  }
  if (page === 'chat') {
    const ci = document.getElementById('chatInput');
    ci?.addEventListener('keydown', (e) => { if (e.key === 'Enter') sendChat(p.id); });
    const cm = document.getElementById('chatMessages');
    if (cm) cm.scrollTop = cm.scrollHeight;
  }
  if (page === 'detail-order') {
    setTimeout(() => { if (typeof initLiveMap === 'function') initLiveMap(p.id); }, 100);
    setTimeout(() => { if (typeof initLiveTimer === 'function') initLiveTimer(p.id); }, 100);
  }
  if (page === 'mitra') {
    document.getElementById('mitraToggle')?.addEventListener('change', async (e) => {
      const isOnline = e.target.checked;
      await window.fs.updateDoc(window.fs.doc(window.firebaseDB, "users", S.user.id), { isAvailable: isOnline });
      toast(isOnline ? 'Online — Siap terima pesanan! ✅' : 'Offline ⏸️', isOnline ? 'success' : 'info');
    });
  }
  if (page === 'dashboard') {
    document.getElementById('dashSearch')?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && e.target.value.trim()) R.go('katalog');
    });
  }
}

// ---- AUTH HANDLERS ----
async function loginWithGoogle() {
  if (!window.fa) { toast('Tunggu sebentar, sedang memuat...', 'info'); return; }
  
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    toast('Bypass login (Local Dev)...', 'success');
    const emailInput = document.getElementById('authEmailInput')?.value || '';
    let uid = S.authRole === 'mitra' ? 'mitra5' : 'plg1';
    if (emailInput === 'admin@jasaku.com') uid = 'admin1';

    const docRef = window.fs.doc(window.firebaseDB, "users", uid);
    const docSnap = await window.fs.getDoc(docRef);
    if (docSnap.exists()) {
      const udata = docSnap.data();
      if (udata.isBanned) {
        toast('Akun Anda telah dinonaktifkan oleh Admin.', 'error'); return;
      }
      S.user = udata;
      R.go(S.user.role === 'admin' ? 'admin' : (S.user.role === 'mitra' ? 'mitra' : 'dashboard'));
    } else {
      S.authEmail = emailInput || 'test@example.com';
      S.authUser = { uid: 'newuser1', email: S.authEmail, photoURL: '' };
      S.authStep = 'register';
      render('auth');
    }
    return;
  }

  const provider = new window.fa.GoogleAuthProvider();
  try {
    toast('Memproses login...', 'info');
    await window.fa.signInWithPopup(window.firebaseAuth, provider);
  } catch (error) {
    toast('Gagal login: ' + error.message, 'error');
  }
}

async function loginWithEmail() {
  const email = document.getElementById('authEmailInput').value.trim();
  const password = document.getElementById('authPasswordInput').value.trim();
  if (!email || !password) return;
  
  if (email === 'admin@jasaku.com') {
    toast('Memproses login Admin...', 'info');
    let udata = { id: 'admin1', role: 'admin', name: 'Admin JasaKu', email: 'admin@jasaku.com', avatar: '', isBanned: false };
    try {
      const docRef = window.fs.doc(window.firebaseDB, "users", 'admin1');
      const docSnap = await window.fs.getDoc(docRef);
      if (docSnap.exists()) {
        udata = docSnap.data();
      }
    } catch (e) {
      console.log('Error fetching admin doc', e);
    }
    S.user = udata;
    R.go('admin');
    return;
  }

  try {
    toast('Memproses login...', 'info');
    const cred = await window.fa.signInWithEmailAndPassword(window.firebaseAuth, email, password);
    if (!cred.user.emailVerified) {
       toast('Silakan verifikasi email Anda terlebih dahulu.', 'error');
       window.fa.signOut(window.firebaseAuth);
    }
  } catch(error) {
    toast('Gagal login: ' + error.message, 'error');
  }
}

async function registerWithEmail() {
  const email = document.getElementById('authEmailInput').value.trim();
  const password = document.getElementById('authPasswordInput').value.trim();
  if (!email || password.length < 6) {
    toast('Email valid dan password min. 6 karakter', 'error');
    return;
  }
  try {
    toast('Membuat akun...', 'info');
    const cred = await window.fa.createUserWithEmailAndPassword(window.firebaseAuth, email, password);
    await window.fa.sendEmailVerification(cred.user);
    toast('Akun dibuat! Silakan cek email Anda untuk verifikasi.', 'success');
    window.fa.signOut(window.firebaseAuth);
  } catch(error) {
    toast('Gagal daftar: ' + error.message, 'error');
  }
}

async function handleRegSubmit(e) {
  e.preventDefault();
  if (S.authRole === 'mitra') {
    // Save temp data, go to skills step
    S._regTemp = {
      name: document.getElementById('regName').value.trim(),
      phone: document.getElementById('regPhone').value.trim(),
      city: document.getElementById('regCity').value.trim(),
      bio: document.getElementById('regBio')?.value?.trim() || '',
      bankAccount: document.getElementById('regBank')?.value?.trim() || '',
    };
    S.authStep = 'skills';
    S.regSkills = [];
    render('auth');
  } else {
    // Pelanggan — complete registration
    const user = {
      id: S.authUser.uid, email: S.authUser.email || '', 
      phone: document.getElementById('regPhone').value.trim(), role: 'pelanggan',
      name: document.getElementById('regName').value.trim(),
      city: document.getElementById('regCity').value.trim(),
      avatar: S.authUser.photoURL || '', rating: 0, reviewCount: 0,
    };
    await window.fs.setDoc(window.fs.doc(window.firebaseDB, "users", user.id), user);
    S.user = user;
    S.authStep = 'phone';
    toast(`Selamat datang, ${user.name}! 🎉`, 'success');
    R.go('dashboard');
  }
}

function toggleSkill(skillId) {
  const idx = S.regSkills.indexOf(skillId);
  if (idx !== -1) S.regSkills.splice(idx, 1);
  else S.regSkills.push(skillId);
  // Toggle visual
  const el = document.querySelector(`.skill-option[data-skill="${skillId}"]`);
  if (el) el.classList.toggle('selected');
  // Update count
  const countEl = document.querySelector('.skill-selector + div');
  if (countEl) countEl.textContent = S.regSkills.length + ' keahlian dipilih';
}

async function completeRegistration() {
  if (S.regSkills.length === 0) { toast('Pilih minimal 1 keahlian!', 'warning'); return; }
  const temp = S._regTemp || {};
  const user = {
    id: S.authUser.uid, email: S.authUser.email || '', 
    phone: temp.phone || S.authPhone || '', role: 'mitra',
    name: temp.name || 'Mitra Baru', city: temp.city || '',
    bio: temp.bio || '', bankAccount: temp.bankAccount || '',
    avatar: S.authUser.photoURL || '', rating: 0, reviewCount: 0,
    skills: [...S.regSkills], isAvailable: true,
    completedJobs: 0,
  };
  await window.fs.setDoc(window.fs.doc(window.firebaseDB, "users", user.id), user);
  S.user = user;
  S.regSkills = []; S._regTemp = null;
  S.authStep = 'phone';
  toast(`Selamat datang, ${user.name}! Kamu terdaftar sebagai Mitra 💼`, 'success');
  R.go('mitra');
}

// ---- ORDER HANDLERS ----
let selectedPayment = 'cash';

function selectPayment(method) {
  selectedPayment = method;
  document.getElementById('orderPayment').value = method;
  document.querySelectorAll('#paymentOptions .payment-option').forEach(el => el.classList.remove('selected'));
  event.currentTarget.classList.add('selected');
}

function selectFee(el, val) {
  document.getElementById('orderFee').value = val;
  document.querySelectorAll('#feeOptions .payment-option').forEach(e => e.classList.remove('selected'));
  el.classList.add('selected');
  const customInput = document.getElementById('orderFeeCustom');
  if(customInput) customInput.style.display = 'none';
}

function selectFeeCustom(el) {
  document.querySelectorAll('#feeOptions .payment-option').forEach(e => e.classList.remove('selected'));
  el.classList.add('selected');
  const customInput = document.getElementById('orderFeeCustom');
  if(customInput) {
    customInput.style.display = 'block';
    customInput.focus();
    document.getElementById('orderFee').value = customInput.value || customInput.min;
  }
}

async function handleNewOrder(e, catId) {
  e.preventDefault();
  const cat = getCat(catId);
  const isPrePay = isPrepay(catId);

  const title = document.getElementById('orderTitle').value.trim();
  const desc = document.getElementById('orderDesc').value.trim();
  const addr = document.getElementById('orderAddr').value.trim();
  const coordsStr = document.getElementById('orderCoords')?.value;
  const date = document.getElementById('orderDate').value;
  let fee = parseInt(document.getElementById('orderFee').value) || cat.basePrice;
  if (fee < cat.basePrice) fee = cat.basePrice; // Ensure minimum is met
  const itemCost = 0;
  const payment = document.getElementById('orderPayment').value;

  // Find random mitra
  const mitra = S.getRandomMitra(catId);
  if (!mitra) {
    toast('Tidak ada mitra online untuk jasa ini. Coba lagi nanti!', 'error');
    return;
  }

  const order = {
    id: generateId(),
    pelangganId: S.user.id, mitraId: mitra.id, category: catId,
    title, description: desc, address: addr, scheduledDate: date,
    coords: coordsStr ? coordsStr.split(',').map(Number) : null,
    serviceFee: fee, itemCost, totalPrice: fee + itemCost,
    paymentMethod: payment,
    paymentStatus: 'unpaid',
    status: 'pending',
    createdAt: new Date().toISOString(),
    chat: [], hasReviewed: false,
  };

  await window.fs.setDoc(window.fs.doc(window.firebaseDB, "orders", order.id), order);

  // Show assignment animation then redirect
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="page-enter">
      <div class="assignment-animation" style="min-height:80vh;display:flex;flex-direction:column;align-items:center;justify-content:center">
        <div class="assignment-spinner">🔍</div>
        <h2 style="font-family:var(--font-heading);font-weight:800;font-size:var(--text-2xl);margin-bottom:var(--space-sm)">Mencari Mitra...</h2>
        <p style="color:var(--text-tertiary)">Mencarikan mitra terbaik untukmu</p>
      </div>
    </div>`;

  setTimeout(() => {
    app.innerHTML = `
      <div class="page-enter">
        <div class="assignment-animation" style="min-height:80vh;display:flex;flex-direction:column;align-items:center;justify-content:center">
          <div style="width:80px;height:80px;border-radius:50%;background:var(--gradient-success);display:flex;align-items:center;justify-content:center;font-size:36px;margin-bottom:var(--space-lg)">✅</div>
          <h2 style="font-family:var(--font-heading);font-weight:800;font-size:var(--text-2xl);margin-bottom:var(--space-sm)">Mitra Ditemukan!</h2>
          <div class="card" style="max-width:320px;margin:var(--space-md) auto;cursor:default">
            <div class="card-body" style="display:flex;align-items:center;gap:var(--space-md)">
              <div class="avatar">${getInitials(mitra.name)}</div>
              <div>
                <div style="font-weight:600">${mitra.name}</div>
                <div style="font-size:var(--text-xs);color:var(--text-tertiary)">⭐ ${mitra.rating} · ${mitra.completedJobs || 0} tugas selesai</div>
              </div>
            </div>
          </div>
          <p style="color:var(--text-tertiary);font-size:var(--text-sm);margin-bottom:var(--space-lg)">Menunggu konfirmasi dari mitra...</p>
          <button class="btn btn-primary btn-lg" onclick="R.go('detail-order',{id:'${order.id}'})">
            <span class="material-icons-round">visibility</span> Lihat Pesanan
          </button>
        </div>
      </div>`;
    toast('Pesanan dikirim ke ' + mitra.name + '! Menunggu konfirmasi 📨', 'success');
  }, 2000);
}

async function updateOrder(id, status) {
  const o = S.orders.find(x => x.id === id);
  if (!o) return;
  const updates = { status };
  if (status === 'in_progress' && !o.startedAt) updates.startedAt = new Date().toISOString();
  if (status === 'completed' && !o.completedAt) updates.completedAt = new Date().toISOString();
  
  await window.fs.updateDoc(window.fs.doc(window.firebaseDB, "orders", id), updates);
  
  if (status === 'completed') {
    // Increment completed jobs for mitra
    const m = S.getMitra(o.mitraId);
    if (m) {
      await window.fs.updateDoc(window.fs.doc(window.firebaseDB, "users", m.id), { completedJobs: (m.completedJobs || 0) + 1 });
    }
  }

  const msgs = { accepted: 'Pesanan diterima! ✅', in_progress: 'Mulai dikerjakan 🔄', completed: 'Pesanan selesai! 🎉 Menunggu pembayaran.', cancelled: 'Pesanan dibatalkan ❌' };
  toast(msgs[status] || 'Status diperbarui', status === 'cancelled' ? 'warning' : 'success');
  R.go('detail-order', { id });
}

async function confirmPayment(id) {
  await window.fs.updateDoc(window.fs.doc(window.firebaseDB, "orders", id), { paymentStatus: 'paid' });
  toast('Pembayaran dikonfirmasi! 💰', 'success');
  R.go('detail-order', { id });
}

// ---- CHAT ----
async function sendChat(orderId) {
  const inp = document.getElementById('chatInput');
  const text = inp?.value?.trim();
  if (!text) return;
  const o = S.orders.find(x => x.id === orderId);
  if (!o) return;
  
  const chatArr = o.chat || [];
  chatArr.push({ senderId: S.user.id, text, time: new Date().toISOString() });
  inp.value = '';
  await window.fs.updateDoc(window.fs.doc(window.firebaseDB, "orders", orderId), { chat: chatArr });

  // Auto-reply
  setTimeout(async () => {
    const replies = ['Baik, siap kak! 👍', 'Oke, segera saya kerjakan ya.', 'Noted! Terima kasih infonya 😊', 'Siap, saya proses sekarang.', 'OK kak, mohon ditunggu ya!'];
    const reply = replies[Math.floor(Math.random() * replies.length)];
    const co = S.orders.find(x => x.id === orderId);
    if (co) {
      const otherId = S.user.id === co.pelangganId ? co.mitraId : co.pelangganId;
      const c2 = co.chat || [];
      c2.push({ senderId: otherId, text: reply, time: new Date().toISOString() });
      await window.fs.updateDoc(window.fs.doc(window.firebaseDB, "orders", orderId), { chat: c2 });
    }
  }, 1500 + Math.random() * 2000);
}

// ---- REVIEW ----
let reviewRating = 0;
function setRating(r) {
  reviewRating = r;
  document.querySelectorAll('#reviewStars .star').forEach((s, i) => s.classList.toggle('active', i < r));
}
async function submitReview(orderId) {
  if (reviewRating === 0) { toast('Pilih rating dulu!', 'warning'); return; }
  const o = S.orders.find(x => x.id === orderId);
  if (!o) return;
  
  const review = {
    id: generateId(), orderId, serviceCategory: o.category, mitraId: o.mitraId,
    userId: S.user.id, userName: S.user.name, rating: reviewRating,
    text: document.getElementById('reviewText')?.value?.trim() || 'Bagus!',
    date: new Date().toISOString().split('T')[0],
  };
  
  await window.fs.setDoc(window.fs.doc(window.firebaseDB, "reviews", review.id), review);
  await window.fs.updateDoc(window.fs.doc(window.firebaseDB, "orders", orderId), { hasReviewed: true });
  
  // Update mitra rating
  const mitra = S.getMitra(o.mitraId);
  if (mitra) {
    const mr = S.getReviewsForMitra(o.mitraId);
    mr.push(review);
    const newRating = Math.round(mr.reduce((s, r) => s + r.rating, 0) / mr.length * 10) / 10;
    await window.fs.updateDoc(window.fs.doc(window.firebaseDB, "users", mitra.id), { 
      rating: newRating, reviewCount: mr.length 
    });
  }
  
  reviewRating = 0;
  toast('Terima kasih atas ulasanmu! ⭐', 'success');
  R.go('detail-order', { id: orderId });
}

// ---- TABS ----
function switchTab(tab) {
  document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
  document.querySelectorAll('[id^="tab-"]').forEach(el => el.style.display = 'none');
  const te = document.getElementById('tab-' + tab);
  if (te) te.style.display = 'block';
}

// ---- PROFILE MODALS ----
function showEditProfile() {
  const u = S.user;
  showModal('Edit Profil', `
    <div class="form-group"><label class="form-label">Nama</label><input type="text" class="form-input" id="editName" value="${u.name}"></div>
    <div class="form-group"><label class="form-label">Nomor WA</label><input type="tel" class="form-input" id="editPhone" value="${u.phone || ''}"></div>
    <div class="form-group"><label class="form-label">Kota</label><input type="text" class="form-input" id="editCity" value="${u.city || ''}"></div>
    ${u.role === 'mitra' ? `
      <div class="form-group"><label class="form-label">Bio</label><textarea class="form-textarea" id="editBio">${u.bio || ''}</textarea></div>
      <div class="form-group"><label class="form-label">Rekening</label><input type="text" class="form-input" id="editBank" value="${u.bankAccount || ''}"></div>
    ` : ''}
  `, async () => {
    const name = document.getElementById('editName').value.trim() || S.user.name;
    const phone = document.getElementById('editPhone').value.trim() || S.user.phone;
    const city = document.getElementById('editCity').value.trim() || S.user.city;
    const updates = { name, phone, city };
    if (S.user.role === 'mitra') {
      updates.bio = document.getElementById('editBio')?.value?.trim() || S.user.bio;
      updates.bankAccount = document.getElementById('editBank')?.value?.trim() || S.user.bankAccount;
    }
    await window.fs.updateDoc(window.fs.doc(window.firebaseDB, "users", S.user.id), updates);
    toast('Profil diperbarui ✅', 'success');
  });
}

function showEditSkills() {
  const u = S.user;
  const currentSkills = [...(u.skills || [])];
  showModal('Edit Keahlian', `
    <p style="font-size:var(--text-sm);color:var(--text-secondary);margin-bottom:var(--space-md)">Pilih kategori jasa yang bisa kamu kerjakan:</p>
    <div class="skill-selector" id="editSkillSelector">
      ${CATEGORIES.filter(c => c.id !== 'lainnya').map(c => `
        <div class="skill-option ${currentSkills.includes(c.id) ? 'selected' : ''}" data-skill="${c.id}" onclick="this.classList.toggle('selected')">
          <span class="skill-emoji">${c.icon}</span>
          <span class="skill-name">${c.name.replace('Jasa ', '')}</span>
        </div>
      `).join('')}
    </div>
  `, async () => {
    const selected = [...document.querySelectorAll('#editSkillSelector .skill-option.selected')].map(el => el.dataset.skill);
    if (selected.length === 0) { toast('Pilih minimal 1!', 'warning'); return; }
    await window.fs.updateDoc(window.fs.doc(window.firebaseDB, "users", S.user.id), { skills: selected });
    toast('Keahlian diperbarui ✅', 'success');
  });
}

function showAbout() {
  showModal('', `
    <div style="text-align:center;padding:var(--space-lg) 0">
      <div style="font-size:64px;margin-bottom:var(--space-md)">🚀</div>
      <h2 style="font-family:var(--font-heading);font-weight:800;font-size:var(--text-2xl);margin-bottom:var(--space-xs)"><span class="text-gradient">JasaKu</span></h2>
      <p style="color:var(--text-tertiary);margin-bottom:var(--space-md)">Versi 2.0</p>
      <p style="color:var(--text-secondary);font-size:var(--text-sm);line-height:1.7">Platform marketplace jasa suruh terpercaya. OTP WhatsApp, random mitra assignment, smart payment.</p>
      <div class="divider"></div>
      <p style="font-size:var(--text-xs);color:var(--text-tertiary)">© 2026 JasaKu. All rights reserved.</p>
    </div>
  `, null);
}

function showModal(title, bodyHtml, onSave) {
  const ov = document.createElement('div');
  ov.className = 'modal-overlay'; ov.id = 'modalOverlay';
  ov.innerHTML = `
    <div class="modal-content">
      <div class="modal-handle"></div>
      ${title ? `<div class="modal-header"><h3>${title}</h3></div>` : ''}
      <div class="modal-body">${bodyHtml}</div>
      <div class="modal-footer">
        <button class="btn btn-secondary btn-block" onclick="document.getElementById('modalOverlay').remove()">Tutup</button>
        ${onSave ? '<button class="btn btn-primary btn-block" id="modalSaveBtn">Simpan</button>' : ''}
      </div>
    </div>`;
  ov.addEventListener('click', (e) => { if (e.target === ov) ov.remove(); });
  document.body.appendChild(ov);
  if (onSave) document.getElementById('modalSaveBtn').addEventListener('click', () => { onSave(); ov.remove(); });
}

function doLogout() { 
  if (window.firebaseAuth) window.fa.signOut(window.firebaseAuth);
  toast('Berhasil keluar 👋', 'info'); 
}

// ---- THEME ----
function toggleTheme() {
  const html = document.documentElement;
  const d = html.dataset.theme === 'dark';
  html.dataset.theme = d ? 'light' : 'dark';
  localStorage.setItem('jk_theme', html.dataset.theme);
  const icon = document.getElementById('themeIcon');
  if (icon) icon.textContent = d ? 'dark_mode' : 'light_mode';
}

// ---- BOTTOM NAV ----
document.getElementById('bottomNav')?.addEventListener('click', (e) => {
  const ni = e.target.closest('.nav-item');
  if (!ni) return;
  const pg = ni.dataset.page;
  R.go(pg === 'dashboard' && S.user?.role === 'mitra' ? 'mitra' : pg);
});

// ---- INIT ----
function initApp() {
  const t = localStorage.getItem('jk_theme');
  if (t) document.documentElement.dataset.theme = t;
  S.init(); R.init();
}
window.initFirebaseApp = initApp;

// ---- GPS LOKASI ----
function getLocation(btn) {
  if (!navigator.geolocation) {
    toast('Browser tidak mendukung GPS', 'error');
    return;
  }
  const originalHtml = btn.innerHTML;
  btn.innerHTML = `<span class="material-icons-round" style="font-size:16px;margin-right:4px">sync</span> Mencari...`;
  btn.disabled = true;

  navigator.geolocation.getCurrentPosition(async (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    document.getElementById('orderCoords').value = `${lat},${lon}`;
    
    try {
      const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
      const data = await res.json();
      if (data && data.display_name) {
        document.getElementById('orderAddr').value = data.display_name;
        toast('Lokasi ditemukan! 📍', 'success');
      }
    } catch (e) {
      toast('Koordinat didapat, gagal melacak nama jalan.', 'info');
    }
    btn.innerHTML = `<span class="material-icons-round" style="font-size:16px;margin-right:4px">check</span> Berhasil`;
  }, (err) => {
    toast('Gagal akses GPS. Pastikan izin lokasi diaktifkan.', 'error');
    btn.innerHTML = originalHtml;
    btn.disabled = false;
  }, { enableHighAccuracy: true });
}

// ---- PETA LIVE TRACKING & PICKER ----

let liveTimerInterval = null;
function initLiveTimer(orderId) {
  if (liveTimerInterval) clearInterval(liveTimerInterval);
  const o = S.orders.find(x => x.id === orderId);
  const timerEl = document.getElementById('liveTimer');
  if (!o || !o.startedAt || !timerEl) return;

  const update = () => {
    const end = o.completedAt ? new Date(o.completedAt) : new Date();
    const diff = Math.max(0, Math.floor((end - new Date(o.startedAt)) / 1000));
    const h = String(Math.floor(diff / 3600)).padStart(2, '0');
    const m = String(Math.floor((diff % 3600) / 60)).padStart(2, '0');
    const s = String(diff % 60).padStart(2, '0');
    timerEl.textContent = `${h}:${m}:${s}`;
  };
  
  update();
  if (!o.completedAt) {
    liveTimerInterval = setInterval(update, 1000);
  }
}

function initPickerMap() {
  const mapContainer = document.getElementById('pickerMap');
  if (!mapContainer || mapContainer.innerHTML !== '') return;
  
  // Default to Tuban
  const defaultLoc = [-6.892, 112.052];
  const map = L.map('pickerMap').setView(defaultLoc, 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
  }).addTo(map);

  const marker = L.marker(defaultLoc, { draggable: true }).addTo(map);
  document.getElementById('orderCoords').value = `${defaultLoc[0]},${defaultLoc[1]}`;

  const updateLocation = async (lat, lon) => {
    document.getElementById('orderCoords').value = `${lat},${lon}`;
    try {
      const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
      const data = await res.json();
      if (data && data.display_name) {
        document.getElementById('orderAddr').value = data.display_name;
      }
    } catch (e) {
      console.error(e);
    }
  };

  marker.on('dragend', (e) => {
    const pos = marker.getLatLng();
    updateLocation(pos.lat, pos.lng);
  });

  map.on('click', (e) => {
    marker.setLatLng(e.latlng);
    updateLocation(e.latlng.lat, e.latlng.lng);
  });
}

function initLiveMap(orderId) {
  const o = S.orders.find(x => x.id === orderId);
  if (!o || (o.status !== 'accepted' && o.status !== 'in_progress')) return;
  const mapContainer = document.getElementById('liveMap');
  if (!mapContainer || mapContainer.innerHTML !== '') return; // Prevent duplicate maps

  // Use actual coordinates if available, otherwise fallback to Tuban [-6.892, 112.052]
  const target = o.coords || [-6.892, 112.052];
  
  // Randomize Mitra's starting point around target (approx 1-3km away)
  const offsetLat = (Math.random() - 0.5) * 0.02;
  const offsetLon = (Math.random() - 0.5) * 0.02;
  const origin = [target[0] + offsetLat, target[1] + offsetLon];

  const map = L.map('liveMap').setView(target, 14);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
  }).addTo(map);

  const mIcon = L.divIcon({ className: 'mitra-marker', iconSize: [30,30], html: '🛵' });
  const pIcon = L.divIcon({ className: 'pelanggan-marker', iconSize: [20,20] });
  
  const mMarker = L.marker(origin, {icon: mIcon}).addTo(map);
  L.marker(target, {icon: pIcon}).addTo(map);

  // Fetch route using OSRM
  fetch(`https://router.project-osrm.org/route/v1/driving/${origin[1]},${origin[0]};${target[1]},${target[0]}?overview=full&geometries=geojson`)
    .then(r => r.json())
    .then(data => {
      if(data.routes && data.routes[0]) {
        const coords = data.routes[0].geometry.coordinates.map(c => [c[1], c[0]]);
        L.polyline(coords, {color: 'var(--primary-500)', weight: 4}).addTo(map);
        map.fitBounds(L.polyline(coords).getBounds(), {padding: [20,20]});
        
        if (o.status === 'in_progress') {
          let step = 0;
          setInterval(() => {
            if (step < coords.length) {
              mMarker.setLatLng(coords[step]);
              step++;
            }
          }, 1000);
        } else {
          mMarker.setLatLng(coords[0]);
        }
      }
    });
}

// ---- ADMIN DASHBOARD ----
function renderAdminDashboard() {
  const usersList = S.users.map(u => `
    <div class="admin-user-card" style="padding:var(--space-md);background:white;border-radius:12px;margin-bottom:var(--space-sm);box-shadow:var(--shadow-sm);display:flex;justify-content:space-between;align-items:center">
      <div>
        <div style="font-weight:700;display:flex;align-items:center;gap:8px">
          ${u.name || 'User Baru'} <span style="font-size:10px;padding:2px 6px;background:var(--primary-100);color:var(--primary-600);border-radius:12px;text-transform:uppercase">${u.role || 'pending'}</span>
          ${u.isBanned ? '<span style="font-size:10px;padding:2px 6px;background:#ffebee;color:#c62828;border-radius:12px;text-transform:uppercase">Banned</span>' : ''}
        </div>
        <div style="font-size:var(--text-sm);color:var(--text-secondary)">${u.email || u.phone || '-'}</div>
      </div>
      <div style="display:flex;gap:8px">
        <button class="btn btn-sm" style="background:white;border:1px solid #ddd" onclick="adminResetPassword('${u.email}')" title="Reset Password" ${!u.email ? 'disabled' : ''}>
          <span class="material-icons-round" style="font-size:16px;color:var(--primary-500)">vpn_key</span>
        </button>
        <button class="btn btn-sm" style="background:${u.isBanned ? '#e8f5e9' : '#ffebee'};border:1px solid ${u.isBanned ? '#c8e6c9' : '#ffcdd2'}" onclick="toggleBanUser('${u.id}', ${u.isBanned || false})" title="${u.isBanned ? 'Buka Blokir' : 'Blokir'}">
          <span class="material-icons-round" style="font-size:16px;color:${u.isBanned ? '#2e7d32' : '#c62828'}">${u.isBanned ? 'check_circle' : 'block'}</span>
        </button>
      </div>
    </div>
  `).join('');

  return `${hdr('', false)}
  <div class="container" style="padding-bottom:100px;background:var(--bg-secondary);min-height:100vh">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--space-lg);padding-top:var(--space-md)">
      <div>
        <h1 style="font-size:var(--text-2xl)">Admin Dashboard</h1>
        <p style="color:var(--text-secondary)">Manajemen Akun Pengguna</p>
      </div>
      <button class="btn btn-sm" style="background:white;border:1px solid #ddd" onclick="window.fa.signOut(window.firebaseAuth)"><span class="material-icons-round">logout</span></button>
    </div>
    
    <div class="search-bar" style="margin-bottom:var(--space-md)">
      <span class="material-icons-round search-icon">search</span>
      <input type="text" placeholder="Cari pengguna berdasarkan nama/email..." onkeyup="filterAdminUsers(this.value)">
    </div>

    <div id="adminUserList" style="display:flex;flex-direction:column;gap:8px">
      ${usersList}
    </div>
  </div>`;
}

function filterAdminUsers(val) {
  const q = val.toLowerCase();
  const list = document.getElementById('adminUserList');
  if (!list) return;
  const cards = list.querySelectorAll('.admin-user-card');
  cards.forEach(c => {
    const text = c.textContent.toLowerCase();
    c.style.display = text.includes(q) ? 'flex' : 'none';
  });
}

async function toggleBanUser(uid, isBanned) {
  if (!confirm(`Yakin ingin ${isBanned ? 'membuka blokir' : 'memblokir'} pengguna ini?`)) return;
  try {
    toast('Memproses...', 'info');
    await window.fs.updateDoc(window.fs.doc(window.firebaseDB, "users", uid), { isBanned: !isBanned });
    toast(isBanned ? 'Blokir dibuka' : 'Pengguna diblokir', 'success');
  } catch (error) {
    toast('Gagal: ' + error.message, 'error');
  }
}

async function adminResetPassword(email) {
  if (!email || email === 'undefined') { toast('Pengguna ini tidak memiliki email.', 'warning'); return; }
  if (!confirm('Kirim email reset password ke ' + email + '?')) return;
  try {
    await window.fa.sendPasswordResetEmail(window.firebaseAuth, email);
    toast('Email reset password terkirim!', 'success');
  } catch (error) {
    toast('Gagal: ' + error.message, 'error');
  }
}

async function handleForgotPassword() {
  const email = document.getElementById('authEmailInput')?.value.trim();
  if (!email) {
    toast('Masukkan email Anda di kolom email, lalu klik Lupa Password', 'warning');
    return;
  }
  try {
    await window.fa.sendPasswordResetEmail(window.firebaseAuth, email);
    toast('Email reset password telah dikirim ke ' + email, 'success');
  } catch(error) {
    toast('Gagal: ' + error.message, 'error');
  }
}
