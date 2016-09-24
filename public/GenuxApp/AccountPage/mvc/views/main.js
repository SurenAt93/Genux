import { View }  from 'backbone';
import { props } from '../decorators/decorators';

@props({
  el: 'body',

  events: {
    'click h1': 'test'
  }
})
export default class MainView extends View {

  initialize() {
    console.log('test: all is OK!@');
  }

  test() {
    alert('ok@@@');
  }

}
