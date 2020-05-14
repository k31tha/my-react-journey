import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../hooks/useAuth';

const Signin = (props) => {
    const auth = useAuth();
    const { register, handleSubmit, errors } = useForm()
    //const onSubmit = data => { props.Signin(data) }
    const onSubmit = data => { auth.signin(); }
    

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="username">Username</label>
            <input name="username" ref={register({ required: {value:true, message: "This field is required" },
            maxLength: {value: 50, message: "Max Length 50 characters"  }})} />
            {errors?.username?.message}
            <br />
            <label htmlFor="password">Password</label>
      <input name="password" type="password" ref={register({ required: {value:true, message: "This field is required" }})} />
      {errors?.password?.message}
      <br />
      <button className="button is-link">Sign In!</button>
        </form>
    )
}

export default Signin;