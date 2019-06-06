<template>
  <div class="main animation">
    <div class="background">
        <div class="overlay"></div>
        <div class="main-background"></div>
      </div>
      <div class="content-wrapper">

        <div class="content">
          <h1>Altijd de beste route</h1>
          <hr>
          <p>
            Om LeasePlanner optimaal te laten functioneren, leert het algoritme van uw reisgedrag.
          </p>
          <p>
            Om uw profiel compleet te maken vragen we u de beste route te keizen in  verschillende situaties.
          </p>
          <p>
            Deze data slaan we op en gebruiken we om in de toekomst passende adviezen te bepalen.
          </p>
          <p>
            Let in de volgende situaties op de tijd, het weer, de temperatuur en de verschillende vervoersmiddelen.
          </p>

          <router-link class="btn" to="/slider/0">Aan de slag</router-link>
        </div>

      </div>
    </div>
</template>

<script>

export default {
  name: 'InfoAI',
}
</script>

<style scoped lang="scss">
.main{}

.content{
    // margin-top: 150px;
    // margin-bottom: 40px;
}

</style>
