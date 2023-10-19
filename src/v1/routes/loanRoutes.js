import express from 'express'

module.exports = app => {
  const router = express.Router()
  const loanController = require('../../controllers/loanController')
  const loanControllerHandler = loanController(app)

  /**
   * @openapi
   * /api/v1/loan:
   *   get:
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
   *                   type: array
   *                   items:
   *                     $ref: "#/components/schemas/Loans"
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
   *           example: 2.6
   *         total_capital:
   *           type: Float
   *           example: 206340,56
   *         loan_fee:
   *           type: Float
   *           example: 204,5
   *         amortization_time:
   *           type: Int
   *           example: 21
   */

  router
    .get('/:dni', loanControllerHandler.getLoan)
    .post('/:dni', loanControllerHandler.createLoan)
    .patch('/:dni', loanControllerHandler.updateLoan)
    .delete('/:dni', loanControllerHandler.deleteLoan)

  app.use('/api/v1/loan', router)
}
