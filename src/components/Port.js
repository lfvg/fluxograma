import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';

const PortDiv = styled.div`
  width: 8px;
  height: 8px;
  background: rgba(0,0,0,0);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`

class Main extends Component{
    render(props){
        return(
            <PortDiv> 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 635 635" height="2400" width="2400"><circle r="311.405" cy="317.5" cx="317.5" fill="#3366fc"/></svg>
            </PortDiv>
        )
    }
}

export default Main;