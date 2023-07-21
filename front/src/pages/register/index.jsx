import { useForm } from 'react-hook-form';
import { login } from '../../misc/templates';
import { useRegister, useUser } from '../../hooks'
import { useEffect } from 'react';
import { useLocation } from 'wouter'



const Register = () => {

    const { register, formState, handleSubmit } = useForm();
   

    const doRegister = useRegister();

    const [, setLocation] = useLocation();

    const { data } = useUser();

  
     
     useEffect(() => {
        console.info('> user data: ', data)
        data && setLocation('/login')
     }, [data])
   
    const { errors, email, username, password } = login;

    return (
        <section>
            <h2>Create account</h2>
           
            <form onSubmit={handleSubmit(doRegister)}>
                <label htmlFor="email">email</label>
                <br />
                <input {...{...email.props, ...register("email", email.validation) }}
                 />
                <p>{errors[formState.errors?.email?.type]}</p>

                <label htmlFor="username">username</label>
                <br />
                <input {...{...username.props, ...register("username", username.validation) }} 
                />
                <p>{errors[formState.errors?.username?.type]}</p>

                <label htmlFor="password">password</label>
                <br />
                <input {...{...password.props, ...register("password", password.validation)} }
                 />
                <p>{errors[formState.errors?.password?.type]}</p>

                <input type="submit" />

               
            </form>
            
        </section>
    )
};

export default Register;