import { Router }   from 'backbone';
import Dispatcher   from './dispatcher';
import { props }    from '../decorators/decorators';

@props({
  routes: {
    '':       'start',
    '/':      'start',
  }
})
export default class AppRouter extends Router {
  start() {
    console.log('router is work');
  }
}
