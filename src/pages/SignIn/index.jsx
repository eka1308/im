import styles from "./signin.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { signInFetch } from "../../api/user";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { TOKEN } from "../../utils/constants";
import { GROUP } from "../../utils/constants";
import { NAME } from "../../utils/constants";
import * as Yup from 'yup';
import { useMutation } from 'react-query';
import { useState } from 'react';

export const SignIn = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  

  useEffect(() => {
    const token = localStorage.getItem(TOKEN);
    if (token) navigate("/products");
  }, [navigate]);

  const initialValues = {
    email: "",
    password: "",
  };

  const { mutateAsync } = useMutation({
    mutationFn: async (values) => {
      const res = await signInFetch(values)
      const responce = await res.json()
      return responce
    }
  })


  const onSubmit = async (values) => {
    const responce = await mutateAsync(values)
  
    if (!responce.err) {
      localStorage.setItem(TOKEN, responce.token);
      localStorage.setItem(GROUP, responce.data.group);
      localStorage.setItem(NAME, responce.data.name);
      return navigate("/products");
    } else {
      return setError(responce.message)
    
  }
  };

  const signInSchema = Yup.object().shape({
    password: Yup.string().required('Обязательно'),
    email: Yup.string().email('Некорректный email').required('Обязательно'),
  });

  return (
    <div className={styles["wrapper"]}>
      <div>Sign In</div>
      <Formik initialValues={initialValues} onSubmit={(values) => onSubmit(values)} validationSchema={signInSchema}>
        <Form className={styles["form"]}>
          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
            className={styles["field"]}
          />
            <ErrorMessage className={styles.error} name="email" component='p' />
          <label htmlFor="password">Password</label>
          <Field
            id="password"
            name="password"
            placeholder="password"
            type="password"
            className={styles["field"]}
          />
           <ErrorMessage className={styles.error} name="password" component='p' />
          <button type="submit" className={styles["btn-primary"]}>
            Войти
          </button>
          {error && <p className={styles.error}>{error}</p>}

        </Form>
      </Formik>
      <p>
        Если вы не зарегистрированы, <Link to={"/signup"}>регистрация</Link>
      </p>
    </div>
  );
};
