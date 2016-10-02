import Backbone     from 'backbone';
import              'backbone-es6-promise';
import AppRouter    from './controller/router';

import MainView     from './views/main';
import MenuView     from './views/menu'; 
import ContentView  from './views/content';

import              './promises/wait';

// testColl

import TestColl     from './collection/testColl';

let myTestColl = new TestColl;

console.log(myTestColl);

myTestColl.fetch()  
  .then(
    (values) => {
      console.log(values);
    },
    (err) => {
      console.log(err);
    }
  )

// Create Router
new AppRouter;

// Backbone history start
Backbone.history.start();

// Run Main View
new MainView;

// Run Menu View
new MenuView;

// Run Content View
new ContentView;
