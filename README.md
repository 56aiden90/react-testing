### Setup ###
#### Reference
https://www.carlrippon.com/creating-react-app-with-typescript-eslint-with-webpack5/

#### 1. Install React
    npm install react react-dom

#### 2. Install Typescript
    npm install --save-dev typescript

#### 3. Install React types
    npm install --save-dev @types/react @types/react-dom

#### 4. Install Babel and presets
    Babel converts React and Typescript code to Javascript. Also, it interprets newer Javascript code into a browser-compatible one.

    npm install --save-dev @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript @babel/plugin-transform-runtime @babel/runtime

#### 5. Install Webpack
    npm install --save-dev webpack webpack-cli @types/webpack
    npm install --save-dev webpack-dev-server @types/webpack-dev-server
    npm install --save-dev babel-loader
    npm install --save-dev html-webpack-plugin

#### 6. Install Webpack type-cheker
    npm install --save-dev fork-ts-checker-webpack-plugin @types/fork-ts-checker-webpack-plugin

#### 7. Install testing libraries
    npm install --save-dev jest @types/jest
    npm install --save-dev @testing-library/react
    npm install --save-dev @testing-library/jest-dom
    npm install --save-dev babel-jest react-test-renderer