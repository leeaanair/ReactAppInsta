import React, { useRef } from 'react';

import './Map.css';

const Map = props => {
console.log(props);
const ref = `https://maps.google.com/?q=${props.lat},${props.lng}&output=embed`;
console.log(ref);
return (<div className={`map ${props.className}`} style={props.style}><iframe src={ref} width="100%" height="100%"></iframe>
</div>);
};

export default Map;