<template>
    <a :href="link" target="_blank">
        <article class="bg-grey-400 text-white p-3 rounded gap-2 h-full w-72 flex flex-col justify-between">
            <section class="space-y-2">
                <figure>
                    <img :src="img" alt="" class="w-full h-40 rounded-lg object-cover">
                </figure>
                <h4 class="truncate text-xs italic">{{ author }}</h4>
                <h3 class="text-lg font-bold">
                    {{ title }}
                </h3>
            </section>
            <span class="text-sm">{{ useTimestampToString(date) }}</span>
        </article>
    </a>
</template>

<script setup>
defineProps({
    link: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true
    },

    img: {
        type: String,
        default: ''
    },

    date: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    }
})
</script>