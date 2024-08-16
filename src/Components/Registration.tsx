import React,{useState} from 'react'
import {useForm, SubmitHandler} from "react-hook-form"
import axios from "axios"



const Registration: React.FC = () => {

    const urlregistration = ""



interface IFormInput {
    email: string
    emailConfirm: string
    password: string
    passwordConfirm: string
}

    const { register,watch, handleSubmit,formState: { errors } } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => checkInput(data)

    const watchPassword = watch("password")
    const watchEmail = watch("email")


    function postData(data: IFormInput){
        
        console.log(`${data.email} & ${data.password} Sent to api`)
        /*
        axios.post(`${urlregistration}`,
        {
        "email": data.email,
        "password": data.password
        })
        .then(function(response){
            console.log(response)
        })
        .catch(function(error){
            console.log(error)
        })
        */
    }
                
    function checkInput(data :IFormInput){
            if(data.email !== "" || data.password !== ""){
                postData(data)
            }

    }
    

    return (
        <form className="d-flex flex-column justify-content-around p-5 hightlight hightlight-shadow" onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex justify-content-between flex-row">
                <h3>Inscription</h3>
                <div className="d-flex flex-column">
                    {errors.email?.type === "required" && (
                            <p className="error-message" role="alert">le champs e-mail est obligatoire</p>
                    )}
                    {errors.email?.type === "pattern" && (
                            <p className="error-message" role="alert">ce n'est pas un e-mail valide</p>
                    )}
                    {errors.email?.type === "maxLength" && (
                            <p className="error-message" role="alert">votre e-mail est trop long</p>
                    )}
                    {errors.emailConfirm?.type === "required" && (
                            <p className="error-message" role="alert">la confirmation de l'e-mail est obligatoire</p>
                    )}
                    {errors.password?.type === "required" && (
                            <p className="error-message" role="alert">le champs mot de passe est obligatoire</p>
                    )}
                    {errors.passwordConfirm?.type === "required" && (
                            <p className="error-message" role="alert">la confirmation du mot de passe est obligatoire</p>
                    )}
                    {errors.passwordConfirm && (
                            <p className="error-message" role="alert">{errors.passwordConfirm.message}</p>
                    )}
                    {errors.emailConfirm && (
                            <p className="error-message" role="alert">{errors.emailConfirm.message}</p>
                    )}
                </div>
            </div>

            <div className="d-flex flex-row">
                <div className="d-flex flex-column m-3 p3">
                    <label>Votre E-mail</label>
                    <input {...register("email", { 
                        required: true, 
                        maxLength: 100, 
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    })}
                    aria-invalid={errors.email ? "true" : "false"}
                    />
                    <label>Confirmer Votre E-mail</label>
                    <input {...register('emailConfirm', { 
                        required: true, 
                        maxLength: 100, 
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
                        validate:(value)=> value === watchEmail ||"Les email ne correspondent pas",
                    })}
                    aria-invalid={errors.emailConfirm ? "true" : "false"}
                    />
                </div>
                <div className="d-flex flex-column m-3">
                    <label>Votre mot de passe</label>
                    <input type="password" id="password"{...register('password', {
                        required: true,
                    })}/>
                    <label>Confirmer votre mot de passe</label>
                    <input type='password' {...register('passwordConfirm',{
                        required: true, 
                        validate:(value)=> value === watchPassword ||"Les mots de pass ne correspondent pas",
                    })}/>
                </div>
            </div>
            <div className="d-flex justify-content-between flex-row m-3">
                <a href="#">J'ai déja un compte</a>
                <input className="btn btn-primary" type="submit" />
            </div>
        </form>
    )

}

export default Registration;