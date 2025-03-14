<template>
    <div>
        <h1>노인복지시설 목록</h1>
        <table>
            <thead>
                <tr>
                    <td>시설 명</td>
                    <td>전화번호</td>
                    <td>분류 명</td>
                    <td>주소</td>
                    <td>도로명주소</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="post in data" v-bind:key="post.id">
                    <td>
                        <NuxtLink :to="'/example/' + post.id">{{ post.properties.fac_nam }}</NuxtLink>
                    </td>
                    <td>{{ post.properties.fac_tel }}</td>
                    <td>{{ post.properties.cat_nam }}</td>
                    <td>{{ post.properties.fac_o_add }}</td>
                    <td>{{ post.properties.fac_n_add }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
const { data, pending, error } = useFetch('http://localhost:3001/features');
</script>


<style scoped></style>