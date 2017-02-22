angular.module('chatroom').controller('mainCtrl', function($scope, messageService){

  //The getMessages function will call the getMessages method on the messageService object.
  //You'll then save the result of that request to your controller's $scope as messages ($scope.messages)
  $scope.getMessages = function(){
    messageService.getMessages().then(function(response){
      $scope.messages = response.data;
      console.log($scope.messages)

    })
  }
  $scope.getCookies = function(){
    messageService.getCookies().then(function(response){
      // console.log(response.data.cookies)
      $scope.cookies = response.data;
    })
  }

  $scope.getMessages();
  console.log($scope.messages)
  // $scope.messages.createdAt = new moment().format('dddd');
  $scope.getCookies();
  $scope.cookie = "Benny's special"
  // console.log($scope.cookie)
  //The postMessage function will take whatever the user typed in (hint: look at the html and see what ng-model correlates to on the input box),
  //pass that text to the postMessage method on the messageService object which will
  //then post it to the backend.

  $scope.postMessage = function(message){
    messageService.postMessage(message).then(function(response){
      if (response.status === 200) {
        $scope.message = ""
      } else {
        alert("Try again")
      }
    })
  }

  $scope.postCookie = function(){
    messageService.postCookie($scope.cookie).then(function(response){
    })
  }


  //uncomment this code when your getMessages function is finished
  //This goes and gets new data every second, which mimicking a chat room experience.
   setInterval(function(){
    $scope.getMessages();
    $scope.getCookies();
    // ($scope.messages).forEach(function(ele){
    //   ele.createdAt = new moment().format('dddd')
    // })
    // console.log($scope.messages[0].createdAt)
  }, 1500)

})
