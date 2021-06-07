import React, { useState, useEffect, useMemo, useCallback } from 'react';
import ReactMapGL, { Layer, Source } from 'react-map-gl';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import './css/styles.css'
import Poskus from './poskus';
import GrafRegije from './graphs/grafRegije.js'
import grafSpol from './graphs/spolRegije.js'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import nasData from './data/regije_zdruzen.json';
import Overlay from 'react-bootstrap/Overlay'
import Popover from 'react-bootstrap/Popover'

import { updatePercentiles } from './racun_samoforja.js';
import { dataLayer } from './barve_samoforja.js';
import ControlPanel from './control-panel';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
   
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));

export default function MapRegije() {

    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


    const [viewport, setViewport] = useState({
        latitude: 46.1199444,
        longitude: 14.815333333333333,
        width: '100%',
        height: '70vh',
        zoom: 6.8,
        minZoom: 6.8
    });


    const [allData, setAllData] = useState(null);

    useEffect(() => {
        fetch(
            'https://raw.githubusercontent.com/KovacevicNik/OPSI-geojson-storage/main/regije_zdruzen.geojson'
        )
            .then(resp => resp.json())
            .then(json => setAllData(json));
    }, []);

    const data = useMemo(() => {
        return allData

    }, [allData]);

    const layerStyle = {
        id: 'data',
        type: 'fill',
    };

    const [color, setColor] = useState('#ffffff')

    const [hoverInfo, setHoverInfo] = useState(null);
    const [clickInfo, setClickInfo] = useState(null);

    const onClick = useCallback(event => {

        const {
            features,
            srcEvent: { offsetX, offsetY }

        } = event;

        const clickedFeature = features && features[0];

        setClickInfo(
            clickedFeature
                ? {
                    feature: clickedFeature,
                    x: offsetX,
                    y: offsetY
                }
                : null
        );

        console.log(clickInfo);

    }, []);

    const onHover = useCallback(event => {
        const {
            features,
            srcEvent: { offsetX, offsetY }

        } = event;

        const hoveredFeature = features && features[0];

        setHoverInfo(
            hoveredFeature
                ? {
                    feature: hoveredFeature,
                    x: offsetX,
                    y: offsetY
                }
                : null
        );

        console.log(hoveredFeature);

    }, []);



    return (
        <div>
        
  
      
        <main>
          
     

            <Container maxWidth="lg" className={classes.container}>
                <div>
                    <Grid container spacing={0} direction="row" justify="flex-start" alignItems="flex-start">

                        <Grid item xs={12} md={4} lg={7}>
                            <Paper className={classes.paper}>
                                <ReactMapGL
                                    {...viewport}
                                    mapboxApiAccessToken={"pk.eyJ1Ijoibmlra292YWNldmljIiwiYSI6ImNrcDlwajBjaDBnbmEycmxsMDU5bHZtZWIifQ.7jC2o5D5GqDT7NCqCCkufQ"}
                                    mapStyle={"mapbox://styles/nikkovacevic/ckp9xo2vn1j0g17o7s9eealzm"}
                                    onViewportChange={viewport => {
                                        setViewport(viewport);
                                    }}
                                    interactiveLayerIds={['data']}
                                    onHover={onHover}
                                    onClick={onClick}
                                >

                                    <Source id="sourcelayer" type="geojson" data={data}>
                                        <Layer {...layerStyle} paint={{ 'fill-color': color, 'fill-opacity': 0.3, 'fill-outline-color': "#45634d" }} />
                                    </Source>
                                    {hoverInfo && (
                                        <div className="tooltip123123" style={{ left: hoverInfo.x, top: hoverInfo.y }}>

                                            <div>{hoverInfo.feature.properties.SR_UIME}</div>
                                        </div>
                                    )}
                                </ReactMapGL>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
                <Grid item xs={12} md={2} lg={4}>
                            <Paper className={fixedHeightPaper}>                     
                {clickInfo && (
                    <>




                        <GrafRegije regija={clickInfo.feature.properties.SR_UIME}></GrafRegije>
                        
                    </>
                )}
                    </Paper>
                    </Grid>   
            </Container>
            </main>
    </div>          

     


    );
}
