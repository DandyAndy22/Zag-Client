const BASE_URL = "https://zagster-service.herokuapp.com"

$(updateView) 

function updateView() {
    $.getJSON(BASE_URL + "/rides/count", (UpdateRideCount))
}
function UpdateRideCount(data) {
    numberofRides = data.count
    $("h2#rideCount").html(numberofrides)
}