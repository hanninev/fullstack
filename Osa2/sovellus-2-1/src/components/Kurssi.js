import React from 'react'

const Kurssi = ({ kurssi }) => {

    return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto osat={kurssi.osat} />
      <Yhteensa osat={kurssi.osat} />
    </div>
    )
}

export default Kurssi

const Otsikko = (props) => <h1>{props.kurssi.nimi}</h1>

const Sisalto = (props) => {
  const rivit = () => props.osat.map(osa =>
    <p key={osa.id}>
      {osa.nimi} {osa.tehtavia}
    </p>
)

  return(
    <div>
        {rivit()}
    </div>
  )
}

const Yhteensa = (props) => {
  const rivit = () => props.osat.map(osa => osa.tehtavia)
  const sum = rivit().reduce((a, b) => a+b);
  
  return(
    <p>yhteensä {sum} tehtävää</p>
  )
}