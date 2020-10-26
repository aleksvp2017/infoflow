<template>
    <div>
        <v-btn @click="callingDad">Calling dad</v-btn>
        {{ showText? 'Text' : ''}}
    </div>    
</template>

<script>
export default {
    props:['showText'],
    methods: {
        showTextonConsole(text){
            console.log('Child component says, this is the text1:', text)
            this.$store.commit('increment')
            console.log(this.$store.state.count) // -> 1            
        },
        callingDad(){
            this.$emit('parentEvent')
        }
    }
}
</script>

