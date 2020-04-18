import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button} from 'shineout';
import * as actionTypes from '../../store/actions';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onIncrement5Counter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onDecrement5Counter}  />
                <Button type='primary' onClick={() => this.props.onStoreResult(this.props.ctr)}>Store</Button>
                <ul>
                    {this.props.storedResults.map( str => (
                        <li key={str.id} onClick={() => this.props.onDeleteResult(str.id)}>{str.value}</li>
                    ))}
                    {/* <li onClick={() => this.props.onDeleteResult(str.id)}></li> */}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onIncrement5Counter: () => dispatch({type: actionTypes.INCREMENT5}),
        onDecrement5Counter: () => dispatch({type: actionTypes.DECREMENT5}),
        onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT , result: result}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT , resultElId:id })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);