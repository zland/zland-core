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
  * @filedescription CanvasView file template. Appends child elements dynamically in build process.
  */

'use strict';

var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var CanvasWrapper = require('map/components/CanvasWrapper');
{{{header}}}

module.exports = React.createClass({

  render: function() {
    console.log("canvasview render");
    return (
      <CanvasWrapper>
        {{{content}}}
        <RouteHandler/>
      </CanvasWrapper>
    );
  }
});