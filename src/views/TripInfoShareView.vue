<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div>
        <RouterLink :to="{name : 'createTripInfoShare'}">글 생성</RouterLink>
        <RouterLink :to="{name: 'tripInfoShareList'}">전체 글 보기</RouterLink>
    </div>
    <RouterView />
</template>

<style scoped>

</style>