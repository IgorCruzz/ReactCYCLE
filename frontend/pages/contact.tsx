import React, { useRef, useEffect } from 'react'
import { Form } from '@unform/web'
import Head from 'next/head'
import * as Yup from 'yup'
import styles from '../styles/contact.module.scss'
import { Input, TextArea, PhoneInput } from '../components/input'
import { FormHandles } from '@unform/core' 
import { useDispatch } from 'react-redux'
import { contactRequest } from '../store/ducks/repositories/contact/actions'
 

interface Errors {
  [key: string]: string
}

interface formData {
  name: string,
  email: string,
  phone: string,
  order: string,
  message: string
}

export const Contact: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const dispatch = useDispatch()

  useEffect(() => {
    window.scrollTo(0, 600)
  }, [])

  const handleSubmit = async (data: formData) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Campo obrigatório'),
        email: Yup.string().email('Insira um e-mail válido').required('Campo obrigatório'),
        phone: Yup.number().positive().required().typeError('Campo obrigatório'),
        order: Yup.number().positive().required().typeError('Campo obrigatório'),
        message: Yup.string().required('Campo obrigatório')
      })

      await schema.validate(data, { abortEarly: false })

      dispatch(contactRequest(data))
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
    <>
    <Head>
      <title>ReactCycle - Contato</title>
    </Head>
    <div id={styles.contactContainer}>
      <div id={styles.contactContent}> 
        <header>
          <h3>FALE CONOSCO</h3>
          <small>Preencha o formulário abaixo.</small>
        </header>

        <Form onSubmit={handleSubmit} ref={formRef}>
          <label htmlFor="name">Nome:</label>
          <Input name="name" />

          <label htmlFor="email">E-mail:</label>
          <Input name="email" />

          <label htmlFor="phone">Telefone:</label>
          <PhoneInput name="phone" />

          <label htmlFor="order">Nº do pedido:</label>
          <Input name="order" />

          <label htmlFor="message">Mensagem:</label>
          <TextArea name="message" />
          <button type="submit">Enviar</button>
        </Form>
      </div>
    </div>
    </>
  )
}
export default Contact