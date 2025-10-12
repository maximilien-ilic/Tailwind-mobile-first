<script setup>
import { PlusSquare } from 'lucide-vue-next';
</script>

<template>
  <div class="border-b border-gris-foncer p-4 flex sm:flex-row justify-between sm:items-center">
    <p class="font-semibold text-2xl text-center ">My Catalogs</p>
    <bouton class="flex justify-center  w-1/2 sm:w-auto">
      <PlusSquare /> Create catalog
    </bouton>
  </div>
</template>
