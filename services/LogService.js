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

'use strict';

var EventEmitter = require('events').EventEmitter;
var CHANGE_EVENT = 'change';
var assign = require('object-assign');
var moment = require('moment');

module.exports = assign({}, EventEmitter.prototype, {

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  warn: function(message) {
    this.emit(CHANGE_EVENT, 'warn', message, moment().format('h:mm:ss'));
  },
  debug: function(message) {
    this.emit(CHANGE_EVENT, 'debug', message, moment().format('h:mm:ss'));
  },
  error: function(message) {
    this.emit(CHANGE_EVENT, 'error', message, moment().format('h:mm:ss'));
  }
});
