# cra-boilerplate

This is an boilerplate project for quick start enterprise level applications using [Create React App](https://github.com/facebookincubator/create-react-app) latest version.


### Advantages

- No more configuration needed to setup redux store, routes.

This project comes with integration of -

- [React js - ^16.2.0](https://facebook.github.io/react/)
- [Redux js - ^3.7.2](http://redux.js.org/)
- [react bootstrap - ^3](https://react-bootstrap.github.io)
- [react-router - ^4.1.2](https://github.com/ReactTraining/react-router)
- [react-redux - ^5.0.6](http://redux.js.org/docs/basics/UsageWithReact.html)
- react-router-dom - ^4.2.2
- react-router-redux - ^5.0.0-alpha.6
- [rxjs - ^5.4.3](reactivex.io/rxjs/)
- [redux-observable - ^0.18.0](https://redux-observable.js.org)
- [axios - ^0.17.1](https://github.com/mzabriskie/axios)
- and some other common libs...

## Create React App Boilerplate

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).



## Roadmap

Before starting development please go through -

- [Presentational and Container Components
](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
- [Tips to learn React + Redux](https://www.robinwieruch.de/tips-to-learn-react-redux/)


## Code Structure / Folders structure / organisation

Project uses `Domain-style` for code structure-

Domain-style : separate folders per feature or domain, possibly with sub-folders per file type

Reference -

- http://redux.js.org/docs/faq/CodeStructure.html
- http://engineering.kapost.com/2016/01/organizing-large-react-applications/

Feature folder must contain booststrap file named `index.js` and css file '[feature].css' at root

Like -

- `src/home/index.js`
- `src/home/style.css`

### Reducers

 - Create folder named `reducers` inside Feature folder like - `src/home/reducers`
- Place `index.js` which combines all reducers using `combineReducers`

### Epics

- Create folder named `epics` inside feature/domain folder like - `src/home/epics`
- Place `index.js` which combines all epics using `combineEpics`

## Ajax Handling

We are using `axios` and `rxjs` to handle ajax.

Using Rxjs DOM api for ajax see file - `rxjs/observable/dom/ajax`
[AjaxObservable](http://reactivex.io/rxjs/file/es6/observable/dom/AjaxObservable.js.html)

## Styling

we are using `scss` Preprocessor. Create a feature/domain specfic scss file, example - `src/home/home.scss`

After compilation the new corresponding CSS file next to it.
example - `src/home/style.css`

Finally you can import that css file in `index.js` file
example - `src/home/index.js` will import `src/home/style.css`

## Something Missing?

File an issue (here)[https://github.com/mohandere/cra-boilerplate/issues].


## License

MIT

