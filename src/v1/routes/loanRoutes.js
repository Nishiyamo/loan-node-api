import express from 'express'

module.exports = app => {
  const router = express.Router()
  const loanController = require('../../controllers/loanController')
  const loanControllerHandler = loanController(app)

  /**
   * @openapi
   * /api/v1/loan/:
   *   get:
   *     tags:
   *       - Loans
   *     description: Get the loans of a user
   *     parameters:
   *       - name: nif
   *         in: query
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: OK
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 status:
   *                   type: string
   *                   example: OK
   *                 data:
   *                   type: array
   *                   items:
   *                     $ref: "#/components/schemas/Loans"
   *
   *   post:
   *     tags:
   *       - Loans
   *     responses:
   *       200:
   *         description: OK
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 status:
   *                   type: string
   *                   example: OK
   *                 data:
   *                   type: array
   *                   items:
   *                     $ref: "#/components/schemas/Loans"
   *   patch:
   *     tags:
   *       - Loans
   *     responses:
   *       200:
   *         description: OK
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 status:
   *                   type: string
   *                   example: OK
   *                 data:
   *                   type: array
   *                   items:
   *                     $ref: "#/components/schemas/Loans"
   *   delete:
   *     tags:
   *       - Loans
   *     responses:
   *       200:
   *         description: OK
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 status:
   *                   type: string
   *                   example: OK
   *                 data:
   *                   type: string
   *                   items:
   *                     'Loan deleted'
   */

  /**
   * @openapi
   * components:
   *   schemas:
   *     Loans:
   *       type: object
   *       properties:
   *         id:
   *           type: Int
   *           example: 12345
   *         tae:
   *           type: Float
   *           example: 5.2
   *         requested_capital:
   *           type: Float
   *           example: 20000
   *         total_capital_to_return:
   *           type: Float
   *           example: 21643.75814239593
   *         loan_fee:
   *           type: Float
   *           example: 601.21
   *         amortization_time:
   *           type: Int
   *           example: 3
   *         createdAt:
   *            type: string
   *            example: "2023-10-19T11:06:14.498Z"
   *         updatedAt:
   *            type: string
   *            example: "2023-10-19T11:06:14.498Z"
   *         UserId:
   *           type: Int
   *           example: 4
   */

  router
    .get('/', loanControllerHandler.getLoan)
    .post('/', loanControllerHandler.createLoan)
    .patch('/', loanControllerHandler.updateLoan)
    .delete('/', loanControllerHandler.deleteLoan)

  app.use('/api/v1/loan', router)
}
