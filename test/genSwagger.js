const openAPI = require('../dist/index');

openAPI.generateService({
  schemaPath: 'http://localhost:5000/ReleaseManager/swagger/v1/swagger.json',
  serversPath: './temp/relMgr-api',  
  namespace: 'RelMgr',
  wrapResult: 'Api.Response',
  apiPrefix: '"/relmgr-api"',
});
