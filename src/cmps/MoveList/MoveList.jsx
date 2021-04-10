import { Component } from 'react'
import Moment from 'react-moment';

import './MoveList.scss'

export class MoveList extends Component {

    movesToDisplay() {
        const movesToDisplay = this.props.user.moves.filter(move => {
            return move.toId === this.props.contact._id
        })
        return movesToDisplay

    }
    render() {

        const movesToDisplay = this.movesToDisplay()
        return (
            <div className="move-list">
                <h1>Transaction History</h1>
                {movesToDisplay.map(move => {
                    return <section>
                        <p >You transferred {move.amount} bitcoins</p>
                        <p>  <Moment fromNow date={move.at} /></p>
                        </section>
                })}
            </div>
        )
    }
}