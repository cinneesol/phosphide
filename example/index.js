/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
System.import('phosphor-plugins').then(lib => {
  lib.registerPlugin('phosphide');
  lib.registerPlugin('example');
  console.log('ran');
});