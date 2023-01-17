<template>
    <div class="bg-black text-white px-40 py-8">
        <div class="flex flex-wrap gap-2 mx-auto">
            <card-article
                v-for="item of listNews.articles"
                :key="item.title"
                :link="item.link"
                :author="item.authors"
                :title="item.title"
                :date="item.published_date"
                :img="item.media"
            />
        </div>
    </div>
</template>

<script setup>
const route = useRoute()
const { data: listNews, error, pending } = await useFetch('https://api.newscatcherapi.com/v2/latest_headlines', { 
    pick: ['articles'],
    query: {
        lang: route.query.lang || 'en',
        countries: route.query.countries || [],
        topic: route.query.topic || 'news',
        when: '24h',
        page_size: 7,
    },
    headers: {
        'x-api-key': useRuntimeConfig().public.newsCatcherKey
    } 
})

</script>