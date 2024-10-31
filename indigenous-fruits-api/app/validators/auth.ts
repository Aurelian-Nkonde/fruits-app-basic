import vine from '@vinejs/vine'

export const AuthRegisterValidator = vine.compile(
  vine.object({
    name: vine.string().minLength(3).maxLength(150).trim(),
    password: vine.string().minLength(5),
    email: vine.string().email(),
  })
)

export const AuthLoginValidator = vine.compile(
  vine.object({
    password: vine.string().minLength(5),
    email: vine.string().email(),
  })
)
