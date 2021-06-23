<template>
  <b-container>
    <div v-if="heroPerson">
      <DxDataGrid
        id="gridContainer"
        :data-source="heroPerson"
        :show-borders="true"
      >
        <DxColumn
          :allow-sorting="false"
          data-field="image"
          cell-template="cellTemplate"
        />
        <DxColumn data-field="heroName" caption="Hero name" />
        <DxColumn data-field="publisher" />
        <DxColumn data-field="publisher" />
        <DxColumn data-field="publisher" />
        <DxColumn data-field="publisher" />
        <template #cellTemplate="{ data }">
          <img :src="data.value" />
        </template>
      </DxDataGrid>
      <!-- <b-card class="my-5">
        <b-row>
          <b-col>
            <b-card-img :src="heroPerson.image"> </b-card-img>
          </b-col>
          <b-col class="justify-center">
            <p class="p-element">
              <strong>Publisher: </strong> {{ heroPerson.publisher }}
            </p>
            <p>
              <strong
                >Hero Name: {{ heroPerson.heroName }} Real name:
                {{ heroPerson.RealName }}</strong
              >
              Place of birth: {{ heroPerson.placeOfBirth }}
            </p>
            <b-row>
              <b-col md="6" class="text-left">
                <h5>
                  <strong>Appearance: </strong>
                </h5>
                <p>
                  <strong>Gender: </strong>{{ heroPerson.appearance.gender }}
                </p>
                <p>
                  <strong>Height: </strong>{{ heroPerson.appearance.height[1] }}
                </p>
                <p>
                  <strong>Weight: </strong>{{ heroPerson.appearance.weight[1] }}
                </p>
                <p>
                  <strong>Eye color: </strong
                  >{{ heroPerson.appearance.eyeColor }}
                </p>
                <p>
                  <strong>Hair color: </strong
                  >{{ heroPerson.appearance.hairColor }}
                </p>
                <p><strong>Race:</strong>{{ heroPerson.appearance.race }}</p>
              </b-col>
              <b-col md="6" class="text-left p-0"> </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-card> -->
    </div>
    <div class="text-center mb-5">
      <b-button @click="handleGoBack()">Go back</b-button>
    </div>
  </b-container>
</template>

<script>
import { DxDataGrid, DxColumn } from "devextreme-vue/data-grid";
import { mapState } from "vuex";

export default {
  data() {
    return {
      response: null,
      id: this.$route.params.id,
    };
  },
  components: {
    DxDataGrid,
    DxColumn,
  },
  computed: {
    ...mapState("hero", ["heroPerson"]),
  },
  async mounted() {
    await this.$store.dispatch("hero/fetchHeroPerson", this.id);
  },
  methods: {
    handleGoBack() {
      this.$router.go(-1);
    },
  },
};
</script>
