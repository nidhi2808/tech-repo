import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";

export default function FormValidation() {
    const { register, handleSubmit, formState: { errors,data } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                
                    <label>First Name</label>
                    <input
                        placeholder='First Name'
                        type="text"
                        {...register("firstName", { required: true, maxLength: 10 })}
                    />
                
                {errors.firstName && <p>Please check the First Name</p>}
                
                
                    <label>Last Name</label>
                    <input
                        placeholder='Last Name'
                        type="text"
                        {...register("lastName", { required: true, maxLength: 10 })}
                    />
                
                {errors.lastName && <p>Please check the Last Name</p>}
                
                    <label>Email</label>
                    <input
                        placeholder='Email'
                        type="email"
                        {...register("email",
                            {
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })}
                    />
                
                {errors.email && <p>Please check the Email</p>}
                
                    <label>Password</label>
                    <input
                        placeholder='Password'
                        type="password"
                        {...register("password", {
                            required: true,
                            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                        })}
                    />
                
                {errors.password && <p>Please check the Password</p>}
                <Button type='submit'>Submit</Button>
            </Form>
            {data}
        </div>
    )
}