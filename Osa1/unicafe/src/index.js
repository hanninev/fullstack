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

    klikHyva = () => {
        this.setState({
            hyva: this.state.hyva + 1
        })
    }

    klikNeutraali = () => {
        this.setState({
            neutraali: this.state.neutraali + 1
        })
    }

    klikHuono = () => {
        this.setState({
            huono: this.state.huono + 1
        })
    }

    render() {
        return (
            <div>
                <Otsikko teksti={'anna palautetta'} />
                <div>
                    <button onClick={this.klikHyva}>Hyvä</button>
                    <button onClick={this.klikNeutraali}>Neutraali</button>
                    <button onClick={this.klikHuono}>Huono</button>
                </div>

                <Otsikko teksti={'statistiikka'} />
                <p>Hyvä: {this.state.hyva}</p>
                <p>Neutraali: {this.state.neutraali}</p>
                <p>Huono: {this.state.huono}</p>
                <Keskiarvo arvio={this.state} />
                <Positiivisia arvio={this.state} />
            </div>
        )
    }
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
        <div>
            <p> Keskiarvo: {ka.toFixed(1)}</p>
        </div>
    )
}

const Positiivisia = (props) => {
    let arvo = 100 * (props.arvio.hyva /
        (props.arvio.huono + props.arvio.neutraali + props.arvio.hyva))
    
        if (isNaN(arvo)) {
            arvo = 0
        }

    return (
        <div>
            <p> Positiivisia: {arvo.toFixed(1)} %</p>
        </div>
    )
}

ReactDOM.render(
    <App />, document.getElementById('root')
)