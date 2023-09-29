import * as yup from 'yup'

export const addProductValidation = yup.object().shape({
    id:yup.number(),
    title:yup.string().required('Введте название товара').
    min(3,'Название товара должено содержать не менее 3 символов').
    max(100,'Название товара должено содержать не более 100 символов'),

    price:yup.number().required('Введите цену').min(1,'Цена должена содержать не менее 1 символа'),

    category:yup.string().required('Введте название категории'). min(3,'Название категории должено содержать не менее 3 символов'),

    description: yup.string(),

    image:yup.mixed()
  })