#! /usr/bin/env node

var paletteSet = require('../');

process.title = 'palette';

paletteSet.serve(3000);
