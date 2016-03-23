# angular-seohelper
Manage SEO tags in Angular 1.x

There is very little good quality information online about Angular SEO how-to's. This module aims to provide the simplest possible solution to managing your SEO tags in an Angular app.

##Usage
1. Include ngSeo.js in your index.html
````
<script src="/path/to/ngSeo.js"></script>
````

2. Inject ngSeo in your module/controller/directive
````
angular.module("myModule", ["ngSeo"])

.directive("myDirective", ["ngSeo", function(ngSeo) {
  return {
    restrict: 'E',
    templateUrl: '/myTemplate.html',
    scope: {},
    link: function(scope, elem, attr) {
      //Set the page title
      ngSeo.set("title", "My page title");

      //Set an Open Graph tag
      ngSeo.set("og:url", "My og:url value");
    }
  };	
}]);
````

3. Bind your html
````
//File: index.html
//use ng-bind when the property is textual, between two closing tags
<title ng-bind="ngSeo.get('title')"></title>

//use {{SeoHelper.get('my property')}} when the property is a meta tag
<meta property="og:url" content="{{ngSeo.get('og:url')}}" />
````