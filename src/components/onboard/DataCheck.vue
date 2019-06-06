<template>
  <div class="main animation">
    <div class="background">
      <div class="overlay"></div>
      <div class="main-background"></div>
    </div>
    <div class="content-wrapper">
      <div class="content">
        <h3 class="card-title">Controleer uw gegevens</h3>
        <hr>
        <div class="input-item" v-bind:class="{ errorfield: emptyName }">
          <label for="name">Naam</label>
          <input type="text" id="name" v-model="profile.name">
        </div>
        <hr>
        <div class="input-item large-label" v-bind:class="{ errorfield: emptyBirth }">
          <label for="from">Geboortedatum</label>
          <input type="date" id="birth" v-model="profile.birth">
        </div>
        <hr>
        <div class="input-item large-label" v-bind:class="{ errorfield: emptyEmployer }">
          <label for="to">Werkgever</label>
          <input type="text" id="employer" v-model="profile.employer">
        </div>
        <hr>
        <div class="input-item large-label" v-bind:class="{ errorfield: emptyLicense }">
          <label for="license">Rijbewijs</label>
          <label class="switch">
            <input id="license" type="checkbox" v-model="profile.license">
            <span class="slider round"></span>
          </label>
        </div>
        <hr>

        <span class="errormessage" v-if="errorMessage">{{errorMessage}}</span>

        <input type="submit" class="btn" @click="saveProfile" value="Ga verder">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataCheck",
  data() {
    return {
      socket : io('localhost:3000'),
      //socket : io('leaseplanner.ga:3000'),
      profile: {},
      user: localStorage.getItem("username"),
      emptyName: false,
      emptyBirth: false,
      emptyEmployer: false,
      emptyLicense: false,
      errorMessage: ""
    };
  },
  methods: {
    saveProfile: function() {
      this.emptyName = false;
      this.emptyBirth = false;
      this.emptyEmployer = false;
      this.emptyLicense = false;
      this.errorMessage = "";
      if (this.profile.name && this.profile.birth && this.profile.employer) {
        // Update profile with new values
        this.profile.name = document.getElementById("name").value;
        this.profile.birth = document.getElementById("birth").value;
        this.profile.employer = document.getElementById("employer").value;
        //Send updated profile to backend
        this.socket.emit("SAVE", {
          user: this.profile.username,
          data: this.profile
        });
        this.$router.push({ name: "routecheck" });
      }
      //Check for empty fields
      if (!this.profile.name) {
        this.emptyName = true;
        this.errorMessage = "Vul alle velden in";
      }
      if (!this.profile.birth) {
        this.emptyBirth = true;
        this.errorMessage = "Vul alle velden in";
      }
      if (!this.profile.employer) {
        this.emptyEmployer = true;
        this.errorMessage = "Vul alle velden in";
      }
    },
    getData: function() {
      let app = this;
      ioreq(this.socket)
        .request("GETUSER", { user: app.user })
        .then(function(res) {
          app.profile = res;
        })
        .catch(function(err) {
          console.error(err.stack || err);
        });
    }
  },
  mounted() {
    //Get user data on load
    this.getData();
  }
};
</script>

<style scoped lang="scss">
.main {
}

#birth {
  margin-left: 15px;
  padding-left: 0px;
  padding-right: 0px;
}
#license {
  box-shadow: none;
}
</style>
