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
  * @filedescription Used to run projects separately and to control the actions of a component.
  * Take a look into zland-player/www/test.jsx for an example.
  * It creates a list of stacked buttons.
  */

'use strict';

require('bootstrap/dist/js/bootstrap');
require('core/sass/style');

var React = require('react');

var ControlPanel = React.createClass({
  render: function() {
    return (
      <ul className="control-panel">
        {this.props.controls.map((function(control, i) {
          return (
            <li key={i}>
              <button className="btn btn-default" onClick={(function() {this.handleClick(control)}).bind(this)}>{control.name}</button>
            </li>
          );
        }).bind(this))}
      </ul>
    );
  },
  handleClick: function(control) {
    control.click.call(control);
    this.forceUpdate();
  }
});

module.exports = ControlPanel;
