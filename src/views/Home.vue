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
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
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
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style>
.border-container {
  border: 1px solid rgb(202, 202, 202);
  border-radius: 10px;
}
</style>
