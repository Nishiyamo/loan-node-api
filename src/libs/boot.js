module.exports = app => {
  const { swaggerDocs } = require('../v1/swagger')
  app.listen(app.get('port'), () => {
    console.log('API is listening on port', app.get('port'))
    swaggerDocs(app, app.get('port'))
  })
}
