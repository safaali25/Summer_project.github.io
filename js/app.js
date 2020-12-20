var app = angular.module('Easytravel', []);
app.filter('maxPrice', function () {
    return function (input, newprice) {
        var output = [];
        if (isNaN(newprice)) {
            output = input;
        } else {
            angular.forEach(input, function (item) {
                if (item.newprice <= newprice) {
                    output.push(item)
                }
            });
        }
        return output;
    }
});


app.controller('offer', function ($scope) {
    $scope.product = packagess;
    $scope.onlyLetters = /^\D+$/;
});

app.controller('slider', function ($scope) {
    $scope.images = slides;
});