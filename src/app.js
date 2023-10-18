import express from 'express'
import consign from 'consign'

const app = express()

consign({
  cwd: __dirname
})
  .include('libs/config.js')
  .then('database.js')
  .then('libs/middleware.js')
  .then('v1/routes')
  .then('libs/boot.js')
  .into(app)
