<script setup>

import axios from "axios";
import { ref } from "vue";

const tripInfo = ref({
    memberId: 0,
    title: "",
    contents: ""
})

const create = () => {
    console.log(JSON.stringify(tripInfo.value))
    axios.post("http://localhost:8080/tripInfoShare/create", JSON.stringify(tripInfo.value), {
        headers: {
          'Content-Type': 'application/json' // 요청의 Content-Type 설정
        }
      })
        .then((res) => console.log(res.data))
        .catch((error) => console.log(error))
}
</script>

<template>
    <div>
        <section class="h-100">
        <div class="container h-100">
            <div class="row justify-content-sm-center h-100">
                <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                    <div class="text-center my-5">
                    </div>
                    <div class="card shadow-lg">
                        <div class="card-body p-5">
                            <h1 class="fs-4 card-title fw-bold mb-4">게시글 생성</h1>
                            <form class="needs-validation" novalidate="" autocomplete="off">
                                <div class="mb-3">
                                    <label class="mb-2 text-muted" for="name">회원 식별자</label>
                                    <input id="name" type="text" class="form-control" name="name" required v-model="tripInfo.memberId">
                                </div>

                                <div class="mb-3">
                                    <label class="mb-2 text-muted" for="id">제목</label>
                                    <input id="id" type="text" class="form-control" name="id" required v-model="tripInfo.title">
                                </div>

                                <div class="mb-3">
                                    <div class="mb-2 w-100">
                                        <label class="text-muted" for="password">내용</label>
                                    </div>
                                    <input id="password" type="text" class="form-control" name="password" required v-model="tripInfo.contents">
                                </div>

                                <div class="d-flex align-items-center">
                                    <button id="updateBtn" type="button" class="btn btn-primary ms-auto" @click="create">
                                        확인
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </div>
</template>

<style scoped>
@font-face {
            font-family: 'NanumSquareNeo-Variable';
            src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/NanumSquareNeo-Variable.woff2') format('woff2');
            font-weight: bold;
            font-style: normal;
        }
        *, h1 {
            font-family: 'NanumSquareNeo-Variable';
          /* font-size: large; */
        }
</style>