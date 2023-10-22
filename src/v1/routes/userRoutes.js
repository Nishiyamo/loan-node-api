import express from 'express'

module.exports = app => {
  const router = express.Router()
  const userController = require('../../controllers/userController')
  const userControllerHandler = userController(app)

  /**
   * @openapi
   * /api/v1/user/:
   *   get:
   *     tags:
   *       - Users
   *     description: Get user information
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
   *                     $ref: "#/components/schemas/Users"
   *   post:
   *     tags:
   *       - Users
   *     description: Create a user information, the email and dni should be unique
   *     consumes:
   *        - application/json
   *     produces:
   *        - application/json
   *     parameters:
   *        - in: body
   *          name: datos
   *          description: User data
   *          required: true
   *          schema:
   *            type: object
   *            properties:
   *              name:
   *                type: string
   *              dni:
   *                type: string
   *              email:
   *                type: string
   *     responses:
   *        200:
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
   *        400:
   *          description: Bad formed fields
   *        500:
   *          description: Internal server error with description
   *   patch:
   *     tags:
   *       - Users
   *     description: Update a user information, based on the dni, we can modify also the email but keep in mind that it should be unique
   *     consumes:
   *        - application/json
   *     produces:
   *        - application/json
   *     parameters:
   *        - in: body
   *          name: datos
   *          description: User data
   *          required: true
   *          schema:
   *            type: object
   *            properties:
   *              name:
   *                type: string
   *              dni:
   *                type: string
   *              email:
   *                type: string
   *     responses:
   *        200:
   *          description: OK
   *          content:
   *            application/json:
   *              schema:
   *                type: object
   *                properties:
   *                  status:
   *                    type: string
   *                    example: OK
   *                  data:
   *                    type: string
   *                    example: User Updated
   *        400:
   *          description: Bad formed fields
   *        500:
   *          description: Internal server error with description
   *   delete:
   *     tags:
   *       - Users
   *     description: Delete the user info and the loans associated with him/her
   *     consumes:
   *        - application/json
   *     produces:
   *        - application/json
   *     parameters:
   *        - in: body
   *          name: datos
   *          description: User data
   *          required: true
   *          schema:
   *            type: object
   *            properties:
   *              nif:
   *                type: string
   *     responses:
   *        200:
   *          description: OK
   *          content:
   *            application/json:
   *              schema:
   *                type: object
   *                properties:
   *                  status:
   *                    type: string
   *                    example: OK
   *                  data:
   *                    type: string
   *                    example: User deleted
   *        400:
   *          description: Bad formed NIF
   *        500:
   *          description: Internal server error with description
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
   *         createdAt:
   *            type: string
   *            example: "2023-10-19T11:06:14.498Z"
   *         updatedAt:
   *            type: string
   *            example: "2023-10-19T11:06:14.498Z"
   */

  router
    .get('/', userControllerHandler.getUser)
    .post('/', userControllerHandler.createUser)
    .patch('/', userControllerHandler.updateUser)
    .delete('/', userControllerHandler.deleteUser)

  app.use('/api/v1/user', router)
}
