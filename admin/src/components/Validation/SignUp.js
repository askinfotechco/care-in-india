import * as Yup from 'yup';

const SignupvalidationSchema = Yup.object().shape({
    firstname: Yup.string().required('Firstname is required'),
    lastname: Yup.string().required('Lastname is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
});

export default SignupvalidationSchema;
