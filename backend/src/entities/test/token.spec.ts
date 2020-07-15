import { Token } from '../token.entity'


describe('Token', () => {
  it('should be able to token with no fields', () => {
    const token = new Token()

    expect(token.user_id).toBe(NaN)
    expect(token.token).toBe('')
    expect(token.created_at).toBeInstanceOf(Date)
    expect(token.updated_at).toBeInstanceOf(Date)
  })

  it('should be able to create a token', () => {
    expect(new Token({
      user_id: 1,
      token: 'token'
    })).toContainKeys(['user_id', 'token', 'created_at', 'updated_at'])
  })
})
