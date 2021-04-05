import React from 'react';
import './style.css';
import {useForm} from 'react-hook-form';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Contact = () => {
    const { register, errors, handleSubmit, reset } = useForm();

    const toastifySuccess = () => {
        toast.dark('Mensaje enviado', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,  
          draggable: false,
          className: 'submit-feedback success',
          toastId: 'notifyToast'
        });
    };

    const onSubmit = async (data) => {
        try {
            const templateParams = {
              name: data.name,
              email: data.email,
              subject: data.subject,
              message: data.message
            };

            await emailjs.send(
                "service_5001m2i",
                "template_ojfdff5",
                templateParams,
                "user_vDZHQxkMZCVc6eAwIXmOp"
              );
            reset();
            toastifySuccess();
        } catch(e) {
            console.log(e);
        }
        
    };

    return (
        <div id="contact" className="container-contact">
            <h1>¡Siempre es un buen momento para conectar!</h1>
            <p className="muted"> Mándame un mensaje y dime cómo te puedo ayudar </p>

            <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
                <input name="name" type="text" className="form-i" placeholder="Nombre" 
                    ref={register({
                        required: { value: true, message: 'Porfavor ingrese su nombre' },
                        maxLength: {
                          value: 30,
                          message: 'Utilice menos de 30 caracteres'
                        }
                      })}
                      />
                      {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                <input name="email" type="email" className="form-i" placeholder="Correo Electrónico" 
                    ref={register({
                        required: true,
                        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                      })}/>
                    {errors.email && ( <span className='errorMessage'>Ingrese un correo válido.</span> )}
                <input name="subject" type="text" className="form-i" placeholder="Asunto" 
                    ref={register({
                        required: { value: true, message: 'Ingrese un asunto' },
                        maxLength: {
                          value: 75,
                          message: 'Utilice menos de 75 caracteres'
                        }
                      })}/>
                    {errors.subject && (<span className='errorMessage'>{errors.subject.message}</span>)}
                <textarea name="message" id="mensaje" className="form-txt" placeholder="Mensaje" 
                    ref={register({
                        required: true
                        })}></textarea>
                    {errors.message && <span className='errorMessage'>Ingrese un mensaje</span>}
                <button type="submit" className="btn btn-primary form-btn">Enviar</button>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Contact;
