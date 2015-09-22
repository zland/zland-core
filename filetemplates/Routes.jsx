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
  * @filedescription Routes constructed here use .zland config
  * add this to your .zland json config to create a route for your project
  *
  * Example:
  * ```json
  *  "routes": [
  *     {
  *       "path": "intro",
  *       "handler": "components/IntroductionWindow"
  *     }
  *  ]
  * ```
  */

'use strict';

var React = require('react');
var Route = require('react-router').Route;
var CanvasView = require('CanvasView');
{{{header}}}

// declare our routes and their hierarchy
module.exports = (
  <Route handler={CanvasView} path="/">
    {{{content}}}
  </Route>
);
