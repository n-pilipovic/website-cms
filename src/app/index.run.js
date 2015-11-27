(function() {
  'use strict';

  angular
    .module('websiteCms')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
