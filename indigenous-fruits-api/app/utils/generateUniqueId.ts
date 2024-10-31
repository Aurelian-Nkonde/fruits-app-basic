import ShortUniqueId from 'short-unique-id'

export default function generateUniqueId() {
  return new ShortUniqueId({ length: 14 }).randomUUID()
}
