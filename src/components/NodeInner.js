import React from 'react';
import { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import VideocamRounded from '@material-ui/icons/VideocamRounded';


class Main extends Component{

    render({node, config}){
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
}

export default Main;