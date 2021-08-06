/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// json-module.d.ts
declare module '*.json' {
  const data: any
  export default data
}
