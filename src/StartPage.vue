<template>
  <div class="start">
    <div class="title">
      {{ highlightedCharacter }} in the Dark
    </div>
    <div class="character-chooser">
      <Donkey
        class="character"
        width="12rem"
        height="12rem"
        :color="highlightedCharacter === characterNames.donkey ? highlightColor : undefined"
        @mouseover.native="highlight(characterNames.donkey)"
        @click.native="select(characterNames.donkey)"
      />
      <Dinosaur
        class="character"
        width="12rem"
        height="12rem"
        :color="highlightedCharacter === characterNames.dinosaur ? highlightColor : undefined"
        @mouseover.native="highlight(characterNames.dinosaur)"
        @click.native="select(characterNames.dinosaur)"
      />
      <Duck
        class="character"
        width="12rem"
        height="12rem"
        :color="highlightedCharacter === characterNames.duck ? highlightColor : undefined"
        @mouseover.native="highlight(characterNames.duck)"
        @click.native="select(characterNames.duck)"
      />
    </div>
    <div>
      Select your character
    </div>
  </div>
</template>
<style scoped>
  .start {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .title {
    font-size: 3rem;
  }
  .character{
    cursor: pointer;
  }
</style>
<script>
import Donkey from './characters/Donkey.vue';
import Dinosaur from './characters/Dinosaur.vue';
import Duck from './characters/Duck.vue';
import { gamePageRoute } from './routing/routes.js';
import { setCharacter } from './state.js';
import names from './characters/names.js';

export default {
  name: 'IndexPage',
  components: { Donkey, Dinosaur, Duck },
  data() {
    return {
      characterNames: names,
      highlightedCharacter: '?????????',
      highlightColor: 'green',
      highlightTimer: undefined
    }
  },
  methods: {
    highlight(character) {
      this.highlightedCharacter = character;
    },
    select(character) {
      setCharacter(character);
      this.$router.push({ name: gamePageRoute.name });
    }
  }
}
</script>
