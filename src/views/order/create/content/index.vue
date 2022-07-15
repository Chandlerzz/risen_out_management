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
    <TimeOfTruckDeparture></TimeOfTruckDeparture>
    <Input
      :label="createTable.inspectedBy"
      :value="form.inspectedBy"
      :disabled="true"
    ></Input>
    <Input
      :label="createTable.lotNumber"
      :value="form.inspectedBy"
      :disabled="true"
    ></Input>
    <Radio
      :label="createTable.electricCurrent"
      :value="form.electricCurrent"
      :options="currentOptions"
    ></Radio>
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
    <Input :label="createTable.moduleType">
      <van-icon
        name="arrow"
        size="23"
        @click="(showPicker = true), clickModule()"
      />
    </Input>
    <Input :label="createTable.moduleDimension" :value="form.moduleDimension">
      <van-icon
        name="arrow"
        size="23"
        @click="(showPicker = true), clickModule()"
      />
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
  </main>
</template>

<script>
import Input from "../../components/input";
import Radio from "../../components/input/radio";
import TimeOfTruckDeparture from "./timeOfTruckDeparture";
import createTable from "@/data/create";
import currentOptions from "@/data/currentOptions";
import weatherOptions from "@/data/weatherOptions";
import moduleStorageOptions from "@/data/moduleStorageOptions";
import modulePackingOptions from "@/data/modulePackingOptions";
import installationManualOptions from "@/data/installationManualOptions";
import passNg from "@/data/passNg";
import yesNo from "@/data/yesNo";
export default {
  name: "content",
  components: {
    Input,
    Radio,
    TimeOfTruckDeparture,
  },
  data() {
    return {
      showCalendar:false,
      createTable: createTable,
      currentOptions: currentOptions,
      weatherOptions: weatherOptions,
      moduleStorageOptions: moduleStorageOptions,
      modulePackingOptions: modulePackingOptions,
      installationManualOptions: installationManualOptions,
      passNg: passNg,
      yesNo: yesNo,
      form: {},
      mode: {
        shippingMethd: 1, //flat:1 or container:2
        language: 0, //both:0 en:2 ch:1
      },
    };
  },
};
</script>

<style scoped>
</style>

