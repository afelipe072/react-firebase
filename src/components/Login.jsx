import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import { auth } from '../firebaseconfig'

const Login =() =>{

    const historial = useHistory()   


    const [email,setEmail]=useState('')
    const [pass,setPass]=useState('')
    const[msjError, setMsjError]=useState(null)

    const registrarUsuario =(e)=>{        
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email,pass)

        .then( r=> {
            alert('Usuario Registrado Correctamente')
            historial.push('/')
        }) 
        
        
        .catch(e =>{  
            
            if(e.code == 'auth/invalid-email'){
                setMsjError('Formato de e-mail incorrecto')
            }

            if(e.code == 'auth/weak-password'){
                setMsjError('La contraseña debe tener 6 caracteres o mas')
            }
            if(e.code == 'auth/email-already-in-use'){
                setMsjError('El e-mail ya se encuentra en uso')
            }
            
        })

    }

    const loginUsuario = () =>{        
        auth.signInWithEmailAndPassword(email,pass)
        .then( (r)=>{
            console.log(r)
            historial.push('/')
            
        })
        .catch( (er)=>{
            if(er.code == 'auth/wrong-password'){
                setMsjError('Constraseña incorrecta')
            }
            if(er.code =='auth/user-not-found'){
                setMsjError('El e-mail no se encuentra registrado')
            }            
        } )
   
        

    }



    return (
        <div className="row mt-5">
            <div className="col"></div>
            <div className="col">
                <form  onSubmit={registrarUsuario} className="form-group">
                    <input
                    onChange={(e)=>{setEmail(e.target.value)}}
                    className="form-control"
                    placeholder="Introduce e-mail"
                    type="text"                    
                    />
                    <input
                    onChange={(e)=>{setPass(e.target.value)}}
                    className="form-control mt-4"
                    placeholder="Introduce contraseña"
                    type="password"
                    />
                    <input
                    className="btn btn-dark btn-block mt-4"
                    value="Registrar Usuario"
                    type="submit"
                    />
                    
                </form>

                <button
                    onClick={loginUsuario}
                    className="btn btn-success btn-block mt-2"
                    > 
                    Iniciar Sesión
                    </button>
                {
                    msjError!=null ?
                    (
                        <div className="alert alert-danger mt-2">
                            {msjError}
                        </div>
                    )
                    :
                    (
                    <span> </span>
                    )
                }
            </div>
            <div className="col"></div>
            
        </div>
    )
}

export default Login