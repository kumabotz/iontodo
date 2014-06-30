angular.module('starter.controllers', [])
  .controller('ToDoListCtrl', function($scope, $ionicModal) {
  // array list which will contain the items added
  $scope.toDoListItems = [{
    task: 'Scuba Diving',
    status: 'not done'
  }, {
    task: 'Climb Everest',
    status: 'not done'
  }];

  // function to add items to the existing list
  $scope.AddItem = function(data) {
    $scope.toDoListItems.push({
      task: data.newItem,
      status: 'not done'
    });
    data.newItem = '';
    $scope.closeModal();
  };

  // init the modal
  $ionicModal.fromTemplateUrl('modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // function to open the modal
  $scope.openModal = function() {
    $scope.modal.show();
  };

  // function to close the modal
  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  // clean up the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
});
