'use strict';

const isThrodd = require('is-throdd');

const isThreeven = (value) => !isThrodd(value);

module.exports = isThreeven;
