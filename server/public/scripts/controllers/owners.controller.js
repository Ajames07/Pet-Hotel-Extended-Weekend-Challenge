app.controller('OwnersController', ['$http', function ($http) {
    console.log('OwnersController loaded');
    const self = this;

    self.ownersLog = [];

    self.addOwner = function(ownersName) {
        $http({
            method: 'POST',
            url: '/owners',
            data: ownersName
        }).then((response) => {
            console.log('in addPet POST response',response);
            self.getOwners();
        }).catch((error) => {
            console.log('ERROR caught in making owners POST request', error);
            alert('ERROR caught in making POST request')
        });
    }//end addPets

    self.getOwners = function() {
        $http({
            method: 'GET',
            url: '/owners'
        }).then((response) => {
            console.log('owners GET response', response);
            self.assignments = response.data;
        }).catch((error) => {
            console.log('ERROR caught in owners GET',error);
            alert('ERROR caught in owners GET');
        });
    }//end getOwners

    self.getPetsData = function() {
        $http({
            method: 'GET',
            url: '/dashboard'
        }).then((response) => {
            console.log('in getPetData response',response);
            self.petsData = response.data;
        }).catch((error) => {
            console.log('ERROR caught in getPetsData',error);
            alert('ERROR caught in getPetsData');
        });
    }
    self.getOwners();
    self.getPetsData();
}]);//end OwnersController