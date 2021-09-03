

var plot = function(){

    var X =  [-1.0, -0.75, -0.5, -0.25, 0, 0.25,0.5, 0.75, 1.0]
    var Y1 = [10, 12, 15, 17, 3, 18, 17, 16, 2, 20]
    var Y2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    var Y3 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

    document.getElementById("myChart").height = "90%";
    document.getElementById("myChart").width = "90%";
    var w = document.getElementsByClassName("PES")[0].offsetWidth;
    var ctx = document.getElementById('myChart').getContext("2d");
    // Gradient for 1
    var gradientStroke1 = ctx.createLinearGradient(0, 0, w, 0);
    gradientStroke1.addColorStop(0, '#80b6f4');
    gradientStroke1.addColorStop(1, '#f49080');

    // Gradient for 2
    var gradientStroke2 = ctx.createLinearGradient(0, 0, w, 0);
    gradientStroke2.addColorStop(0,   '#80b6f4');
    gradientStroke2.addColorStop(0.1, '#80b6f4');
    gradientStroke2.addColorStop(0.3, '#80b6f4');
    gradientStroke2.addColorStop(0.4, '#f49080');
    gradientStroke2.addColorStop(0.5, '#f49080');
    gradientStroke2.addColorStop(0.6, '#f49080');
    gradientStroke2.addColorStop(0.7, '#f49080');
    gradientStroke2.addColorStop(0.8, '#f49080');
    gradientStroke2.addColorStop(0.9, '#f49080');
    gradientStroke2.addColorStop(1.0, '#f49080');
    
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: X,
            datasets: [{
                label: "",
                borderColor: gradientStroke1,
                pointBorderColor: gradientStroke1,
                pointBackgroundColor: gradientStroke1,
                pointHoverBackgroundColor: gradientStroke1,
                pointHoverBorderColor: gradientStroke1,
                pointBorderWidth: 10,
                pointHoverRadius: 10,
                pointHoverBorderWidth: 1,
                pointRadius: 2,
                fill: false,
                borderWidth: 4,
                data: Y1
            },
            {
                label: "",
                borderColor: gradientStroke2,
                pointBorderColor: gradientStroke2,
                pointBackgroundColor: gradientStroke2,
                pointHoverBackgroundColor: gradientStroke2,
                pointHoverBorderColor: gradientStroke2,
                pointBorderWidth: 10,
                pointHoverRadius: 10,
                pointHoverBorderWidth: 1,
                pointRadius: 2,
                fill: false,
                borderWidth: 4,
                data: Y2
            }]
            
        },
        options: {          
            legend: {
                position: "none"
            },
            scales: {
                yAxes: [{
                    ticks: {
                        fontColor: "rgba(0,0,0,0.5)",
                        fontStyle: "bold",
                        beginAtZero: true,
                        maxTicksLimit: 5,
                        padding: 20
                    },
                    gridLines: {
                        drawTicks: false,
                        display: false
                    }

                }],
                xAxes: [{
                    gridLines: {
                        zeroLineColor: "transparent"
                    },
                    ticks: {
                        padding: 20,
                        fontColor: "rgba(0,0,0,0.5)",
                        maxTicksLimit: 5,
                        fontStyle: "bold"
                    }
                }]
            }
        }
    });
    document.getElementById("myChart").height = "90%";
    document.getElementById("myChart").width = "90%";

}