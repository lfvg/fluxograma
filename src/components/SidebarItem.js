import * as React from 'react'
import styled from 'styled-components'
import { INode, REACT_FLOW_CHART } from '@mrblenny/react-flow-chart'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
/** */
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faDoorOpen, faCogs, faBullhorn, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const Outer = styled.div`
  padding: 1px;
  padding-right: 5px;
  font-size: 14px;
  background: #FFF;
  cursor: move;
  border-radius: 5px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 12px;
  box-shadow: 0px 0px 5px black;
`


export const SidebarItem = ({ type, icon, ports, properties }) => {
  return (
    <Outer
      draggable={true}
      onDragStart={(event) => {

        event.dataTransfer.setData(REACT_FLOW_CHART, JSON.stringify({ type, icon, ports, properties }))
      }}
    >
      <Grid container direction='row' alignItems='center'>
        <Grid style={{ width: '20%', padding: 2 }}>
          <DragIndicatorIcon style={{ color: '#3366FC', marginTop: 3 }} />
        </Grid>
        <Grid container direction='row' alignItems='center' style={{ width: '80%', background: '#3366FC', padding: 2, paddingLeft: 8, borderRadius: '0px 3px 3px 0px', color: '#FFF' }}>
          {
            properties.icon === 'camera' && <FontAwesomeIcon icon={faVideo} size='2x'/>
          }
          {
            properties.icon === 'room' && <FontAwesomeIcon icon={faDoorOpen} size='2x'/>
          }
          {
            properties.icon === 'analytics' && <FontAwesomeIcon icon={faCogs} size='2x'/>
          }
          {
            properties.icon === 'actions' && <FontAwesomeIcon icon={faBullhorn} size='2x'/>
          }
          <Typography style={{ marginLeft: 12 }} variant='body2'>{properties.name}</Typography>
        </Grid>
      </Grid>
      {/*type*/}
    </Outer>
  )
}