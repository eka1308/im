import { Formik, Field, Form, ErrorMessage } from 'formik';
import styles from './addProductForm.module.css';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import { fetchNewProduct } from '../../api/products';

export const ProductForm = ({ token, closeModal }) => {
  const productSchema = Yup.object().shape({
    name: Yup.string().required('Обязательное поле'),
    description: Yup.string().required('Обязательное поле'),
    price: Yup.number().positive().required('Обязательное поле'),
    discount: Yup.number().min(0).required('Обязательное поле'),
    stock: Yup.number().positive().required('Обязательное поле'),
    pictures: Yup.string().url().required('Обязательное поле'),
    wight: Yup.string().required('Обязательное поле'),
  });

  const initialValues = {
    name: "",
    description: "",
    stock: 1,
    discount: 0,
    pictures: "",
    wight: "",
  }

  const { mutate } = useMutation({
    mutationFn: async (values) => {
      const res = await fetchNewProduct(
        token, { ...values, tags: values.tags.split(';').map(el => el.trim().toLowerCase()) }
      )
      console.log(res)
      const responce = await res.json()
      console.log(responce)

      if (res.ok) {
        toast.success("Товар успешно создан")

        return closeModal()
      }

      return toast.error(responce.message)
    }
  })

  const onSubmit = async (values) => { console.log(values); console.log(token); mutate(values) }
  


  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={productSchema}
    >
      <Form className={styles['form']}>
        <div>
          <Field
            name="name"
            placeholder="Название товара"
            type="text"
            className={styles['field']}
          />
          <ErrorMessage name='name' component='p' className='warning' />
        </div>

        <div>
          <Field
            name="description"
            placeholder="Описание товара"
            type="text"
            className={styles['field']}
          />
          <ErrorMessage name='description' component='p' className='warning' />
        </div>

        <div>
          <label htmlFor="price">Цена товара</label><br />
          <Field
            id='price'
            name="price"
            placeholder="Цена товара"
            type="number"
            className={styles['field']}
          />
          <ErrorMessage name='price' component='p' className='warning' />
        </div>

        <div>
          <label htmlFor="discount">Скидка на товар</label><br />
          <Field
            id='discount'
            name="discount"
            placeholder="Скидка на товар"
            type="number"
            className={styles['field']}
          />
          <ErrorMessage name='discount' component='p' className='warning' />
        </div>

        <div>
          <label htmlFor="stock">Количество товара</label><br />
          <Field
            id='stock'
            name="stock"
            placeholder="Количество товара"
            type="number"
            className={styles['field']}
          />
          <ErrorMessage name='stock' component='p' className='warning' />
        </div>

        <div>
          <Field
            name="pictures"
            placeholder="Фото товара"
            type="text"
            className={styles['field']}
          />
          <ErrorMessage name='pictures' component='p' className='warning' />
        </div>

        <div>
          <Field
            name="wight"
            placeholder="Вес товара"
            type="text"
            className={styles['field']}
          />
          <ErrorMessage name='wight' component='p' className='warning' />
        </div>

        <div>
          <Field
            name="tags"
            placeholder="Теги товара"
            type="text"
            className={styles['field']}
          />
        </div>


        <button type="submit" className={styles['btn-primary']}>Создать</button>
      </Form>
    </Formik>
  )
}
