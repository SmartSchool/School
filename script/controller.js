
 var app = angular.module( "ngapp", ['ngResource'] );

  
 
  
 app.config(function ($routeProvider){
        $routeProvider
            .when('/Sign Up',
            {
                   templateUrl: 'Signup.html'
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
           
           app.controller("schCtrl",function ($scope, $window){
          
           

     
       });
       

app.controller("TabsCtrl",function ($scope){



       
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
       
      
       $scope.convertJson = function() {
    $scope.json = angular.toJson($scope.school); 
    
}
$scope.showJson = function() {
    $scope.data = angular.fromJson($scope.json);
    
}
      $scope.tabs = [{
            title: 'Add School',
            url: 'SchoolInfo.html'
        }, {
            title: 'Add Student',
            url: 'StudentInfo.html'
        }, {
            title: 'Add Teacher',
            url: 'TeacherInfo.html'
        }, {
            title: 'Add Parent',
            url: 'ParentsInfo.html'    
    }];
    $scope.currentTab = 'SchoolInfo.html';

    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab.url;
    }
    
    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    }
    //});
});