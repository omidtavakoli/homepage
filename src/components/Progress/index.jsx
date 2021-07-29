import React from 'react';
import { Progress } from 'antd';

const ProgressBar = (props) => {
  const { text, percent } = props;
  return (
    <div style={{ marginTop: '10px' }}>
      <div>
        <Progress
          percent={percent || 0}
          strokeWidth={22}
          status="normal"
          showInfo={false}
          strokeColor="#4DA6FF"
        />
      </div>
      <div style={{
        position: 'absolute',
        marginTop: '-22px',
        marginLeft: '15px',
        color: 'white',
        fontSize: '13px',
      }}
      >
        <span>{ text || '' }</span>
      </div>
    </div>
  );
};

export default ProgressBar;
