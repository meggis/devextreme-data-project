<template>
  <div>
    <!-- <div class="master-detail-caption">{{ detailInfo }}</div> -->
    <DxDataGrid
      :data-source="powerStats"
      :show-borders="true"
      :column-auto-width="true"
    >
      <!-- <DxColumn data-field="intelligence" /> -->
      <!-- <DxColumn
        data-field="StartDate"
        data-type="date"
      />
      <DxColumn
        data-field="DueDate"
        data-type="date"
      />
      <DxColumn data-field="Priority"/>
      <DxColumn
        :calculate-cell-value="completedValue"
        data-type="boolean"
        caption="Completed"
      /> -->
    </DxDataGrid>
  </div>
</template>
<script>
import { DxDataGrid } from "devextreme-vue/data-grid";

// import ArrayStore from 'devextreme/data/array_store';
// import DataSource from 'devextreme/data/data_source';

// const tasks = service.getTasks();

export default {
  components: { DxDataGrid },
  // props: {
  //   templateData: {
  //     type: Object,
  //     default: ()=>{}
  //   }
  // },
  // data() {
  // let { heroName } = this.templateData.data;
  // return {
  //   detailInfo: `${ heroName }'s Power Statistics`
  // };
  // },
  // methods: {
  //   getTasks(key) {
  //     return new DataSource({
  //       store: new ArrayStore({
  //         // data: tasks,
  //         key: 'ID'
  //       }),
  //       filter: ['EmployeeID', '=', key]
  //     });
  //   }
  // }
};
</script>