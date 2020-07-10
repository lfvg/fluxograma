import React from 'react';
import {Component} from 'react';
import './FlowChart.css';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

import { FlowChartWithState, FlowChart, NodeDefault, PortDefault, PortDefaultOuter, PortsDefault, ICanvasOuterDefaultProps} from "@mrblenny/react-flow-chart";

import VideocamRounded from '@material-ui/icons/VideocamRounded';
import MeetingRoomRoundedIcon from '@material-ui/icons/MeetingRoomRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import VolumeUpRoundedIcon from '@material-ui/icons/VolumeUpRounded';

import * as actions from "@mrblenny/react-flow-chart/src/container/actions";

import { SidebarItem } from '../components/SidebarItem'
import {Page} from '../components/Page';
import CustomCanvas from '../components/Canvas';
import Sidebar from  '../components/Sidebar';
import Port from '../components/Port';
import Content from '../components/Content';
import Message from '../components/Message';
import Node from '../components/Node';
import NodeInner from '../components/NodeInner';

const NodeInnerCustom = ({ node, config }) => {
  return (
    <Grid  container alignItems='center' justify='center'>
      <Grid item justify='center' style={{height:49, color: '#F0F', padding:5, border: '2px #3366FC', borderRadius: 50, borderStyle: 'solid dotted solid solid'}}>
        <VideocamRounded fontSize='large' style={{color: '#FFF', backgroundColor: '#3366FC', borderRadius: 50, padding: 8}}/>
      </Grid>
      <Grid item> 
        <Typography>{node.name}</Typography>
      </Grid>
    </Grid>
  )
}

class Teste extends Component{
  render(){
    return(
      
      <Grid  container alignItems='center' justify='center'>
        <Grid item justify='center' style={{height:49, color: '#F0F', padding:5, border: '2px #3366FC', borderRadius: 50, borderStyle: 'solid dotted solid solid'}}>
        {
          this.props.node.properties.icon === 'camera' &&
            <VideocamRounded fontSize='large' style={{color: '#FFF', backgroundColor: '#3366FC', borderRadius: 50, padding: 8}}/>
        }
        {
           this.props.node.properties.icon === 'room' &&
           <MeetingRoomRoundedIcon fontSize='large' style={{color: '#FFF', backgroundColor: '#3366FC', borderRadius: 50, padding: 8}}/>
        }
        {
           this.props.node.properties.icon === 'analytics' &&
           <SettingsRoundedIcon fontSize='large' style={{color: '#FFF', backgroundColor: '#3366FC', borderRadius: 50, padding: 8}}/>
        }
        {
           this.props.node.properties.icon === 'actions' &&
           <VolumeUpRoundedIcon fontSize='large' style={{color: '#FFF', backgroundColor: '#3366FC', borderRadius: 50, padding: 8}}/>
        }
        </Grid>
        <Grid item> 
          <Typography>{this.props.node.name}</Typography>
        </Grid>
      </Grid>
    )
  }
}
    class Main extends Component{

        constructor(props){
            super(props);
    
            this.state = {
                eddit: false,
                
                chartSimple : {
                  //scale buga o setup inicial de adicionar nós e links
                    scale: 0.9,
                    offset: {
                      x: 1,
                      y: 1
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
                            
                          },
                          port2: {
                            id: "port2",
                            type: "left",
                           
                          }
                        },
                        properties:{
                          icon: 'camera'
                        }
                      },
                      node2: {
                        name: "Nome do segundo nó",
                        id: "node2",
                        type: "input-output",
                        icon: 'camera',
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
                        },
                        properties:{
                          icon: 'camera'
                        }
                      },
                      node3: {
                        name: "Ultimo nome",
                        id: 'node3',
                        type: 'input-output',
                        icon: 'room',
                        position: {
                          x: 0,
                          y: 0
                        },
                        ports:{
                          port1:{
                            id:'port1',
                            type:'right'
                          }, 
                          port2:{
                              id:'port2',
                              type:'left'
                          }
                        },
                        properties:{
                          icon: 'room'
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
                },
            

            }
        }
        render(){
        return(
 
    <Page>
      <Content>
        <FlowChartWithState 
            initialValue={this.state.chartSimple} 
            config={{snapToGrid: false , selectable: false, readonly: !this.state.eddit, smartRouting: false, zoom:{minScale: 0.9, maxScale:1.3}}}
            Components={{CanvasOuter: CustomCanvas, NodeInner: Teste, Node: Node, Port: Port}}
           />
      </Content>
      <Sidebar>
        <Message>
            Build 19041.329
            SENAI Confidential 
        </Message>
        <SidebarItem
          type="left-right"
          ports={{
          port1: {
            id: 'port1',
            type: 'left',
            properties: {
              custom: 'property',
              icon: 'camera'
            },
          },
          port2: {
            id: 'port2',
            type: 'right',
            properties: {
              custom: 'property',
            },
          },
          }}
          properties={{
            icon: 'camera',
            name: 'Camera'
          }}
      />
        <SidebarItem 
          type='left-right'
          ports={ {
            port1: {
              id: 'port1',
              type: 'left',
              properties: {
                custom: 'property',
              },
            },
            port2: {
              id: 'port2',
              type: 'right',
              properties: {
                custom: 'property',
              },
            },
          }}
          properties={{
            icon: 'room',
            name: "Room"
          }}
        />
        <SidebarItem 
          type='left-right'
          ports={ {
            port1: {
              id: 'port1',
              type: 'left',
              properties: {
                custom: 'property',
              },
            },
            port2: {
              id: 'port2',
              type: 'right',
              properties: {
                custom: 'property',
              },
            },
          }}
          properties={{
            icon: 'analytics',
            name: 'Analytics'
          }}
        />
        <SidebarItem
          type='left-right'
          ports={ {
            port1: {
              id: 'port1',
              type: 'left',
              properties: {
                custom: 'property',
              },
            },
            port2: {
              id: 'port2',
              type: 'right',
              properties: {
                custom: 'property',
              },
            },
          }}
          properties={{
            icon: 'actions',
            name: 'Actions'
          }}
          />
          {
              !this.state.eddit ? (
                <Button onClick={event =>{
                  let chart  = this.state.chartSimple;
                  console.log('chart editar', chart)
                  chart.scale = 1.0;
                  console.log('chart 1.0', chart)
                  this.setState({eddit: true, chartSimple: chart})}
                }>Editar</Button>
              ) : (
                  <div/>
              )
          }
        <Button onClick={event => 
            console.log(this.state)
          }>Print States</Button>
          
      </Sidebar>
    </Page>
            )
    }
}
 
export default Main;
