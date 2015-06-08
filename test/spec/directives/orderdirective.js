'use strict';

describe('Directive: OrderDirective', function () {

  // load the directive's module
  beforeEach(module('slApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-order-directive></-order-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the OrderDirective directive');
  }));
});