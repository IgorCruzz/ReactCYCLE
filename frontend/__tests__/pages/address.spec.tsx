import 'babel-polyfill'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { render, screen, fireEvent } from '@testing-library/react'
import * as redux from 'react-redux'
import Address from '../../pages/address'
import React from 'react'

jest.mock('react-redux')

describe('Address', () => {
  it('should be render', () => {
    expect(render(<Address />)).toBeTruthy()
  })

  it('should be able to register the address data', () => {
    render(<Address/>)

    const dispatch = jest.fn()

    jest.spyOn(redux, 'useDispatch').mockReturnValue(dispatch)

    userEvent.type(screen.getByLabelText("CEP"), "00000-00")
    userEvent.type(screen.getByLabelText("Endereço"), "Address")
    userEvent.type(screen.getByLabelText("Número"), '10')
    userEvent.type(screen.getByLabelText("Complemento"), 'Complement')
    userEvent.type(screen.getByLabelText("Referência"), 'referency')
    userEvent.type(screen.getByLabelText("Bairro"), 'neighborhood')
    userEvent.type(screen.getByLabelText("Cidade"), 'city')
    userEvent.type(screen.getByLabelText("Estado"), "state") 
    
    fireEvent.submit(screen.getByTestId("form"))   
    
    
        
  })

  it('throw an error if the form has any data blank', () => {
    const { debug } = render(<Address/>)

    debug()

    userEvent.type(screen.getByLabelText("CEP"), "")
    userEvent.type(screen.getByLabelText("Endereço"), "")
    userEvent.type(screen.getByLabelText("Número"), '')
    userEvent.type(screen.getByLabelText("Complemento"), '')
    userEvent.type(screen.getByLabelText("Referência"), '')
    userEvent.type(screen.getByLabelText("Bairro"), '')
    userEvent.type(screen.getByLabelText("Cidade"), '')
    userEvent.type(screen.getByLabelText("Estado"), "") 
    
    fireEvent.submit(screen.getByTestId("form")) 

    debug()
  })
})