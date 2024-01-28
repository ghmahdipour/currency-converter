import * as Yup from 'yup';

export interface initialValuesProps {
    country: string;
    city: string;
    username: string;
    password: string;
}

export const initialValues = {
    country: '', 
    city: '',
    username: '',
    password: ''
};

export const validationSchema = Yup.object().shape({
    country: Yup.string().required('Country is required'),
    city: Yup.string().required('City is required'),
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
});