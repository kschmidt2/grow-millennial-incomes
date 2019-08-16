// adds social class to get social chart
let element = document.getElementsByClassName("chart-area");
for(var i = 0; i < element.length; i++)
{
    element[i].className += " social";
}

// bolds the subhead if there is no headline
// let subhead = document.getElementsByClassName("chart-subhead"),
//     headline = document.getElementById("chart-head");
//     if (!headline) {
//         for(var i = 0; i < subhead.length; i++) {
//             subhead.className += " strong";
//         }       
//      }

Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const myChart = Highcharts.chart('chart-container', {
        chart: {
            type: 'bar',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100
        }, 
        title: {
            text: null
        },
        data: {
            googleSpreadsheetKey: '1s4BXxvcRolcp46PHsOJYAHSg6e2PxXRXbpxqbIlSf1Q'
        },
        // for bar charts only
        plotOptions: {
            series: {
                groupPadding: 0.1
            } 
        },
        legend: {
            enabled: false
        },
        xAxis: {
            labels: {
                style: {
                    whiteSpace: 'nowrap'
                }
            },
            tickLength: 5
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow'
            },
            tickAmount: 4
        },
        credits: {
            enabled: false
        },
        tooltip: {
            shadow: false,
            padding: 10
        },
        responsive: {
            rules: [{
              condition: {
                maxWidth: 500
              },
              chartOptions: {
                chart: {
                  spacingRight: 15
                },
                legend: {
                    align: 'left',
                    x: -18
                },
                tooltip: {
                    enabled: false
                }
              }
            }]
        }
    });
});