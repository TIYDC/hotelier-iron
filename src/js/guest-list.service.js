(function() {
  'use strict';

  angular.module('hotelier')
    .factory('GuestListService', GuestListService);

  GuestListService.$inject = ['$http'];

  /**
   * Service for Guest List Constructor Fn
   * @param {Service}  Ajax call injection
   * @return {Object} of functions within the main Constructor
   */
  function GuestListService($http) {

    return {
      postGuest: postGuest
    };


    /**
     * Ajax call to create a new guest
     * @param  {String} fullName Full name rewquired to fill out form
     * @param  {String} email    Email required to fill out the form
     * @param  {String} phone    Phone number which will be a string
     * @param  {string} id        Id given to a staff member once logged in in order to create a guest
     * @return {Promise}         Promise that the ajax call will return when complete
     */
    function postGuest(fullName, email, phone, id) {
      console.log('here');
      return $http({
        url: 'https://hotelier-api-iron.herokuapp.com/api/Guests',
        data: {
          fullName: fullName,
          email: email,
          phone: phone
        },
        method: 'post',
        headers: {
          'Authorization': id
        }
      })
      .then(function ReturnData(data) {
        console.log('passed', data);

      });


    }

  }


}());