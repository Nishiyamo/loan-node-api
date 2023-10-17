const express = require('express')

const v1UserRouter = require('./v1/routes/userRoutes')
const v1LoanRouter = require('./v1/routes/loanRoutes')

const app = express()
const PORT = process.env.PORT || 3000

app.use('/api/v1/user', v1UserRouter)
app.use('/api/v1/loan', v1LoanRouter)

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`)
})
