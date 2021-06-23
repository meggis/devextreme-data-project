<template>
  <b-container class="my-5">
    <b-row>
      <b-col>
        <div class="vertical-align">
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
              <img :src="data.value" class="hero-picture" />
            </div>
            <DxColumn dataField="heroName" caption="Hero name" />
            <DxColumn dataField="realName" caption="Real name" />
            <DxColumn dataField="publisher" caption="Publisher" />

            <DxMasterDetail :enabled="true" template="masterDetailTemplate" />

            <div slot="masterDetailTemplate" slot-scope="{ data }">
              <DxChart id="chart" :data-source="getChartObject(data.data.powerStats)">
                <DxSeries
                  argument-field="powerStatName"
                  value-field="powerStatValue"
                  type="bar"
                  color="#ffaa66"
                />
              </DxChart>
            </div>
          </DxDataGrid>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { DxDataGrid, DxColumn, DxMasterDetail } from "devextreme-vue/data-grid";
import { DxChart, DxSeries } from "devextreme-vue/chart";
import { mapState } from "vuex";

export default {
  name: "MarvelHeroes",
  components: {
    DxDataGrid,
    DxColumn,
    DxMasterDetail,
    DxChart, 
    DxSeries
  },
  data() {
    return {
      response: null,
      dataSource: [],
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

.dx-datagrid td {
  vertical-align: middle;
}
</style>
