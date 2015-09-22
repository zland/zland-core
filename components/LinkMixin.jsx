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
  * @filedescription This mixin is for open links in the browser window
  * using cordova cordova-plugin-inappbrowser plugin
  */

'use strict';

require('jquery');
var _ = require('underscore');
var React = require('react');

module.exports = {

  linkClick: function(e) {
    e.preventDefault();
    e.stopPropagation();
    window.open($(e.currentTarget).attr('href'), '_system');
  }

};
