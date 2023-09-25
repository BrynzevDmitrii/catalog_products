import * as yup from 'yup'

export const validateLogin = yup.object().shape({
    login:yup.string().required('Введте логин').min(3,'vfkj').max(12),
    password:yup.string().required('Введите пароль').min(4,'Пароль должен содержать не менее 4 символов').max(12,'Пароль может содержать не более 12 символов' ).matches(/[a-zA-Z]/, 'Пароль может содержать только латинские буквы.'),
  })
  