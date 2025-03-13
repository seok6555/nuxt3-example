<template>
    <div>캐치올 동적 라우트 파라미터 페이지 입니다.</div>
  </template>
  
  <script setup lang="ts">
  const route = useRoute();
  console.log(route.params.id);
  </script>
  
  <style scoped></style>
  