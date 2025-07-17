<template>
  <div class="not-found">
    <div class="not-found-content">
      <div class="error-code">404</div>
      <h1>Page Not Found</h1>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <router-link to="/" class="neo-btn neo-btn-primary">
        Go Home
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
// NotFound.vue - 404 error page
</script>

<style scoped>
.not-found {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--background-color);
  padding: 2rem;
}

.not-found-content {
  text-align: center;
  max-width: 500px;
}

.error-code {
  font-size: 6rem;
  font-weight: var(--font-weight-extra-bold);
  color: var(--primary-color);
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.not-found-content h1 {
  font-size: 2rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.not-found-content p {
  color: var(--text-secondary);
  margin-bottom: 2rem;
  font-size: 1.125rem;
  line-height: 1.6;
}

.neo-btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  transition: all 0.3s ease;
}

/* Responsive design */
@media (max-width: 640px) {
  .error-code {
    font-size: 4rem;
  }
  
  .not-found-content h1 {
    font-size: 1.5rem;
  }
  
  .not-found-content p {
    font-size: 1rem;
  }
}
</style> 