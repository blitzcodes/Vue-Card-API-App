# Vue Card API App #

The purpose of this project is to demonstrate a fully functional web app, to display competency in advanced front-end Javascript.

## App Objectives ##

This app should satifiy the following criteria:

1. A draggable list of card components are to be display to users.
2. Each card is to contain sample data from one of 18 possible sample APIs.
3. On initial load, 4 cards will be selected at random and displayed to the user.
4. Each card will pull in sample data, and refresh this automatically after 10s, or if manually triggered.
5. Each card can be disabled (prevent updating from source) and vistually denote it's has been made inactive.
6. The card order, and which cards are showns to the user should presist in locale storage.
7. Animations should be used to display card transitions and drag ordering.

### API ###

Sample APIs from [18 Fun APIs For Your Next Project
](https://medium.com/@vicbergquist/18-fun-apis-for-your-next-project-8008841c7be9)

* [Chuck Norris Facts](https://api.chucknorris.io/)
* [Pokemon API](https://pokeapi.co/)
* [International Space Station API](http://open-notify.org/Open-Notify-API/ISS-Location-Now/)
* [Star Wars API](https://swapi.co/)
* [MusixMatch](https://developer.musixmatch.com/documentation)
* [Numbers API](http://numbersapi.com/)
* [Fun Translations](http://funtranslations.com/api)
* [Brewery DB](http://www.brewerydb.com/)
* [REST Countries](https://restcountries.eu/)
* [Tronald Dump](https://www.tronalddump.io/)
* [NASA API](https://api.nasa.gov/index.html)
* [jService](http://jservice.io/)
* [Marvel Comics API](https://developer.marvel.com/)
* [Cat Facts](https://alexwohlbruck.github.io/cat-facts/)
* [Kitsu API](https://kitsu.docs.apiary.io/#)
* [TacoFancy API](https://github.com/evz/tacofancy-api)
* [Advice Slip](http://api.adviceslip.com/)
* [AniDB](http://wiki.anidb.net/w/API)

# Components #

## Grid ##

The sample app is to be a grid list which houses a set of cards. This list must responsively display cards in an appropriate manner, as well as allow the grid items to be sortable in any order.

## Card ##

A card will need to be able to receive various amounts of content from different API sources, and either provide a more details/media rich result, or a more limited simple output with proper fail proof functionality.

Each card will be tied directly to one of the possible API types. It will be able to automatically refresh it's content from the API source every 10s. It will also have two buttons to allow it to either be manually refreshed, or for it's updating to be halted until re-enabled.

## API Digest ##

Various APIs will be available to have cards tied to them. Each API has it's own unique data set which it uses, and these all much be interfaced to be easily connected to the schema of the card components.

Handling of the API requests should be managed by this.

## Last Used State ##

A store should retain the data from the grid/cards/API. The cards, and their order in the grid, should be saved in local storage, such that a returning user will be presented with the same cards in the same order, irrespective of the cards content.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
