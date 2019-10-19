(function () {
    "use strict";

    function $fileinputname$EditorController($scope) {
        var vm = this;

        if (!$scope.control.value) {
            $scope.control.value = {};
        }
    }

    angular.module("umbraco").controller("$name$.$fileinputname$EditorController", $fileinputname$EditorController);
})();