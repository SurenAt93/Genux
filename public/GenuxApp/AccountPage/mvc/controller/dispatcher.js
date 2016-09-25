import { Events } from 'backbone';
import  _         from 'underscore'; 
import api        from '../api/api';

var dispatcher = {};

_.extend(dispatcher, Backbone.Events);

dispatcher.on({
  'open:view:tree':      api.openTabs.open_tree_view,

});

export default dispatcher;
