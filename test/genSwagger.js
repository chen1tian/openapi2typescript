const openAPI = require('../dist/index');

openAPI.generateService({
  schemaPath: 'http://localhost:5000/Zj/swagger/v1/swagger.json',
  serversPath: './servers',
  // wrapResult: 'AbpResponse'
});
