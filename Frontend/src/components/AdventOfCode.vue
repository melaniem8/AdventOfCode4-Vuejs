<template>
  <div class="text-xs-center white--text text--lighten-5 aoc4" id="app">
    <v-layout justify-center>
      <span class="head justify-center"><strong>Advent of Code 2019</strong></span>
    </v-layout>
    <v-container>
      <v-card class="pa-2">
        <v-card-title><strong>Aufgabe</strong></v-card-title>
        <v-card-text>
          Man soll ein Passwort finden, das folgende Kriterien erfüllt:
          <br />
          <ul>
            <li v-for="i in criteria.length-1" :key="i">
              {{ criteria[i] }}
            </li>
          </ul>
          <br />
          Dabei kann man einen Bereich zwischen 100.000 und 1.000.000 wählen. Alle möglichen Passwörter werden hier als Liste ausgegeben.
          <br /><br />
          Detaillierte Aufgabenstellung siehe hier:
          <v-btn small href="https://adventofcode.com/2019/day/4" target="_blank" class="mr-0 mb-0 mt-0">Tag 4</v-btn>
        </v-card-text>
      </v-card>
    </v-container>
    <br />
    <v-layout justify-center>
    <span><strong>Mögliche Eingabe:</strong> 100.000 - 1.000.000</span>
    </v-layout>
    <br />
    <v-card-actions class="justify-center pa-0">
      <v-col cols="4" sm="1" md="2">
        <v-text-field
          align="center"
          class="Starting"
          v-model="start"
          label="start"
          placeholder="Start des Intervalls"
          solo
          dense
        />
      </v-col>
      -
      <!-- <div class="mr-0 mb-0 mt-0 justify-center" style="pa: 12 12;">-</div> -->
      <v-col cols="4" sm="1" md="2">
        <v-text-field
          align="center"
          v-model="end"
          label="end"
          placeholder="Ende des Intervalls"
          solo
          dense
        />
      </v-col>
    </v-card-actions>
    <v-layout justify-center>
    <p v-if="err" outlined>
      <v-card style="background-color: red;">{{ errorMessage }}</v-card>
    </p>
    </v-layout>
    <v-layout justify-center>
    <span><strong>Getätigte Eingabe:</strong> {{displayNumber(this.start)}} - {{displayNumber(this.end)}}</span>
    </v-layout>
    <br />
    <v-layout justify-center>
    <v-btn @click="show">Passwörter anzeigen</v-btn>
    </v-layout>
    <br />
    <v-layout justify-center>
    <span v-if="list"><strong>Anzahl der Passwörter: {{displayNumber(passwordsLength)}}</strong></span>
    </v-layout>
    <br />
    <v-layout justify-center>
    <div v-if="list">
        <v-card>
            <v-card-title>Alle Passwörter</v-card-title>
            <v-card-text>
                <ul>
                    <li v-for="password in passwords" v-bind:key="password.id" style="list-style-type: none;">
                        {{ displayNumber(password) }}
                    </li>
                </ul>
            </v-card-text>
        </v-card>
    </div>
    </v-layout>
  </div>
</template>

<script>
const axios = require('axios').default;

export default {
  name: 'AdventOfCode4',

  data: () => ({
    drawer: null,
    list: false,
    err: false,
    errorMessage: "Falsche Eingabe: Bitte Werte zwischen 100.000 und 1.000.000 wählen! Start muss größer als Ende sein!",
    start: 0,
    end: 0,
    passwords: [],
    criteria: ["","Es ist eine sechsstellige Zahl","Das Passwort liegt innerhalb des gewählten Intervalls","Zwei benachbarte Zahlen sind gleich","Die Zahlen sind aufsteigend bzw gleichbleibend, aber nie absteigend"]
  }),
  computed: {
    passwordsLength: function () {
      return this.passwords.length
    }
  },
  methods: {
    show: function() {
      try {
        axios({
          method: 'get',
          url: `http://localhost:8080/${this.start}/${this.end}`
        }).then(response => this.passwords = response.data)
          .then(this.list = true)
          .then(this.err = false)
                
          .catch(this.showError)
      } finally {
        //
      }
    },
    displayNumber: function (number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    showError() {
      this.err = true
      this.list = false
    }
  }
};
</script>

<style scoped>
.aoc4{
  padding: 20px 20px !important;
}
.head {
  font-size: 2em;
}
.center {
  text-align: center !important;
}
</style>