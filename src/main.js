import React from 'react';
import ReactDOM from 'react-dom';

import Product from './components/product/product.jsx';

import './styles/reset.css';
import './styles/index.css';

ReactDOM.render(
    <div>
        <Product id="prd01"/>
        <Product id="prd02" />
    </div>,
    document.querySelector('#app')
)