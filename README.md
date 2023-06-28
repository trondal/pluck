## Update package.json version during build

## Node16.8 or above.

## To use in a NextJS project, you must be on 13 or above.

## TO use in a Vite project, you must be on

## CRA does not support ESM, so those projects should be converted to either NEXTJS og VITE.

## https://webpack.js.org/guides/package-exports/#guidelines

"Avoid the default export. It's handled differently between tooling. Only use named exports."

npm install --save-dev rollup-plugin-peer-deps-external
When bundling a library using rollup, we generally want to keep from including peerDependencies since they are expected to be provided by the consumer of the library. By excluding these dependencies, we keep bundle size down and avoid bundling duplicate dependencies.
// Add to plugins array in rollup.config.js
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
plugins: [
// Preferably set as first plugin.
peerDepsExternal(),
],
}
