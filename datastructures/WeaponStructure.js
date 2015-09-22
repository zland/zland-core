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
  * @filedescription Model for Weapons
  */

'use strict';

module.exports = function() {
  return {
    name: null,
    bullets: [],
    ammo: 0,

    maxAmmo: 0,
    distance: 0,
    charge: 0,
    speed: 0,
    rechargeTime: 0,
    updateFields: ['distance', 'charge', 'speed', 'maxAmmo', 'rechargeTime', 'hudImage'],
    hudImage: null
  };
};
