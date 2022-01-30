module.exports = {
  plugins: [
    'postcss-import',
    'postcss-combine-media-query',
    'postcss-combine-duplicated-selectors',
    'postcss-discard-comments',
    'postcss-media-minmax',
    ['postcss-custom-media', {importFrom: ['./apps/chat/src/global/breakpoints.css']}],
  ]
}
