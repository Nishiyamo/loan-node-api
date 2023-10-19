module.exports = app => {
/* This is going to initialize the database at first with our models
 * then are going to run our application
 */
  app.database.sequelize.sync().then(() => {
    const { swaggerDocs } = require('../v1/swagger')
    app.listen(app.get('port'), () => {
      console.log('API is listening on port', app.get('port'))
      swaggerDocs(app, app.get('port'))
    })
  })
}
