/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const FruitsController = () => import('#controllers/fruits_controller')
const AuthController = () => import('#controllers/auth_controller')

router.get('/', async () => {
  return { message: 'The API is health!', code: 200 }
})
router
  .group(() => {
    router
      .group(() => {
        router.get('/', [FruitsController, 'getAllFruits']),
          router.put('/image/:id/update', async () => console.log('the endpoint')),
          router.get('/count', [FruitsController, 'getTotalFruits']),
          router.get('/:id', [FruitsController, 'getFruit']),
          router.put('/:id', [FruitsController, 'updateFruit']),
          router.post('/', [FruitsController, 'createFruit']),
          router.delete('/:id', [FruitsController, 'deleteFruit'])
      })
      .prefix('/fruits')
    router
      .group(() => {
        router.get('/', [AuthController, 'getAllUsers']),
          router.post('/register', [AuthController, 'register']),
          router.post('/login', [AuthController, 'login']),
          router.get('/:id', [AuthController, 'getUser'])
        router.post('/logout', [AuthController, 'logout'])
      })
      .prefix('/auth')
  })
  .prefix('/api')
