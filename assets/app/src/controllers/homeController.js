"use strict";

angular.module('virtualCoachApp')
    .controller('HomeCtrl', function ($scope) {

        $scope.uploadUrl = "/api/replay/upload";

        $scope.loadReplayStats = function (data) {
            $scope.showStats = true;
        }
    });