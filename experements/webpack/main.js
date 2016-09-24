import { View }     from 'backbone';  
import { props }    from './decorators';


@props({
  el:  '#test',

  events: {
    'click':    'test',
  }
})
class TodoView extends View {

  template(object) {
    return `Hello World`
  }

  initialize() {
    this.render();
  }

  render() {
    this.$el.html(this.template());
  }

  test() {
    alert('ok test');
  }
}

var test  = new TodoView;

console.log(test);
