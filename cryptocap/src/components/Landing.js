import React, { Component } from 'react'; 
import axios from 'axios';

export default class Landing extends Component {

    componentDidMount() {

        const header = {
            'X-CoinAPI-Key': process.env.COINAPI_API,
        }

        axios.get('https://rest.coinapi.io/v1/exchangerate/BTC', header)
            .then(resp => {
                console.log(resp); 
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <div></div>
        )
    }
}