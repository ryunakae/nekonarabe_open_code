<template>
  <div class="table">
    <div class="flex">
    <Deck />
    </div>
    <div class="flex">
    <Hand v-for="(data, index) in cards" :key="index" :card="data" />
    </div>
    <div>{{ id }}</div>
    <button @click="consoleLog()">console.log()</button>
  </div>
</template>

<script>
import Hand from "../components/Hand";
import Deck from "../components/Deck";
import {db} from '../plugins/firebase';
// import axios from "axios";

export default {
  Name: 'Table',
  props: ["id"],
  data() {
    return {
      cards: [],
    };
  },
  // firestore() {
  //   return {
  //     cards: db.collection('cards').where("belong_to", "==", this.id)
  //   }
  // },
  // computed: {
  //   cardsInHand() {
  //     return this.cards.where("belong_to", "==", this.id)
  //   }
  // },
  methods: {
    consoleLog() {
      console.log(this.id)
    },
    // firestore() {
    //   return {
    //     cards: db.collection('cards').where("belong_to", "==", 1)
    //   }
    // },
  },
  created() {
    // this.firestore()
    firestore() {
      return {
        cards: db.collection('cards').where("belong_to", "==", this.id)
      }
    },
  },
  components: {
    Hand,
    Deck
  },
};
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>