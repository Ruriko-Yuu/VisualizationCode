import styled from "styled-components";
import { FC } from "react";
import { Tooltip } from 'antd';

const ForIncrementContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height:30px;
  background-color: #FFFFFF;
  margin: 0 5px;
  border-radius: 15px;
`;
const ForIncrement: FC<{
  data?: {
    Increment: any;
    condition: any;
    increment: any;
    content: any;
  };
}> = ({ data }) => {
  return (
    <Tooltip title={<p style={{margin: 0}}>{'a = a + 1'}</p>} color={'orange'}>
      <ForIncrementContent>
        <div>a = a + 1</div>
      </ForIncrementContent>
    </Tooltip>
  );
};

export default ForIncrement;
