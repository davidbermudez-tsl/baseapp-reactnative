import {useLoginMutation} from '../query/auth'
import {useFormik} from 'formik'
import * as Yup from 'yup'

const useLoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required('Please enter your email address')
        .email('Please enter a valid email address'),
      password: Yup.string().required('Please enter your password'),
    }),
    onSubmit: (values) => {
      loginMutation.mutate(values)
    },
  })

  const loginMutation = useLoginMutation(formik)
  return formik
}

export default useLoginForm
