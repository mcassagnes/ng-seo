(function() {
  "use strict";

  angular.module("ngSeo", [])

  .run(["$rootScope", "ngSeo", function($rootScope, ngSeo) {
    ngSeo.init();
    $rootScope.ngSeo = ngSeo;

    $rootScope.$on('$locationChangeStart', function(event, next, current) {
      ngSeo.init();      
    });
  }])

  .service("ngSeo", [function() {
    var self = this;

    // Default seo tags
    // These are the most commonly used
    var tags = {
      "title": null,
      "description": null,
      "robots": null,
      "og:url": null,
      "og:type": null,
      "og:title": null,
      "og:description": null,
      "og:image": null
    };

    this.get = function(key) {
      return tags[key];
    };

    this.set = function(key, val) {
      tags[key] = val;
    };

    this.init = function(opts) {
      self.reset();
      if (opts && typeof opts === "object") {
        for (var key in opts) {
          if (opts.hasOwnProperty(key)) {
            tags[key] = opts[key];
          }
        }
      }
    };

    this.reset = function() {
      for (var key in opts) {
        if (opts.hasOwnProperty(key)) {
          tags[key] = null;
        }
      }
    };
  }]);
})();