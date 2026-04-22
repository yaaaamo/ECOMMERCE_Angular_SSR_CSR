
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/products"
  },
  {
    "renderMode": 2,
    "route": "/cart"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 434, hash: '59ee99792a8162e31c50721a2ccdae1af0b6b5feb2809366ea9f92f56019dfdd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 947, hash: 'd732ed90a8d44d23a8fb0ef6fe823580ad90eee15e12eda0450c7ea4721b4772', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'cart/index.html': {size: 1591, hash: '43aac99446ee3ca608a49f51b03e24e9f0192363be197d1328be2bac7beaea57', text: () => import('./assets-chunks/cart_index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 1638, hash: '31a40b3f01c1551a4259b758cfa4bc69612d2590eb3550beaf813331ab86d518', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
