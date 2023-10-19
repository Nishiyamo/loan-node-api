import express from 'express'

module.exports = app => {
  const router = express.Router()
  const userController = require('../../controllers/userController')
  const userControllerHandler = userController(app)

  /**
   * @openapi
   * /api/v1/user:
   *   get:
   *     tags:
   *       - Users
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
   *                     $ref: "#/components/schemas/Users"
   *   post:
   *     tags:
   *       - Users
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
   *                     $ref: "#/components/schemas/Users"
   *   patch:
   *     tags:
   *       - Users
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
   *                     $ref: "#/components/schemas/Users"
   *   delete:
   *     tags:
   *       - Users
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
   *                     $ref: "#/components/schemas/Users"
   */

  /**
   * @openapi
   * components:
   *   schemas:
   *     Users:
   *       type: object
   *       properties:
   *         id:
   *           type: Int
   *           example: 12345
   *         name:
   *           type: string
   *           example: "Ivan Lorenzo"
   *         dni:
   *           type: string
   *           example: "712377F"
   *         email:
   *           type: string
   *           example: "abdqwety@gmail.com"
   *         requested_capital:
   *           type: Float
   *           example: 201205.56
   */

  router
    .get('/:dni', userControllerHandler.getUser)
    .post('/:dni', userControllerHandler.createUser)
    .patch('/:dni', userControllerHandler.updateUser)
    .delete('/:dni', userControllerHandler.deleteUser)

  app.use('/api/v1/user', router)
}
