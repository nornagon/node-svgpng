/**
 * Convert SVG image into PNG.
 * @module svgpng
 * @version 4.0.1
 */

'use strict'

const svgpng = require('./svgpng')
const svgpngByConf = require('./svgpng_by_conf')

let lib = svgpng.bind(this)

Object.assign(lib, svgpng, {
  byConf: svgpngByConf
})

module.exports = lib
