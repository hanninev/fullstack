import React from 'react'
import ReactDOM from 'react-dom'

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
  const [osa1, osa2, osa3] = props.kurssi.osat
  
  return(
    <p>yhteensä {osa1.tehtavia + osa2.tehtavia + osa3.tehtavia} tehtävää</p>
  )
}

const App = () => {

  return (
    <div>
        <Kurssi kurssi={kurssi} />
    </div>
  )
}

const Kurssi = (props) => {
    const { kurssi } = props;

    return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto osat={kurssi.osat} />
    </div>
    )
}

const kurssi = {
   nimi: 'Half Stack -sovelluskehitys',
   osat: [
     {
       nimi: 'Reactin perusteet',
       tehtavia: 10,
       id: 1
     },
     {
       nimi: 'Tiedonvälitys propseilla',
       tehtavia: 7,
       id: 2
     },
     {
       nimi: 'Komponenttien tila',
       tehtavia: 14,
       id: 3
     },
     {
       nimi: 'Uusi testi',
       tehtavia: 12,
       id: 4
     }
   ]
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)