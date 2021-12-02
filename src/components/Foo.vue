<template>
  <div>
    Foo
    <button @click="handleClick">点我</button>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick: function(){
      alert('点了')
    }
  }
}
</script>