import React from 'react';
import ReactDom from 'react-dom';

import ZoneBox from './ZoneBox';

import Button from 'react-toolbox/lib/button';
import style from './mainStyle';

ReactDom.render(<ZoneBox className={style.content} url="http://localhost:3000/zones" />, document.getElementById('dns'));
