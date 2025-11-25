
  // POSTS DATA (dummy) — kamu bisa ganti/ambil dari API nanti
  document.addEventListener("DOMContentLoaded", function () {
  // Data posting dummy
  const posts = [
    {
      id: "post-1",
      title: "Mengenal Sistem Operasi: Konsep Dasar",
      date: "2025-10-08",
      summary: "Ringkasan singkat tentang apa itu sistem operasi, jenis - jenis, tujuan, dan fungsinya dalam komputer modern.",
      image: "sistemoperasi.jpg",
      content: `<p class="indent-paragraph">Sistem Operasi merupakan sebuah penghubung antara pengguna dari komputer dengan
                   perangkat keras komputer. Sebelum ada Sistem Operasi, orang hanya mengunakan komputer
                   dengan menggunakan sinyal analog dan sinyal digital. Seiring dengan berkembangnya
                   pengetahuan dan teknologi, pada saat ini terdapat berbagai sistem operasi dengan keunggulan
                   masing-masing. Untuk lebih memahami sistem operasi maka sebaiknya perlu diketahui
                   terlebih dahulu beberapa konsep dasar mengenai Sistem Operasi itu sendiri.<br><br>
                   
                <p class="indent-paragraph">Tujuan mempelajari Sistem Operasi agar dapat merancang sendiri serta dapat memodifikasi
                   sistem yang telah ada sesuai dengan kebutuhan kita, agar dapat memilih alternatif sistem,
                   memaksimalkan penggunaan sistem operasi dan agar konsep dan teknik sistem
                   operasi dapat diterapkan pada aplikasi-aplikasi lain.<br><br>

                <p class="indent-paragraph">Sistem komputer pada dasarnya terdiri dari empat komponen utama, yaitu perangkat-keras,
                          program aplikasi, sistem-operasi, dan para pengguna. Sistem Operasi berfungsi untuk
                          mengatur dan mengawasi penggunaan perangkat keras oleh berbagai program aplikasi serta
                          para pengguna.<br><br>

               <p><strong>fungsi Sistem Operasi:</strong><br>
                   1. Melakukan fungsi manajemen sistem berkas<br>
                   2. Mengendalikan berbagai sumber pada sistem, seperti disk dan printer<br>
                   3. Mengatur sejumlah pemakai yang menggunakan sistem bersamaan<br>
                   4. Membentuk penjadualan proses-proses di dalam sistem.<br><br>
                   
                <p><strong>Struktur Sistem Operasi:</strong><br>
                   1. Struktur Sederhana<br>
                   2. Sistem Berlapis (layered system)<br>
                   3. Mikro Kernel (Micro Kernel)<br>
                   4. Modular (Modules)<br>
                   5. Mesin Maya ( Virtual Machine )<br>
                   6. Client-Server Model<br>
                   7. Sistem Berorientasi Objek (Object-Oriented System)<br><br>
                   
                <p><strong>Sistem Komputer dibagi menjadi 4 Komponen :</strong><br>
                   Hardware, Sistem Operasi, Program Aplikasi dan User<br><br></p>
                   
                <p><strong>Jenis - Jenis Sistem Operasi:</strong><br>
                   1. Linux => Sistem operasi open source yang menggunakan kernel Linux, Memiliki berbagai 
                   distro (turunan) dengan karakteristik berbeda, seperti Ubuntu, Mint, RedHat, CentOS, 
                   edora, OpenSUSE, Mandrake (Mandriva), dan Debian.<br><br>
                   2. Windows => Sistem operasi yang diciptakan oleh Microsoft, Dirancang untuk pengguna awam, 
                   mudah digunakan, kompatibel dengan banyak perangkat, dan mendukung fitur Plug and Play.<br><br>
                   3. MacOS => Salah satu sistem operasi tingkat keamanannya yang tinggi. Dengan sistem dasar UNIX, MacOS dilengkapi dengan
                    fitur keamanan seperti Gatekeeper yang memeriksa aplikasi sebelum diunduh dan FileVault yang 
                    digunakan untuk mengenkripsi data pengguna.<br><br>
                   4. Android => Sistem operasi yang dirancang oleh Google berbasis kernel Linux untuk perangkat layar sentuh (tablet, smartphone).<br><br></p>`
                
    },
    {
      id: "post-2",
      title: "Manajemen Memori dan Buffering",
      date: "2025-10-15",
      summary: "Ringkasan penjelasan tentang Manajemen Memori dan Buffering pada sistem operasi.",
      image: "memory.jpg",
      content: `<p class="indent-paragraph">Manajemen Memori adalah komponen penting dalam sistem 
                operasi modern yang bertugas mengelola sumber daya memori secara efektif dan efisien. 
                Ini mencakup pengelolaan perangkat keras penyimpanan, proses, metode, dan perangkat 
                lunak yang terkait dengan memori. Tujuannya adalah memaksimalkan pemanfaatan memori 
                yang terbatas untuk program-program yang kompleks.<br><br>
                
                <p><strong>Ada dua sudut pandang dalam memahami memori:</strong><br>
                 1. Memori Fisik: Merujuk pada perangkat memori yang terpasang secara nyata pada sistem komputer (misalnya, RAM, cache, register) 
                    dengan spesifikasi kapasitas tertentu.<br><br>
                 2. Memori Logis: Mengacu pada pemetaan penyimpanan memori fisik oleh sistem operasi, sering disebut memori virtual yang dihasilkan 
                    CPU selama eksekusi program.<br><br>
                    
                <p><strong>Teknik pengelolaan memori meliputi:</strong><br>
                 1. Address Binding: Proses pemetaan alamat memori logis ke alamat memori fisik dan sebaliknya, yang dilakukan oleh MMU (Memory Management Unit). 
                    Ada tiga cara: Compile Time Binding, Load Time Binding, dan Execution Time Binding.<br><br>
                 2. Overlays: Cara memanfaatkan ruang memori yang terbatas agar dapat digunakan oleh program besar dengan menggunakan ruang memori secara bergantian. 
                    Diperlukan driver overlays untuk mengaturnya.<br><br>
                 3. Swapping: Teknologi untuk memindahkan proses atau data dari memori sekunder (penyimpanan permanen seperti harddisk) ke memori utama (swap in) 
                    atau sebaliknya (swap out) berdasarkan kebutuhan sistem operasi.<br><br>

                <p>_________________________________________________________________<br><br>
                    
                <p class="indent-paragraph">Buffer adalah area memori sementara yang digunakan untuk menampung data saat berpindah antara dua perangkat atau antara perangkat dan program.
                  I/O Buffering berarti penggunaan buffer ini agar CPU dan perangkat I/O (seperti hard disk, printer, jaringan) bisa bekerja dengan kecepatan masing-masing tanpa saling menunggu.<br><br>
                  
                <p><strong>Tujuan utamanya:</strong><br>
                 1. Menyelaraskan perbedaan kecepatan antara perangkat (producer) dan program (consumer).<br>
                 2. Meningkatkan efisiensi sistem dan mempercepat proses input/output.<br><br>
                 
                <p><strong>Alasan Buffering Diperlukan:</strong><br>
                 1. Menangani perbedaan kecepatan antara CPU dan perangkat I/O.<br>
                 2. Menyimpan data sementara agar perangkat bisa terus bekerja tanpa harus menunggu.<br>
                 3. Membantu saat ukuran data yang dikirim dan diterima berbeda (misalnya data dari jaringan vs data di memori).<br><br>
                 
                <p><strong>Jenis-jenis Teknik I/O Buffering:</strong><br>
                 1. Single Buffer (Buffer Tunggal)<br>
                 => Hanya ada satu buffer yang digunakan.<br>
                 => Saat buffer penuh, proses harus menunggu hingga buffer dikosongkan sebelum menerima data baru.<br>
                 => Kelebihan: sederhana dan mudah diimplementasikan.<br>
                 => Kekurangan: sering terjadi waktu tunggu (idle), efisiensi rendah.<br><br>
                 2. Double Buffer (Buffer Ganda).<br>
                 => Menggunakan dua buffer yang bekerja secara bergantian.<br>
                 => Saat satu buffer digunakan CPU, buffer lainnya bisa diisi oleh perangkat I/O.<br>
                 => Kelebihan: dapat melakukan proses dan I/O secara bersamaan (overlap).<br>
                 => Kekurangan: lebih kompleks dan memerlukan memori tambahan.<br><br>
                 3. Circular Buffer (Buffer Melingkar / Multi-Buffer)<br>
                 => Menggunakan beberapa buffer yang disusun melingkar seperti antrian (queue).<br>
                 => Data dapat terus mengalir tanpa berhenti selama masih ada ruang kosong di salah satu buffer.<br>
                 => Kelebihan: sangat efisien untuk aliran data terus-menerus (seperti streaming).<br>
                 => Kekurangan: paling rumit dalam pengelolaan dan sinkronisasi.<br><br></p>`
                
    },
    {
      id: "post-3",
      title: "Deadlock pada Sistem Operasi",
      date: "2025-10-15",
      summary: "Ringkasan penjelasan mengenai Deadlock, penyebab, dan solusi Deadlock pada sistem operasi.",
      image: "deadlock.jpg",
      content: `<p class="indent-paragraph">Deadlock adalah kondisi di mana dua proses atau lebih saling menunggu proses lain untuk melepaskan sumber daya yang sedang dipakai,
                 sehingga tidak ada kemajuan dalam pekerjaan proses-proses tersebut. Ini sering disebut sebagai kebuntuan proses. Deadlock terjadi ketika banyak proses membagi 
                 sumber daya yang hanya boleh diubah oleh satu proses saja dalam satu waktu.<br><br>

                <p><strong>Model Sistem Deadlock:</strong><br>
                <p class="indent-paragraph">Sistem deadlock dimodelkan dengan sekumpulan proses (P) dan sekumpulan tipe sumber daya (R). Sebuah proses menggunakan sumber daya 
                 dengan urutan:<br><br>
                 1. Mengajukan permohonan (request): Proses meminta sumber daya. Jika tidak tersedia, proses menunggu.<br><br>
                 2. Menggunakan sumber daya (use): Proses menggunakan sumber daya.<br><br>
                 3. Melepaskan sumber daya (release): Proses melepaskan sumber daya setelah selesai digunakan.<br><br> 

                 <p><strong>Jenis Sumber Daya (Resource):</strong><br>
                 1. Preemptable: Sumber daya yang dapat diambil dari proses tanpa efek samping (misalnya, memori).<br><br>
                 2. Non-Preemptable: Sumber daya yang tidak dapat diambil dari proses yang sedang memakainya karena akan menyebabkan kegagalan (misalnya, printer). Sumber daya 
                 jenis ini berpotensi menyebabkan deadlock.<br><br>

                 <p><strong>Penyebab Deadlock:</strong><br>
                 1. Mutual Exclusion: Hanya satu proses yang boleh memakai sumber daya pada satu waktu.<br><br>
                 2. Hold and Wait: Proses yang sedang memegang satu sumber daya boleh meminta sumber daya lain yang belum dilepaskan.<br><br>
                 3. No Preemption: Sumber daya yang dipegang sebuah proses tidak boleh diambil paksa oleh proses lain.<br><br> 
                 4. Circular Wait: Terdapat rantai proses di mana setiap proses menunggu sumber daya yang dipegang oleh proses berikutnya dalam rantai tersebut.<br><br>
                 
                 <p><strong>Solusi Deadlock (Tiga Metode):</strong><br>
                 1. Prevention (Pencegahan): Mencegah terjadinya salah satu dari empat kondisi penyebab deadlock.<br>
                 => Mencegah Mutual Exclusion (sulit dihindari untuk sumber daya yang tidak dapat dibagi).<br>
                 => Mencegah Hold and Wait (memaksa proses untuk meminta semua sumber daya sekaligus).<br>
                 => Mencegah No Preemption (mengambil sumber daya dari proses yang sedang menunggu).<br>
                 => Mencegah Circular Wait (menetapkan urutan total pada semua tipe sumber daya).<br><br>
                 2. Avoidance (Penghindaran): Menggunakan informasi tambahan tentang bagaimana sumber daya diminta untuk memastikan sistem 
                 tidak pernah masuk ke unsafe state.<br>
                 => Safe State: Keadaan sistem di mana ada cara untuk memenuhi semua permintaan sumber daya tanpa menghasilkan deadlock. 
                 Algoritma Banker adalah salah satu metode penghindaran deadlock.<br><br>
                 3. Detection (Pendeteksian): Membiarkan deadlock terjadi, lalu mendeteksi dan memulihkannya.<br>
                 => Deadlock dapat dideteksi menggunakan resource allocation graph. Jika ada siklus dalam grafik dan semua sumber daya memiliki instans tunggal,
                    maka terjadi deadlock.<br><br></p>`
    },
    {
      id: "post-4",
      title: "Sistem Keamanan pada Sistem Operasi",
      date: "2025-10-22",
      summary: "Analisis keamanan pada sistem operasi linux, Windows, dan Mac OS.",
      image: "keamanan.png",
      content: `<p class="indent-paragraph">Sistem operasi modern menyediakan berbagai fitur keamanan untuk melindungi data pengguna dan sistem dari ancaman. 
                Setiap sistem operasi memiliki pendekatan dan fitur uniknya sendiri.<br><br>

                <p><strong>Keamanan pada Sistem Operasi Microsoft Windows</strong><br>
                 1. BitLocker Drive Encryption: Fitur enkripsi seluruh disk yang melindungi data dengan mengenkripsi seluruh partisi. 
                    Menggunakan algoritma AES dan dapat beroperasi dalam tiga mode:<br>
                 => Transparent Operation Mode (TPM-only): Memanfaatkan Trusted Platform Module (TPM) untuk memberikan keamanan tinggi tanpa 
                    intervensi pengguna saat booting.<br><br>
                 => User Authentication Mode: Memerlukan autentikasi pengguna (PIN, password, USB key) saat booting.<br><br>
                 => USB Key Mode (SK/RK-only): Menggunakan media USB berisi Startup Key atau Recovery Key sebagai pengganti TPM.<br><br>
                 2. Windows Firewall: Sistem perangkat lunak yang mengatur dan mengontrol lalu lintas jaringan, mengizinkan yang aman dan mencegah yang tidak aman. 
                    Dapat memfilter koneksi masuk dan keluar, serta memberitahu pengguna tentang koneksi mencurigakan.<br><br>
                 3. Windows Defender: Perangkat lunak Antispyware bawaan yang melindungi dari spyware dan malware. Bekerja dengan real-time protection dan pemindaian berkala, 
                    mengarantina atau menghapus ancaman.<br><br> 
                 4. Windows Update: Memastikan sistem operasi selalu diperbarui dengan patch keamanan terbaru dari Microsoft untuk menambal celah kerentanan.<br><br>
                 5. User Account Control (UAC): Membantu mencegah perubahan tidak sah pada komputer dengan meminta izin setingkat administrator sebelum program berbahaya
                    dijalankan atau pengaturan penting diubah.<br><br>

                <p><strong>Keamanan pada Sistem Operasi Linux</strong><br>
                1. Secure Shell (SSH): Menggunakan kriptografi kunci publik untuk mengamankan komunikasi antara dua host, otentikasi jarak jauh, dan transfer file. Mendukung berbagai algoritma enkripsi 
                   (TripleDES, BlowFish, IDEA, RSA). OpenSSH adalah implementasi umum di Linux.<br><br>
                2. Password: Saat login, kata sandi pengguna dienkripsi dan dibandingkan dengan data yang tersimpan di sistem (/etc/passwd dan /etc/shadow) untuk autentikasi.<br><br>
                3. Netfilter (Firewall): Satu set aplikasi yang memungkinkan kernel Linux mencegat dan memanipulasi paket jaringan. Iptables adalah aplikasi yang digunakan untuk mengkonfigurasi Netfilter, memfilter, 
                   dan menentukan arah aliran paket data.<br><br>

                <p><strong>Keamanan pada Sistem Operasi MacOS</strong><br>
                1. FileVault: Fitur enkripsi disk penuh yang mengenkripsi seluruh startup disk Mac menggunakan enkripsi XTS-AES-128 dengan kode 256-bit, mencegah akses tidak sah ke data.<br><br>
                2. Firewall MacOS: Sistem firewall yang dirancang untuk mencegah akses jaringan yang tidak diinginkan, baik dari luar maupun ke dalam jaringan.<br><br>
                3. Firmware Password: Kata sandi yang mencegah booting dari disk eksternal atau ke mode pemulihan tanpa izin, menambah lapisan keamanan fisik.<br><br>
                4. Anti-Phishing: Melindungi pengguna Mac OS dari situs web penipuan yang mencoba mendapatkan informasi sensitif seperti kata sandi atau kartu kredit.<br><br>
                 </p>`
    },
    {
      id: "post-5",
      title: "Instalasi Ubuntu dan Web Server.",
      date: "2025-11-20",
      summary: "Tutorial instalasi Ubuntu agar memudahkan seseorang yang ingin mencoba belajar Ubuntu. ",
      image: "ubuntu.jpeg",
      content: `<p><strong>Setting dan konfigurasi Virtual Box</strong><br><br>
                 1. Buat Hard disk Virtual dan jangan lupa memberi nama pada VM Name.<br><br>
                 2. Virtual Harddisk Size: Minimal 20 GB, rekomendasi 40 GB.<br><br>
                 3. Processor minimal CPU: 2 cores.<br><br> 
                 4. Base Memory minimal 4096 MB/4GB.<br><br>
                 5. Video Memory: 128 MB. <br><br>
                 6. Pengaturan Storage : Klik ikon Empty di bawah Controller: IDE. -> Klik ikon CD di kanan lalu pilih Choose a disk file.<br><br>
                 7. Klik OK lalu jalankan dengan mengklik Start. <br><br>

                <p><strong>Masuk ke instalasi Ubuntu</strong><br><br>
                1. Pilih Try or Install Ubuntu.<br><br>
                2. Pilih Bahasa.<br><br>
                <img src="gambar1.png" alt="Ubuntu Install" ><br><br>
                3. “Erase disk and install Ubuntu” (hanya menghapus disk virtual, bukan laptop Anda). <br><br>
                <img src="gambar2.png" alt="Ubuntu Install" ><br><br>
                4. Buat user dan password.<br><br>
                <img src="gambar3.png" alt="Ubuntu Install" ><br><br>
                5. Tunggu instalasi selesai, kemudian pilih Restart sekarang.<br><br>
                <img src="gambar4.png" alt="Ubuntu Install" ><br><br>

                <p><strong>Menginstall Web Server dan mengkoneksikan file coding ke Web Server.</strong><br><br>
                1. Klik kanan lalu buka di Terminal.<br><br>
                2. Update sistem dan install Apache.<br><br>
                <img src="gambar5.png" alt="Ubuntu Install" ><br><br>
                3. Cek apakah Apache sudah aktif atau belum.<br><br>
                <img src="gambar6.png" alt="Ubuntu Install" ><br><br>
                4. Pindahkan file Coding ke direktori website, karena file Coding kali ini ada Desktop jadi kode tersebut seperti ini.<br><br>
                <img src="gambar7.png" alt="Ubuntu Install" ><br><br>
                5. Lalu ketik ini di Browser “http://localhost/Nama folder coding/"<br><br>
                <img src="gambar8.png" alt="Ubuntu Install" ><br><br>
                6. File codingan sudah tampil di Browser.<br><br>
                <img src="gambar9.png" alt="Ubuntu Install" ><br><br>
                 </p>`
    }
    
  ];

  // Element references
  const homeSection = document.getElementById("home");
  const postDetailSection = document.getElementById("post-detail");
  const anggotaSection = document.getElementById("anggota");
  const pustakaSection = document.getElementById("pustaka");
  const allSections = [homeSection, postDetailSection, anggotaSection, pustakaSection];
  const postsListEl = document.getElementById("posts-list");

  // Render daftar posting
  function renderPosts() {
    postsListEl.innerHTML = "";
    posts.forEach(post => {
      const card = document.createElement("div");
      card.className = "post-card";
      card.innerHTML = `
        <img src="${post.image}" alt="${escapeHtml(post.title)}">
        <div class="post-body">
          <h3>${escapeHtml(post.title)}</h3>
          <div class="post-meta">${formatDate(post.date)}</div>
          <p class="summary">${escapeHtml(post.summary)}</p>
          <button class="read-btn" data-id="${post.id}">Baca Selengkapnya</button>
        </div>`;
      postsListEl.appendChild(card);
    });

    document.querySelectorAll(".read-btn").forEach(btn => {
      btn.addEventListener("click", function () {
        const id = this.getAttribute("data-id");
        openPost(id);
      });
    });
  }

  // Helper functions
  function escapeHtml(t) {
    const d = document.createElement("div");
    d.appendChild(document.createTextNode(t));
    return d.innerHTML;
  }
  function formatDate(iso) {
    const d = new Date(iso);
    return d.toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" });
  }

  // Open post detail
  function openPost(id) {
    const post = posts.find(p => p.id === id);
    if (!post) return;

    document.getElementById("post-title").textContent = post.title;
    document.getElementById("post-meta").textContent = formatDate(post.date);
    document.getElementById("post-image").src = post.image;
    document.getElementById("post-content").innerHTML = post.content;
    document.getElementById("post-detail").classList.toggle("post-5", post.id === "post-5");



    transitionSections(homeSection, postDetailSection, "right");
  }

  // Back button
  document.getElementById("back-to-list").addEventListener("click", () => {
    transitionSections(postDetailSection, homeSection, "left");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Navigation handlers
  document.getElementById("nav-home-link").addEventListener("click", (e) => {
    e.preventDefault(); transitionSections(getVisibleSection(), homeSection, "left");
  });
  document.getElementById("nav-about-link").addEventListener("click", (e) => {
    e.preventDefault(); transitionSections(getVisibleSection(), anggotaSection, "right");
  });
  document.getElementById("nav-contact-link").addEventListener("click", (e) => {
    e.preventDefault(); transitionSections(getVisibleSection(), pustakaSection, "right");
  });
  document.getElementById("nav-home").addEventListener("click", (e) => {
    e.preventDefault(); transitionSections(getVisibleSection(), homeSection, "left");
  });
  

  // Section transition logic
  function transitionSections(fromEl, toEl, direction) {
    if (!fromEl || fromEl === toEl) return;

    const outClass = (direction === "right") ? "slide-out-left" : "slide-out-right";
    const inClass = (direction === "right") ? "slide-in-right" : "slide-in-left";

    fromEl.classList.remove("slide-in-left", "slide-in-right");
    fromEl.classList.add(outClass);

    fromEl.addEventListener("animationend", function handler() {
      fromEl.classList.add("hidden");
      fromEl.classList.remove(outClass);
      fromEl.removeEventListener("animationend", handler);

      toEl.classList.remove("hidden");
      toEl.classList.add(inClass);

      toEl.addEventListener("animationend", function endHandler() {
        toEl.classList.remove(inClass);
        toEl.removeEventListener("animationend", endHandler);
      }, { once: true });
    }, { once: true });
  }

  function getVisibleSection() {
    return allSections.find(s => !s.classList.contains("hidden"));
  }

  // Footer year
  document.getElementById("footer-year").textContent = new Date().getFullYear();

  // Init
  renderPosts();
});
