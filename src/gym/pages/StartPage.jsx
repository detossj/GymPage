import { useNavigate } from 'react-router-dom'

export const StartPage = () => {

  const navigate = useNavigate();

  const onClickButton = () => {
    navigate('/plans',{
      replace: true,
    })
  }

  return (
    <div className="start">
      
      <div className="sloganStart">
        <h1 className="animate__animated animate__fadeInDown">Entrena, mejora, triunfa.</h1>
        <h4>Da el primer paso hacia tus metas. ¡No esperes más para comenzar!</h4>
        <button onClick={onClickButton}>suscribirme ahora</button>
      </div>

    </div>
  )
}
