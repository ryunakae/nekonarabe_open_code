<template>
  <div class="home flex">
    <AddItem />
    <Card v-for="(data, index) in cards" :key="index" :card="data" />
  </div>
</template>

<script>
import Card from "../components/Card";
import AddItem from "../components/AddItem";
import {db} from '../plugins/firebase';

export default {
  name: 'Home',
  data() {
    return {
      cards: [],
    };
  },
  firestore() {
    return {
      cards: db.collection('cards').orderBy('createdAt')
    }
  },
  components: {
    Card,
    AddItem
  }
}
</script>

<style scoped>
body {
  background: #eee;
}
.flex {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
