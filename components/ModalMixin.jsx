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
  * @filedescription This mixin supports bootstrap modal events and provides a hide function
  */

'use strict';

var _ = require('underscore');
var React = require('react');

module.exports = {

  /**
   * hide the window automatically on unmount
   */
  componentWillUnmount: function() {
    this.hide();
  },

  /**
   * if window is mounted append the backdrop to the parent element to make sure
   * backdrop will unmount as soon as window unmounts
   */
  componentDidMount: function() {
    this.$el = $(React.findDOMNode(this.refs.modal));
    this.$el.modal(_.extend({
      'backdrop': 'static'
    }, this.modalProperties));
    $('body > .modal-backdrop').appendTo(this.$el.parent());
  },

  /**
   * hide function for hiding the modal manually
   * @param  {Function} cb provide a function executed after window is hidden
   */
  hide: function(cb) {
    this.$el.modal('hide');
    this.$el.on('hidden.bs.modal', function() {
      if (cb) cb();
    });
  }

};
