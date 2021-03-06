Módulo 3 - React

# Evaluación final

**URL del ejercicio: [Harry Potter](https://mararochafernandez.github.io/modulo-3-evaluacion-final/)**

Desarrollar una página web con React con un listado de personajes de Harry Potter, que permita filtrar por el nombre del personaje y la casa a la que pertenece.

## Características técnicas

- Petición Fetch a una API.
- Funcionalidades propias de React como componentes, Lifting, Router, Hooks de estado y efecto.
- Métodos funcionales de array de JavaScript: `map`, `filter`, `find`, `sort`.
- Gestión de Local Storage del navegador.
- Control de versiones con Git.
- Maquetación responsive con CSS Flexbox, Sass y BEM.

---

![Harry Potter](./react-harry-potter.jpg)

---

## 0. Preparación

- [x] Clonar repositorio
- [x] Crear proyecto con React Starter Kit
- [x] Bocetar esquema

## 1. Listado de personajes

- [x] Utilizar servicio de [hp-api.herokuapp.com](http://hp-api.herokuapp.com/) que devuelve información de los personajes de Harry Potter filtrados por casa a la que pertenecen.
- [x] Pintar información de los personajes: foto, nombre y especie.
- [x] Mostrar imagen por defecto si no existe.

## 2. Filtrado de personajes

- [x] Buscar personajes por nombre completo (en mayúsculas o minúsculas).
- [x] Escuchar y controlar `input`.

## 3. Filtrado por casa

- [x] Buscar personajes por casa (casa por defecto: Gryffindor).
- [x] Escuchar y controlar `select`.

## 4. Componentes del listado de personajes

- [x] Componente para el filtro del nombre (`Filters`).
- [x] Componente para el listado de personajes (`CharacterList`).
- [x] Componente para cada personaje del listado (`CharacterCard`).
- [x] Componente para el detalle de cada personaje (`CharacterDetail`).

## 5. Detalle del personaje

- [x] Información de cada personaje a **pantalla completa**: foto, nombre, casa, si está vivo o muerto, género, especie y nombres alternativos.
- [x] Usar rutas con `react-router-dom` (ocultar componente `CharacterList` y mostrar componente `CharacterCard`).

## 6. Calidad

- [x] Usar etiqueta `<form />`
- [x] Evitar comportamiento por defecto del formulario.
- [x] Mostrar mensaje de aviso si no se obtienen resultados de búsqueda.
- [x] Filtrar independientemente de que se escriba en mayúsculas o minúsculas.
- [x] Mantener los resultados filtrados al volver del detalle del personaje.

## 7. Bonus: mejoras visuales

- [x] Mostrar icono de cada casa en el detalle del personaje.
- [x] Maquetar con algún sistema de `grid`.
- [x] Adaptar a dispositivos pequeños.

## 8. Bonus: URL compartible

- [x] Ver el detalle del personaje a través de su URL.
- [x] Mostrar mensaje de error si la URL no existe.

## 9. Bonus: ordenación

- [x] Ordenar listado de personajes alfabéticamente.

## 10. Bonus: más filtros

- [x] Filtrar, por ejemplo, por género.

## 11. Bonus: botón reset

- [x] Volver al listado inicial.

## Otras mejoras

- [x] Cambiar favicon.
- [x] Maquetar estilos CSS.
- [x] Filtrar por personajes con imagen.
- [x] Filtrar por estudiante de Hogwarts.
- [x] Guardar información del formulario en almacenamiento local.
- [ ] Crear un componente para cada filtro.
- [ ] Uso de default props y prop types.
- [ ] Refactorizar.

---

# Installation and setup

Requirements: you need `node` and `npm` installed on your computer.

### Clone the repo

```
git clone URL
```

### Install the dependencies

```
npm install
```

### Run the app

```
npm start
```

Go to [http://localhost:3000](http://localhost:3000) to view the app in the browser.

### Deploy for production environment

```
npm run build
```

---

# My React Starter Kit ✨

- NPM dependencies: `node-sass` `react-router-dom@5.3.0` `prop-types`
- Services: API and Local Storage
- Publish in GitHub Pages: `npm run githubpages`

---

_Happy coding!_
