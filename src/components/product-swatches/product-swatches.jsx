import React from 'react';

import './product-swatches.scss';
import baseComponent from '../base-component.jsx';

import data from '../../data/data.js';

export default class ProductISwatches extends baseComponent {
    constructor(props) {
        super(props);
    }

    setSelectedColor(colorValue) {
        return () => this.emit('onChange', colorValue);
    }

    get swatches() {

        return data.colors.map(item =>
            <li className="swatch-list__item" key={item.colorValue} onClick={this.setSelectedColor(item.colorValue)}>
                <img src={"https:" + item.color} width="32"/>
            </li>
        )
    }

    render() {
        return (
            <div className="swatches noselect">
                <ul className="swatch-list">
                    {this.swatches}
                </ul>
            </div>
        )
    }
}
