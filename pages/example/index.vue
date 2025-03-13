<template>
    <div>
        수정 페이지 입니다.ss
    </div>
</template>

<script setup>
const { data, pending, error, execute } = useFetch(`http://localhost:3001/features/${postId}`, {
    method: 'PUT',
    body: updatedPost,
    immediate: false // 자동 실행 방지
  });
</script>
<style scoped>

</style>