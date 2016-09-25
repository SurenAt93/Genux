import { View }       from 'backbone';
import { props }      from '../decorators/decorators';
import Dispatcher     from '../controller/dispatcher';

// template
import MenuViewTmpl   from '../tmpls/menu'

@props({
  el: '#menu',

  events: {
  },

  template: MenuViewTmpl
})
export default class MenuView extends View {

  initialize() {
    this.render();

    // test for dispatcher
    Dispatcher.trigger('open:view:tree');
  }

  render() {
    this.$el.append(this.template());
  }

}
