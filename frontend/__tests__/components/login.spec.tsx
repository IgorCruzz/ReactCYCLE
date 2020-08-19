import 'babel-polyfill'
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event' 
import * as redux from 'react-redux'
import React from 'react'
import Login from '../../components/login'

jest.mock('react-redux')

describe('Login', () => {
  it('should be able to render', () => {
    expect(render(<Login open={true} close={() => jest.fn()} />)).toBeTruthy()
  })

  it('should be able to login', () => {   

    render(<Login open={true} close={() => jest.fn()} />)     
   
    const dispatch = jest.fn()

    jest.spyOn(redux, 'useDispatch').mockReturnValue(dispatch)

    userEvent.type(screen.getByLabelText("E-mail:"), "email@gmail.com")
    userEvent.type(screen.getByLabelText("Senha:"), "password")

    fireEvent.submit(screen.getByTestId("form"))

    expect(dispatch).toBeCalled()
  })

  it('should not able to login if any field are in blank', () => {
    render(<Login open={true} close={() => jest.fn()} />)

    userEvent.type(screen.getByLabelText("E-mail:"), "")
    userEvent.type(screen.getByLabelText("Senha:"), "")

    fireEvent.submit(screen.getByTestId("form"))
 
  })

})