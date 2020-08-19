import 'babel-polyfill'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'
import Pages from '../../components/page'

describe('Pages', () => {
  it('should be able to render', () => {

    expect(render(<Pages />)).toBeTruthy()

  })
})