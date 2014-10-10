'use strict';

angular.module('virtualCoachApp').
    directive('fileUpload', function ($upload) {
        return {
            restrict: 'A',
            scope : {
              url : '='
            },
            templateUrl: 'app/views/directives/file-upload.html',
            link: function (scope, element, attrs) {

                scope.inProgress = false;
                scope.progress = 0;

                scope.onFileSelect = function (files) {

                    var file = files[0];

                    scope.fileName = file.name + " - " + file.size / 1000 + " Ko";
                    scope.inProgress = true;

                    scope.upload = $upload.upload({
                        url: scope.url,
                        file: file
                    }).progress(function (evt) {
                        scope.progress = parseInt(100.0 * evt.loaded / evt.total);
                    }).success(function (data) {
                        scope.success({data: data});
                        scope.inProgress = false;
                    }).error(function (data) {
                        scope.inProgress = false;
                        console.log(data);
                    });

                };
            }
        }
    });
