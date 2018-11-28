const BASE_URL = "https://zagster-service.herokuapp.com"

var HourlyCount = [];


$(updateView) 

function updateView() {

    $.getJSON(BASE_URL + "/rides/count", (UpdateRideCount)),

    $.when (
        $.getJSON(BASE_URL + "/rides/count/per_hour", (UpdateHourlyCount)),
  
    ).then (
        DisplayGraph()
    )  
}

function UpdateRideCount(data) {
    numberofRides = data.count
    $("h2#rideCount").html(numberofRides);
}

function UpdateHourlyCount(data) {
    for(var i = 0; i <= 23; ++i){
        if(data[i] == undefined){
            HourlyCount.push(0);
        }else {
            HourlyCount.push(data[i]);
        } 
    }
}
function DisplayGraph () {

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23'],
        datasets: [{
            label: 'Rides Per Hour',
            data: HourlyCount,
                
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(90, 200, 150, 0.2)',
                'rgba(255, 0, 0, 0.6)',
                'rgba(0, 0, 255, 0.2)',
                '',
                '',
                '',
                '',
                '',
                ''
            ],
            borderColor: [
                'rgba(255, 99, 132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(90, 200, 150, 0.2)',
                'rgba(255, 0, 0, 0.6)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
}

