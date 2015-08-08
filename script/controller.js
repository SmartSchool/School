
 var app = angular.module( "ngapp", ['ngResource'] );

  
 
  
 app.config(function ($routeProvider){
        $routeProvider
            .when('/Sign Up',
            {
                   templateUrl: 'Signup.html',
                   controller: 'TabsCtrl'
            })
            .when('/Home',
            {
                   
            })
            .when('/Manage Users',
            {
                    templateUrl: 'ManageRoles.html',
                    controller: 'TabsCtrl'
                       
            })
            .when('/Notice Board',
            {
                    templateUrl: 'NoticeBoard.html'
                   
            })
            .when('/About Us',
            {
                   
            })
            .when('/Contact Us',
            {
                    
            })
            .when('/scharec',
            {
                    templateUrl: 'SchoolInfo.html',
                    controller: 'TabsCtrl'
                       
            })
            .when('/stuarec',
            {
                    templateUrl: 'StudentInfo.html',
                    controller: 'TabsCtrl'
                       
            })
            .when('/techarec',
            {
                    templateUrl: 'TeacherInfo.html',
                    controller: 'TabsCtrl'
                       
            })  
            .otherwise({redirectTo: '/AdminPage.html'});
            });
            

app.controller("TabsCtrl",function ($scope, $http){

       
       $scope.roles = [ {
       name: 'School',
       actiontype: [
       "scharec",
       "schurec",
       "schdrec",
       "schsrec" 
       ]
       },
       {
       name: 'Principal',
       actiontype: [
       "prinarec",
       "prinurec",
       "prinrec",
       "prinsrec" 
       ]
       },
       {
       name: 'Class',
       actiontype: [
       "clsarec",
       "clsurec",
       "clsdrec",
       "clssrec" 
       ]
       },
       {
       name: 'Student',
       actiontype: [
       "stuarec",
       "stuurec",
       "studrec",
       "stusrec" 
       ]
       },
       {
       name: 'Teacher',
       actiontype: [
       "techarec",
       "techurec",
       "techdrec",
       "techsrec" 
       ]
       },
       {
       name: 'Driver',
       actiontype: [
       "driarec",
       "driurec",
       "dridrec",
       "drisrec" 
       ]
       },
       {
       name: 'Transport',
       actiontype: [
       "transrec",
       "transurec",
       "transdrec",
       "transsrec" 
       ]
       }
       ];
       
$scope.senddata = function() {
     
    $scope.json = angular.toJson($scope.signup);
 
    $http({
        url: "https://api.mongolab.com/api/1/databases/schools/collections/signup?apiKey=4GXdhQc-8-ldzKMWSJxCu2lYMLhMMIZu",
        method: "POST",
        data: $scope.json,
        headers: {'Content-Type': 'application/json'}
      }).success(function (data, status, headers, config) {
            
             
        }).error(function (data, status, headers, config) {
            $scope.status = status + ' ' + headers;
        });

    
}

$scope.getdata = function() {

    $http.get("https://api.mongolab.com/api/1/databases/schools/collections/signup?apiKey=4GXdhQc-8-ldzKMWSJxCu2lYMLhMMIZu")
    .success(function(response) {$scope.dataa = response;});
    
}

});
