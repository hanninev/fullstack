import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    return (
        <div>
            <h1>{props.kurssi}</h1>
        </div>
    )
}

const Sisalto = (props) => {
    const osa1 = 'Reactin perusteet'
    const tehtavia1 = 10
    const osa2 = 'Tiedonvälitys propseilla'
    const tehtavia2 = 7
    const osa3 = 'Komponenttien tila'
    const tehtavia3 = 14

    return (
        <div>
            <Osa osa={osa1} tehtavia={tehtavia1} />
            <Osa osa={osa2} tehtavia={tehtavia2} />
            <Osa osa={osa3} tehtavia={tehtavia3} />
        </div>
    )
}

const Osa = (props) => {
    return (
        <div>
            <p>{props.osa} {props.tehtavia}</p>
        </div>
    )
}

const Yhteensa = (props) => {
    const tehtavia1 = 10
    const tehtavia2 = 7
    const tehtavia3 = 14

    return (
        <div>
            <p>yhteensä {tehtavia1+tehtavia2+tehtavia3} tehtävää</p>
        </div>
    )
}

const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'

    return (
        <div>
            <Otsikko kurssi={kurssi} />
            <Sisalto />
            <Yhteensa />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)