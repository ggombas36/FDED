<script setup lang="ts">
import { Toaster } from 'vue-sonner';

</script>

<template>
  <div>
    <NuxtPage />
    <Toaster 
      position="bottom-right" 
      :offset="20" 
      :duration="2000" 
      :richColors="true" 
      :expand="true" 
      :closeButton="true" 
      :pauseWhenPageIsHidden="false"
      :pauseWhenHovered="false"
      dismissible
      class="custom-toaster" 
    />
  </div>
</template>

<style>
body {
  overflow: hidden;
}

.custom-toaster {
  position: fixed !important;
  z-index: 9999 !important;
  bottom: 20px !important;
  right: 20px !important;
  width: auto !important;
}

[data-sonner-toaster][data-position="bottom-right"] {
  bottom: 20px !important;
  right: 20px !important;
  position: fixed !important;
  display: flex !important;
  flex-direction: column !important;
  pointer-events: none !important;
  width: auto !important;
}

[data-sonner-toast] {
  position: relative !important;
  transform: none !important;
  opacity: 1 !important;
  pointer-events: auto !important;
  display: flex !important;
  min-width: 300px !important;
  margin-bottom: 20px !important;
}

[data-sonner-toast]:last-child {
  margin-bottom: 0 !important;
}

/* Override any transition/transform that might interfere with spacing */
[data-sonner-toast][data-mounted="true"] {
  transform: none !important;
  transition: none !important;
}
</style>