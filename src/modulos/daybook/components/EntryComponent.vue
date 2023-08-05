<template>
  <div
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry', params: { id: 10 } })"
  >
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">4</span>
      <span class="mx-1 fs-5">Agosto</span>
      <span class="mx-2 fw-light">2023</span>
    </div>
    <div class="entry-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sit
      repudiandae fuga nostrum velit doloribus nihil maxime soluta, et aut
      corporis ex corrupti quam unde odio, alias culpa aperiam iste.
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s ease-in all;
  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s ease-in all;
  }
}
.entry-desciption {
  font-size: 12px;
}
</style>
