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
  * @filedescription Model for Spots
  */

'use strict';

// spot data object template
// all spot objects must derive from this object template
// and inherit all properties

module.exports = function() {
  return {
    // id of the spot, will be automatically assigned through generate
    // function; not null!
    id: null,

    // boolean to determine if spot is hidden or not
    // default must be true
    // a spot will be revealed by the spot store
    hidden: true,

    // left position relative to the playground div
    // this is usually a point of the injected "pathToPlayer" method
    // of the generator function
    left: 0,

    // top position relative to the playground div
    // this is usually a point of the injected "pathToPlayer" method
    // of the generator function
    top: 0,

    // string
    // name of spot
    name: null,
  };
};
