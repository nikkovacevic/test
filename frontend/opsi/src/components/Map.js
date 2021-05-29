import React, {useState, useEffect, useMemo, useCallback } from 'react';
import ReactMapGL, { Layer, Source } from 'react-map-gl';
import Box from '@material-ui/core/Box';
import ResponsiveDrawer from './Sidebar'

export default function MapRegije() {

    const [viewport, setViewport] = useState({
        latitude: 46.1199444,
        longitude: 14.815333333333333,
        width: '100%',
        height: '85vh',
        zoom: 8
    });

    const [allData, setAllData] = useState(null);

    useEffect(() => {
        fetch(
            'https://raw.githubusercontent.com/stefanb/gurs-obcine/master/data/SR.geojson'
        )
        .then(resp => resp.json())
        .then(json => setAllData(json));
    }, []);

    const data = useMemo(() => {
        return allData;
    }, [allData]);

    const layerStyle = {
        id: 'data',
        type: 'fill',
    };
    
    const [color, setColor] = useState('#8cc08c')

    const [hoverInfo, setHoverInfo] = useState(null);

    const onHover = useCallback(event => {
        const {
            features,
            srcEvent: {offsetX, offsetY}

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
      
           
      



       
    <div>

        
            {/*<ResponsiveDrawer/>*/}

       

        <ReactMapGL 
        {...viewport}
        mapboxApiAccessToken={"pk.eyJ1Ijoibmlra292YWNldmljIiwiYSI6ImNrcDlwajBjaDBnbmEycmxsMDU5bHZtZWIifQ.7jC2o5D5GqDT7NCqCCkufQ"}
        mapStyle={"mapbox://styles/nikkovacevic/ckp9xo2vn1j0g17o7s9eealzm"}
        onViewportChange={viewport => {
            setViewport(viewport);
        }}
        interactiveLayerIds={['data']}
        onHover={onHover}
        >
        
            <Source id="sourcelayer" type="geojson" data={data}>
                <Layer {...layerStyle} paint={{'fill-color': color, 'fill-opacity': 0.3, 'fill-outline-color': "#45634d"}} />
            </Source>
            {hoverInfo && (
                <div className="tooltip" style={{left: hoverInfo.x, top: hoverInfo.y}}>
                <div>{hoverInfo.feature.properties.SR_UIME}</div>
                <div>432432</div>
                <div>432</div>
                </div>
            )}
        </ReactMapGL>
    </div>
    );
}