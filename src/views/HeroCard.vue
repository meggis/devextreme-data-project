<!--
This component is not ready yet. 
//-->


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
          <template #cellTemplate="{ data }">
            <img :src="data.value" />
          </template>
        </DxDataGrid>
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
    }
}}
</script>

