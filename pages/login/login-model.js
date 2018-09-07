/**
 * Created by jimmy on 17/2/26.
 */

// var Base = require('../../utils/base.js').base;
import { Base } from '../../utils/base.js';

class Loginn extends Base {
  constructor() {
    super();
  }

  /*student信息*/
  getUserData(mobile,password,callback) {
    var that = this;
    var param = {
      url: 'getclabymobile/'+mobile+'/'+password,

      sCallback: function (data) {
        //data = data.items;
        callback && callback(data);
      }
    };
    this.request(param);
  }
};

export { Loginn };