<template>
  <main>
    <Input :label="createTable.orderNumber" :value="form.orderNumber">
      <div @click="showPicker1 = true">
        <van-icon name="share-o" size="25" />
        <div>导入</div>
      </div>
    </Input>
    <Input
      :label="createTable.productionOrderNo"
      :value="form.productionOrderNo"
    >
    </Input>
    <Input
      :label="createTable.timeOfTruckDeparture"
      :value="form.timeOfTruckDeparture"
      v-on="$listeners"
      @click="clickTime"
    ></Input>
    <Input
      :label="createTable.inspectedBy"
      :value="form.inspectedBy"
      v-bind="$attrs"
      v-on="$listeners"
      class="van-field--disabled"
    ></Input>
    <Input :label="createTable.lotNumber" :value="form.inspectedBy"></Input>

    <Checkbox
      :label="createTable.electricCurrent"
      :value="form.electricCurrent"
      :options="currentOptions"
    ></Checkbox>
    <!-- container -->
    <Input
      v-show="mode.shippingMethd === 2"
      :label="createTable.containerNumber"
      :value="form.containerNumber"
    ></Input>
    <Radio
      :label="createTable.weatherCondition"
      :options="weatherOptions"
      :value="form.weatherCondition"
    ></Radio>
    <Input
      :label="createTable.PlaceOfReceiptForTheProject"
      :value="form.placeOfReceiptForTheProject"
    ></Input>
    <Radio
      :label="createTable.moduleStorageMethod"
      :value="form.moduleStorageMethod"
      :options="moduleStorageOptions"
    ></Radio>
    <Radio
      :label="createTable.moduelPackagingMethod"
      :value="form.moduelPackagingMethod"
      :options="modulePackingOptions"
    ></Radio>
    <Radio
      :label="createTable.installationManual"
      :value="form.installationManual"
      :options="installationManualOptions"
    ></Radio>
    <!-- container -->
    <Input
      v-show="mode.shippingMethd === 2"
      :label="createTable.sealNumber"
      :value="form.sealNumber"
    ></Input>
    <Input
      :label="createTable.truckPlateNumber"
      :value="form.truckPlateNumber"
    ></Input>
    <Input :label="createTable.moduleType" :value="form.moduleType">
      <van-icon name="arrow" size="23" @click="showPicker = true" />
    </Input>
    <Input :label="createTable.moduleDimension" :value="form.moduleDimension">
      <van-icon name="arrow" size="23" @click="showPicker = true" />
    </Input>
    <Input
      :label="createTable.numberOfModule"
      :value="form.numberOfModule"
    ></Input>
    <Input
      :label="createTable.numberOfFullPallets"
      :value="form.numberOfFullPallets"
    ></Input>
    <Radio
      :label="createTable.cartonInspection"
      :value="form.cartonInspection"
      :options="passNg"
    ></Radio>
    <Radio
      :label="createTable.visualInspection"
      :value="form.visualInspection"
      :options="passNg"
    ></Radio>
    <Radio
      :label="createTable.loadingInspection"
      :value="form.loadingInspection"
      :options="passNg"
    ></Radio>
    <Radio
      :label="createTable.shockSensorVerification"
      :value="form.shockSensorVerification"
      :options="passNg"
    ></Radio>
    <!-- flat -->
    <Radio
      v-show="mode.shippingMethd === 1"
      :label="createTable.truckerInfoConfirm"
      :value="form.truckerInfoConfirm"
      :options="passNg"
    ></Radio>
    <Radio
      :label="createTable.unqualified"
      :value="form.unqualified"
      :options="yesNo"
    ></Radio>
    <Input
      :label="createTable.unqualifiedQuantity"
      :value="form.unqualifiedQuantity"
    ></Input>
    <Input
      :label="createTable.unqualifiedBarcde"
      :value="form.unqualifiedBarcde"
    ></Input>
    <Input :label="createTable.remarks" :value="form.remarks"></Input>
    <van-calendar
      v-model="showCalendar"
      :min-date="form.minDate"
      @confirm="onConfirm"
    />
    <van-popup v-model="showPicker" round position="bottom">
      <van-picker
        title="请选择订单号"
        show-toolbar
        :columns="moduleTypeOptions"
        @confirm="onConfirmPicker"
        @cancel="showPicker = false"
      />
    </van-popup>
  </main>
</template>

<script>
import Input from "../../components/input";
import Radio from "../../components/input/radio";
import Checkbox from "../../components/input/checkbox";
import createTable from "@/data/create";
import currentOptions from "@/data/currentOptions";
import weatherOptions from "@/data/weatherOptions";
import moduleStorageOptions from "@/data/moduleStorageOptions";
import modulePackingOptions from "@/data/modulePackingOptions";
import installationManualOptions from "@/data/installationManualOptions";
import moduleTypeOptions from "@/data/moduleTypeOptions";
import passNg from "@/data/passNg";
import yesNo from "@/data/yesNo";
export default {
  inheritAttrs: false,
  name: "content",
  components: {
    Input,
    Radio,
    Checkbox,
  },
  data() {
    return {
      showCalendar: false,
      showPicker: false,
      createTable: createTable,
      currentOptions: currentOptions,
      weatherOptions: weatherOptions,
      moduleStorageOptions: moduleStorageOptions,
      modulePackingOptions: modulePackingOptions,
      installationManualOptions: installationManualOptions,
      moduleTypeOptions: moduleTypeOptions,
      passNg: passNg,
      yesNo: yesNo,
      form: {},
      mode: {
        shippingMethd: 1, //flat:1 or container:2
        language: 0, //both:0 en:2 ch:1
      },
    };
  },
  methods: {
    clickTime() {
      this.showCalendar = true;
    },
    onConfirmPicker(data,index) {
      console.log(index)
      const form = this.form
      if(!form.moduleType)
      {
        this.$set(form,'moduleType',data[0])
      }else{
        this.$set(form, 'moduleType',`${form.moduleType} \\ ${data[0]}` )
      }
      if(!form.moduleDimension)
      {
        this.$set(form,'moduleDimension',data[1])
      }else{
        this.$set(form, 'moduleDimension',`${form.moduleDimension} \\ ${data[0]}` )
      }

      this.showPicker = false;
    },
  },
};
</script>

<style scoped>
</style>

