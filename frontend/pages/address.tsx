import React, { useRef } from 'react'
import { Form } from '@unform/web'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import Link from 'next/link'
import { FormHandles } from '@unform/core'
import { Input } from '../components/input'
import styles from '../styles/address.module.scss'
import { useDispatch } from 'react-redux'
import { requestAddress } from '../store/ducks/repositories/auth/actions'
import { Address } from '../store/ducks/repositories/auth/types'
import * as Yup from 'yup'

interface Errors {
  [key: string] : string
}

const Client: React.FC = () => {
  const dispatch = useDispatch()
  const formRef = useRef<FormHandles>(null)

  const handleSubmit = async (data: Address) => {
    try {
      const schema = Yup.object().shape({
        cep: Yup.string().required('Campo obrigatório').typeError('Campo obrigatório'),
        address: Yup.string().required('Campo obrigatório'),
        number: Yup.number().required('Campo obrigatório').typeError('Campo obrigatório'),
        complement: Yup.string().required('Campo obrigatório'),
        referency: Yup.string().required('Campo obrigatório'),
        neighborhood: Yup.string().required('Campo obrigatório'),
        city: Yup.string().required('Campo obrigatório'),
        state: Yup.string().required('Campo obrigatório')
      })

      await schema.validate(data, { abortEarly: false })

      dispatch(requestAddress(data))
    } catch (err) {
      const validationErrors: Errors = {}

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message
        })
        formRef.current?.setErrors(validationErrors)
      }
    }
  }

  return (
    <div id={styles.addressContainer}>
      <div id={styles.addressContent}>
        <strong>Cadastrar endereço</strong>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <label htmlFor="cep">CEP</label>
          <Input name="cep" />

          <label htmlFor="address">Endereço</label>
          <Input name="address" />

          <label htmlFor="number">Número</label>
          <Input name="number" />

          <label htmlFor="complement">Complemento</label>
          <Input name="complement"/>

          <label htmlFor="referency">Referência</label>
          <Input name="referency"/>

          <label htmlFor="neighborhood">Bairro</label>
          <Input name="neighborhood"/>

          <label htmlFor="city">Cidade</label>
          <Input name="city"/>

          <label htmlFor="state">Estado</label>
          <Input name="state"/>

          <button type="submit">Continuar</button>

        </Form>
        <Link href="/client"><a><AiOutlineArrowLeft />Voltar</a></Link>
      </div>
    </div>
  )
}

export default Client