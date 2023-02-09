<template>
    <div class="banner flex p-8  w-full h-[400px] rounded-2xl drop-shadow-xl cursor-pointer">
      <div class="text-white self-end banner-info ">
          <h1 class="text-4xl mb-2 font-bold">{{ bannerMock.title }}</h1>
          <p>{{ bannerMock.plot }}</p>
          <div class="mt-6 flex justify-between w-[20%]">
              <span>{{ bannerMock.year }}</span>
              <span>{{ bannerMock.genre }}</span>
              <span>{{ bannerMock.durations }}</span>
          </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { Banner } from '../types/banner';
  
  
  const bannerMock:Banner = {
    title: 'Interstellar',
    plot: 'When drought, dust storms and the extinction of plants lead humanity to a food crisis, a team of researchers and scientists goes through a wormhole (which supposedly connects the regions of space-time over a long distance) on a journey to surpass the previous limitations for human space travel and find a planet with suitable conditions for humanity.',
    year: '2014',
    id: '1',
    genre: 'Fiction',
    durations: '1h 53min',
    poster: 'https://i.ytimg.com/vi/U1MWMtQ8zc4/maxresdefault.jpg'
  }
  
  const bg= `url(${bannerMock.poster})`
  </script>
  
  <style scoped>
  .banner{
      position: relative;
      background: linear-gradient(rgba(255,255,255,0), #262c31d9),v-bind(bg) no-repeat center ;
      background-size: cover;
      
  }
  
  </style>
  