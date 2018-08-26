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
            // self.getPetData();
        }).catch((error) => {
            console.log('ERROR caught in making POST request', error);
            alert('ERROR caught in making POST request')
        });
    }

}]);//end DashBoardController