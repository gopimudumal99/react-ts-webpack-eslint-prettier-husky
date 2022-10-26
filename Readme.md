Course Structure

1.  Setup a basic React app with TypeScript and Webpack 5
2.  Configure webpack and typescript to allow rendering of images and SVGs
3.  Setup webpack config for multiple environments like dev and prod
4.  Add react refresh
5.  Linting with ESLint
6.  Code formatting with Prettier
7.  Husky
8.  Next steps

STEP 1.
folder to create
1 -> .gitignore
2-> source folder
3-> build folder

STEP 2.

- Add Build folder name into .gitignore file

STEP 3.
`npm init --y`

STEP 4.

- create index.html file inside src folder
- add title for index.html as React-Template
- and in the body add div tag with id="root"

STEP 5.

- getting the dependencies
- add node_modules into the .gitignore file
- `yarn add react react-dom`

STEP 6.

- We install typeScript and type of react and react-dom as dev dependency
- devDependency (the packages needed for developer during development)
- dependencies (are the library need to work a app effectively)
- `yarn add -D typescript @types/react @types/react-dom`

STEP7.

- we need to add configuration for typescript compiler
- in root file add tsconfig.js file
- GO through the tsconfig terminology through ts file

STEP 8.

- add App.tsx file into src folder add some react code inside it
- add index.tsx file into src folder (this is a entrypoint)
- import React form 'react' and import ReactDOm form 'react-dom/client'
- next rootELement = doc.getElementId('root')
- next root = ReactDom.createRoot(rootELement)
- root.render(<React.StrictMode><App/></React.StrictMode>)

STEP 9.

- This react and typeScript code cannot read browser directly we need **babel** to convert react code into normal js code
- install babel with necessity plugins
- `yarn add -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript`
- once babel dev-dependency install then we need to add .babelrc configure file in root directory
- add some code in .babelrc

STEP 10.

- webpack which is module bundler the code we write across multiple components will be bundle together by webpack which can be reference index.html file
- `yarn add -D webpack webpack-cli webpack-dev-server html-webpack-plugin `
- apart from this we also needed babel-loader package which allows transpiling javaScript files using babel and webpack
- `yarn add -D babel-loader`

STEP 11.

- webpack configuration
- add webpack named folder in root director
- inside webpack folder add webpack.config.js file
- add some code copy and paste
- configuration is an Object have the entry point points to the index.ts file inside src folder
- resolve extension property this config allows us to levave of file extension while importing
- resolve:{extensions:['.tsx','.ts','js']}
- webpack check first .tsx file its not resolved then check .ts file still not check js
- webpack have **module** rule here saying webpack should use babel-loader for all .ts,.js,tsx,and jsx files excluding the node_modules folder
- for output property we instruct the webpack bundle code please inside the file called bundle.js and bundle.js file please inside build folder
- mode as 'development' which sets process.env and .node_env into development
- plugin HtmlWebpackPlugin : is inject bundle.js file into the index.html file and paste that html file into build folder
- ```module.exports={
     entry:"",

    resolve:{},

    module:{},

    output:{},

    mode: "",

    plugins:[]
  ```

} ```

- add scripts in package.json "start": "webpack serve --config webpack/webpack.config.js --open"
- webpack/webpack.config.js -> config file inside webpack folder named webpack.config.js
- --open flag means directly open in browser if webpack compile successfully

STEP 13

- styles.css file inside src folder
- yarn start run cmd and through error webpack don't no have a loader to load css files
- `yarn add -D css-loader style-loader` these are two loader require run css file through webpack
- add modules rule css-loader and style-loader use
- run yarn start

Step 14

- add png file inside the scr folder and import into app.tsx file
- you find some error due we need to declare types of png bcz of typescript
- add file declaration.d.ts in src folder
- add code as declare module "\*.png"; in declaration.d.ts file and error is gone form app.tsx file
- add img tag and give the src to this png file
- we need to install additional loader like file-loader but in webpack5 support that out of the box through assets modules
- module rule given type : 'asset/resource'
- for svg file added inside the src and import the app
- add type declaration in declaration.d.ts declare module '\*.svg'
- for webpack 5 have type is' asset/inline' (this type used for Fonts and svg's)

- ***configure webpack for multiple environments***
  step1 : rename the webpack.config.js into webpack.common.js and remove mode key in that file
  step2 : 3 extra files added into webpack folder i.e.., webpack.dev.js, webpack.prod.js, webpack.config.js
  step3 : webpack.dev.js --< this specific for dev environment > adding dev and prod configuration
  step4 : we need merge webpack file so we need to install another package
  `yarn add -D webpack-merge`
  step 5: import webpack merge inside webpack.config.js file and module.export as function and take parms of envVars and return the merge of webpack.common.js with envVars webpack('prod' or 'dev')
    
  step6 : in package.json scripts add like ``"start": "webpack serve --config webpack/webpack.config.js --env env=dev --open",``
  ``"build": "webpack --config webpack/webpack.config.js --env env=prod --open",``

  step7: we can also define out own environment variables 
  - add own variables  in dev and prod.js
  - ``cd build/`` and ``npx serve``

***React refresh feature***
