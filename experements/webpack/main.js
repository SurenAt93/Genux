// import { View }     from 'backbone';  
import { props }    from './decorators';

document.getElementById('but_01').onclick = function() {
  require.ensure(
    [
      './testView_01',
    ],
    function(require) {
      let a = require('./testView_01').default;

      console.log('a: ', a);
    }
  )
}

document.getElementById('but_02').onclick = function() {
  require.ensure(
    [
      './testView_02',
    ],
    function(require) {
      let b = require('./testView_02').default;

      console.log('b: ', b);
    }
  )
}

document.getElementById('but_03').onclick = function() {
  require.ensure(
    [
      './testView_03',
    ],
    function(require) {
      let c = require('./testView_03').default;

      console.log('c: ', c);
    }
  )
}
// @props({
//   el:  '#test',

//   events: {
//     'click':    'test',
//   }
// })
// class TodoView extends View {

//   template(object) {
//     return `Hello World`
//   }

//   initialize() {
//     this.render();
//   }

//   render() {
//     this.$el.html(this.template());
//   }

//   test() {
//     alert('ok test');
//   }
// }

// var test  = new TodoView;

// console.log(test);
