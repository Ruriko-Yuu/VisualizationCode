import styled from "styled-components";
import { FC } from "react";
import { Tooltip } from 'antd';

const ForConditionContent = styled.div`
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
    font-size: 16px;
    color: #FFFFFF;
    transform: translateY(-50%);
  }
`;
const ForCondition: FC<{
  data?: {
    Condition: any;
    condition: any;
    increment: any;
    content: any;
  };
}> = ({ data }) => {
  return (
    <Tooltip title={<p style={{margin: 0}}>{'a < 20'}</p>} color={'orange'}>
      <ForConditionContent>
        <div>a &lt; 20</div>
      </ForConditionContent>
    </Tooltip>
  );
};

export default ForCondition;
