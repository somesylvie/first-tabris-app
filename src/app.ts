import {ui, Button, TextView, NavigationView, ScrollView, Page} from 'tabris';
import {getRandomTaco, TacoResponse} from './connectors/taco';

let navigationView = new NavigationView({
  left:0, top: 0, right: 0, bottom: 0
}).appendTo(ui.contentView);

let page = new Page({
  title: 'Learnin\' some tabris.js'
}).appendTo(navigationView);

let scrollView = new ScrollView({
  left:0, top: 0, right: 0, bottom: 0
}).appendTo(page);

new TextView({
  top: 0, left: 16, right: 16,
  id: 'title',
  text: 'For future title',
  font: 'bold 28px'
}).appendTo(scrollView);

getRandomTaco().then((tacoResponse) => {
  console.log(tacoResponse);
});

// let button = new Button({
//   centerX: 0, top: 100,
//   text: 'Show Message'
// }).appendTo(ui.contentView);

// let textView = new TextView({
//   centerX: 0, top: [button, 50],
//   font: '24px'
// }).appendTo(ui.contentView);

// button.on({select: () => textView.text = 'Tabris.js has buttons!'});
