# REACT PDF VIEWER INTEGRATION

## After setting up the project setup 

### Run the react js application with vite framework using following command 
`npm run dev` 
#### Run the following command to install react pdf viewer library :-
`npm install pdfjs-dist@3.4.120`
`npm install @react-pdf-viewer/core@3.12.0`

#### Run the following command to design the pdf viewer layout:- 
`npm i @react-pdf-viewer/default-layout`


### Update tsconfig.json file (If you are using Typescript)
#####  Replace the of content of tsconfig.json file with below json 


{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": [
      "DOM",
      "DOM.Iterable",
      "ESNext"
    ],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": false,
    "allowSyntheticDefaultImports": true,
    // "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "baseUrl": ".",
    "paths": {
      "src/*": [
        "./src/*"
      ]
    }
  },
  "include": [
    "src"
  ],
  "references": [
    {
      "path": "./tsconfig.node.json"
    }
  ]
}


### Install the additional packages with below commands:-

`npm install '@react-pdf-viewer/bookmark';`

`npm install '@react-pdf-viewer/theme';`



### Now restart the project using following command
`npm run dev` 