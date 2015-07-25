
 var app = angular.module( "teacherapp", ['ngResource'] );
 app.config(function ($routeProvider){
        $routeProvider
            .when('/Attendance',
            {
                   templateUrl: 'AttandencePage.html',
                   controller: 'studentCtrl'
            })
            .when('/Marks',
            {
            
            })
            .when('/Assignment',
            {
                            
            })
             .when('/Time Table',
            {
                    
            })
             .when('/Email',
            {
                    
            })
              .when('/Feedback',
            {
                    
            })
             .when('/Scheduled Exam',
            {
                    
            })
             .when('/Notice Board',
            {
                    
            })
            .when('/About Us',
            {
                   
            })
            .when('/Contact Us',
            {
                    
            })  
            .otherwise({redirectTo: '/TeacherPage.html'});
            });
            
app.factory("studentdb", ['$resource', function($resource){
    return $resource('Database/:qid.json', {}, {
      query: {method:'GET', params:{qid:'studentInfo'}, isArray:true}
    });
  }]);
  
  app.controller("studentCtrl",function ($scope, studentdb){
        $scope.studentdata = studentdb.query();
        

   
});


            
  