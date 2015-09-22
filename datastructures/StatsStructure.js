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
  * @filedescription Model for Stats
  */

'use strict';

module.exports = function() {
  return {
    // distance in meters the player has walked
    distance: 0,

    // zombie head count
    zombiesShot: 0,

    // shots fired
    shotsFired: 0,

    // number of player deaths
    deaths: 0,

    // count of shots that hit a zombie
    zombieHit: 0,

    // count of headshots (currently a zombie can only be killed by headshots,
    // expect this number to equal zombiesShot)
    headShots: 0
  }
};
