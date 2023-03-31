import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().required('Campo obrigatório!!'),
  address: yup.string().required('Campo obrigatório!!'),
  city: yup.string().required('Campo obrigatório!!'),
  state: yup.string().required('Campo obrigatório!!'),
  phone: yup
    .string()
    .required('Campo obrigatório!!')
    .min(11, 'Minimo 11 digitos')
    .max(11, 'Máximo 11 digitos'),
});
