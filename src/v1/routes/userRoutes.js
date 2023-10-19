import express from 'express'

module.exports = app => {
  const router = express.Router()
  const userController = require('../../controllers/userController')
  const userControllerHandler = userController(app)

  /**
   * @openapi
   * /api/v1/user/{dni}:
   *   get:
   *     tags:
   *       - Users
   *     description: Get one user information
   *     parameters:
   *       - name: dni
   *         in: path
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
   *                   type: string
   *                   example: User deleted
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
   *           example: "abcsqwerty@gmail.com"
   *         requested_capital:
   *           type: Float
   *           example: 201205.56
   *         createdAt:
   *            type: string
   *            example: "2023-10-19T11:06:14.498Z"
   *         updatedAt:
   *            type: string
   *            example: "2023-10-19T11:06:14.498Z"
   */

  router
    .get('/:dni', userControllerHandler.getUser)
    .post('/', userControllerHandler.createUser)
    .patch('/', userControllerHandler.updateUser)
    .delete('/', userControllerHandler.deleteUser)

  app.use('/api/v1/user', router)
}
