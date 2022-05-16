import React from 'react';
import { connect } from 'react-redux';
import Counter from '../../components/counter';
import { decrease, increase } from '../../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

// state param : 현재 스토어가 가지고 있는 state
const mapStateToProps = (state) => ({
  number: state.counter.number,
});
// dispatch param : store 의 내장 함수 dispatch 를 받아 옴
const mapDispatchToProps = (dispatch) => ({
  // 임시 함수
  increase: () => {
    dispatch(increase());
  },
  decrease: () => {
    dispatch(decrease());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
