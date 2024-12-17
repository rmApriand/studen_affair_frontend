<script>
    import '../app.scss';
    import Navbar from '../widgets/Navbar.svelte';
    import Footer from '../widgets/Footer.svelte';
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <Navbar></Navbar>
</nav>

<main>
    <slot></slot>
</main>

<Footer></Footer>