const openAPI = require('../dist/index');

openAPI.generateService({
  schemaPath: 'http://localhost:5000/Zj/swagger/v1/swagger.json',
  serversPath: './temp/servers',  
  namespace: 'ZjTest',
  wrapResult: 'ABP.Response'
});
