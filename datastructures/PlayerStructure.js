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
  * @filedescription Model for Players.
  */

 /**
  * spot data object template
  * all spot objects must derive from this object template
  * and inherit all properties
  */

'use strict';



module.exports = function() {
  return {
    /**
     * the look radius, spots within this radius will be revealed
     * @type {Number}
     */
    radius: 270,
    /**
     * if player is dead or not
     * @type {Boolean}
     */
    dead: false,
    /**
     * the system the player uses
     * @type {String}
     */
    system: null,
    /**
     * the player weapon
     * @type {Array}
     */
    weapons: [],

    /**
     * Player stats
     * @type {object}
     */
    stats: null,
    /**
     * selected weapon index
     * @type {Number}
     */
    selectedWeaponIndex: 0
  };
};
