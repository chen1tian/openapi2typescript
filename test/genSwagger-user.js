const openAPI = require('../dist/index');

openAPI.generateService({
  schemaPath: 'https://localhost:6001/OpenIdDict/swagger/v1/swagger.json',
  serversPath: './temp/openid-api',  
  namespace: 'OpenIdApi',
  wrapResult: 'Zj.Response',
  apiPrefix:"'openidApi'"
});
