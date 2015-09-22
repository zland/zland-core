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

 /*!
  * @filedescription action creators for game flow control
  */

'use strict';

var Dispatcher = require('core/Dispatcher'),
    Constants = require('../Constants');

module.exports = {
  /**
   * triggered when a point is
   * @param  {jquery} $point the point element
   * @param  {Object} props  point properties
   */
  pointPlaced: function($point, props) {
    Dispatcher.dispatch({
      type: Constants.CORE_POINT_PLACED,
      $point: $point,
      props: props
    });
  },

  /**
   * If the player dies he has the possiblity to continue the game
   * (as of yet this is the only possiblity :)
   */
  continue: function() {
    Dispatcher.dispatch({
      type: Constants.CORE_CONTINUE
    });
  },

  /**
   * player closes the instruction dialog
   */
  introductionDone: function() {
    Dispatcher.dispatch({
      type: Constants.CORE_INTRODUCTION_DONE
    });
  }

};
