import { useForm } from 'react-hook-form';
import { login } from '../../misc/templates';
import { useMutation, useQueryClient } from 'react-query';
import { auth } from '../../services'



const Login = () => {

    const { register, formState, handleSubmit } = useForm();
    

    const { mutate } = useMutation({
        mutationFn: auth.login,
        onSuccess: (response) => {
        console.info('> mutation response: ', response)
      
        }
    })

    const handleForm = (data) => {
        console.info("> form data: ", data);
        mutate(data)
    };

    const { errors, email, password } = login


    return (
        <section>
            <h2>Login</h2>
          

            <form onSubmit={handleSubmit(handleForm)}>
                <label htmlFor="email">email</label>
                <br />
                <input
                {...{ ...email.props, ...register("email", email.validation) }}
                />
                <p>{errors[formState.errors?.email?.type]}</p>

                <label htmlFor="password">password</label>
                <br />
                <input 
                {...{...password.props, ...register("password", password.validation) }}
                  />
                <p> {errors[formState.errors?.password?.type]}</p>

                <input type="submit" />
            </form>

        </section>
    )
}
export default Login;