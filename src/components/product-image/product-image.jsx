import React from 'react';

import './product-image.scss';
import baseComponent from '../base-component.jsx';

import data from '../../data/data.js';

export default class ProductImage extends baseComponent {
    constructor(props) {
        super(props);
    }

    get image() {
        return 'https:' + data.images[this.props.color][0].imagePath;
    }

    render() {
        return (
            <div className="product-image">
                <img src={this.image} width="320" height="320" />
            </div>
        )
    }
}
