<script>
    import '../app.scss';
</script>

<!-- Navbar -->
<main class="container-fluid px-0">
    <div class="bg-light py-3 border-bottom bg-theme">
        <div class="container-fluid d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
                <img src="media/indonesia.png" alt="Indonesia Flag" class="me-2 flag" width="33" height="27">
                <img src="media/uk.png" alt="UK Flag" class="me-2 flag" width="33" height="27">
            </div>
            <div class="d-flex align-items-center">
            <a href="/about" class="text-decoration-none text-dark d-flex align-items-center me-3 text-white">
                <i class="bi bi-subtract me-1"></i> MyUMKO
            </a>
            <a href="/" class="text-decoration-none text-dark d-flex align-items-center me-3 text-white">
                |
            </a>
            <a href="/about" class="text-decoration-none text-dark d-flex align-items-center text-white">
                <i class="bi bi-star-fill me-1"></i> MyAkademik
            </a>
            </div>
        </div>
    </div>

    <nav class="navbar navbar-expand-lg bg-theme navbar-dark" style="border-bottom: 6px solid /aboutffd700;">
        <div class="container-fluid">
            <img src="media/logo.png" alt="UMS Logo" height="40">
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item dropdown">
                        <span
                            class="nav-link dropdown-toggle text-white"
                            id="dropdown1"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Belajar di UMKO
                        </span>
                        <ul class="dropdown-menu" aria-labelledby="dropdown1">
                            <li><a class="dropdown-item" href="/about">Kampus & Lokasi</a></li>
                            <li><a class="dropdown-item" href="/about">Fakultas</a></li>
                            <li><a class="dropdown-item" href="/about">Pimpinan UMS</a></li>
                            <li><a class="dropdown-item" href="/about">Profil UMS</a></li>
                            <li><a class="dropdown-item" href="/about">Prospektus</a></li>
                            <li><a class="dropdown-item" href="/about">Unit Layanan Kampus</a></li>
                        </ul>
                    </li>                      

                    <li class="nav-item dropdown">
                        <span class="nav-link dropdown-toggle text-white" id="dropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Riset
                        </span>
                        <ul class="dropdown-menu" aria-labelledby="dropdown2">
                            <li><a class="dropdown-item" href="/about">Kampus & Lokasi</a></li>
                            <li><a class="dropdown-item" href="/about">Fakultas</a></li>
                            <li><a class="dropdown-item" href="/about">Pimpinan UMS</a></li>
                            <li><a class="dropdown-item" href="/about">Profil UMS</a></li>
                            <li><a class="dropdown-item" href="/about">Prospektus</a></li>
                            <li><a class="dropdown-item" href="/about">Unit Layanan Kampus</a></li>
                        </ul>
                    </li>

                    <li class="nav-item dropdown">
                        <span class="nav-link dropdown-toggle text-white" id="dropdown3" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Tentang UMKO
                        </span>
                        <ul class="dropdown-menu" aria-labelledby="dropdown3">
                            <li><a class="dropdown-item" href="/about">Kampus & Lokasi</a></li>
                            <li><a class="dropdown-item" href="/about">Fakultas</a></li>
                            <li><a class="dropdown-item" href="/about">Pimpinan UMS</a></li>
                            <li><a class="dropdown-item" href="/about">Profil UMS</a></li>
                            <li><a class="dropdown-item" href="/about">Prospektus</a></li>
                            <li><a class="dropdown-item" href="/about">Unit Layanan Kampus</a></li>
                        </ul>
                    </li>

                    <li class="nav-item dropdown">
                        <span class="nav-link dropdown-toggle text-white" id="dropdown4" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Kehidupan Kampus
                        </span>
                        <ul class="dropdown-menu" aria-labelledby="dropdown4">
                            <li><a class="dropdown-item" href="/about">Kampus & Lokasi</a></li>
                            <li><a class="dropdown-item" href="/about">Fakultas</a></li>
                            <li><a class="dropdown-item" href="/about">Pimpinan UMS</a></li>
                            <li><a class="dropdown-item" href="/about">Profil UMS</a></li>
                            <li><a class="dropdown-item" href="/about">Prospektus</a></li>
                            <li><a class="dropdown-item" href="/about">Unit Layanan Kampus</a></li>
                        </ul>

                    <li class="nav-item dropdown">
                        <span class="nav-link dropdown-toggle text-white" id="dropdown5" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Jejaring
                        </span>
                        <ul class="dropdown-menu" aria-labelledby="dropdown5">
                            <li><a class="dropdown-item" href="/about">Kampus & Lokasi</a></li>
                            <li><a class="dropdown-item" href="/about">Fakultas</a></li>
                            <li><a class="dropdown-item" href="/about">Pimpinan UMS</a></li>
                            <li><a class="dropdown-item" href="/about">Profil UMS</a></li>
                            <li><a class="dropdown-item" href="/about">Prospektus</a></li>
                            <li><a class="dropdown-item" href="/about">Unit Layanan Kampus</a></li>
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
                            <li><a class="dropdown-item" href="/about">Kampus & Lokasi</a></li>
                            <li><a class="dropdown-item" href="/about">Fakultas</a></li>
                            <li><a class="dropdown-item" href="/about">Pimpinan UMS</a></li>
                            <li><a class="dropdown-item" href="/about">Profil UMS</a></li>
                            <li><a class="dropdown-item" href="/about">Prospektus</a></li>
                            <li><a class="dropdown-item" href="/about">Unit Layanan Kampus</a></li>
                        </ul>
                    </li>
                </ul>
            </div>                           
        </div>
    </nav>

    <section
        class="position-relative text-white bg-theme"
        style="height: 600px; background-image: url('/bg_gambar1.png'); background-size: cover; background-position: center;">
        <div class="container h-100 d-flex flex-column justify-content-center text-start custom-padding">
            <div class="bg-yellow text-black px-3 py-2">
                <h3 class="fw-bold mb-0">Beasiswa Kuliah</h3>
            </div>
            <p class="lead bg-theme-text">
                Tidak perlu khawatir tentang biaya kuliah. Temukan beragam beasiswa yang cocok dengan potensi dirimu.
            </p>
        </div>
    </section>
</main>