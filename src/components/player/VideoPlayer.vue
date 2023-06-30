<template>
  <div class="player" ref="player">
    <video
      class="video-screen"
      src="../../assets/video.mp4"
      controls
      preload="auto"
      ref="video"
      allowfullscreen
      type="video/mp4"
    >
      <TimeControl />
      <VolumeControl />
    </video>
  </div>
</template>

<script setup lang="ts">
import TimeControl from './TimeControl.vue'
import VolumeControl from './VolumeControl.vue'
</script>

<style scoped>
.player {
  @apply w-full rounded-lg aspect-video relative object-cover cursor-pointer;
}
.video-screen {
  @apply aspect-video shadow-sm w-full h-full cursor-pointer bg-movie-black-200;
}
::-webkit-media-controls {
  display: none;
}
</style>
