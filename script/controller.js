
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
            .when('/clsarec',
            {
                    templateUrl: 'Classes.html',
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

$scope.getAndSendteacher = function() {

    $http.get("https://api.mongolab.com/api/1/databases/schools/collections/teacher?apiKey=4GXdhQc-8-ldzKMWSJxCu2lYMLhMMIZu")
    .success(function(response) {$scope.teacher_coll = response;
   
    $scope.sendteacher(); 
      
    });
    
}

$scope.sendmail = function() {

$scope.mail = [];
$scope.mail.from = "smartschool2016@gmail.com";
$scope.mail.to_email = "kapadiasameer90@gmail.com";
$scope.mail.subject = "Smart School Credentials";
$scope.mail.body = "hello";

$scope.json = angular.toJson($scope.mail);
window.alert("mail formed");
$http({
        url: "https://mandrillapp.com/api/1.0/messages/send.json",
        method: "POST",
        data: $scope.json,
        headers: {'Content-Type': 'application/json'}
      }).success(function (data, status, headers, config) {
          window.alert("Successfully Email Send");  
             
        }).error(function (data, status, headers, config) {
            $scope.status = status + ' ' + headers;
            window.alert("Successfully Email Not Send"); 
        });

}

$scope.sendteacher = function() {
    
    $scope.generate_teacher_id(); 
    $scope.json = angular.toJson($scope.teacher);
 
    $http({
        url: "https://api.mongolab.com/api/1/databases/schools/collections/teacher?apiKey=4GXdhQc-8-ldzKMWSJxCu2lYMLhMMIZu",
        method: "POST",
        data: $scope.json,
        headers: {'Content-Type': 'application/json'}
      }).success(function (data, status, headers, config) {
          window.alert("Successfully Inserted");
          $scope.sendmail();  
             
        }).error(function (data, status, headers, config) {
            $scope.status = status + ' ' + headers;
        });  
}

$scope.generate_teacher_id = function() {
    $scope.schoolid ="LNCT"; 
  
   
    $scope.teacher.rollno = String($scope.schoolid) + ($scope.teacher_coll.length + 1);
    
}

$scope.sections = [ ];

$scope.addRow = function() {		
	$scope.sections.push({ 'groupname':$scope.groupname, 'roomno': $scope.roomno, 'noofseats':$scope.noofseats, 'noofstudents':$scope.noofstudents  });
	$scope.groupname='';
	$scope.roomno='';
	$scope.noofseats='';
	$scope.noofstudents='';
}

$scope.removeRow = function(groupname){				
		var index = -1;		
		var comArr = eval( $scope.sections );
		for( var i = 0; i < comArr.length; i++ ) {
			if( comArr[i].groupname === groupname ) {
				index = i;
				break;
			}
		}
		if( index === -1 ) {
			alert( "Something gone wrong" );
		}
		$scope.sections.splice( index, 1 );		
	}

$scope.sendclass = function() {
    
    //$scope.generate_teacher_id();
    $scope.Class.sections = $scope.sections; 
    $scope.json = angular.toJson($scope.Class);
 
    $http({
        url: "https://api.mongolab.com/api/1/databases/schools/collections/class?apiKey=4GXdhQc-8-ldzKMWSJxCu2lYMLhMMIZu",
        method: "POST",
        data: $scope.json,
        headers: {'Content-Type': 'application/json'}
      }).success(function (data, status, headers, config) {
          window.alert("Successfully Inserted");
          $scope.Class = [];  
             
        }).error(function (data, status, headers, config) {
            $scope.status = status + ' ' + headers;
        });  
}
	
$scope.getclass = function() {

    $http.get("https://api.mongolab.com/api/1/databases/schools/collections/class?apiKey=4GXdhQc-8-ldzKMWSJxCu2lYMLhMMIZu")
    .success(function(response) {$scope.class_coll = response;
   
    window.alert($scope.class_coll[0].std);
    //$scope.sendteacher(); 
      
    });
    
}	

$scope.getdata = function() {

    $http.get("https://api.mongolab.com/api/1/databases/schools/collections/signup?apiKey=4GXdhQc-8-ldzKMWSJxCu2lYMLhMMIZu")
    .success(function(response) {$scope.dataa = response;

    window.alert($scope.dataa.length);
    });

    
}

});
