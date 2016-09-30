import {Collection} from 'backbone';
import {props}      from '../decorators/decorators';

@props({
  url: 'http://dev.kinetics-sdm.com/api/v1.0/cms/1/v1.0.0/mfg/partners'
})
export default class TestColl extends Collection {
  initialize() {
    console.log('collection create');
  }
} 