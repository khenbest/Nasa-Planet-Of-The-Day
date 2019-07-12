<template>
  <div class="about container-fluid">
    <div class="row justify-content-center vh-50">
      <div class="form-row mb-4">
        <div class="col-12">
          <input v-model="searchDate" placeholder="Leave empty for random" type="date" class="inline-form ">
          <button class="inline-form  btn btn-outline-dark" @click="manualGetPictureOfDay">Get
            Picture!</button>
          <div class="form-row mb-2 mt-2">

            <div class="col-12">
              <button class="inline-form form-control btn btn-outline-dark" @click="getDate()">Surprise
                Me!</button>
            </div>
          </div>
        </div>


      </div>
      <div class="row justify-content-center">
        <div class="col-8">
          <h1>{{pictureOfDay.title}}</h1>
          <img :src="pictureOfDay.hdurl" class="img-fluid " alt="Picture Of The Day">
          <h6>{{pictureOfDay.explanation}}</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import moment from 'moment'

  export default {
    name: "pictureOfDay",
    props: [],
    data() {
      return {
        searchDate: ''
      }
    },
    computed: {
      pictureOfDay() {
        return this.$store.state.apod
      },
      date() {
        return this.$store.state.date
      }
    },
    methods: {
      manualGetPictureOfDay() {
        this.$store.dispatch("getAPODBySearch", this.searchDate)
      },
      getPictureOfDay() {
        this.$store.dispatch("getAPOD")
      },
      getDate() {
        let date = new Date(new Date(2000, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2000, 0, 1).getTime()))
        let randomDate = moment(date).format("YYYY-MM-DD")
        this.$store.dispatch("getAPODBySearch", randomDate)

      }
    },
    mounted() {
      this.$store.dispatch("getAPOD")
    },
    components: {}
  }
</script>

<style>
  .about {
    background-color: black;
    opacity: 1%;
  }

  button {
    background-color: black;
  }
</style>