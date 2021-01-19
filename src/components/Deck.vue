<template>
  <div class="deck">
    <img
      class="card-img"
      :src="'../img/' + card.symbol + '.png'"
    />
  </div>
</template>

<script>
import {db} from '../plugins/firebase';
export default {
  Name: 'Deck',
  data() {
    return {
      card: {},
    };
  },
  firestore() {
    return {
      card: db.collection('cards').doc('xKB7luToQnHIn3n4PiWa')
    }
  },
}
</script>

<style scoped>
.deck {
  width: 15%;
  margin: 30px 0;
  background: #fff;
  border-radius: 50px;
}
.card-img {
  border-radius: 10px;
  max-width: 100%;
  height: auto;
  box-shadow: 0 2px 5px #ccc;
}
</style>