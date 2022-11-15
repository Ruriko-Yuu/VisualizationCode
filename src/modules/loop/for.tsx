import styled from "styled-components";
import { FC } from "react";
import { Tooltip } from 'antd';
import ForInit from './modules/for_init'
import ForCondition from './modules/for_condition'
import ForIncrement from './modules/for_increment'
const ForContent = styled.div`
  display: inline-block;
  padding: 0 0 20px 40px;
  background: radial-gradient(farthest-corner at 50% 50%, #cf6, #6cf);
  border-radius: 15px;
  border: 2px solid #6cf;
  border-right: 0;
  .loop-factor {
    display: grid;
    padding: 10px 0 10px;
    grid-template-columns: repeat(auto-fill, 33.3%);
  }
  .content {
    min-height: 150px;
    min-width: 600px;
    background-color: #ffffff;
    border-radius: 15px;
  }
`;
const For: FC<{
  data: {
    init: any;
    condition: any;
    increment: any;
    content: any;
  };
}> = ({ data }) => {
  return (
    <ForContent>
      <div className="loop-factor">
        <ForInit/>
        <ForCondition/>
        <ForIncrement/>
      </div>
      <div className="content">
        {data.content ? <For data={data.content[0]}></For> : <></>}
      </div>
    </ForContent>
  );
};

export default For;
