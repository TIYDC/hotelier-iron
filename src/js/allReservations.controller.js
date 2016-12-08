(function() {
  'use strict';

  angular.module('hotelier')
  .controller('AllReservationsController', AllReservationsController);

  AllReservationsController.$inject = [ 'AllReservationsService' ];


  function AllReservationsController(AllReservationsService){
    console.log('creating AllReservationsController');
    var vm = this;
    console.log(vm);

    this.reservations = [];
    this.token = {};



    this.getReservations = function getReservations(token){
      AllReservationsService.getReservations(token)
      .then(function successHandeler(data){
        console.log('Its Working', data);
        vm.reservations = data;
      })
      .catch(function failHandler(xhr){
        console.log(xhr);
      });
    };
  }



}());
