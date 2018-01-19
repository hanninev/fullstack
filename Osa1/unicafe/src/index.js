import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0
        }
    }

    lisaaYksi = (mihin) => {
        return () => {
            this.setState({ [mihin]: this.state[mihin] + 1 })
        }
    }

    render() {
        return (
            <div>
                <Otsikko teksti={'anna palautetta'} />
                <div>
                    <Button nappi={'Hyvä'} toiminto={this.lisaaYksi('hyva')} />
                    <Button nappi={'Neutraali'} toiminto={this.lisaaYksi('neutraali')} />
                    <Button nappi={'Huono'} toiminto={this.lisaaYksi('huono')} />
                </div>

                <Otsikko teksti={'statistiikka'} />
                <Statistics tilastot={this.state} />
            </div>
        )
    }
}

const Button = (props) => {
    return (
        <button onClick={props.toiminto}>{props.nappi}</button>
    )
}

const Statistic = (props) => {
    return (
        <p>{props.teksti}: {props.arvo}</p>
    )
}

const Statistics = (props) => {
    if (props.tilastot.hyva !== 0 || props.tilastot.neutraali !== 0 || props.tilastot.huono !== 0) {
        return (
            <div>
                <Statistic teksti={'Hyvä'} arvo={props.tilastot.hyva} />
                <Statistic teksti={'Neutraali'} arvo={props.tilastot.neutraali} />
                <Statistic teksti={'Huono'} arvo={props.tilastot.huono} />
                <Statistic teksti={'Keskiarvo'} arvo={<Keskiarvo arvio={props.tilastot} />} />
                <Statistic teksti={'Positiivisia'} arvo={<Positiivisia arvio={props.tilastot} />} />
            </div>
        )
    }
    return (
        <div>
            Yhtään palautetta ei ole annettu!
        </div>
    )
}

const Otsikko = (props) => {
    return (
        <div>
            <h1>{props.teksti}</h1>
        </div>
    )
}

const Keskiarvo = (props) => {
    let ka = (props.arvio.huono * -1 + props.arvio.hyva) /
        (props.arvio.huono + props.arvio.neutraali + props.arvio.hyva)

    if (isNaN(ka)) {
        ka = 0
    }

    return (
        ka.toFixed(1)
    )
}

const Positiivisia = (props) => {
    let arvo = 100 * (props.arvio.hyva /
        (props.arvio.huono + props.arvio.neutraali + props.arvio.hyva))

    if (isNaN(arvo)) {
        arvo = 0
    }

    return (
        arvo.toFixed(1) + ' %'
    )
}

ReactDOM.render(
    <App />, document.getElementById('root')
)