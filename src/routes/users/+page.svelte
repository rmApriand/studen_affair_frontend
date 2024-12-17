<script>
    import { onMount } from 'svelte';
    import { apiFetch } from '../../api';

    let users = [];
    let errorMessage = '';

    const fetchUsers = async () => {
        try {
            users = await apiFetch('users/'); // Panggil endpoint API
        } catch (error) {
            errorMessage = error.message;
        }
    };

    // Panggil API saat komponen dimuat
    onMount(fetchUsers);
</script>

{#if errorMessage}
    <p style="color: red;">{errorMessage}</p>
{:else if users.length === 0}
    <p>Memuat daftar pengguna...</p>
{:else}
    <ul>
        {#each users as user}
            <li>{user.username} - {user.email}</li>
        {/each}
    </ul>
{/if}
