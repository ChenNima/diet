<template>
  <v-app id="inspire">
    <input ref='copyInput' id="copyInput" :value="menuText" />
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Menu</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <menu-table :result="result" v-if="result"/>
              </v-card-text>
              <v-card-actions>
                <!-- <v-spacer></v-spacer> -->
                <v-switch
                  label="奇数天"
                  v-model="isOdd"
                ></v-switch>
                <v-switch
                  label="包括周五"
                  v-model="includeFri"
                  v-if="isOdd"
                ></v-switch>
                <v-btn color="primary" @click="generate">generate</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import menu from './lib/menu';
  import Vue from 'vue';
  import MenuTable from './components/MenuTable';

  export default {
    data: () => ({
      result: null,
      isOdd: false,
      includeFri: false
    }),
    methods: {
      async generate() {
        const result = menu.generate({ isOdd: this.isOdd, includeFri: this.includeFriComputed });
        Vue.set(this, 'result', result)
        setTimeout(() => {
          window.Clipboard.copy(this.menuText);
        }, 0)
      },
      copy() {
        const copyInput = this.$refs.copyInput;
        copyInput.select();
        document.execCommand("copy");
      }
    },
    computed: {
      includeFriComputed() {
        return this.isOdd && this.includeFri
      },
      menuText() {
        if (!this.result) {
          return '';
        }
        return this.result.reduce((ret, { date, one, two }) => {
          return `${ret}${date}: ${one}, ${two};\n `
        }, '')
      }
    },
    components: {
      MenuTable
    },
    props: {
      source: String
    }
  }
</script>

<style>
#copyInput {
  opacity: 0;
}
</style>
