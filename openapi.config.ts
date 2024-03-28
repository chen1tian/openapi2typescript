const { generateService } = require('@umijs/openapi')

generateService({
  schemaPath: 'http://localhost:5000/ReleaseManager/swagger/v1/swagger.json',
  serversPath: './servers',
})