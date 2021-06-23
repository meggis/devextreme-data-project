<template>
  <b-container class="my-5">
    <b-row>
      <b-col>
        <div                         class="vertical-align">
          <DxDataGrid
            :data-source="heroPersons"
            :show-borders="true"
            :remote-operations="true"
          >
            <DxColumn
              :allow-sorting="false"
              data-field="image"
              cell-template="cellTemplate"
            />
            <div slot="cellTemplate" slot-scope="{ data }">
              <img :src="data.value" class="hero-picture"/>
            </div>
            <DxColumn dataField="heroName" caption="Hero name"/>
            <DxColumn dataField="realName" caption="Real name" />
            <DxColumn dataField="publisher" caption="Publisher" />
            
            <DxMasterDetail :enabled="true" template="masterDetailTemplate"/>

            <div slot="masterDetailTemplate" slot-scope="{ data }">
              <div v-for="(value, key) of data.data.powerStats" :key="key">
                <span>{{key}} {{value}}</span>
              </div>
            </div>
          </DxDataGrid>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { DxDataGrid, DxColumn, DxMasterDetail } from "devextreme-vue/data-grid";
import { mapState } from "vuex";

// const heroPowerStats = {powerStats}

export default {
  name: "MarvelHeroes",
  components: {
    DxDataGrid,
    DxColumn,
    DxMasterDetail
  },
  data() {
    return {
      response: null,
      // dataSource: {heroPersons}
    };
  },
  computed: {
    ...mapState("hero", ["heroPersons"]),
  },
  async mounted() {
    await this.$store.dispatch("hero/fetchHeroPersons");
  },
  methods: {
    heroPersonClickHandler(heroId) {
      this.$router.push(`./herocard/${heroId}`);
    }
  },
};
</script>

<style scoped>
.hero-picture {
  border-radius: 50%;
  height: 9vh;
  width: 9vh;
  object-fit: cover;
  box-shadow: rgba(1, 3, 3, 0.12) 0px 2px 10px 0px, rgba(0, 0, 0, 0.32) 0px 2px 10px 0px;
}

.dx-datagrid td {
  vertical-align: middle;
}
</style>
