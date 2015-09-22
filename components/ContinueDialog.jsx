/*!
 * Copyright 2015 Florian Biewald
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

 /**
  * @filedescription A dialog window the player will see as soon as he dies a painful death
  */

'use strict';

require('bootstrap/dist/js/bootstrap');
require('core/sass/style');
var Navigation = require('react-router').Navigation;
var CoreActionCreators = require('core/actions/CoreActionCreators');
var ModalMixin = require('./ModalMixin');

var React = require('react');

 var ContinueDialog = React.createClass({
  mixins: [Navigation, ModalMixin],

  continue: function() {
    this.hide((function() {
      CoreActionCreators.continue();
      this.transitionTo('/');
    }).bind(this));
  },

  render: function() {
    console.log("continue dialog render");
    return (
      <div className="modal fade continue-dialog" ref="modal">
          <div className="modal-dialog">
              <div className="modal-content">
                  <div className="modal-body">
                      <h1 className="text-center">You are dead</h1>
                  </div>
                  <div className="modal-footer">
                      <button type="button" name="quit" className="btn btn-default pull-left">Quit</button>
                      <button type="button" name="continue" className="btn btn-default" onClick={this.continue}>Continue</button>
                  </div>
              </div>
          </div>
      </div>
    );
  }
});

module.exports = ContinueDialog;
