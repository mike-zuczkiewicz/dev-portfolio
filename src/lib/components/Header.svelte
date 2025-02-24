<script lang="ts">
  import { goto } from "$app/navigation";
  import { Button } from "$components";

  function onclick() {
    goto('/#contact-form');
  }

</script>

<nav class="navbar default-margin">
    <a href="/" class="logo">NF</a>
    <div class="navbar-links">
        <a href="/#about-me" class="nav-link">About Me</a>
        <a href="/#my-work" class="nav-link">Work</a>
        <Button {onclick} className="nav-bar">Contact</Button>
    </div>
</nav>

<style>
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem 0;
    }
    .logo {
        font-size: 2.5rem;
        font-weight: 700;
    }
    .navbar-links {
        display: flex;
        gap: 4rem;
        align-items: center;
    }
    .nav-link:hover {
        text-decoration: underline;
    }
</style>