import React from 'react';
import Counter from '../components/Counter'
import { useSelector, useDispatch } from 'react-redux';
import { decrease, increase, setDiff } from '../modules/counter';



function CounterContainer() {

    const { number, diff } = useSelector(state => ({
        number: state.counter.number,
        diff: state.counter.diff
    }))

    const dispatch = useDispatch();

    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = () => dispatch(setDiff(diff));

    return (
            <Counter onSetDiff={onSetDiff} number={number} diff={diff} 
            onIncrease={onIncrease} onDecrease={onDecrease} />
    )
}

export default CounterContainer;