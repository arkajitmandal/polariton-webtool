
var myChart1, myChart2
var X, Xmin, Xmax, XN

Xmin = -1.5
Xmax =  1.5
XN   = 50 + 2
dX   = (Xmax - Xmin)/(XN-2 + 1)
X = Array(XN)
for (var i=0;i<XN;i++){
    X[i] = Xmin + dX * i
}




var plot = function(){
    //var X =  [-1.5, -1.25, -1.0, -0.75, -0.5, -0.25, 0, 0.25, 0.5, 0.75, 1.0, 1.25, 1.5]
    var Y1 = Eg(X)
    var Y2 = Ee(X)
    var Y3 = Eg1(X)  
    //[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

    document.getElementById("myChart").height = 300;
    document.getElementById("myChart").width = 300;
    var ctx = document.getElementById('myChart').getContext("2d");
    // Gradient for 1
    var gradientStroke1 = ctx.createLinearGradient(0, 0, 300, 0);
    gradientStroke1.addColorStop(0, '#000000');
    gradientStroke1.addColorStop(1, '#000000');

    // Gradient for 2
    var gradientStroke2 = ctx.createLinearGradient(0, 0, 300, 0);
    gradientStroke2.addColorStop(0,   '#80b6f4');

    var gradientStroke3 = ctx.createLinearGradient(0, 0, 300, 0);
    gradientStroke3.addColorStop(0,   '#ff6b6b');
    
    myChart1 = new Chart(ctx, {
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
                pointRadius: 0,
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
                pointRadius: 0,
                fill: false,
                borderWidth: 4,
                data: Y2
            },
            {
                label: "",
                borderColor: gradientStroke3,
                pointBorderColor: gradientStroke3,
                pointBackgroundColor: gradientStroke3,
                pointHoverBackgroundColor: gradientStroke3,
                pointHoverBorderColor: gradientStroke3,
                pointBorderWidth: 10,
                pointHoverRadius: 10,
                pointHoverBorderWidth: 1,
                pointRadius: 0,
                fill: false,
                borderWidth: 4,
                data: Y3
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


}

var plot2 = function(){
    //var X =  [-1.5, -1.25, -1.0, -0.75, -0.5, -0.25, 0, 0.25, 0.5, 0.75, 1.0, 1.25, 1.5]
    var Y1 = Eg(X)
    var Y2 = Ep1(X)
    var Y3 = Eg1(X)  
    //[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

    document.getElementById("myChart2").height = 300;
    document.getElementById("myChart2").width = 300;
    var ctx = document.getElementById('myChart2').getContext("2d");
    // Gradient for 1
    var gradientStroke1 = ctx.createLinearGradient(0, 0, 300, 0);
    gradientStroke1.addColorStop(0, '#000000');
    gradientStroke1.addColorStop(1, '#000000');

    // Gradient for 2
    var gradientStroke2 = ctx.createLinearGradient(0, 0, 300, 0);
    gradientStroke2.addColorStop(0,   '#80b6f4');

    var gradientStroke3 = ctx.createLinearGradient(0, 0, 300, 0);
    gradientStroke3.addColorStop(0,   '#ff6b6b');
    
    myChart2 = new Chart(ctx, {
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
                pointRadius: 0,
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
                pointRadius: 0,
                fill: false,
                borderWidth: 4,
                data: Y2
            },
            {
                label: "",
                borderColor: gradientStroke3,
                pointBorderColor: gradientStroke3,
                pointBackgroundColor: gradientStroke3,
                pointHoverBackgroundColor: gradientStroke3,
                pointHoverBorderColor: gradientStroke3,
                pointBorderWidth: 10,
                pointHoverRadius: 10,
                pointHoverBorderWidth: 1,
                pointRadius: 0,
                fill: false,
                borderWidth: 4,
                data: Y3
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


}



// Harmonic Functions
var Vi = function(R, A, B, R0){
    return A + B * (R-R0)**2.0
}
// Ground State
var Eg = function(R){
    var N = R.length
    var E = Array(N)
    for (var i=0;i<N;i++){
        var v1 = Vi(R[i], 0.049244, 0.183746518,  -0.75)
        var v2 = Vi(R[i], 0.010657, 0.183746518,  0.85)
        var d = 0.0734986072
        E[i] =  (0.5 * (v1 + v2) - (d**2.0 + 0.25 * (v1-v2)**2.0 )**0.5 ) * 27.2114
    } 
    return E 
}

// Ground State +1
var Eg1 = function(R){
    var hw = document.getElementById("omega").value
    var N = R.length
    var E = Array(N)
    for (var i=0;i<N;i++){
        var v1 = Vi(R[i], 0.049244, 0.183746518,  -0.75)
        var v2 = Vi(R[i], 0.010657, 0.183746518,  0.85)
        var d = 0.0734986072
        E[i] =  (0.5 * (v1 + v2) - (d**2.0 + 0.25 * (v1-v2)**2.0 )**0.5 ) * 27.2114 +  4.0 * hw/100.0
    } 
    return E 
}

// Excited State
var Ee = function(R){
    var N = R.length
    var E = Array(N)
    for (var i=0;i<N;i++){
        var v1 = Vi(R[i], 0.428129, 0.183746518,  -1.15 )
        var v2 = Vi(R[i], 0.373005, 0.146997214,  1.25)
        var d = 0.5144902504
        E[i] =  (0.5 * (v1 + v2) - (d**2.0 + 0.25 * (v1-v2)**2.0 )**0.5 ) * 27.2114
    } 
    return E 
}

// Excited State
var Ep1 = function(R){
    var N = R.length
    var E = Array(N)
    var E0 = Ee(R)
    var G1 = Eg1(R)
    var d = document.getElementById("g").value/100 * 0.3
    for (var i=0;i<N;i++){
        E[i] =  (0.5 * (E0[i] + G1[i]) + (d**2.0 + 0.25 * (G1[i]-E0[i])**2.0 )**0.5 )  
    } 
    return E 
}

var Ep2 = function(R){
    var N = R.length
    var E = Array(N)
    var E0 = Ee(R)
    var G1 = Eg1(R)
    var d = document.getElementById("g").value/100 * 0.3
    for (var i=0;i<N;i++){
        E[i] =  (0.5 * (E0[i] + G1[i]) - (d**2.0 + 0.25 * (G1[i]-E0[i])**2.0 )**0.5 )  
    } 
    return E 
}

 
function update() {
     
    var Y1 = Eg(X)
    var Y2 = Ee(X)
    var Y3 = Eg1(X)
    myChart1.data.datasets[0].data =  Y1
    myChart1.data.datasets[1].data =  Y2
    myChart1.data.datasets[2].data =  Y3
    myChart1.update('none');
    var Y4 = Ep1(X)
    var Y5 = Ep2(X)
    myChart2.data.datasets[1].data =  Y5
    myChart2.data.datasets[2].data =  Y4
    myChart2.update('none');

}