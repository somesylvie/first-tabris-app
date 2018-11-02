import {ActivityIndicator, ui, Button, TextView, NavigationView, ScrollView, Page} from 'tabris';
import {getRandomTaco, TacoResponse} from './connectors/taco';

let navigationView = new NavigationView({
  left:0, top: 0, right: 0, bottom: 0
}).appendTo(ui.contentView);

let page = new Page({
  title: 'Taco Shaker'
}).appendTo(navigationView);

let scrollView = new ScrollView({
  left:0, top: 0, right: 0, bottom: 0
}).appendTo(page);

new TextView({
  top: 0, left: 16, right: 16,
  id: 'title',
  text: 'Loading...',
  font: 'bold 28px'
}).appendTo(scrollView);

new TextView({
  top: ['prev()', 16], left: 16, right: 16,
  text: 'Base Layer',
  font: 'thin italic 26px sans-serif'
}).appendTo(scrollView);

new TextView({
  top: ['prev()', 0], left: 32, right: 16,
  markupEnabled: true,
  id: 'base-layer'
}).appendTo(scrollView);
new TextView({
  top: ['prev()', 0], left: 16, right: 16,
  text: 'Mixin',
  font: 'thin italic 26px sans-serif'
}).appendTo(scrollView);

new TextView({
  top: ['prev()', 0], left: 32, right: 16,
  markupEnabled: true,
  id: 'mixin'
}).appendTo(scrollView);

new TextView({
  top: ['prev()', 0], left: 16, right: 16,
  text: 'Condiment',
  font: 'thin italic 26px sans-serif'
}).appendTo(scrollView);

new TextView({
  top: ['prev()', 0], left: 32, right: 16,
  markupEnabled: true,
  id: 'condiment'
}).appendTo(scrollView);

new TextView({
  top: ['prev()', 0], left: 16, right: 16,
  text: 'Recipe',
  font: 'thin italic 26px sans-serif'
}).appendTo(scrollView);

new TextView({
  top: ['prev()', 0], left: 32, right: 16
  , markupEnabled: true
  , id: 'recipe'
}).appendTo(scrollView);

function getTaco() {
  let activityIndicator = new ActivityIndicator({centerX: 0, centerY: 0}).appendTo(ui.contentView);
  getRandomTaco().then((tacoResponse) => {
    console.log(tacoResponse);
    scrollView.apply({
      '#title': { text: tacoResponse.title}
      , '#recipe': { text: tacoResponse.recipe}
      , '#condiment': { text: tacoResponse.condiment}
      , '#mixin': { text: tacoResponse.mixin}
      , '#base-layer': { text: tacoResponse.baseLayer}
    })
  }).catch((error) => {
      // noinspection TsLint
      console.error(error);
  }).then(() => {
      activityIndicator.dispose();
  });
}

getTaco();

shake.startWatch(getTaco, 40, console.error);

// let button = new Button({
//   centerX: 0, top: 100,
//   text: 'Show Message'
// }).appendTo(ui.contentView);

// let textView = new TextView({
//   centerX: 0, top: [button, 50],
//   font: '24px'
// }).appendTo(ui.contentView);

// button.on({select: () => textView.text = 'Tabris.js has buttons!'});
