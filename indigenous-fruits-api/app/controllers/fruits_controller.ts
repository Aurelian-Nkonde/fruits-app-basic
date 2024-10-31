// import type { HttpContext } from '@adonisjs/core/http'

import { FruitsService } from '#services/fruit_service'
import { createFruitValidator, updateFruitImageValidator, updateFruitValidator } from '#validators/fruit'
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class FruitsController {
  constructor(private fruitsService: FruitsService) {}

  getAllFruits() {
    return this.fruitsService.AllFruits()
  }

  getTotalFruits() {
    return this.fruitsService.AllFruitsCount()
  }

  getFruit({ params }: HttpContext) {
    const id = params.id
    return this.fruitsService.Fruit(id)
  }

  async createFruit({ request }: HttpContext) {
    const payload = await request.validateUsing(createFruitValidator)
    console.log(payload);
    return this.fruitsService.CreateFruit({ ...payload })
  }

  async updateFruitImage({ request, params }: HttpContext) {
    console.log("what");
    return
    const id = params.id;
    // console.log("file", +request.files('image'))
    // const payload = await request.validateUsing(updateFruitImageValidator)
    console.log("payload ");
    return
    // return this.fruitsService.UpdateFruitImage(id, payload.image);
  }


  deleteFruit({ params }: HttpContext) {
    const id = params.id
    return this.fruitsService.DeleteCount(id)
  }

  async updateFruit({ request, params }: HttpContext) {
    const id = params.id
    const payload = await request.validateUsing(updateFruitValidator)
    return this.fruitsService.UpdateFruit(id, { ...payload })
  }
}
