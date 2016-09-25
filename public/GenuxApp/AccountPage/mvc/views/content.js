import { View }       from 'backbone';
import { props }      from '../decorators/decorators';

// template
import ContentViewTmpl   from '../tmpls/content'

@props({
  el: '#content',

  events: {
  },

  template: ContentViewTmpl
})
export default class ContentView extends View {

  initialize() {
    this.render();
  }

  render() {
    this.$el.append(this.template());
  }

}
