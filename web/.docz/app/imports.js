export const imports = {
  'src/shared-components/button/__mdx__/button.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-shared-components-button-mdx-button" */ 'src/shared-components/button/__mdx__/button.mdx'
    ),
}
