import { useState } from 'react';
import { useForm } from '../../hooks/useForm'

export const ContactPage = () => {

  const { nameContact, numberContact, emailContact, messageContact, onInputChange, onResetForm } = useForm({
    nameContact: '',
    numberContact: '',
    emailContact: '',
    messageContact: '',
  });

  const [alert, setAlert] = useState(null); // Estado para el mensaje de alerta


  const onSubmit = ( event ) => {

    event.preventDefault();

    if( nameContact.trim().length <= 1 ) return;
    if( numberContact.trim().length <= 1 ) return;
    if( emailContact.trim().length <= 1 ) return;
    if( messageContact.trim().length <= 1 ) return;

    onResetForm();

    setAlert("Enviado correctamente."); // Establece el mensaje
    setTimeout(() => setAlert(null), 7000); // Borra el mensaje en 5 segundos

  }

  return (
    <div className="contact">
      <h1>Contacto</h1>
      <div className="formContact">

        <form onSubmit={onSubmit} className="animate__animated animate__fadeInLeftBig">
          <input type="text"  className="name" name='nameContact' value={nameContact} placeholder="Nombre" onChange={onInputChange}/>
          <input type="number" className="number" name='numberContact' value={numberContact} placeholder="Número de contacto" onChange={onInputChange}/>
          <input type="text" className="email" name='emailContact' value={emailContact} placeholder="Correo electrónico" onChange={onInputChange}/>
          <textarea type="text" className="message" name='messageContact' value={messageContact} placeholder="Mensaje" onChange={onInputChange}/>
          <button type="submit">Enviar</button>

        </form>

        {alert && (
        <div
          style={{
            color: "#ff5722",
            padding: "10px",
            borderRadius: "5px",
            marginBottom: "10px",
          }}
        >
          {alert}
        </div>
        )}
      </div>
    </div>
  ) 
}
