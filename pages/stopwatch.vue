<template>
  <div>
    <app-page-name path="Stopwatch"></app-page-name>

    <!-- select -->
    <v-container v-if="selectShow"
                 fluid
                 style="margin: auto; position: absolute; top: 7%; left: 0; bottom: 0; right: 29%;">
      <v-row align="center">
        <v-col
          class="d-flex"
          style="margin-left: 12.5%"
          cols="9"
          sm="6"
        >
          <v-select
            v-model="selectedTime"
            item-color="blue darken-3"
            full-width
            background-color="#0d0f1f"
            outlined
            flat
            autofocus
            :items="timesArray"
            :label='`${selectLabel}`'
            dark
            dense
            solo
          >
          </v-select>
        </v-col>
      </v-row>
    </v-container>

    <!-- progress circle -->
    <v-progress-circular
      style="margin: auto; position: absolute; top: -8%; left: 0; bottom: 0; right: 0;"
      :rotate="270"
      :size="290"
      :width="11"
      :value="progress"
      color="blue darken-3"
    >
      <span class="text-h2 font-weight-regular">
      {{ timeLeft }}
      </span>
    </v-progress-circular>

    <!-- buttons if not started -->
    <div v-if="started === false">
      <v-btn
        @click="start"
        style="margin: auto; position: absolute; top: 73%; left: 0; bottom: 0; right: 0; border: 3px solid #1565C0"
        fab
        dark
        large
        color="blue darken-3"
      >
        <v-icon dark>
          mdi-skip-next
        </v-icon>
      </v-btn>
    </div>

    <!-- buttons if started-->
    <div v-if="started">
      <v-btn
        @click="pause"
        style="margin: auto; position: absolute; top: 73%; left: 0; bottom: 0; right: 29%; border: 3px solid #1565C0"
        fab
        dark
        large
        color="blue darken-3"
      >
        <v-icon dark>
          mdi-skip-next
        </v-icon>
      </v-btn>

      <v-btn
        @click="stop"
        style="margin: auto; position: absolute; top: 73%; left: 29%; bottom: 0; right: 0; border: 3px solid #C62828"
        fab
        dark
        large
        color="red darken-3"
      >
        <v-icon dark>
          mdi-stop
        </v-icon>
      </v-btn>
    </div>


    <v-overlay
      v-if="displayOverlay"
      absolute
      opacity=".6"
    >
      <v-card color="blue darken-4" style="width: 50vh; height: 32vh; " class="pa-1">
        <v-card-title class="h1">You finished a session</v-card-title>
        <v-card-text>
          <v-row justify="center" class="ma-1">
            <v-btn large class="ma-3" color="primary" elevation="0" @click="closeOverlay">
              <v-icon left>mdi-skip-next</v-icon>
              Start new session
            </v-btn>
            <v-btn large class="ma-3" color="primary" elevation="0" nuxt to="/history">
              <v-icon left>mdi-history</v-icon>
              See sessions history
            </v-btn>
          </v-row>
        </v-card-text>
      </v-card>
    </v-overlay>

  </div>
</template>

<script>
import {mapGetters} from "vuex";
import AppPageName from '~/components/AppPageName.vue';
import Cookies from "js.cookie";

export default {
  components: {
    AppPageName,
  },
  data() {
    return {
      paused: false, //if timer is paused
      started: false, //if timer is started
      selectShow: true, //if display select
      interval: "", //to manipulate intervals
      selectedTime: "", //watcher to update a value
      progress: "100",
      timeLeft: '25', //value of minutes

      timesArray: ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60'],
      selectLabel: "Choose time",

      //if user finished last session
      //(saved to display a pop-up)
      lastSessionTime: false
    }
  },
  watch: {
    selectedTime(newValue, oldValue) {
      this.timeLeft = this.selectedTime
    },
  },
  computed: {
    displayOverlay() {
      return this.lastSessionTime;
    },
    ...mapGetters(["pastSessions"])
  },

  methods: {
    closeOverlay() {
      this.lastSessionTime = false
    },
    start() {
      this.started = true
      this.selectShow = false
      this.progress = "0"

      let time = this.timeLeft

      //divider is a percent of circle fill
      let divider = 100 / time
      this.divider = divider

      this.update(divider)
    },

    update(divider) {

      let intervalId = setInterval(() => {
        this.interval = intervalId
        let progress = parseInt(this.progress)

        //update percent of circle fill
        this.progress = progress + divider

        if (this.timeLeft > 0) {
          this.timeLeft--
        } else {
          this.finished(this.selectedTime)

          clearInterval(intervalId)

          this.paused = false //if timer is paused
          this.progress = 100
          this.started = false //if timer is started
          this.selectShow = true //if display select
          this.interval = "" //to manipulate intervals
          this.timeLeft = this.selectedTime //value of minutes
          this.label = "Choose time"
        }


      }, 600)
    },
    pause() {
      this.paused = !this.paused
      if (this.paused === true) {
        clearInterval(this.interval)
      } else {
        let intervalId = setInterval(() => {
          this.interval = intervalId
          let progress = parseInt(this.progress)

          this.progress = progress + this.divider

          if (this.timeLeft > 0) {
            this.timeLeft--
          } else {
            alert("Done")
            clearInterval(intervalId)
          }
        }, 600)
      }
    },
    stop() {
      clearInterval(this.interval)

      this.paused = false //if timer is paused
      this.progress = 100
      this.started = false //if timer is started
      this.selectShow = true //if display select
      this.interval = "" //to manipulate intervals
      this.timeLeft = '25' //value of minutes
      this.label = "Choose time"
    },
    finished(selectedTime) {
      this.lastSessionTime = selectedTime
      // let m_names = ["January", "February", "March",
      //   "April", "May", "June", "July", "August", "September",
      //   "October", "November", "December"];
      //
      // let mydates = new Date();
      // let curr_date = mydate.getDate();
      // let curr_month = mydate.getMonth();
      // let curr_year = mydate.getFullYear();
      let weekDay = ""
      //
      let day = new Date().getDay()
      if (day === 1) {
        weekDay = "Monday"
      } else if (day === 2) {
        weekDay = "Tuesday"
      } else if (day === 3) {
        weekDay = "Wednesday"
      } else if (day === 4) {
        weekDay = "Thursday"
      } else if (day === 5) {
        weekDay = "Friday"
      } else if (day === 6) {
        weekDay = "Saturday"
      } else if (day === 7) {
        weekDay = "Sunday"
      }
      //
      //
      // let mydatestr = '' + curr_year + ' ' +
      //   curr_month + ' ' +
      //   curr_date + ' ' +
      //   mydates.getHours() + ':' +
      //   mydates.getMinutes()

      let session = {
        duration: selectedTime,
        // time: mydatestr,
        day: weekDay
      }
      let updatedArray = Cookies.get('sessions') || []
      updatedArray.unshift(session)
      Cookies.remove('sessions')

      Cookies.set('sessions', updatedArray)

      // this.$store.commit("updateSessions", Cookies.get('sessions'));
    },
  },
}
</script>

<style scoped>
</style>
