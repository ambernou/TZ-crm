<script>
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      dataSearch: ''
    }
  },
  mounted() {
    // axios.get('http://localhost:3000/crm')
    //   .then(res => {
    //     // console.log('response: ', res.data._embedded.leads)
    //     this.$store.commit('getLeadsArray', res.data._embedded.leads)
    //   })
    //   .catch(e => console.log(e))
  },
  methods: {
    search_handler() {
      console.log('поиск: ', this.dataSearch)
      // axios.get('http://localhost:3000/query', this.dataSearch)
    //   .then(res => {
    //     // console.log('response: ', res.data._embedded.leads)
    //     this.$store.commit('getLeadsArray', res.data._embedded.leads)
    //   })
    //   .catch(e => console.log(e))
    }
  }
}
</script>

<template>
  <div class="m-5">
    <div class="container-fluid">
      <div class="row">
        <div class="col-4 col-sm-4 col-md-4 col-lg-3 col-xl-3">
          <h3 class="text-dark">Список сделок</h3>
        </div>
        <div class="col"></div>
        <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
          <form @submit.prevent="search_handler">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Поиск" aria-label="Поиск" aria-describedby="button-addon2" v-model="dataSearch" minlength="3" maxlength="10" required>
            <button class="btn btn-outline-secondary" type="submit" id="button-addon2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </button>
          </div>
          </form>
        </div>
      </div>
    </div>

    <table class="table shadow rounded mt-3">
      <thead>
        <tr>
          <th scope="col">Название</th>
          <th scope="col">Статус</th>
          <th scope="col">Ответственный</th>
          <th scope="col">Дата создания</th>
          <th scope="col">Бюджет</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(lead, index) in this.$store.state.leadsArray"
          :key="index">
          <td>{{ lead.name }}</td>
          <td>{{ lead.status }}</td>
          <td>{{ lead.responsible }}</td>
          <td>{{ new Date(lead.date * 1000).toLocaleDateString()}}</td>
          <td>{{ lead.price }}&#160;&#8381;</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
</style>
