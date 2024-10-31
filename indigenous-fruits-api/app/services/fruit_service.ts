import Fruit from '#models/fruit'
import { IFruit } from '../Interfaces/fruit.js'
import generateUniqueId from '../utils/generateUniqueId.js'

export class FruitsService {
  constructor() {}

  AllFruits() {
    return Fruit.all()
  }

  async AllFruitsCount() {
    return (await Fruit.all()).length
  }

  async Fruit(id: string) {
    const fruit = await Fruit.findByOrFail('uniqueId', id)
    return fruit
  }

  async CreateFruit(data: IFruit) {
    const fruitExists = Fruit.findBy({ name: data.name })
    if (await fruitExists) {
      console.error('The fruit already exist!')
      throw new Error('The fruit already exist!', { cause: 'Duplicate value' })
    }
    return new Fruit()
      .fill({
        uniqueid: generateUniqueId(),
        name: data.name,
        description: data.description,
        province: data.province,
        season: data.season,
        image: 'data.image',
      })
      .save()
  }

  async DeleteCount(id: string) {
    const fruit = await Fruit.findByOrFail('uniqueId', id)
    if (fruit) {
      await fruit.delete()
      return fruit
    }
  }

  async UpdateFruit(id: string, data: IFruit) {
    const fruit = await Fruit.findByOrFail('uniqueId', id)
    if (fruit) {
      console.log('Fruit is updated!')
      return await fruit
        .merge({
          name: data.name,
          description: data.description,
          season: data.season,
          province: data.province,
          image: data.image,
        })
        .save()
    }
  }

  async UpdateFruitImage(id: string, image: any) {
    const fruit = await Fruit.findByOrFail('uniqueId', id)
    console.log("fruit " +fruit)
    if (fruit) {
      return await fruit
        .merge({
          image: image,
        })
        .save()
    }
  }
}
