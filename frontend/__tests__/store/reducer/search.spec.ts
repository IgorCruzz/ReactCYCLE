import Search, { INITIAL_VALUES } from '../../../store/ducks/repositories/search/reducer'
import * as SearchTypes from '../../../store/ducks/repositories/search/actions'


describe('Search', () => {
  it('SEARCH_REQUEST', () => {
      const state = Search(INITIAL_VALUES, SearchTypes.searchRequest('product'))

      expect(state).toStrictEqual({
        name: 'product'
      })
  })

  it('DEFAULT', () => {
    const state = Search(undefined, {})

    expect(state).toStrictEqual(INITIAL_VALUES)
  })
})