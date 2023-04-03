import { FiX } from 'react-icons/fi'
import InputField from './InputField'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react';
import { useGlobalContext } from '../../contexts/GlobalContextProvider';
// import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth"
// import { auth } from '../../config';


export default function Signup() {

    const { setProfile, setOpenModal } = useGlobalContext();
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');

    // FORMIK FORM INITAL VALUES
    const initialValues = { name:'', password:'', email:'', state:'', comfirm_password:'' }

    // VALIDATION SCHEMA
    const validationSchema = Yup.object({
        email:Yup.string().required('please enter E-mal!'),
        name:Yup.string().required('please enter name!'),
        state:Yup.string().required('please choose state!'),
        password:Yup.string().required('create password!'),
        comfirm_password:Yup.string().required('comfirm password!'),
    });

    // LOGIN USER WITH EMAIL AND PASSWORD
    const handleSubmit = async ({email, password}) => {
        setIsLoading(true);
        setMessage('')
        setProfile(null)
        // try {
        //   signInWithEmailAndPassword(auth, email, password).then(res => {
        //     console.log(res)
        //     setProfile(null)
        //   }, err => {
        //     setMessage(err?.code?.split('/')[1])
        //     console.dir(err?.code?.split('/')[1])
        //   })
        // } catch (error) {
        //   setMessage('Something went wrong!')
        //   console.log(error)
        // }finally{
        //   setIsLoading(false);
        // }
    }

  return (
    <div className='h-screen w-full fixed inset-0 bg-black bg-opacity-70 flex justify-center items-start z-50'>
        <div className="md:w-[27%] w-[85%] bg-white md:px-10 px-5 md:py-8 py-4 md:mt-[3rem] mt-[3rem] rounded relative">
            <div className="absolute top-2 right-2 text-xl" onClick={() => setOpenModal(null)}>
                <FiX />
            </div>
            <div className="text-center mb-4">
                <span className="text-2xl">Sign up</span>
                {message && <span className='text-red-500'>{message}</span>}
            </div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {() => (
                    <Form>
                        {formFields.map(field => (
                            <div className='mb-4'>
                            <InputField 
                                name={field.name}
                                placeholder={field.placeholder}
                            />
                            </div>
                        ))}
                        <button className="w-full px-5 py-2 bg-green-600 text-white my-2 rounded" type='submit'>
                            {isLoading ? 'Loading...' : 'Sign up'}
                        </button>
                    </Form>
                )}
            </Formik>
          <div className="text-center mt-4">
            Already have an account <span className="text-blue-600 cursor-pointer" onClick={() => setOpenModal('login')}>Sign in</span>
          </div>
        </div>
    </div>
  )
}

const states = [
    'Juba',
    'Wau',
    'Malakal',
    'Torit',
    'Yambio',
    'Aiel',
    'Kuajok',
    'Bor',
    'Rumbek',
    'Yirol',
]

const formFields = [
  {name:'name', type:'text', placeholder:'Enter your name'},
  {name:'email', type:'email', placeholder:'E-mail Address'},
  {name:'state', type:'select', placeholder:'State', options:states},
  {name:'password', type:'password', placeholder:'Enter password'},
  {name:'comfirm_password', type:'password', placeholder:'Comfirm password'},
]