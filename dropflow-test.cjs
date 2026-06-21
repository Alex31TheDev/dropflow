const fs = require('fs');
const path = require('path');
const dropflow = require('./dist/index.cjs');

const wasmBinary = fs.readFileSync('./dist/dropflow.wasm');

dropflow.createDropflow(wasmBinary).then((flow) => {
  flow.environment.resolveUrl = (url) => Promise.resolve(fs.readFileSync(url));
  flow.environment.resolveUrlSync = (url) => fs.readFileSync(url);

  const fontUrl = new URL('file:///' + path.resolve('./assets/Roboto/Roboto-Regular.ttf').replace(/\\/g, '/'));
  flow.fonts.add(new flow.FontFace('Roboto', fontUrl, {weight: 400}));

  const root = flow.dom(flow.h('div', {
    style: flow.style({
      fontFamily: ['Roboto'],
      fontSize: 16,
      backgroundColor: {r: 255, g: 0, b: 0, a: 1}
    })
  }, 'Hello world'));

  flow.loadSync(root);

  const layout = flow.layout(root);
  flow.reflow(layout, 100, 100);
  console.log(flow.paintToHtml(layout));
}).catch(console.error);
