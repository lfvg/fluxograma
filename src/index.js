import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { FlowChartWithState, FlowChart, NodeDefault, PortDefault, PortDefaultOuter, PortsDefault} from "@mrblenny/react-flow-chart";
import styled, { createGlobalStyle } from 'styled-components'
import Grid from '@material-ui/core/Grid';
import { VideocamRoundedIcon, HomeWorkRoundedIcon} from '@material-ui/icons';
import MeetingRoomRounded from '@material-ui/icons/MeetingRoomRounded';
import VideocamRounded from '@material-ui/icons/VideocamRounded';
import HomeWorkRounded from '@material-ui/icons/HomeWorkRounded';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles'; 
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button'


//import { ReactComponent as LeftNode }  from './leftConnected.svg'

const chartSimple = {
  offset: {
    x: 0,
    y: 0
  },
  nodes: {
    node1: {
      name: "Teste de nome",
      id: "node1",
      type: "input-output",
      position: {
        x: 300,
        y: 100
      },
      ports: {
        port1: {
          id: "port1",
          type: "right",
          properties: {
            value: "yes"
          }
        },
        port2: {
          id: "port2",
          type: "left",
          properties: {
            value: "no"
          }
        }
      }
    },
    node2: {
      name: "Nome do segundo nó",
      id: "node2",
      type: "input-output",
      position: {
        x: 300,
        y: 300
      },
      ports: {
        port1: {
          id: "port1",
          type: "left"
        },
        port2: {
          id: "port2",
          type: "right"
        }
      }
    },
    node3: {
      name: "Ultimo nome",
      id: 'node3',
      type: 'right',
      position: {
        x: 0,
        y: 0
      },
      ports:{
        port1:{
          id:'port1',
          type:'right'
        }
      }
    }
  },
  links: {
    link1: {
      id: "link1",
      from: {
        nodeId: "node1",
        portId: "port2"
      },
      to: {
        nodeId: "node2",
        portId: "port1"
      },
    },
  },
  selected: {},
  hovered: {}
};

const Pd = styled.div`
  width: 24px;
  height: 24px;
  background: cornflowerblue;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NodeCustom = styled.div`
width: 95px;
height: 95px;
background-color: rgba(0,0,0,0);
backgorund: rgba(0,0,0,0);
`


const NodeInnerCustom = ({ node, config }) => {
          return (
            <Grid  container alignItems='center' justify='center'>
              <Grid item justify='center' style={{height:63, color: '#F0F', padding:3, border: '3px solid #3366FC', borderRadius: 50}}>
                <VideocamRounded fontSize='large' style={{color: '#FFF', backgroundColor: '#3366FC', borderRadius: 50, padding: 8}}/>
              </Grid>
              <Grid item> 
                <Typography>{node.name}</Typography>
              </Grid>
            </Grid>
          )
}


const CustomPort = (props) => {
  if(props.port.type === 'left') {
    return(
     <Pd style={{top: -11, right: 150}}>
        <svg style={{ width: '24px', height: '24px'}} viewBox="0 0 24 24">
        <path fill="white" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
        </svg>
    </Pd>
    )
  }
  else{
    return(
    <Pd style={{top: -11, right: 150}}>
        <svg style={{ width: '24px', height: '24px'}} viewBox="0 0 24 24">
        <path fill="white" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
        </svg>
    </Pd>
    )
  }

}
ReactDOM.render(
  <React.StrictMode>
   <div>
    <FlowChartWithState initialValue={chartSimple} config={{snapToGrid:true}} Components={{NodeInner: NodeInnerCustom, Node: NodeCustom, Port: CustomPort}}/>
   </div>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
