<template>
  <div>
    Foo
    <button @click="handleClick">点我</button>
    {{this.$store.state.name}}
  </div>
</template>
<script>
export default {
  asyncData(store) { // This function is executed in the server code
    return store.dispatch('changeName')
  },
  mounted(){
    this.$store.dispatch('changeName')
  },
  methods: {
    handleClick: function(){
      alert('点了')
    }
  }
}
</script>