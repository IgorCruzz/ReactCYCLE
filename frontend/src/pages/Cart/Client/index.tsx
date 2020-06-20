import React, { useRef, useState } from 'react'
import { Form } from '@unform/web'
import { useHistory } from 'react-router-dom'
import { FormHandles } from '@unform/core'
import { Input, CpfInput, Select, CnpjInput, BirthInput } from '../../../components/input'
import { Container, Content } from './styles'
import { useDispatch } from 'react-redux'
import { requestData } from '../../../store/ducks/repositories/auth/actions'
import { Data } from '../../../store/ducks/repositories/auth/types'
import * as Yup from 'yup'

interface Errors {
  [key: string]: string
}

const Client: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const [cpf, setCpf] = useState(false)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleSubmit = async (data: Data) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email('Insira um e-mail válido').required('Campo obrigatório'),
        confirmEmail: Yup.string().email('Insira um e-mail válido').required('Campo obrigatório'),
        password: Yup.string().min(6, 'A senha precisa ter 6 ou mais caracteres').required('Campo obrigatório'),
        confirmPassword: Yup.string().required('Campo obrigatório'),
        name: Yup.string().min(4, 'O nome precisa ter 4 ou mais caracteres').required('Campo obrigatório'),
        cpf: Yup.string(),
        cnpj: Yup.string(),
        stateRegistration: Yup.string(),
        companyName: Yup.string(),
        phone: Yup.number().required('Campo obrigatório').typeError('Campo obrigatório'),
        gender: Yup.string().required('Campo obrigatório'),
        birth: Yup.string().required('Campo obrigatório').typeError('Campo obrigatório')
      })

      await schema.validate(data, { abortEarly: false })

      history.push('/endereco')
      dispatch(requestData(data))
    } catch (err) {
      const validationErrors: Errors = {}

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message
        })
        formRef.current?.setErrors(validationErrors)
        alert('errpr')
        console.log(validationErrors)
      }
    }
  }

  return (
    <Container>
      <Content>
        <strong>Seus Dados</strong>
        <Form onSubmit={handleSubmit}>
          <div id="radio">
            <Input type="radio" id="cpf" name="data" value="pessoa fisica" onClick={ () => setCpf(false)} checked />
            <label htmlFor="cpf">Pessoa Física</label>

            <Input type="radio" name="data" value="pessoa juridica" onClick={ () => setCpf(true)}/>
            <label htmlFor="cnpj">Pessoa Jurídica</label>
          </div>

          <label htmlFor="name">Nome completo: </label>
          <Input name="name" />

          <label htmlFor="email">Email: </label>
          <Input name="email" />

          <label htmlFor="Password">Crie uma senha</label>
          <Input name="password" type="password" />

          <label htmlFor="confirmPassword">Confirmar senha</label>
          <Input name="confirmPassword" type="password" />

          <div id="checkCpf">
            {!cpf && (
              <span>
                <label htmlFor="cpf">Cpf: </label>
                <CpfInput name="cpf" />
              </span>
            )}

            {cpf && (
              <span>
                <label htmlFor="cnpj">Cnpj: </label>
                <CnpjInput name="cnpj" />
              </span>
            )}

            <span>
              <label htmlFor="birth">Data de nascimento: </label>
              <BirthInput name="birth" />
            </span>

            <span>
              <label htmlFor="phone">Celular: </label>
              <Input name="phone" />
            </span>
          </div>

          <label htmlFor="gender">Sexo:</label>
          <Select name="gender">
            <option value="M">M</option>
            <option value="F">F</option>
          </Select>
          {cpf && (
            <div id="cnpj">
              <label htmlFor="companyName">Razão Social: </label>
              <Input name="companyName" />

              <label htmlFor="cnpj">Inscrição Estadual: </label>
              <Input name="cnpj" />
            </div>
          )}

          <button type="submit">Continuar</button>

        </Form>
      </Content>
    </Container>
  )
}

export default Client
