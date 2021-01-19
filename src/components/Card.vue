<template>
  <div class="card">
    <img
      class="card-img"
      :src="'img/' + card.symbol + '.png'"
    />
    
    <div class="card-content">
      <h1 class="card-title">{{ card.symbol }}</h1>
      <div class="card-data">
      <div><strong>Type:</strong> {{ card.card_type }}</div>
      <div><strong>Cat-color:</strong> {{ card.cat }}</div>
      <div><strong>Front:</strong> {{ card.front }}</div>
      <div><strong>Back:</strong> {{ card.back }}</div>
      <div><strong>Points:</strong> {{ card.points }}</div>
      </div>
    </div>
    <v-icon color="red" @click="deleteComment(card.id)" small>delete</v-icon>
  </div>
</template>

<script>
import {db} from '../plugins/firebase';

  export default {
    name: "Chat",
    props: ["card"],
    methods: {
      deleteComment(id) {
        if (!confirm('カードを削除してよろしいですか？')) {
          return
        }
        db.collection('cards').doc(id).delete()
      },
    },
  }
</script>

<style scoped>
.card {
  width: 24%;
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
.card-content {
  padding: 10px;
}
.card-title {
  font-size: 15px;
  margin-bottom: 5px;
  text-align: center;
  color: #333;
}
.card-data {
  display: flex;
  flex-wrap: wrap;
}
.card-data div {
  margin: 3px;
  font-size: 12px;
}
</style>