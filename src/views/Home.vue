<template>
  <div>
    <b-container class="border-container mt-5 py-3">
      <b-row>
        <b-col>
          <h1>Find your SuperHero</h1>
          <h5>
            From list below pick hero name to fetch some person informations
          </h5>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="mt-4">
          <b-form v-if="show">
            <b-form-group id="input-group-1" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder="SuperHero name..."
                required
              ></b-form-input>
            </b-form-group>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
.border-container {
  border: 1px solid rgb(202, 202, 202);
  border-radius: 10px;
}
</style>
