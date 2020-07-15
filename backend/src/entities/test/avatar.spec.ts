import { Avatar } from '../avatar.entity'


describe('Avatar', () => {
  it('should be able to create an avatar with no fields', () => {
     const avatar = new Avatar()

     expect(avatar.id).toBe(NaN)
     expect(avatar.name).toBe('')
     expect(avatar.url).toBe('')
     expect(avatar.created_at).toBeInstanceOf(Date)
     expect(avatar.updated_at).toBeInstanceOf(Date)
  })

  it('should be possible to create an avatart', () => {

    expect(new Avatar({
      id: 1,
      name: 'Avatar',
      url: 'http://test.com/file/Avatar',
      created_at: new Date(),
      updated_at: new Date()
    })).toContainKeys(['id', 'name', 'url', 'created_at', 'updated_at'])
  })
})
