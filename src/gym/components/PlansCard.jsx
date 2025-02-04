

export const PlansCard = ({ name, price, priceDesc, value, desc }) => {
  return (
    <div className="card-plan">
      <h3 className="name-plan">{ name }</h3>
      <h2 className="price-desc animate__animated animate__fadeIn">{ priceDesc }</h2>
      <h3 className="price">Antes { price }</h3>
      <p className="value">Valor { value } meses</p>

      
      {/* Convertir desc de objeto a array y mapear */}
      {Object.values(desc).map((service, index) => (
        <p className="desc" key={index}>{service}</p>
      ))}

      <button>Lo quiero</button>

    </div>
  )
}
