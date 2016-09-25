import Backbone     from 'backbone';
import AppRouter    from './controller/router';

import MainView     from './views/main';
import MenuView     from './views/menu'; 
import ContentView  from './views/content'; 

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
