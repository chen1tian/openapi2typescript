const openAPI = require('../dist/index');

openAPI.generateService({
  schemaPath: 'http://localhost:5000/Zj/swagger/v1/swagger.json',
  serversPath: './temp/servers',  
  namespace: 'Zj',
  wrapResult: 'ABP.Response'
});
