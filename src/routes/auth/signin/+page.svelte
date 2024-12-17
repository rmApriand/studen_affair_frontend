<script>
    import { onMount } from 'svelte';
    import api from '../api';

    let username = '';
    let password = '';
    let errorMessage = '';
    let successMessage = '';
    
    const login = async () => {
        if (!username || !password) {
            errorMessage = 'Username dan password harus diisi.';
            return;
        }

        try {
            const response = await api.post('/token/', { username, password });
            const { access, refresh } = response.data;

            // Simpan token ke sessionStorage
            sessionStorage.setItem('access_token', access);
            sessionStorage.setItem('refresh_token', refresh);

            errorMessage = '';
            alert('Login berhasil!');
        } catch (error) {
            // Cek error dari server (status code)
            if (error.response && error.response.status === 401) {
                errorMessage = 'Login gagal. Username atau password salah.';
            } else {
                errorMessage = 'Terjadi kesalahan saat mencoba login.';
            }
        }
    };
</script>

<style>
    .login-container {
        max-width: 400px;
        margin: 0 auto;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        background-color: #fff;
    }

    .login-container h2 {
        text-align: center;
        margin-bottom: 20px;
    }

    .form-input {
        margin-bottom: 15px;
    }

    .btn-login {
        width: 100%;
    }

    .alert {
        margin-top: 15px;
    }
</style>

<div class="login-container">
    <h2>Login</h2>
    
    {#if successMessage}
        <div class="alert alert-success" role="alert">
            {successMessage}
        </div>
    {/if}

    {#if errorMessage}
        <div class="alert alert-danger" role="alert">
            {errorMessage}
        </div>
    {/if}

    <form on:submit|preventDefault={login}>
        <div class="form-input">
            <label for="username" class="form-label">Username</label>
            <input type="text" id="username" class="form-control" bind:value={username} placeholder="Masukkan username" />
        </div>

        <div class="form-input">
            <label for="password" class="form-label">Password</label>
            <input type="password" id="password" class="form-control" bind:value={password} placeholder="Masukkan password" />
        </div>

        <button type="submit" class="btn btn-primary btn-login">Login</button>
    </form>

    <div class="text-center mt-3">
        <a href="/register" class="text-decoration-none">Belum punya akun? Daftar</a>
    </div>
</div>
