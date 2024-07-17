
# Proyecto de Blog de Star Wars
Crear un blog sobre personajes, naves y planetas de Star Wars y el usuario puede guardar y borrar en favorito lo que mas le gusta de cada uno. A su vez hay una vista para poder ver informacion mas detallada de personajes, naves y planetas junto con su foto respestiva.

## Tecnologías utilizadas
HTML, CSS, Boostrap, React


## Iniciar nuestro archivo ***package.json***

    $ npm init -y
    

## Instalar dependencias de webpack en dev

    $ npm i --save-dev webpack webpack-dev-server webpack-cli

## Instalar dependencias de archivos (css, img, etc)

    $ npm i --save-dev html-webpack-plugin mini-css-extract-plugin clean-webpack-plugin autoprefixer postcss-loader css-loader node-sass sass-loader file-loader style-loader url-loader 

## Instalar dependencias de React (stable) 18

    $ npm i --save react react-dom

## Incluir codigo en el ***./src/index.js***

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const container = document.querySelector('#root');
ReactDOM.createRoot(container).render(<App />)

```

## Instalar "Bootstrap"

    $ npm i --save bootstrap

Configurar bootstrap en el ***index.js***
```javascript
    import 'bootstrap/dist/css/bootstrap.min.css'; // CSS
    import 'bootstrap/dist/js/bootstrap.bundle'; // JS
```


