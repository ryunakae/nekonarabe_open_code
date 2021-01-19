<template>
  <div>
    <!--フォームの表示ボタン-->
    <v-btn
        color="blue"
        dark
        center
        fab
        fixed
        right
        @click="showCreateForm"
    >
      <v-icon>＋</v-icon>
    </v-btn>
    <v-dialog v-model="displayForm" max-width="500px">
      <!--コメント入力フォーム-->
      <v-card>
        <v-container>
          <h2>カード追加</h2>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
                v-model="inputSymbol"
                :rules="commentRules"
                label="Symbol"
                required
            ></v-text-field>
            <v-select
                v-model="selectedCardType"
                item-text="label"
                item-value="value"
                :items="cardTypes"
                :rules="commentRules"
                label="Card Type"
                required
                return-object
            />
            <v-select
                v-model="selectedCat"
                item-text="label"
                item-value="value"
                :items="cats"
                :rules="commentRules"
                label="Cat color"
                required
                return-object
            />
            <v-select
                v-model="selectedFront"
                item-text="label"
                item-value="value"
                :items="fronts"
                :rules="commentRules"
                label="Front"
                required
                return-object
            />
            <v-select
                v-model="selectedBack"
                item-text="label"
                item-value="value"
                :items="backs"
                :rules="commentRules"
                label="Back"
                required
                return-object
            />
            <v-text-field
                v-model="inputPoints"
                type="number"
                :rules="commentRules"
                label="Points"
                required
            ></v-text-field>
            
            <v-btn
                :disabled="!valid"
                @click="addCard"
            >
              投稿する
            </v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import {db} from '../plugins/firebase';

  export default {
    name: 'AddItem',
    data: () => ({
      // form入力データ
      inputSymbol: "",
      selectedCardType: { label: '' , value: '' },
      selectedCat:      { label: '' , value: '' },
      selectedFront:    { label: '' , value: '' },
      selectedBack:     { label: '' , value: '' },
      inputPoints: "",
      cardTypes: [
        { value: "initial", label: "初期" },
        { value: "nomal", label: "通常" },
      ],
      cats: [
        { value: "buchi", label: "ぶち" },
        { value: "shima", label: "しま" },
        { value: "ribbon", label: "リボン"},
        { value: "dokan", label: "土管"},
        { value: "fish", label: "お魚"},
        { value: "yeild", label: "一時停止"},
        { value: "back", label: "裏面"}
      ],
      fronts: [
        { value: "head", label: "頭" },
        { value: "almighty", label: "オールマイティ" },
        { value: "pink", label: "ピンク"},
        { value: "water", label: "水色"},
        { value: "back", label: "裏面"}
      ],
      backs: [
        { value: "tail", label: "尾" },
        { value: "almighty", label: "オールマイティ" },
        { value: "pink", label: "ピンク"},
        { value: "water", label: "水色"},
        { value: "head", label: "頭に付く" },
        { value: "back", label: "裏面"}
      ],
      // バリデーション
      valid: true,
      commentRules: [
        v => !!v || 'コメントは必須項目です',
      ],
      // Formダイアログの表示可否
      displayForm: false,
    }),
    methods: {
      // コメント追加
      addCard() {
        const now = new Date()
        // コメントをFirestoreへ登録
        db.collection('cards').add({
          symbol: this.inputSymbol,
          card_type: this.selectedCardType.value,
          cat: this.selectedCat.value,
          front: this.selectedFront.value,
          back: this.selectedBack.value,
          points: this.inputPoints,
          position_x: 0,
          position_y: 0,
          belong_to: 0,
          createdAt: now
        })
        // ダイアログを閉じる
        this.hideCreateForm()
      },
      // Formの初期化
      clear() {
        this.$refs.form.reset()
      },
      // Formダイアログの表示
      showCreateForm() {
        this.displayForm = true
      },
      //
      // Formダイアログの非表示
      hideCreateForm() {
        this.clear()
        this.displayForm = false
      },
    },
  }
</script>