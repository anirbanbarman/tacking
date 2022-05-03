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
