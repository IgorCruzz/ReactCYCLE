import { Token } from './token.entity'

describe('description', () => {
    it('shoulb be possible register an token with no field', () => {
      const token = new Token()
      expect(token).toBeTruthy()
      expect(token.user_id).toBe(NaN)
      expect(token.token).toBe('')
      expect(token.created_at).toBeInstanceOf(Date)
      expect(token.updated_at).toBeInstanceOf(Date)
    })
})
 