<template>
  <div
    class="game"
    :style="cssVaribles"
  >
    <Donkey
      v-if="character === characterNames.donkey"
      :width="characterWidthPixels"
      :height="characterHeightPixels"
      @click.native="click"
      class="character"
    />
    <Dinosaur
      v-if="character === characterNames.dinosaur"
      :width="characterWidthPixels"
      :height="characterHeightPixels"
      @click.native="click"
      class="character"
    />
    <Duck
      v-if="character === characterNames.duck"
      :width="characterWidthPixels"
      :height="characterHeightPixels"
      @click.native="click"
      class="character"
    />
  </div>
</template>
<style scoped>
  .game {
    width: 100%;
    height: 100%;
    cursor: crosshair;
    background: radial-gradient(
      var(--flashlight-width) var(--flashlight-height) at var(--cursor-x) var(--cursor-y),
      rgba(0,0,0,0) 0%,
      rgba(0,0,0,0.5) 80%,
      rgba(0,0,0,1) 100%
    );
  }
  .character {
    position: absolute;
    top: var(--character-y);
    left: var(--character-x);
  }
</style>
<script>
import { getCharacter } from './state.js';
import Donkey from './characters/Donkey.vue';
import Dinosaur from './characters/Dinosaur.vue';
import Duck from './characters/Duck.vue';
import names from './characters/names.js';
import { successPageRoute } from './routing/routes';

export default {
  name: 'GamePage',
  components: { Donkey, Dinosaur, Duck },
  created() {
    const gameWidth = window.innerWidth,
          gameHeight = window.innerHeight;
    
    this.characterX = Math.floor(Math.random() * (gameWidth - this.characterWidth));
    this.characterY = Math.floor(Math.random() * (gameHeight - this.characterHeight));
  },
  mounted() {
    window.addEventListener('mousemove', this.mouseMoved);
  },
  destroyed() {
    window.removeEventListener('mousemove', this.mouseMoved);
  },
  data() {
    return {
      character: getCharacter(),
      characterNames: names,
      characterWidth: 80,
      characterHeight: 80,
      flaslightWidth: '300px',
      flaslightHeight: '300px',
      cursorX: '-1000px',
      cursorY: '-1000px',
      characterX: undefined,
      characterY: undefined
    }
  },
  computed: {
    characterWidthPixels() {
      return this.characterWidth + 'px';
    },
    characterHeightPixels() {
      return this.characterHeight + 'px';
    },
    cssVaribles() {
      return {
        '--flashlight-width': this.flaslightWidth,
        '--flashlight-height': this.flaslightHeight,
        '--cursor-x': this.cursorX,
        '--cursor-y': this.cursorY,
        '--character-x': this.characterX + 'px',
        '--character-y': this.characterY + 'px'
      };
    }
  },
  methods: {
    mouseMoved(event) {
      this.cursorX = event.pageX + 'px';
      this.cursorY = event.pageY + 'px';
    },
    click() {
      this.$router.push({ name: successPageRoute.name });
    }
  }
}
</script>
