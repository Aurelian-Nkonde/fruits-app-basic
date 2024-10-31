import vine from '@vinejs/vine'

export const createFruitValidator = vine.compile(
  vine.object({
    // image: vine.file({}),
    name: vine.string().trim().minLength(3).maxLength(100),
    description: vine.string().trim().minLength(3).maxLength(200),
    province: vine.enum([
      'mashonaland-west',
      'manicaland',
      'mashonaland-east',
      'matebeleland-north',
      'matebeleland-south',
      'masvingo',
      'harare',
      'bulawayo',
      'mashonaland-central',
      'midlands',
    ]),
    season: vine.enum(['winter', 'summer', 'autumn', 'spring']),
    // image: vine.string()
  })
)

export const updateFruitImageValidator = vine.compile(
  vine.object({
    image: vine.file({}),
  })
)

export const updateFruitValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(3).maxLength(100),
    description: vine.string().trim().minLength(3).maxLength(200),
    province: vine.enum([
      'mashonaland-west',
      'manicaland',
      'mashonaland-east',
      'matebeleland-north',
      'matebeleland-south',
      'masvingo',
      'harare',
      'bulawayo',
      'mashonaland-central',
      'midlands',
    ]),
    season: vine.enum(['winter', 'summer', 'autumn', 'spring']),
  })
)
