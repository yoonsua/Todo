import React from 'react';
import './Form.css';

// value: input내용, onCreate: 버튼 클릭 시 실행, onChange: input변경 시 실행, onKeyPress: input에서 키 입력 시 실행

const Form = ({value, onChange, onCreate, onKeyPress, color}) => {
  return (
    <div className="form">
      <input value={value} onChange={onChange} onKeyPress={onKeyPress} style={{color}}/>
      <div className="create-button" onClick={onCreate}>추가</div>
    </div>
  );
};

export default Form;