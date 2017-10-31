'use strict';

const disabledMethods = [
  'create',
  'createChangeStream',
  'deleteById',
  'exists',
  'findOne',
  'patchOrCreate',

  'prototype.patchAttributes',
  'prototype.exists',

  'replaceById',
  'replaceOrCreate',
  'update',
  'upsert',
  'upsertWithWhere',
]

module.exports = function(Post) {

  disabledMethods.forEach(method => Post.disableRemoteMethodByName(method))

};
