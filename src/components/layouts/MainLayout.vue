<template>
  <div class="vh-100 w-100">
    <header
      class="bg-primary text-white text-left py-3 px-3 d-flex align-items-center"
    >
      <span>
        <strong>
            <slot name="header">
                App
            </slot>
        </strong>
      </span>
    </header>
    <main class="overflow-auto">
        <slot></slot>
    </main>
    <footer
      class="bg-dark text-white text-left py-3 px-3 d-flex align-items-center"
    >
        <slot name="footer">
            &copy; 2024 App
        </slot>
    </footer>
  </div>
</template>

<style scoped>
header {
  height: 5vh;
}

main {
  height: 90vh;
}

footer {
  height: 5vh;
}
</style>
