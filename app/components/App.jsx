import React from 'react';
import ReactDom from 'react-dom';

import ZoneBox from './ZoneBox';

ReactDom.render(<ZoneBox url="http://localhost:3000/zones" />, document.getElementById('dns'));
