<template>
  <div class="hand">
    hand
    <img
      class="card-img"
      :src="'../img/' + card.symbol + '.png'"
    />
  </div>
</template>

<script>
export default {
  name: "Hand",
  props: ["card"],
}
</script>

<style scoped>
.hand {
  width: 9%;
  margin: 30px 0;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
}
.card-img {
  border-radius: 5px 5px 0 0;
  max-width: 100%;
  height: auto;
}
</style>