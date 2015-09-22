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
  * @filedescription A dialog window the player will see when the app searches for stable gps signal
  */

'use strict';

require('bootstrap/dist/js/bootstrap');
require('core/sass/style');
var Navigation = require('react-router').Navigation;
var CoreActionCreators = require('core/actions/CoreActionCreators');
var ModalMixin = require('./ModalMixin');
var MapStore = require('map/stores/MapStore');

var React = require('react');

 var GpsWaitingModal = React.createClass({

  mixins: [Navigation, ModalMixin],

  getInitialState: function() {
    return this.getStoreValues();
  },

  getStoreValues: function() {
    return {
      hasStableGps: MapStore.hasStableGps()
    };
  },

  _onChange: function() {
    this.setState(this.getStoreValues());
  },

  componentDidMount: function() {
    MapStore.addChangeListener(this._onChange);

    if (this.state.hasStableGps) {
      this.transitionTo('/');
    }
  },

  componentWillUpdate: function(nextProps, nextState) {
    console.log('componentWillUpdate', nextState.hasStableGps);
    if (nextState.hasStableGps) {
      this.hide((function() {
        this.transitionTo('/');
      }).bind(this));
    }
  },

  componentWillUnmount: function() {
    MapStore.removeChangeListener(this._onChange);
  },

  render: function() {
    console.log('GpsWaitingModal render');
    return (
      <div className="modal fade" ref="modal">
          <div className="modal-dialog">
              <div className="modal-content">
                  <h2 className="text-center"><i className="fa fa-refresh fa-spin"></i>&nbsp;&nbsp;waiting for gps</h2>
              </div>
          </div>
      </div>
    );
  }
});

module.exports = GpsWaitingModal;
