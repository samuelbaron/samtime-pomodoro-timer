<template>
  <section>
    <!-- page name -->
    <app-page-name path="Stopwatch"></app-page-name>

    <!-- select -->
    <v-container
      v-if="selectDisplay"
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
            item-color="primary"
            full-width
            background-color="#0d0f1f"
            outlined
            flat
            autofocus
            :items="times"
            :label="selectedTime"
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
      color="primary"
      :color="progressColor"
    >
      <span class="text-h2 font-weight-regular">
      {{ timeLeft }}
      </span>
    </v-progress-circular>

    <!-- button if not started -->
    <div v-if="started === false">
      <v-btn
        @click="start"
        style="margin: auto; position: absolute; top: 73%; left: 0; bottom: 0; right: 0; border: 3px solid #1565C0"
        fab
        dark
        large
        color="primary"
      >
        <v-icon dark>
          mdi-skip-next
        </v-icon>
      </v-btn>
    </div>

    <!-- buttons if started -->
    <div v-if="started">
      <v-btn
        @click="pause"
        style="margin: auto; position: absolute; top: 73%; left: 0; bottom: 0; right: 29%; border: 3px solid #1565C0"
        fab
        dark
        large
        :color="progressColor"
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

    <!-- modal of finished session -->
    <v-overlay
      v-if="cartDisplay"
      absolute
      opacity=".6"
    >
      <v-card color="blue darken-4" style="width: 50vh; height: 32vh; " class="pa-1">
        <v-card-title class="h1">You finished a session</v-card-title>
        <v-card-text>
          <v-row justify="center" class="ma-1">
            <v-btn large class="ma-3" color="primary" elevation="0" @click="cartDisplay = false">
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
  </section>
</template>

<script>
import AppPageName from '~/components/AppPageName.vue';
// import firestore auth
import db from '@/firebase'

export default {
  components: {
    AppPageName,
  },
  data() {
    return {
      cartDisplay: false,
      paused: false, // if timer is paused
      started: false, // if timer is started
      selectDisplay: true, // if display select
      interval: "", // to manipulate intervals
      selectedTime: "Choose time", // watcher to update a value
      progress: "100",
      timeLeft: '25', // value of minutes

      times: ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60'], // select options
      progressColor: "primary" // default color of button and progress circle
    }
  },

  watch: {
    selectedTime(newValue, oldValue) {
      this.timeLeft = this.selectedTime
    },
  },

  methods: {
    //starts session
    start() {
      this.started = true
      this.selectDisplay = false
      this.progress = "0"
      let time = this.timeLeft
      //divider is a percent of circle fill
      let divider = 100 / time
      this.divider = divider

      this.updateInterval(divider)
    },

    //updates interface of session
    updateInterval() {
      let intervalId = setInterval(() => {
        this.interval = intervalId
        let progress = parseInt(this.progress)
        this.progress = progress + this.divider

        if (this.timeLeft > 0) {
          this.timeLeft--
        }
        else {
          this.finished(this.selectedTime)
          this.prepareNewStopwatch()
        }
      }, 60000)
    },

    //pause session
    pause() {
      this.paused = !this.paused

      if (this.paused === true) {
        this.progressColor = "yellow darken-2"
        clearInterval(this.interval)
      }
      else {
        this.progressColor = "primary"
        this.updateInterval()
      }
    },

    //stop session
    stop() {
      clearInterval(this.interval)
      this.prepareNewStopwatch()
    },

    //prepare new stopwatch
    prepareNewStopwatch() {
      this.paused = false
      this.progress = 100
      this.started = false
      this.selectDisplay = true
      this.interval = ""
      this.timeLeft = this.selectedTime
    },

    //session is finished
    finished(selectedTime) {
      clearInterval(this.interval)
      this.prepareNewStopwatch()
      this.cartDisplay = true

      //prepare session data
      let weekDay = ""
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
      let session = {
        duration: selectedTime,
        day: weekDay
      }

      this.addSessionToDatabase(session)
    },
    //add to the database
    addSessionToDatabase(session) {
      db.collection('sessions').add(session).then(() => {
      })
    }
  },
}
</script>
