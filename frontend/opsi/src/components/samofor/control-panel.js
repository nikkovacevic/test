import * as React from 'react';

function ControlPanel(props) {
  const {year} = props;

  return (
    <div className="control-panel">
      
    
      
     
      <hr />
      <label>Leto:<b>{year}</b></label>
      <div key={'year'} className="input">
        <input
          type="range"
          value={year}
          min={2009}
          max={2020}
          step={1}
          onChange={evt => props.onChange(evt.target.value)}
        />
      </div>
    </div>
  );
}

export default React.memo(ControlPanel);