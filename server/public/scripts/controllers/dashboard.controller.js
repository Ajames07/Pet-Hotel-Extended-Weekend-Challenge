app.controller('DashBoardController', ['$http', function($http) {
    console.log('DashBoardController has been loaded');
    const self = this;
    
    self.pets = [];
    self.petData = { pet_name:'', breed:'', color:'' } 

    self.addPet = function(petToAdd) {
        $http({
            method: 'POST',
            url: '/dashboard',
            data: petToAdd
        }).then((response) => {
            console.log('in addPet POST response',response);
            self.getPets();
        }).catch((error) => {
            console.log('ERROR caught in making POST request', error);
            alert('ERROR caught in making POST request')
        });
    }//end addPets

    self.getPets = function() {
        $http({
            method: 'GET',
            url: '/dashboard'
        }).then((response) => {
            console.log('dashboard GET response', response);
            self.assignments = response.data;
        }).catch((error) => {
            console.log('ERROR caught in dashboard GET',error);
            alert('ERROR caught in dashboard GET');
        });
    }//end getPets
    self.getPets();
}]);//end DashBoardController