module.exports = app => {
  app.listen(app.get('port'), () => {
    console.log('API is listening on port', app.get('port'))
  })
}
