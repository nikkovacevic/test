//react
import React, { useState, useEffect, useMemo, useCallback } from 'react';

//map-gl
import ReactMapGL, { Layer, Source } from 'react-map-gl';

//styling
import { makeStyles } from '@material-ui/core/styles';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Paper from '@material-ui/core/Paper';
import '../css/styles.css';


//semafor
import { updatePercentiles } from './racun_samoforja.js';
import { dataLayer } from './barve_samoforja.js';
import ControlPanelObcine from './control-panel-obcine.js';



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
    }

}));

export default function MapObcineSamofor() {

   

    const classes = useStyles();

    const [viewport, setViewport] = useState({
        latitude: 46.1199444,
        longitude: 14.815333333333333,
        width: '100%',
        height: '70vh',
        zoom: 6.8,
        minZoom: 6.8
    });

    const [allData, setAllData] = useState(null);
    const [year1, setYear] = useState(2020);

    useEffect(() => {
        fetch(
            'https://raw.githubusercontent.com/Aljaz672/Test/main/jsonminifier.geojson'
        )
            .then(resp => resp.json())
            .then(json => setAllData(json));
    }, []);

    const data = useMemo(() => {
        return allData && updatePercentiles(allData, f => f.properties.barvanje[year1]);
    }, [allData, year1]);

  

    

    const [hoverInfo, setHoverInfo] = useState(null);
    

   

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
    }, []);

  
        return (
            <>
            <div>
            
                <main>
                    <div>
                        <Container maxWidth="lg" className={classes.container}>
                            <Row>
                                <Col sm={12} lg={8}>
                                    <Paper className={classes.paper}>
                                        <ReactMapGL
                                            {...viewport}
                                            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
                                            mapStyle={"mapbox://styles/nikkovacevic/ckp9xo2vn1j0g17o7s9eealzm"}
                                            onViewportChange={viewport => {
                                                setViewport(viewport);
                                            }}
                                            interactiveLayerIds={['data']}
                                            onHover={onHover}
                                        >

                                            <Source id="sourcelayer" type="geojson" data={data}>
                                                <Layer {...dataLayer} />
                                            </Source>
                                            {hoverInfo && (
                                                <div className="tooltip123123" style={{ left: hoverInfo.x, top: hoverInfo.y }}>

                                                    <div>{hoverInfo.feature.properties.OB_UIME}</div>
                                                    <hr></hr>
                                                    {
                                                        <div>Indeks: {hoverInfo.feature.properties.value}</div>
                                                    }

                                                </div>
                                            )}
                                        </ReactMapGL>

                                    </Paper>
                                </Col>

                                <Col sm={12} lg={4}>
                                    <Paper className={classes.paper}>
                                       


                                        <h3>Navodila</h3>
                                        <p>Povlečite drsnik ter po letih spremljajte spreminjanje indeksa oziroma deleža prebivalstva, ki dela v regiji, kjer živi.</p>
                                        
                                        <ControlPanelObcine styles={{paddingBottom: "10px"}} year1={year1} onChange={value => setYear(value)} />
                                        <img src={require('../../img/slider.png').default} alt="slider" />

                                        <p style={{ textAlign: 'left' }}>⇧ Spreminjanje barve od najmanjšega do največjega indeksa.</p>
                                        <p style={{ textAlign: 'left' }}>Miško prislonite na regijo ter poglejte kakšen je delež prebivalstva, ki dela v regiji, kjer živi.</p>
                                    </Paper>
                                </Col>
                            </Row>

                        </Container>
                    </div>
                </main>
            </div>

        </>
            
        );
    }

