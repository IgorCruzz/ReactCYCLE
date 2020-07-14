import { User } from './user.entity'

describe('description', () => {
  it('should be possible register and User with no fields', () => {
    const user = new User()
    expect(user).toBeTruthy()
  })
})