import { View }       from 'backbone';
import { props }      from '../decorators/decorators';

// template
import MainViewTmpl   from '../tmpls/main'

@props({
  el: 'body',

  events: {
  },

  template: MainViewTmpl
})
export default class MainView extends View {

  initialize() {
    this.render();
  }

  render() {
    this.$el.prepend(this.template());
  }

}
