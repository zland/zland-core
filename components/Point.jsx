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
 * @filedescription the point is used to provide coordinates in the playground.
 * The zombies will now where to go.
 */

/**
 * To avoid rerendering of parent components the point registeres itself at stores
 */

'use strict';
var React = require('react');
var CoreActionCreators = require('core/actions/CoreActionCreators');
var MapStore = require('map/stores/MapStore');

function getStoreValues() {
  return {
    moveDiffX: MapStore.getMoveDiffX(),
    moveDiffY: MapStore.getMoveDiffY(),
    overallMoveDiffX: MapStore.getOverallMoveDiffX(),
    overallMoveDiffY: MapStore.getOverallMoveDiffY()
  };
}

var Point = React.createClass({

  getInitialState: function() {
    return getStoreValues();
  },

  _onChange: function() {
    this.setState(getStoreValues());
  },

  shouldComponentUpdate: function(nextProps, nextState) {
    if (nextState.moveDiffX !== 0 || nextState.moveDiffY !== 0) {
      $(React.findDOMNode(this.refs.marker)).translate3d({
        x: nextState.moveDiffX,
        y: nextState.moveDiffY
      });
    }
    return false;
  },

  componentDidMount: function() {
    MapStore.addChangeListener(this._onChange);
    $(React.findDOMNode(this.refs.marker)).translate3d({
      x: this.state.overallMoveDiffX,
      y: this.state.overallMoveDiffY
    });
    CoreActionCreators.pointPlaced($(React.findDOMNode(this.refs.marker)), this.props.point);
  },

  componentWillUnmount: function() {
    MapStore.removeChangeListener(this._onChange);
  },

  render: function() {
    console.log("--- point render");
    var styles = {
      top: this.props.point.get('y') + 'px',
      left: this.props.point.get('x') + 'px'
    };
    return <div ref="marker" className="marker" style={styles}/>
  }
});

module.exports = Point;
