<template>
  <div>
    <h1>노인복지시설 목록</h1>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <div v-else>
      <table class="w-full border-collapse border border-gray-300">
        <thead>
          <tr class="bg-gray-200">
            <td>시설 명</td>
            <td>전화번호</td>
            <td>분류 명</td>
            <td>주소</td>
            <td>도로명주소</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="featuresData in data" v-bind:key="featuresData.id">
            <NuxtLink :to="'/example/' + featuresData.id">
              <td>{{ featuresData.fac_nam }}</td>
              <td>{{ featuresData.fac_tel }}</td>
              <td>{{ featuresData.cat_nam }}</td>
              <td>{{ featuresData.fac_o_add }}</td>
              <td>{{ featuresData.fac_n_add }}</td>
            </NuxtLink>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
    <div class="flex flex-1 justify-between sm:hidden">
      <a href="#"
        class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
      <a href="#"
        class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
    </div>
    <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <div>
        <nav class="isolate inline-flex -space-x-px rounded-md shadow-xs" aria-label="Pagination">
          <a href="#"
            class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
            <span class="sr-only">Previous</span>
            <ChevronLeftIcon class="size-5" aria-hidden="true" />
          </a>

          <a href="#" aria-current="page"
            class="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>
          <a href="#"
            class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
          <a href="#"
            class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
          <span
            class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-gray-300 ring-inset focus:outline-offset-0">...</span>
          <a href="#"
            class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
          <a href="#"
            class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">9</a>
          <a href="#"
            class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">10</a>
          <a href="#"
            class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
            <span class="sr-only">Next</span>
            <ChevronRightIcon class="size-5" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FeatureType } from '~/types/featureType';
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/20/solid'
const config = useRuntimeConfig();
const apiBase = config.public.apiBase;
// const page = useState<Number>('page', () => 10);
  const page = ref(10)

const { data, pending, error } = await useFetch<FeatureType[]>(`${apiBase}/features`);

// FeatureType[]타입 변수 features 선언. 빈 배열값으로 초기화.
// const features = useState<FeatureType[]>('features', () => []);

// watchEffect: 콜백 함수 안의 반응성 데이터에 변화가 감지되면 자동으로 반응하여 실행.
// watchEffect(() => {
//   if (data.value) {
//     features.value = data.value;
//     // refresh();
//   } else {
//     console.log("데이터를 받아오지 못함!");
//   }
// });

</script>

<style scoped>
@reference "tailwindcss";

thead td {
  @apply border text-center p-2;
}
</style>