<script setup>
import { PlusSquare } from 'lucide-vue-next';
import { Ellipsis } from 'lucide-vue-next';
</script>

<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
    <div class="bg-white border border-gris-foncer p-4 rounded-xl w-full h-auto min-h-56">
        <p class="  font-medium">Create catalog</p>
        <p class="text-text pb-6 pt-5  font-normal">Create new catalog to add products and generate content.</p>
        <bouton class="flex justify-center mt-7 py-3 w-full">
        <PlusSquare /> Create catalog
        </bouton>
    </div>
    <div class="bg-white border border-gris-foncer p-4 rounded-xl w-full h-auto min-h-56">
        <div class="flex justify-between items-start">
        <p class="pt-7 pb-8  text-2xl font-semibold">Christmas 2024</p>
        <div class="mt-5 opacity-60">
            <Ellipsis/>
        </div>
        </div>
        <div class="flex gap-2  flex-wrap">
        <card>Sneakers</card>
        <card>Boots</card>
        </div>
        <p class="text-text py-3 ">Created on 12.27.2024</p>
        <p class="py-3 font-medium">254 products</p>
    </div>

    <div class="bg-white border border-gris-foncer p-4 rounded-xl w-full h-auto min-h-56">
        <div class="flex justify-between items-start">
        <p class="py-3  text-2xl font-semibold ">
            A very big title for a catalog with many thing
        </p>
        <div class="mt-5 opacity-60">
            <Ellipsis/>
        </div>
        </div>
        <div class="flex gap-2 flex-wrap">
        <card>Sneakers</card>
        <card>Boots</card>
        <card>Belt</card>
        <card>Socks</card>
        <card>+3</card>
        </div>
        <p class="text-text py-3 ">Created on 12.27.2024</p>
        <p class="py-3  font-medium">254 products</p>
    </div>
    </div>
</template>