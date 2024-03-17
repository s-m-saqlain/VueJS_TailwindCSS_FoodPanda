<script>
</script>

<template>
<p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
<nav>
 <RouterLink to="/">Home</RouterLink>
 <RouterLink to="/Registeration">Registeration</RouterLink>
 <RouterLink to="/Login">Login</RouterLink>
</nav>

<RouterView />
</template>

<style scoped>
</style>
