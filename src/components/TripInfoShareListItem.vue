<script setup>
defineProps({ tripInfo: Object });
</script>

<template>
  <tr>
    <th>{{ tripInfo.id }}</th>
    <td>{{ tripInfo.name }}</td>
    <td>{{ tripInfo.title }}</td>
    <td>{{ tripInfo.views }}</td>
  </tr>
</template>

<style scoped>
a {
  text-decoration: none;
}
</style>
