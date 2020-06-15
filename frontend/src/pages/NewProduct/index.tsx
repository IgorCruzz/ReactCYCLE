import React, { useRef, useState, ChangeEvent } from 'react'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import { Container, Content } from './styles'
import { RouteComponentProps } from '@reach/router'
import { Input, CurrencyInput } from '../../components/input'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { createProductRequest } from '../../store/ducks/repositories/product/actions'
import { Product } from '../../store/ducks/repositories/product/types'
import api from '../../services/api'
import { MdAddAPhoto } from 'react-icons/md'

interface Errors {
  [key: string]: string
}

interface Props extends RouteComponentProps {
  close: () => void,
  category: string
}
export const NewProduct: React.FC<Props> = ({ close, category } : Props) => {
  const formRef = useRef<FormHandles>(null)
  const dispatch = useDispatch()
  const [fileField, setFileField] = useState('')
  const [url, setUrl] = useState('')
  const [valueField, setValueField] = useState(0)

  const handleSubmit = async ({
    name,
    price,
    quantity,
    category
  } : Product) => {
    try {
      const schema = Yup.object().shape({
        category: Yup.string().required('Campo obrigatório'),
        name: Yup.string().required('Campo obrigatório'),
        price: Yup.number().positive().required('Campo obrigatório').typeError('Campo obrigatório'),
        quantity: Yup.number().positive().required('Campo obrigatório').typeError('Campo obrigatório')
      })

      await schema.validate({
        name,
        price,
        quantity,
        category
      }, { abortEarly: false })
    } catch (err) {
      const validationErrors: Errors = {}

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message
        })
        formRef.current?.setErrors(validationErrors)
      }
    }
    dispatch(createProductRequest({
      name,
      price: valueField,
      quantity,
      category,
      avatar: fileField
    }))
  }

  const handleChange = async (e: any) => {
    e.preventDefault()

    const data = new FormData()
    data.append('file', e.target.files[0])

    const response = await api.post('avatar', data)

    setUrl(response.data.url)
    setFileField(response.data.id)
  }

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit} >
          <button id="close" type="button" onClick={close}>X</button>
          <div id="avatar">
            <label htmlFor="file" id="label">
              {url.length !== 0 ? <img src={url} alt="avatar" />
                : (
                  <MdAddAPhoto />
                )}
              <Input name="file" type="file" accept="image/*" onChange={handleChange} />
            </label>
          </div>

          <label htmlFor="category">Categoria: </label>
          <Input name="category" defaultValue={category}/>

          <label htmlFor="name">Nome do produto: </label>
          <Input name="name" />

          <label htmlFor="price">Preço do produto: </label>
          <CurrencyInput name="price" stateName={setValueField} />

          <label htmlFor="quantity">Quantidade:</label>
          <Input name="quantity" />

          <button type="submit">Cadastrar produto</button>
        </Form>
      </Content>
    </Container>
  )
}
export default NewProduct
