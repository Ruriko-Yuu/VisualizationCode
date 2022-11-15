import styled from "styled-components";
import { FC } from "react";
import { Tooltip } from 'antd';

const ForInitContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
  min-height:30px;
  margin: 0 5px;
  border-radius: 15px;
  &::after {
    content: ';';
    position: absolute;
    top: 50%;
    right: -5px;
    color: #FFFFFF;
    transform: translateY(-50%);
  }
`;
const ForInit: FC<{
  data?: {
    init: any;
    condition: any;
    increment: any;
    content: any;
  };
}> = ({ data }) => {
  return (
    <Tooltip title={<p style={{margin: 0}}>{'int a = 10'}</p>} color={'orange'}>
      <ForInitContent>
        <div>int a = 10</div>
      </ForInitContent>
    </Tooltip>
  );
};

export default ForInit;
