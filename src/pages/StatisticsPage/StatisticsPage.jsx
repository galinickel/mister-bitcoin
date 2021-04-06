import { Component } from 'react'
import { Chart } from '../../cmps/Chart'

import './StatisticsPage.scss'

export class StatisticsPage extends Component {



    render() {
        return (
            <div className="statisticsPage">
                <Chart class="chart" type="marketPrice"  msg="Bitcoin's Market Price Over The Years"/>
                <Chart class="chart" type="tradeVolume" msg="Bitcoin Trade Volume" />
                <Chart class="chart" type="blockSize"  msg="Bitcoin Block-Size"/>
            </div>
        )
    }
}
