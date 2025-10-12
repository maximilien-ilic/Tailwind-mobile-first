<script setup>
import { PlusSquare } from 'lucide-vue-next';
import { Ellipsis } from 'lucide-vue-next';
</script>

<template>
  <main class="flex h-screen w-screen flex-col lg:flex-row overflow-x-hidden">
    <menue />
    <div class="contenue bg-gris min-h-screen flex-1">
      <Header />
      <contenue/>
    </div>
  </main>
</template>
