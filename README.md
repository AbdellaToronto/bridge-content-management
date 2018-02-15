# cra-boilerplate

[![Build Status](https://travis-ci.org/mohandere/cra-boilerplate.svg?branch=master)](https://travis-ci.org/mohandere/cra-boilerplate)

This project is an [Create React App - v1.1.1](https://github.com/facebookincubator/create-react-app) boilerplate
with integration of Redux, React Router, Redux observable & Reactstrap(Bootstrap v4) and Scss for quick start enterprise level applications.

<!-- <img src="https://raw.githubusercontent.com/mohandere/cra-boilerplate/master/screenshot.png" width="600"> -->
### [Demo](https://mohandere.github.io/cra-boilerplate/#/)

Before starting with project, I strongly recommended to headover [CRA](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md
) documentation.


### Integrations

This project comes with integration of -

- [React js - ^16.2.0](https://facebook.github.io/react/)
- [Redux js - ^3.7.2](http://redux.js.org/)
- [reactstrap - Easy to use React Bootstrap 4 components](https://reactstrap.github.io/)
- [redux-observable - ^0.18.0](https://redux-observable.js.org)
- [react-router - ^4.1.2](https://github.com/ReactTraining/react-router)
- [react-redux - ^5.0.6](http://redux.js.org/docs/basics/UsageWithReact.html)
- react-router-dom - ^4.2.2
- react-router-redux - ^5.0.0-alpha.6
- [rxjs - ^5.4.3](reactivex.io/rxjs/)

#### Added

- Scss
- `Domain-style` for code structure


## Getting Started

1. Clone this repo

`https://github.com/mohandere/cra-boilerplate.git`

2. To run, go to project folder and run

`$ npm install`
or
`$ yarn install` (if you are using yarn)


3. Now start dev server by running -

`$ npm run start`
or
`$ yarn start`

4. visit - http://localhost:3000/

To create production ready codes -

`$ npm run build`

for more commands refer `package.json`

## Roadmap

Before starting development please go through -

- [Presentational and Container Components
](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
- [Tips to learn React + Redux](https://www.robinwieruch.de/tips-to-learn-react-redux/)


## Code/Directory structure

Refer `src/home/` module for an ideal directory structure

Project uses `Domain-style` for code structure-

Domain-style : separate folders per feature or domain, possibly with sub-folders per file type

For more details refer `/src/home` folder.

Reference -

- http://redux.js.org/docs/faq/CodeStructure.html
- http://engineering.kapost.com/2016/01/organizing-large-react-applications/

#### Common components

Place all common components such as Header/Footer in `src/common/components` folder.


### Adding new Module/Feature

- Create a Module/Feature folder at `src/`
like - - `src/home`
Feature folder must contain booststrap file named `index.js` and css file 'style.css' at root

Like -

- `src/home/index.js`
- `src/home/style.css`

Next as per need, add sub folders like -

- `src/home/actions/`
- `src/home/reducers/`
- `src/home/epics/`
- `src/home/containers/`
- `src/home/components/`


### Actions

- Create folder named `actions` inside Feature folder like - `src/home/actions`
- Place `actionTypes.js` which contains all actions to be exported

### Reducers

 - Create folder named `reducers` inside Feature folder like - `src/home/reducers`
- Place `index.js` which combines all reducers using `combineReducers`

### Epics

- Create folder named `epics` inside feature/domain folder like - `src/home/epics`
- Place `index.js` which combines all epics using `combineEpics`

## Ajax Handling

This boierplate comes with `rxjs` to handle ajax. Additionally as per need we can use other libs like `axios`.

Using Rxjs DOM api for ajax see file - `rxjs/observable/dom/ajax`
[AjaxObservable](http://reactivex.io/rxjs/file/es6/observable/dom/AjaxObservable.js.html)

## Styling

we are using `scss` Preprocessor. Create a feature/domain specfic scss file, example - `src/home/style.scss`

After compilation the new corresponding CSS file next to it.
example - `src/home/style.css`

Finally you can import that css file in `index.js` file
example - `src/home/index.js` will import `src/home/style.css`

## Deployment

Refer [deployment](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#deployment) section from CRA doc.


## Something Missing?

File an issue [here](https://github.com/mohandere/cra-boilerplate/issues).


## License

MIT

