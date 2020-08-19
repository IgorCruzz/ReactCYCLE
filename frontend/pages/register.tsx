import React, { useRef, useState, useEffect } from 'react'
import Head from 'next/head'

import { AiOutlineMail, AiOutlineUser, AiOutlineLoading } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'
import { BsFillPeopleFill } from 'react-icons/bs'
import { MdDataUsage } from 'react-icons/md'
import { Input, PhoneInput, CpfInput, CnpjInput, BirthInput, Select } from '../components/input'
import { FormHandles } from '@unform/core'
import { SignUp } from '../store/ducks/repositories/auth/types'
import { Form } from '@unform/web'
import * as Yup from 'yup' 
import { useDispatch, useSelector } from 'react-redux'
import { signUpRequest } from '../store/ducks/repositories/auth/actions'
import styles from '../styles/register.module.scss'

interface Errors {
  [key: string]: string;
}

interface RootState {
  auth: {
    loading: boolean
  }
}

const Register: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const dispatch = useDispatch()
  const [cpf, setCpf] = useState(false)
  const loading = useSelector((state: RootState) => state.auth.loading)

  useEffect(() => {
    window.scrollTo(0, 600)
  }, [])

  const handleSubmit = async (data : SignUp) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email('Insira um e-mail válido').required('Campo obrigatório'),
        confirmEmail: Yup.string().oneOf([Yup.ref('email')], 'Os emails não se correspondem').required('Campo obrigatório'),
        password: Yup.string().min(6, 'A senha precisa ter 6 ou mais caracteres').required('Campo obrigatório'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'As senhas não se correspondem').required('Campo obrigatório'),
        name: Yup.string().min(4, 'O nome precisa ter 4 ou mais caracteres').required('Campo obrigatório'),
        cpf: Yup.string(),
        cnpj: Yup.string(),
        stateRegistration: Yup.string(),
        companyName: Yup.string(),
        phone: Yup.number().required('Campo obrigatório').typeError('Campo obrigatório'),
        gender: Yup.string().required('Campo obrigatório'),
        birth: Yup.string().required('Campo obrigatório').typeError('Campo obrigatório'),
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

      dispatch(signUpRequest(data))
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
      <title>ReactCycle - Cadastro</title>
    </Head>
    <div id={styles.registerContainer}>
      <div id={styles.registerContent}>

        <div id={styles.registerTitle}>
          <h4>IDENTIFICAÇÃO</h4>
          <small>Faça o seu login ou crie uma conta caso ainda não possua cadastro</small>
        </div>

        <Form onSubmit={handleSubmit} ref={formRef}>

          <div id={styles.dataAccess}>
            <div id={styles.dataAccessTitle}>
              <MdDataUsage />
              <h4>DADOS PARA ACESSO</h4>
            </div>
            <hr />

            <div id={styles.tabela}>
              <div>
                <span>
                  <AiOutlineMail />
                  <label htmlFor="Email">E-mail</label>
                </span>
                <Input name="email" type="email" />
              </div>

              <div>
                <span>
                  <label htmlFor="confirmEmail">Confirmar e-mail</label>
                </span>
                <Input name="confirmEmail" type="email" />
              </div>
              <div>

                <div>
                  <span>
                    <RiLockPasswordLine />
                    <label htmlFor="Password">Crie uma senha</label>
                  </span>
                  <Input name="password" type="password" />
                </div>
              </div>

              <div>
                <span>
                  <label htmlFor="confirmPassword">Confirmar senha</label>
                </span>
                <Input name="confirmPassword" type="password" />
              </div>
            </div>

          </div>

          <div id={styles.accessTypes}>
            <div id={styles.accessTypesTitle}>
              <BsFillPeopleFill />
              <h4>TIPO DE CADASTRO</h4>
            </div>
            <hr />

            <div>
              <div id={styles.teste}>
                <input type="radio" id="cpf" name="data" onClick={ () => setCpf(false)} defaultChecked />
                <label htmlFor="cpf">Pessoa Física</label>

                <input type="radio" id="cnpj" name="data" onClick={ () => setCpf(true)} />
                <label htmlFor="cnpj">Pessoa Jurídica</label>
              </div>
            </div>
          </div>

          <div id={styles.tables}>
            <div id={styles.personalData}>
              <div id={styles.personalDataTitle}>
                <AiOutlineUser />
                <h4>DADOS PESSOAIS</h4>
              </div>
              <hr />

              <label htmlFor="name">Nome completo</label>
              <Input name="name" />

              { !cpf && (
                <>
                  <label htmlFor="cpf">CPF</label>
                  <CpfInput name="cpf" />
                </>
              )}

              { cpf && (
                <>
                  <label htmlFor="cnpj">CNPJ</label>
                  <CnpjInput name="cnpj" />

                  <label htmlFor="companyName">Razão social</label>
                  <Input name="companyName" />

                  <label htmlFor="stateRegistration">Inscrição estadual</label>
                  <Input name="stateRegistration" />
                </>
              )}

              <label htmlFor="phone">Celular</label>
              <PhoneInput name="phone" />

              <label htmlFor="gender">Sexo</label>
              <Select name="gender">
                <option value="M">M</option>
                <option value="F">F</option>
              </Select>

              <label htmlFor="birth">Data de nascimento</label>
              <BirthInput name="birth"/>

            </div>

            <div id={styles.address}>
              <div id={styles.addressTitle}>
                <AiOutlineUser />
                <h4>ENDEREÇO</h4>

              </div>
              <hr />
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
            </div>
          </div>

          <button type="submit">{ loading ? <AiOutlineLoading /> : <strong>CADASTRAR</strong>}</button>
        </Form>
      </div>
    </div>
    </>
  )
}

export default Register