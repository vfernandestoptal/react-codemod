/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

const defineTest = require('jscodeshift/dist/testUtils').defineTest;

const pureMixinAlternativeOption = {
  'mixin-module-name': 'ReactComponentWithPureRenderMixin',
  'pure-component': true,
};

const enableFlowOption = {flow: true};

defineTest(__dirname, 'class', null, 'class/class');
defineTest(__dirname, 'class', enableFlowOption, 'class/class-anonymous');
defineTest(__dirname, 'class', enableFlowOption, 'class/class-anonymous2');
defineTest(__dirname, 'class', pureMixinAlternativeOption, 'class/class-test2');
defineTest(__dirname, 'class', enableFlowOption, 'class/export-default-class');
defineTest(__dirname, 'class', pureMixinAlternativeOption, 'class/class-pure-mixin1');
defineTest(__dirname, 'class', {
  ...enableFlowOption,
  'pure-component': true,
}, 'class/class-pure-mixin2');
defineTest(__dirname, 'class', null, 'class/class-pure-mixin3');
defineTest(__dirname, 'class', {
  ...pureMixinAlternativeOption,
  ...enableFlowOption,
}, 'class/class-pure-mixin4');
defineTest(__dirname, 'class', {
  ...pureMixinAlternativeOption,
}, 'class/class-pure-mixin5');
defineTest(__dirname, 'class', {
  ...pureMixinAlternativeOption,
  ...enableFlowOption,
}, 'class/class-top-comment');
defineTest(__dirname, 'class', enableFlowOption, 'class/class-initial-state');
defineTest(__dirname, 'class', enableFlowOption, 'class/class-property-field');
defineTest(__dirname, 'class', enableFlowOption, 'class/class-flow1');
defineTest(__dirname, 'class', enableFlowOption, 'class/class-flow2');
defineTest(__dirname, 'class', enableFlowOption, 'class/class-flow3');
defineTest(__dirname, 'class', enableFlowOption, 'class/class-flow4');
defineTest(__dirname, 'class', enableFlowOption, 'class/class-flow5');
defineTest(__dirname, 'class', enableFlowOption, 'class/class-flow6');
defineTest(__dirname, 'class', {
  ...enableFlowOption,
  'remove-runtime-proptypes': true,
}, 'class/class-flow7');
defineTest(__dirname, 'class', null, 'class/class-prune-react');
defineTest(__dirname, 'class', null, 'class/class-prune-react2');
defineTest(__dirname, 'class', null, 'class/class-prune-react3');
defineTest(__dirname, 'class', null, 'class/class-prune-react4');
defineTest(__dirname, 'class', {
  'create-class-module-name': 'createReactClass__deprecated',
  'create-class-variable-name': 'createReactClass__deprecated',
}, 'class/class-create-class-naming');
defineTest(__dirname, 'class', null, 'class/class-displayName');
defineTest(__dirname, 'class', {
  'conversion': false,
}, 'class/class-no-conversion');
defineTest(__dirname, 'class', {
  'display-name': false,
}, 'class/class-no-display-name');

// `create-react-class` module changes
//
// if we don't specify additional new options, existing behavior should not change
// and all tests above should pass
//
// bellow are tests for new options

const preferNamedClasses = { 
  'prefer-named-classes': true,
};

defineTest(__dirname, 'class', preferNamedClasses, 'class/class-anonymous-to-named');
defineTest(__dirname, 'class', preferNamedClasses, 'class/class-anonymous2-to-named');

const enableReplaceCreateReactClass = { 
  'replace-create-class-module': true,
};

defineTest(__dirname, 'class', enableReplaceCreateReactClass, 'class/class-replace-create-class');
defineTest(__dirname, 'class', { ...enableReplaceCreateReactClass, ...preferNamedClasses }, 
  'class/class-replace-create-class-to-named');

// making sure existing tests don't break because of new `prefer-named-classes` option,
// except for the handling of anonymous classes
const enableFlowOptionWithPreferNamedClasses = {
  ...enableFlowOption,
  ...preferNamedClasses
};
const pureMixinAlternativeOptionWithPreferNamedClasses = {
  ...pureMixinAlternativeOption,
  ...preferNamedClasses
};

defineTest(__dirname, 'class', preferNamedClasses, 'class/class');
defineTest(__dirname, 'class', pureMixinAlternativeOptionWithPreferNamedClasses, 'class/class-test2');
defineTest(__dirname, 'class', enableFlowOptionWithPreferNamedClasses, 'class/export-default-class');
defineTest(__dirname, 'class', pureMixinAlternativeOptionWithPreferNamedClasses, 'class/class-pure-mixin1');
defineTest(__dirname, 'class', {
  ...enableFlowOptionWithPreferNamedClasses,
  'pure-component': true,
}, 'class/class-pure-mixin2');
defineTest(__dirname, 'class', preferNamedClasses, 'class/class-pure-mixin3');
defineTest(__dirname, 'class', {
  ...pureMixinAlternativeOptionWithPreferNamedClasses,
  ...enableFlowOptionWithPreferNamedClasses,
}, 'class/class-pure-mixin4');
defineTest(__dirname, 'class', {
  ...pureMixinAlternativeOptionWithPreferNamedClasses,
}, 'class/class-pure-mixin5');
defineTest(__dirname, 'class', {
  ...pureMixinAlternativeOptionWithPreferNamedClasses,
  ...enableFlowOptionWithPreferNamedClasses,
}, 'class/class-top-comment');
defineTest(__dirname, 'class', enableFlowOptionWithPreferNamedClasses, 'class/class-initial-state');
defineTest(__dirname, 'class', enableFlowOptionWithPreferNamedClasses, 'class/class-property-field');
defineTest(__dirname, 'class', enableFlowOptionWithPreferNamedClasses, 'class/class-flow1');
defineTest(__dirname, 'class', enableFlowOptionWithPreferNamedClasses, 'class/class-flow2');
defineTest(__dirname, 'class', enableFlowOptionWithPreferNamedClasses, 'class/class-flow3');
defineTest(__dirname, 'class', enableFlowOptionWithPreferNamedClasses, 'class/class-flow4');
defineTest(__dirname, 'class', enableFlowOptionWithPreferNamedClasses, 'class/class-flow5');
defineTest(__dirname, 'class', enableFlowOptionWithPreferNamedClasses, 'class/class-flow6');
defineTest(__dirname, 'class', {
  ...enableFlowOptionWithPreferNamedClasses,
  'remove-runtime-proptypes': true,
}, 'class/class-flow7');
defineTest(__dirname, 'class', preferNamedClasses, 'class/class-prune-react');
defineTest(__dirname, 'class', preferNamedClasses, 'class/class-prune-react2');
defineTest(__dirname, 'class', preferNamedClasses, 'class/class-prune-react3');
defineTest(__dirname, 'class', preferNamedClasses, 'class/class-prune-react4');
defineTest(__dirname, 'class', {
  'create-class-module-name': 'createReactClass__deprecated',
  'create-class-variable-name': 'createReactClass__deprecated',
  ...preferNamedClasses,
}, 'class/class-create-class-naming');
defineTest(__dirname, 'class', preferNamedClasses, 'class/class-displayName');
defineTest(__dirname, 'class', {
  'conversion': false,
  ...preferNamedClasses,
}, 'class/class-no-conversion');
defineTest(__dirname, 'class', {
  'display-name': false,
  ...preferNamedClasses,
}, 'class/class-no-display-name');
