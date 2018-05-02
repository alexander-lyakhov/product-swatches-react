import React from 'react';

import baseComponent from '../base-component.jsx';

import './product.scss';
import logo from '../../assets/react-logo.png';

import ProductSwatches from '../product-swatches/product-swatches.jsx';
import ProductImage from '../product-image/product-image.jsx';
import data from '../../data/data.js';

export default class Product extends baseComponent
{
    constructor(props) {
        super(props);

        this.state = {
            selectedColor: data.colors[0].colorValue
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(color) {
        this.setState({selectedColor: color});
    }

    render() {
        return (
            <section className="product">
                <ProductSwatches onChange={this.handleChange} />
                <ProductImage color={this.state.selectedColor} />
            </section>
        )
    }
};