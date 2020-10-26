<template>
  <div id="app">
    <child ref="mychild" v-on:parentEvent="doSometing" :showText="false"/>
    <br/>
    <v-btn @click="invokeMethodOnChild">ok</v-btn>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue'

export default {
 components: {
      'child': ChildComponent,
 },
  data () {
    return {
    
    }
  },
  methods: {
    invokeMethodOnChild(){
      this.$refs.mychild.showTextonConsole('test')
    },
    doSometing(){
      console.log('Parent component says: doing something')
    }
  }
}
</script>

<style>
</style>
