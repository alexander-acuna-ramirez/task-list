<template>
  <div class="vh-100 w-100">
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <div class="container-fluid">
            <a href="#" class="navbar-brand text-white">
                <i class="bi bi-box fs-4 text-white me-2"></i>
                <strong>
                    Task App
                </strong>
            </a>

            <button
             class="navbar-toggler"
             type="button"
             data-bs-toggle="collapse"
             data-bs-target="#navbarNav"
             aria-controls="navbarNav"
             aria-expanded="false"
             aria-label="Toggle Navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link text-white">Today</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link to="/all-tasks" class="nav-link text-white">All Tasks</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <main>
      <router-view></router-view>
    </main>
    <footer
      class="bg-dark text-white text-left py-3 px-3 d-flex align-items-center"
    >
      &copy; 2024 Task App
    </footer>
  </div>
</template>

<style scoped>
main {
  min-height: 90vh;
}
</style>
