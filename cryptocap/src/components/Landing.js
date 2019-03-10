import React, { Component } from 'react'; 
import axios from 'axios';

export default class Landing extends Component {

    componentDidMount() {

        const axiosConfig = {
            headers: {
                'X-CoinAPI-Key': '2538C11E-6337-4837-962F-F75536406B04',
            }
        };

        axios.get('https://rest.coinapi.io/v1/exchangerate/BTC', axiosConfig)
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