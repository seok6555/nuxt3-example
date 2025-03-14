<template>
  <div>
    <p>캐치올 동적 라우트 파라미터 페이지 입니다.</p>
  </div>
  <div v-if="pending">Loading...</div>
  <div v-else-if="error">Error: {{ error.message }}</div>
  <div v-else>
    <p>기관명: <input type="text" v-model="data.properties.fac_nam"></p>
    <p>전화번호: <input type="text" v-model="data.properties.fac_tel"></p>
    <p>기관 분류: <input type="text" v-model="data.properties.cat_nam"></p>
    <p>주소: <input type="text" size=50 v-model="data.properties.fac_o_add"></p>
    <p>도로명 주소: <input type="text" size=50 v-model="data.properties.fac_n_add"></p>
  </div>
  <button @click="updatePost">수정</button>
</template>

<script setup>
const route = useRoute();
const { data, pending, error } = useFetch('http://localhost:3001/features/' + route.params.id);

const featuresData = ref({
  type: '',
  geometry: {
    type: '',
    coordinates: ['', '']
  },
  properties: {
    fac_nam: '',
    fac_tel: '',
    cat_nam: '',
    fac_o_add: '',
    fac_n_add: ''
  },
});

// 데이터를 가져오면 featuresData에 설정
watchEffect(() => {
  if (data.value) {
    featuresData.value.type = data.value.type // API 데이터의 `type` 속성
    featuresData.value.geometry.type = data.value.geometry.type // API 데이터의 `geometry.type` 속성
    featuresData.value.geometry.coordinates = data.value.geometry.coordinates // API 데이터의 `geometry.coordinates` 속성
    featuresData.value.properties.fac_nam = data.value.properties.fac_nam
    featuresData.value.properties.fac_tel = data.value.properties.fac_tel
    featuresData.value.properties.cat_nam = data.value.properties.cat_nam
    featuresData.value.properties.fac_o_add = data.value.properties.fac_o_add
    featuresData.value.properties.fac_n_add = data.value.properties.fac_n_add
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

  navigateTo('/');
  // 데이터 갱신
  refresh();
};
</script>

<style scoped></style>