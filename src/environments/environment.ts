// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: "http://mkroadlines.btvbharat.com/api/index.php/",
  mediaURL: 'http://mkroadlines.btvbharat.com/api/uploads/',
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
