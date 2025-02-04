import Stats from "../components/Stats"

export const UsPage = () => {
  return (
    <div>
      <div className="us">

        <div className="sloganUs">
          <h1 className="animate__animated animate__fadeIn">Desafía tus límites, transforma tu cuerpo.</h1>
          <h4 className="animate__animated animate__fadeIn">En nuestro gimnasio, no solo entrenamos cuerpos, 
            sino que construimos una comunidad comprometida con
            el bienestar. Desde el primer día, nuestra misión ha
            sido inspirar y acompañar a cada persona en su 
            camino hacia una vida más saludable y activa. 
            Contamos con un equipo de profesionales apasionados
            que te guiarán en cada paso, brindándote el apoyo 
            y la motivación que necesitas. Creemos en la 
            diversidad, la inclusión y en crear un ambiente 
            donde todos se sientan bienvenidos, desafiados y 
            empoderados para alcanzar sus metas. 
            ¡Aquí, tu transformación comienza hoy!</h4>
        </div>
      </div>

        <Stats/>

    </div>
    
  )
}
