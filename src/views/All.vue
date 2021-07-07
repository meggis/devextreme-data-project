<template>
  <div>
    <div id="top-bg-color">
      <b-container class="py-5">
        <b-row>
          <b-col>
            <h1>Find your SuperHero</h1>
            <h5>
              From list below pick hero name to fetch some person informations.
            </h5>
          </b-col>
        </b-row>
        <ul v-for="set in sets" :key="set.id">
          <li v-for="n in even(set)" :key="n.id">{{ n }}</li>
        </ul>
      </b-container>
    </div>
    <b-container class="my-5">
      <div class="vertical-align">
        <DxDataGrid
          :data-source="heroPersons"
          :show-borders="true"
          :remote-operations="true"
          :column-min-width="100"
        >
          <DxColumn
            :allow-sorting="false"
            data-field="image"
            cell-template="cellTemplate"
          />
          <div slot="cellTemplate" slot-scope="{ data }">
            <img :src="data.value" class="hero-picture" />
          </div>
          <DxColumn dataField="heroName" caption="Hero name" />
          <DxColumn dataField="realName" caption="Real name" />
          <DxColumn dataField="publisher" caption="Publisher" />

          <DxMasterDetail :enabled="true" template="masterDetailTemplate" />

          <div slot="masterDetailTemplate" slot-scope="{ data }">
            <b-row align-v="center">
              <b-col>
                <div v-for="(value, key) in data.data.appearance" :key="key">
                  <b-row class="text-center">
                    <b-col>
                      {{ appearanceTitles[key] }}
                    </b-col>
                    <b-col v-if="Array.isArray(value) && value.length">
                      {{ `${value[1]} (${value[0]})` }}
                    </b-col>
                    <b-col v-else-if="key === 'eye-color'">
                      <div>
                        <b-badge
                          :style="{ backgroundColor: value.toLowerCase() }"
                          >{{ value.toLowerCase() }}</b-badge
                        >
                      </div>
                    </b-col>
                    <b-col v-else>
                      {{ value }}
                    </b-col>
                  </b-row>
                </div>
              </b-col>
              <b-col>
                <DxChart
                  id="chart"
                  :data-source="getChartObject(data.data.powerStats)"
                >
                  <DxSeries
                    argument-field="powerStatName"
                    value-field="powerStatValue"
                    type="bar"
                    color="#c0c0c0"
                    :height="200"
                  />
                  <DxSize :height="250" :width="600" />
                </DxChart>
              </b-col>
            </b-row>
          </div>
        </DxDataGrid>
      </div>
    </b-container>
  </div>
</template>

<script>
import { DxDataGrid, DxColumn, DxMasterDetail } from "devextreme-vue/data-grid";
import { DxChart, DxSeries, DxSize } from "devextreme-vue/chart";
import { mapState } from "vuex";

const appearanceTitles = {
  gender: "Gender:",
  race: "Hero race:",
  height: "Height:",
  weight: "Weight:",
  "eye-color": "Eye color:",
  "hair-color": "Hair color:",
};

export default {
  name: "MarvelHeroes",
  components: {
    DxDataGrid,
    DxColumn,
    DxMasterDetail,
    DxChart,
    DxSeries,
    DxSize,
  },
  data() {
    return {
      response: null,
      dataSource: [],
      appearanceTitles: appearanceTitles,
      sets: [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
      ],
    };
  },
  computed: {
    ...mapState("hero", ["heroPersons"]),

    // getPublisher () {
    //   return this.$route.query.publisher
    // }
  },
  async mounted() {
    // await this.$store.dispatch("hero/fetchItemsByPublisher", this.getPublisher);
    await this.$store.dispatch("hero/fetchHeroPersons");
  },
  methods: {
    heroPersonClickHandler(heroId) {
      this.$router.push(`./herocard/${heroId}`);
    },
    formatLabel(pointInfo) {
      return `${pointInfo.valueText} (${pointInfo.percentText})`;
    },
    getChartObject(powerStats) {
      const cartData = [];

      for (const [key, value] of Object.entries(powerStats)) {
        cartData.push({
          powerStatName: key,
          powerStatValue: value,
        });
      }
      return cartData;
    },
    even: function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0;
      });
    },
  },
};
</script>

<style scoped>
.hero-picture {
  border-radius: 50%;
  height: 9vh;
  width: 9vh;
  object-fit: cover;
  box-shadow: rgba(1, 3, 3, 0.12) 0px 2px 10px 0px,
    rgba(0, 0, 0, 0.32) 0px 2px 10px 0px;
}

::v-deep .dx-datagrid-content .dx-datagrid-table .dx-row > td,
.dx-datagrid-content .dx-datagrid-table .dx-row > tr > td {
  vertical-align: middle;
}

#top-bg-color {
  background-color: rgb(243, 243, 243);
}
</style>
