import styles from './signup.module.css';
import { Formik, Field, Form, ErrorMessage  } from 'formik';
import { signUpFetch } from '../../api/user';
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { TOKEN } from '../../utils/constants'
import * as Yup from 'yup';
import { useState } from 'react';
import { useMutation } from 'react-query';



export const SignUp = () => {
  const navigate = useNavigate()
  const [error, setError] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem(TOKEN)
    if (token) navigate('/products')
  }, [navigate])

  const initialValues = {
    email: '',
    password: '',
    group: ''
  }
 
  const { mutateAsync } = useMutation({
    mutationFn: async (values) => {
      const res = await signUpFetch(values)
      const responce = await res.json()
      return responce
    }
  })

 
 
  const onSubmit = async (values) => {
    const responce = await mutateAsync(values)
    if (!responce.err) {
      return navigate('/signin');
    } else {
      return setError(responce.message)
    
  }
  };


  const signUpSchema = Yup.object().shape({
    password: Yup.string().required('Обязательно'),
    email: Yup.string().email('Некорректный email').required('Обязательно'),
  });

  return (
    <div className={styles['wrapper']}>
      <div>Регистрация</div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => onSubmit(values)}
        validationSchema={signUpSchema}
      >
        <Form className={styles['form']}>
          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="name@gmail.com"
            type="email"
            className={styles['field']}
          />
           <ErrorMessage className={styles.error} name="email" component='p' />
          <label htmlFor="password">Password</label>
          <Field id="password" name="password" placeholder="password" type='password' className={styles['field']}/>
          <ErrorMessage className={styles.error} name="password" component='p' />
          <label htmlFor="group">Group</label>
          <Field id="group" name="group" placeholder="group" className={styles['field']} />

          <button type="submit" className={styles['btn-primary']}>Зарегистрироваться</button>
          {error && <p className={styles.error}>{error}</p>}
        </Form>
      </Formik>
      <p>
        Если вы уже зарегистрированы, то <Link to={"/signin"}>авторизуйтесь</Link>.
      </p>
    </div>
  )
}
