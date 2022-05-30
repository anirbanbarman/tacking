// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: "https://apimkroadlines.btvbharat.com/index.php/",
  mediaURL: 'https://apimkroadlines.btvbharat.com/uploads/',
  authToken: 'mkroadlines',
  apiUrls: {
   
    apis: {
      adminLogIn:'users/adminLogin',
      
      vehicleList:'vehicle/getAll',
      saveVehicle:'vehicle/save',
      updateVehicle:'vehicle/editList',
      getVehicle:'vehicle/getById',

      customerList:'customer/getAll',
      saveCustomer:'customer/save',
      updateCustomer:'customer/editList',
      getCustomer:'customer/getById',

      supplierList:'supplier/getAll',
      saveSupplier:'supplier/save',
      updateSupplier:'supplier/editList',
      getSupplier:'supplier/getById',

      brokerList:'broker/getAll',
      saveBroker:'broker/save',
      updateBroker:'broker/editList',
      getBroker:'broker/getById',

      driverList:'driver/getAll',
      saveDriver:'driver/save',
      updateDriver:'driver/editList',
      getDriver:'driver/getById',

      itemList:'item/getAll',
      saveItem:'item/save',
      updateItem:'item/editList',
      getItem:'item/getById',

      employeeList:'employee/getAll',
      saveEmployee:'employee/save',
      updateEmployee:'employee/editList',
      getEmployee:'employee/getById',

      parametersList:'parameters/getAll',
      saveparameters:'parameters/save',
      updateparameters:'parameters/editList',
      getparameters:'parameters/getById',

      statesList:'states/getAll',
      savestates:'states/save',
      updatestates:'states/editList',
      deletestates:'states/deleteList',
      getstatesbycode:'states/getByCode',
      getstates:'states/getById',
      getstatesmaxid:'states/getMaxId',
      getstatesminid:'states/getMinId',

      vehiclemakeList:'vehiclemake/getAll',
      savevehiclemake:'vehiclemake/save',
      updatevehiclemake:'vehiclemake/editList',
      deletevehiclemake:'vehiclemake/deleteList',
      getvehiclemakebycode:'vehiclemake/getByCode',
      getvehiclemake:'vehiclemake/getById',

      vehicletypeList:'Vehicletype/getAll',
      savevehicletype:'Vehicletype/save',
      updatevehicletype:'Vehicletype/editList',
      deletevehicletype:'Vehicletype/deleteList',
      getvehicletypebycode:'Vehicletype/getByCode',
      getvehicletype:'Vehicletype/getById',

      policytypeList:'Policytype/getAll',
      savepolicytype:'Policytype/save',
      updatepolicytype:'Policytype/editList',
      deletepolicytype:'Policytype/deleteList',
      getpolicytypebycode:'Policytype/getByCode',
      getpolicytype:'Policytype/getById',

      batterytypeList:'batterytype/getAll',
      savebatterytype:'batterytype/save',
      updatebatterytype:'batterytype/editList',
      deletebatterytype:'batterytype/deleteList',
      getbatterytypebycode:'batterytype/getByCode',
      getbatterytype:'batterytype/getById',

      tyretypeList:'tyretype/getAll',
      savetyretype:'tyretype/save',
      updatetyretype:'tyretype/editList',
      deletetyretype:'tyretype/deleteList',
      gettyretypebycode:'tyretype/getByCode',
      gettyretype:'tyretype/getById',

      vehicleexpensetypeList:'vehicleexpensetype/getAll',
      savevehicleexpensetype:'vehicleexpensetype/save',
      updatevehicleexpensetype:'vehicleexpensetype/editList',
      deletevehicleexpensetype:'vehicleexpensetype/deleteList',
      getvehicleexpensetypebycode:'vehicleexpensetype/getByCode',
      getvehicleexpensetype:'vehicleexpensetype/getById',

      vehiclemodelList:'vehiclemodel/getAll',
      savevehiclemodel:'vehiclemodel/save',
      updatevehiclemodel:'vehiclemodel/editList',
      deletevehiclemodel:'vehiclemodel/deleteList',
      getvehiclemodelbycode:'vehiclemodel/getByCode',
      getvehiclemodel:'vehiclemodel/getById',


      vehicletyperateList:'vehicletyperate/getAll',
      savevehicletyperate:'vehicletyperate/save',
      updatevehicletyperate:'vehicletyperate/editList',
      deletevehicletyperate:'vehicletyperate/deleteList',
      getvehicletyperatebycode:'vehicletyperate/getByCode',
      getvehicletyperate:'vehicletyperate/getById',

      transittypeList:'transittype/getAll',
      savetransittype:'transittype/save',
      updatetransittype:'transittype/editList',
      deletetransittype:'transittype/deleteList',
      gettransittypebycode:'transittype/getByCode',
      gettransittype:'transittype/getById',

      billchargeList:'billcharge/getAll',
      savebillcharge:'billcharge/save',
      updatebillcharge:'billcharge/editList',
      deletebillcharge:'billcharge/deleteList',
      getbillchargebycode:'billcharge/getByCode',
      getbillcharge:'billcharge/getById',

      stationList:'station/getAll',
      savestation:'station/save',
      updatestation:'station/editList',
      deletestation:'station/deleteList',
      getstationbycode:'station/getByCode',
      getstation:'station/getById',

      vehicleinitialexpensesList:'vehicleinitialexpenses/getAll',
      savevehicleinitialexpenses:'vehicleinitialexpenses/save',
      updatevehicleinitialexpenses:'vehicleinitialexpenses/editList',
      deletevehicleinitialexpenses:'vehicleinitialexpenses/deleteList',
      getvehicleinitialexpenses:'vehicleinitialexpenses/getById',

      vehiclesaleList:'vehiclesale/getAll',
      savevehiclesale:'vehiclesale/save',
      updatevehiclesale:'vehiclesale/editList',
      deletevehiclesale:'vehiclesale/deleteList',
      getvehiclesale:'vehiclesale/getById',

      vehiclepermitList:'vehiclepermit/getAll',
      savevehiclepermit:'vehiclepermit/save',
      updatevehiclepermit:'vehiclepermit/editList',
      deletevehiclepermit:'vehiclepermit/deleteList',
      getvehiclepermit:'vehiclepermit/getById',


      branchList:'branch/getAll',
      savebranch:'branch/save',
      updatebranch:'branch/editList',
      deletebranch:'branch/deleteList',
      getbranchbycode:'branch/getByCode',
      getbranch:'branch/getById',
	  
	    vehiclebodyList:'vehiclebody/getAll',
      savevehiclebody:'vehiclebody/save',
      updatevehiclebody:'vehiclebody/editList',
      deletevehiclebody:'vehiclebody/deleteList',
      getvehiclebodybycode:'vehiclebody/getByCode',
      getvehiclebody:'vehiclebody/getById',
	  
	    vehiclertoseizeList:'vehiclertoseize/getAll',
      savevehiclertoseize:'vehiclertoseize/save',
      updatevehiclertoseize:'vehiclertoseize/editList',
      deletevehiclertoseize:'vehiclertoseize/deleteList',
      getvehiclertoseizebycode:'vehiclertoseize/getByCode',
      getvehiclertoseize:'vehiclertoseize/getById',





      getvehiclemakemaxid:'vehiclemake/getMaxId',
      getvehiclemakeminid:'vehiclemake/getMinId',



      getvehicletypemaxid:'Vehicletype/getMaxId',
      getvehicletypeminid:'Vehicletype/getMinId',


	    getpolicytypemaxid:'policytype/getMaxId',
	    getpolicytypeminid:'policytype/getMinId',


	    getbatterytypemaxid:'batterytype/getMaxId',
      getbatterytypeminid:'batterytype/getMinId',


	    gettyretypemaxid:'tyretype/getMaxId',
      gettyretypeminid:'tyretype/getMinId',



      getvehicleexpensetypemaxid:'vehicleexpensetype/getMaxId',
      getvehicleexpensetypeminid:'vehicleexpensetype/getMinId',

      getvehiclemodelmaxid:'vehiclemodel/getMaxId',
      getvehiclemodelminid:'vehiclemodel/getMinId',


	    getvehicletyperatemaxid:'vehicletyperate/getMaxId',
      getvehicletyperateminid:'vehicletyperate/getMinId',


	    gettransittypemaxid:'transittype/getMaxId',
      gettransittypeminid:'transittype/getMinId',

	    getbillchargemaxid:'billcharge/getMaxId',
      getbillchargeminid:'billcharge/getMinId',



      getvehicleinitialexpensesmaxid:'Vehicleinitialexpenses/getMaxId',
      getvehicleinitialexpensesminid:'Vehicleinitialexpenses/getMinId',


      getvehiclesalemaxid:'Vehiclesales/getMaxId',
      getvehiclesaleminid:'Vehiclesales/getMinId',



      getvehiclepermitmaxid:'vehiclepermit/getMaxId',
      getvehiclepermitminid:'vehiclepermit/getMinId',



 	     getvehiclertoseizemaxid:'vehiclertoseize/getMaxId',
       getvehiclertoseizeminid:'vehiclertoseize/getMinId',



       sparepartrepairList:'sparepartrepair/getAll',
       savesparepartrepair:'sparepartrepair/save',
       updatesparepartrepair:'sparepartrepair/editList',
       deletesparepartrepair:'sparepartrepair/deleteList',
       getsparepartrepairbycode:'sparepartrepair/getByCode',
       getsparepartrepair:'sparepartrepair/getById',
 	     getsparepartrepairmaxid:'sparepartrepair/getMaxId',
       getsparepartrepairminid:'sparepartrepair/getMinId',


 	    sparepartgroupList:'sparepartgroup/getAll',
       savesparepartgroup:'sparepartgroup/save',
       updatesparepartgroup:'sparepartgroup/editList',
       deletesparepartgroup:'sparepartgroup/deleteList',
       getsparepartgroupbycode:'sparepartgroup/getByCode',
       getsparepartgroup:'sparepartgroup/getById',
 	     getsparepartgroupmaxid:'sparepartgroup/getMaxId',
       getsparepartgroupminid:'sparepartgroup/getMinId',



      getType:'GlobalVariable/getByType',
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
