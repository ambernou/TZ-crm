<script>
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      data: ''
    }
  },
  mounted() {
    console.log('create')
    axios.post('http://localhost:3000/crm', '123')
      .then(res => console.log('response: ', res))
      .catch(e => console.log(e))
    console.log('123')
  }
}
</script>

<template>
  <div>
    <h3>get rcm</h3>
  </div>
</template>

<style scoped>
</style>
