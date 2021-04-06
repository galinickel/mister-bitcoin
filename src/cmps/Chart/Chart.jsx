import { Component } from 'react'
import { bitcoinService } from '../../services/bitcoinService.js'
import './Chart.scss'
import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export class Chart extends Component {
    state = {
        chartData: null
    }
    async componentDidMount() {
        var marketplace
        if(this.props.type==='marketPrice')  marketplace = await bitcoinService.getMarketPrice()
        else if (this.props.type==='tradeVolume')  marketplace = await bitcoinService.getTradeVolume()
        else if (this.props.type==='blockSize') marketplace= await bitcoinService.getBlockSize()
        else return
        var values = marketplace.values.map(value=>{
            return value.y
        })
        this.setState({ chartData: values })
    }
    render() {
        return (
            <div>
                {this.state.chartData &&<Sparklines data={this.state.chartData}>
                    <SparklinesLine color="blue" />
                </Sparklines>}
            </div>
        )
    }
}