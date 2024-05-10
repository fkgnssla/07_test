<script setup>
import TripInfoShareListItem from "@/components/TripInfoShareListItem.vue"
import { ref, onMounted } from "vue";
import axios from "axios";

const tripInfos = ref([])

onMounted(() => {
    axios.get("http://localhost:8080/tripInfoShare")
        .then((res) => tripInfos.value = res.data)
        .catch((error) => console.log(error))
})

</script>

<template>
    <div>
        <table class="table table-striped">
            <tr class="text-center">
                <th>번호</th>
                <th>글쓴이</th>
                <th>제목</th>
                <th>조회수</th>
            </tr>
            <tbody class="text-center">
                <TripInfoShareListItem v-for="tripInfo in tripInfos" :tripInfo="tripInfo" />
            </tbody>
        </table>
    </div>
</template>

<style scoped>

</style>