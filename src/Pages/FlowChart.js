import React from 'react';
import { Component } from 'react';
import './FlowChart.css';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

import { FlowChartWithState, FlowChart, NodeDefault, PortDefault, PortDefaultOuter, PortsDefault, ICanvasOuterDefaultProps } from "@mrblenny/react-flow-chart";

import VideocamRounded from '@material-ui/icons/VideocamRounded';
import MeetingRoomRoundedIcon from '@material-ui/icons/MeetingRoomRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import VolumeUpRoundedIcon from '@material-ui/icons/VolumeUpRounded';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faDoorOpen, faCogs, faBullhorn } from '@fortawesome/free-solid-svg-icons';


import * as actions from "@mrblenny/react-flow-chart/src/container/actions";

import { SidebarItem } from '../components/SidebarItem'
import { Page } from '../components/Page';
import CustomCanvas from '../components/Canvas';
import Sidebar from '../components/Sidebar';
import Port from '../components/Port';
import Content from '../components/Content';
import Message from '../components/Message';
import Node from '../components/Node';


class NodeInnerCustom extends Component {
  render() {
    return (
      <Grid container alignItems='center' justify='center'>
        <Grid item justify='center' style={{ height: 49, padding: 5, border: '2px #3366FC', borderRadius: 50, borderStyle: 'solid dotted solid solid' }}>
          {
            this.props.node.properties.icon === 'camera' &&
            <div style={{ color: '#FFF', backgroundColor: '#3366FC', borderRadius: 50, padding: 8 }}>
              <FontAwesomeIcon icon={faVideo} />
            </div>
          }
          {
            this.props.node.properties.icon === 'room' &&
            <div style={{ color: '#FFF', backgroundColor: '#3366FC', borderRadius: 50, padding: 8 }}>
              <FontAwesomeIcon icon={faDoorOpen} />
            </div>
          }
          {
            this.props.node.properties.icon === 'analytics' &&
            <div style={{ color: '#FFF', backgroundColor: '#3366FC', borderRadius: 50, padding: 8 }}>
              <FontAwesomeIcon icon={faCogs} />
            </div>
          }
          {
            this.props.node.properties.icon === 'actions' &&
            <div style={{ color: '#FFF', backgroundColor: '#3366FC', borderRadius: 50, padding: 8 }}>
              <FontAwesomeIcon icon={faBullhorn} />
            </div>
          }
        </Grid>
        <Grid item>
          <Typography>{this.props.node.name}</Typography>
        </Grid>
      </Grid>
    )
  }
}


class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      chartSimple: {
        //se o scale nao for inicializado o fluxograma nao pode ser alterado quando carregado,
        //ate que voce de zoom o que faz com que a lib salve um scale nesse objeto
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
            //props eh definido como any, toda configuracao personalizada tem que ser passada aqui
            //por causa da transformacao no SidebarItem, configuracoes inseridas em outra parte do 
            //objeto sao ignoradas
            properties: {
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
            properties: {
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
            ports: {
              port1: {
                id: 'port1',
                type: 'right'
              },
              port2: {
                id: 'port2',
                type: 'left'
              }
            },
            properties: {
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

  render() {
    //codigo relacionado as callbacks
    const stateActionCallbacks = Object.keys(actions).reduce((obj, key, idx) => {
      obj[key] = (...args) => {
        let action = actions[key];
        let newChartTransformer = action(...args);
        let newChart = newChartTransformer(this.state.chartSimple);
        this.setState({
          chartSimple: { ...this.state.chartSimple, ...newChart }
        });
        return newChart;
      };
      return obj;
    }, {});
    return (

      <Page>
        <Content>
          <FlowChartWithState
            //objeto com a configuracao inicial do fluxograma
            initialValue={this.state.chartSimple}
            //configuracao do comportamento do fluxograma, todos tem um valor default entao nao e necessario passar
            config={{ snapToGrid: false, selectable: false, readonly: !this.state.eddit, smartRouting: false, zoom: {minScale: 0.9, maxScale: 1.3 }}}
            //setando os componentes personalizados 
            Components={{CanvasOuter: CustomCanvas, NodeInner: NodeInnerCustom, Node: Node, Port: Port }}
            callbacks={stateActionCallbacks}
          />
        </Content>

        <Sidebar>
          <Message>
            Build 19041.329
            SENAI Confidential
          </Message>
          {/*sidebar recebe como props os componentes para construir um no novo*/}
          <SidebarItem
            type='left-right'
            ports={{
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
            ports={{
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
            ports={{
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
              <Button onClick={event => {
                let chart = this.state.chartSimple;
                chart.scale = 1.0;

                this.setState({ eddit: true, chartSimple: chart })
              }
              }>Editar</Button>
            ) : (
                <div />
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
