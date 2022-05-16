import React from 'react';
import { connect } from 'react-redux';
import Counter from '../../components/counter';
import { decrease, increase } from '../../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

export default connect(
  // state param : 현재 스토어가 가지고 있는 state
  (state) => ({
    number: state.counter.number,
  }),
  // dispatch param : store 의 내장 함수 dispatch 를 받아 옴
  (dispatch) => ({
    // 임시 함수
    increase: () => dispatch(increase()),
    decrease: () => dispatch(decrease()),
  }),
)(CounterContainer);
