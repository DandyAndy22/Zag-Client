const BASE_URL = "https://zagster-service.herokuapp.com"

$(updateView) 

function updateView() {
    $.getJSON(BASE_URL + "/rides/count", (UpdateRideCount))
    $.getJSON(BASE_URL + "/rides/count/per_month", (UpdateMonthlyCount))
}

function UpdateRideCount(data) {
    numberofRides = data.count
    $("h2#rideCount").html(numberofRides)
}

function UpdateMonthlyCount(data) {
    console.log(data)
}

