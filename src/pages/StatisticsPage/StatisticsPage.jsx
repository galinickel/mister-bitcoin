import { Component } from 'react'
import { Chart } from '../../cmps/Chart'

import './StatisticsPage.scss'

export class StatisticsPage extends Component {



    render() {
        return (
            <div>
                <Chart type="marketPrice" />
                <Chart type="tradeVolume" />
                <Chart type="blockSize" />

            </div>
        )
    }
}
