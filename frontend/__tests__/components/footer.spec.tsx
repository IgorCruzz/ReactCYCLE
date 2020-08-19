import 'babel-polyfill'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'
import Footer from '../../components/footer'

describe('Footer', () => {
  it('should be able to render', () => {
    expect(render(<Footer />)).toBeTruthy()
  })
})