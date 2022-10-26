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
- ``yarn add -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript``
- once babel dev-dependency install then we need to add .babelrc configure file in root directory
- add some code in .babelrc


STEP 10.
- webpack which is module bundler the code we write across multiple components will be bundle together by webpack which can be reference index.html
