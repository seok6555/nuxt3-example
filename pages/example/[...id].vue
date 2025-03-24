<template>
  <div>
    <h1>캐치올 동적 라우트 파라미터 페이지 입니다.</h1>
  </div>
  <div v-if="pending">Loading...</div>
  <div v-else-if="error">Error: {{ error.message }}</div>
  <div v-else>
    <p>기관명: <input type="text" v-model="data.result.fac_nam"></p>
    <p>전화번호: <input type="text" v-model="data.result.fac_tel"></p>
    <p>기관 분류: <input type="text" v-model="data.result.cat_nam"></p>
    <p>주소: <input type="text" size=50 v-model="data.result.fac_o_add"></p>
    <p>도로명 주소: <input type="text" size=50 v-model="data.result.fac_n_add"></p>
  </div>
  <NuxtLink to="/" @click="updatePost">수정</NuxtLink>
  <!-- <button @click="updatePost">수정</button> -->
</template>

<script setup>
const route = useRoute();
const config = useRuntimeConfig();
const apiBase = config.public.apiBase;

const { data, pending, error } = await useFetch(`${apiBase}/features/${route.params.id}`);

const featuresData = useState('featuresData');
// const featuresData = ref({
//   type: '',
//   geometry: {
//     type: '',
//     coordinates: ['', '']
//   },
//   properties: {
//     fac_nam: '',
//     fac_tel: '',
//     cat_nam: '',
//     fac_o_add: '',
//     fac_n_add: ''
//   },
// });

// 데이터를 가져오면 featuresData에 설정
watchEffect(() => {
  if (data.value) {
    featuresData.value = data.value;
  }
})

// 데이터 수정 함수
const updatePost = async () => {
  await $fetch('http://localhost:3001/features/' + route.params.id, {
    method: 'PUT',
    body: {
      type: featuresData.value.type,
      geometry: {
        type: featuresData.value.geometry.type,
        coordinates: featuresData.value.geometry.coordinates,
      },
      properties: {
        fac_nam: featuresData.value.properties.fac_nam,
        fac_tel: featuresData.value.properties.fac_tel,
        cat_nam: featuresData.value.properties.cat_nam,
        fac_o_add: featuresData.value.properties.fac_o_add,
        fac_n_add: featuresData.value.properties.fac_n_add,
      },
      id: route.params.id,
    }
  });

  // navigateTo('/');
  // 데이터 갱신
  refresh();
};
</script>

<style scoped></style>