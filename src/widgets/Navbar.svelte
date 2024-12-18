<main class="container-fluid px-0 navbar-expand-lg">
    <div class="border-bottom bg-theme p-3">
        <div class="container-fluid">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <img src="media/indonesia.png" alt="Indonesia Flag" class="me-2 flag" width="33" height="27">
                    <img src="media/uk.png" alt="UK Flag" class="me-2 flag" width="33" height="27"> 
                </div>
                <div class="d-flex align-items-center">
                    <a href="/about" class="text-decoration-none d-flex align-items-center me-3 text-white">
                        <i class="bi bi-subtract me-1"></i> MyUMKO
                    </a>
                    <span class="text-white mx-2">|</span>
                    <a href="/about" class="text-decoration-none d-flex align-items-center text-white">
                        <i class="bi bi-star-fill me-1"></i> MyAkademik
                    </a>
                </div>
            </div>
        </div>
    </div>

    <nav class="navbar navbar-expand-lg bg-theme navbar-dark">
        <div class="container-fluid">
            <div class="d-flex align-items-center">
                <a href="/" class="text-decoration-none">
                    <img src="media/logo.png" alt="UMS Logo" height="40">
                </a>
            </div>            
            <!-- svelte-ignore a11y_consider_explicit_label -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item dropdown">
                        <span class="nav-link dropdown-toggle" id="dropdown1" data-bs-toggle="dropdown">
                            Belajar di UMKO
                        </span>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/about">Vokasi</a></li>
                            <li><a class="dropdown-item" href="/about">Sarjana</a></li>
                            <li><a class="dropdown-item" href="/about">Profesi</a></li>
                            <li><a class="dropdown-item" href="/about">Magister</a></li>
                            <li><a class="dropdown-item" href="/about">Doktoral</a></li>
                            <li><a class="dropdown-item" href="/about">Program Internasional</a></li>
                            <li><a class="dropdown-item" href="/about">Beasiswa</a></li>
                            <li><a class="dropdown-item" href="/about">Kehidupan Mahasiswa</a></li>
                            <li><a class="dropdown-item" href="/about">Internasional Students</a></li>
                            <li><a class="dropdown-item" href="/about">Kampus Merdeka</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <span class="nav-link dropdown-toggle" id="dropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Riset
                        </span>
                        <ul class="dropdown-menu" aria-labelledby="dropdown2">
                            <li><a class="dropdown-item" href="/about">Penelitian</a></li>
                            <li><a class="dropdown-item" href="/about">Pusat Studi</a></li>
                            <li><a class="dropdown-item" href="/about">Pengabdian Masyarakat</a></li>
                            <li><a class="dropdown-item" href="/about">Penerbitan </a></li>
                        </ul>
                    </li>

                    <li class="nav-item dropdown">
                        <span class="nav-link dropdown-toggle" id="dropdown3" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Tentang UMKO
                        </span>
                        <ul class="dropdown-menu" aria-labelledby="dropdown3">
                            <li><a class="dropdown-item" href="/about">Kampus & Lokasi</a></li>
                            <li><a class="dropdown-item" href="/about">Fakultas</a></li>
                            <li><a class="dropdown-item" href="/about">Pimpinan UMKO</a></li>
                            <li><a class="dropdown-item" href="/about">Profil UMKO</a></li>
                            <li><a class="dropdown-item" href="/about">Prospektus</a></li>
                            <li><a class="dropdown-item" href="/about">Unit Layanan Kampus</a></li>
                            <li><a class="dropdown-item" href="/about">Satgas PPKS</a></li>
                            <li><a class="dropdown-item" href="/about">Keberlanjutan</a></li>
                            <li><a class="dropdown-item" href="/about">Berita</a></li>
                            <li><a class="dropdown-item" href="/about">Kegiatan</a></li>
                        </ul>
                    </li>

                    <li class="nav-item dropdown">
                        <span class="nav-link dropdown-toggle" id="dropdown4" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Kehidupan Kampus
                        </span>
                        <ul class="dropdown-menu" aria-labelledby="dropdown4">
                            <li><a class="dropdown-item" href="/about">Fasilitas</a></li>
                            <li><a class="dropdown-item" href="/about">Organisasi Mahasiswa</a></li>
                        </ul>

                    <li class="nav-item dropdown">
                        <span class="nav-link dropdown-toggle" id="dropdown5" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Jejaring
                        </span>
                        <ul class="dropdown-menu" aria-labelledby="dropdown5">
                            <li><a class="dropdown-item" href="/about">Industri dan Bisnis</a></li>
                            <li><a class="dropdown-item" href="/about">Alumni</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <!-- svelte-ignore a11y_consider_explicit_label -->
                        <a class="nav-link text-white" href="/about">
                            <i class="bi bi-search"></i>
                        </a>
                    </li>
                    
                    <li class="nav-item dropdown">
                        <span
                            class="nav-link dropdown-toggle text-white"
                            id="menuDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <i class="bi bi-grid"></i> 
                        </span>
                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="menuDropdown">
                            <li><a class="dropdown-item-kotak d-flex align-items-center" href="#about"><i class="bi bi-mortarboard fs-5 me-2"></i>Mahasiswa Aktif</a></li>
                            <li><a class="dropdown-item-kotak d-flex align-items-center" href="#about"><i class="bi bi-info-circle fs-5 me-2"></i>Staf Aktif</a></li>
                            <li><a class="dropdown-item-text-kotak d-flex justify-content-between align-items-center " href="/about">Belajar di UMS <i class="bi bi-chevron-right"></i></a></li>
                            <li><a class="dropdown-item-text-kotak d-flex justify-content-between align-items-center" href="#about">Riset <i class="bi bi-chevron-right"></i></a></li>
                            <li><a class="dropdown-item-text-kotak d-flex justify-content-between align-items-center" href="#about">Tentang UMS <i class="bi bi-chevron-right"></i></a></li>
                            <li><a class="dropdown-item-text-kotak d-flex justify-content-between align-items-center" href="#about">Kehidupan Kampus <i class="bi bi-chevron-right"></i></a></li>
                            <li><a class="dropdown-item-text-kotak d-flex justify-content-between align-items-center" href="#about">Jejaring <i class="bi bi-chevron-right"></i></a></li>
                        </ul>
                    </li>
                                        
                </ul>
            </div>
        </div>
    </nav>
</main>
