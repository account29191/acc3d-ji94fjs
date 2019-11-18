const deviceSize = [
  // list of window.matchMedia() queries
  window.matchMedia("(min-width: 2560px)"),
  window.matchMedia("(min-width: 1920px)"),
  window.matchMedia("(min-width: 1680px)"),
  window.matchMedia("(min-width: 1600px)"),
  window.matchMedia("(min-width: 1366px)"),
  window.matchMedia("(min-width: 1024px)"),
  window.matchMedia("(min-width: 768px)"),
  window.matchMedia("(min-width: 414px)"),
  window.matchMedia("(min-width: 375px)"),
  window.matchMedia("(min-width: 320px)")
];

//get bar chart class
ctxBarChartMin2560px = ctxBarChartMin1920px = ctxBarChartMin1680px = ctxBarChartMin1600px = ctxBarChartMin1366px = ctxBarChartMin1024px = ctxBarChartMin768px = ctxBarChartMin414px = ctxBarChartMin375px = ctxBarChartMin320px = document
  .querySelector(".barChart")
  .getContext("2d");

var barChartData = {
  series: ["React", "Swift", "Vue", "D3", "AR Development"],
  labels: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "June"],
  data: [
    /*React*/ [50, 50, 20, 10, 10, 10, 20, 0],
    /*Swift*/ [50, 50, 70, 70, 60, 30, 40, 25],
    /*Vue*/ [0, 0, 10, 20, 10, 20, 10, 0],
    /*D3*/ [0, 0, 0, 0, 10, 10, 10, 25],
    /*AR Development*/ [0, 0, 0, 0, 10, 30, 30, 50]
  ]
};

var stackedBarChartData = {
  labels: barChartData.labels,
  datasets: [
    {
      label: barChartData.series[0],
      backgroundColor: "rgb(1, 163, 216, 0.8)",
      borderColor: "rgb(1, 163, 216, 1)",
      data: barChartData.data[0]
    }
  ]
};

function pushData() {
  stackedBarChartData.datasets.push({
    label: barChartData.series[1],
    backgroundColor: "rgb(110, 188, 69, 0.9)",
    borderColor: "rgb(110, 188, 69, 1)",
    data: barChartData.data[1]
  });

  stackedBarChartData.datasets.push({
    label: barChartData.series[2],
    backgroundColor: "rgb(246, 194, 0, 0.9)",
    borderColor: "rgb(246, 194, 0, 1)",
    data: barChartData.data[2]
  });

  stackedBarChartData.datasets.push({
    label: barChartData.series[3],
    backgroundColor: "rgb(255, 106, 3, 0.9)",
    borderColor: "rgb(255, 106, 3, 1)",
    data: barChartData.data[3]
  });

  stackedBarChartData.datasets.push({
    label: barChartData.series[4],
    backgroundColor: "rgb(227, 36, 1, 0.9)",
    borderColor: "rgb(227, 36, 1, 1)",
    data: barChartData.data[4]
  });
}

function showChart() {
  //2560
  if (deviceSize[0].matches) {
    pushData();

    var configBarChart = {
      type: "bar",
      data: stackedBarChartData,
      options: {
        maintainAspectRatio: true,
        tooltips: {
          mode: "label",
          bodySpacing: 6,
          titleMarginBottom: 10,
          footerMarginTop: 8,
          titleFontSize: 33,
          bodyFontSize: 28,
          callbacks: {
            footer: function(tooltipItem /*, data*/) {
              var total = 0;
              tooltipItem.forEach(function(element /*, index, array*/) {
                total += element.yLabel;
              });
            }
          }
        },
        scales: {
          xAxes: [
            {
              stacked: true,
              ticks: {
                maxRotation: 60,
                autoSkip: false,
                fontSize: 50
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0.06)",
                zeroLineColor: "rgba(0,0,0,0.1)"
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 100,
                callback: function(value) {
                  return value + "%";
                }
              },
              scaleLabel: {
                display: true,
                labelString: "% of Working Hours",
                fontSize: 50
              },

              stacked: true,
              gridLines: {
                color: "rgba(0, 0, 0, 0.06)",
                zeroLineColor: "rgba(0,0,0,0.1)"
              }
            }
          ]
        },
        legend: {
          display: true,
          position: "bottom",
          labels: { fontSize: 50 }
        }
      }
    };

    new Chart(ctxBarChartMin2560px, configBarChart);
    console.log("2560px monitor or bigger");
  } else if (deviceSize[1].matches) {
    //1920
    pushData();

    var configBarChart = {
      type: "bar",
      data: stackedBarChartData,
      options: {
        maintainAspectRatio: true,
        tooltips: {
          mode: "label",
          bodySpacing: 6,
          titleMarginBottom: 10,
          footerMarginTop: 8,
          titleFontSize: 30,
          bodyFontSize: 25,
          callbacks: {
            footer: function(tooltipItem /*, data*/) {
              var total = 0;
              tooltipItem.forEach(function(element /*, index, array*/) {
                total += element.yLabel;
              });
            }
          }
        },
        scales: {
          xAxes: [
            {
              stacked: true,
              ticks: {
                maxRotation: 60,
                autoSkip: false,
                fontSize: 46
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0.06)",
                zeroLineColor: "rgba(0,0,0,0.1)"
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 100,
                callback: function(value) {
                  return value + "%";
                }
              },
              scaleLabel: {
                display: true,
                labelString: "% of Working Hours",
                fontSize: 46
              },

              stacked: true,
              gridLines: {
                color: "rgba(0, 0, 0, 0.06)",
                zeroLineColor: "rgba(0,0,0,0.1)"
              }
            }
          ]
        },
        legend: {
          display: true,
          position: "bottom",
          labels: { fontSize: 30 }
        }
      }
    };

    new Chart(ctxBarChartMin1920px, configBarChart);
    console.log("1920px monitor to 2560px monitor");
  } else if (deviceSize[2].matches) {
    //1680
    pushData();

    var configBarChart = {
      type: "bar",
      data: stackedBarChartData,
      options: {
        maintainAspectRatio: true,
        tooltips: {
          mode: "label",
          bodySpacing: 6,
          titleMarginBottom: 10,
          footerMarginTop: 8,
          titleFontSize: 27,
          bodyFontSize: 24,
          callbacks: {
            footer: function(tooltipItem /*, data*/) {
              var total = 0;
              tooltipItem.forEach(function(element /*, index, array*/) {
                total += element.yLabel;
              });
            }
          }
        },
        scales: {
          xAxes: [
            {
              stacked: true,
              ticks: {
                maxRotation: 60,
                autoSkip: false,
                fontSize: 33
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0.06)",
                zeroLineColor: "rgba(0,0,0,0.1)"
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 100,
                callback: function(value) {
                  return value + "%";
                }
              },
              scaleLabel: {
                display: true,
                labelString: "% of Working Hours",
                fontSize: 33
              },

              stacked: true,
              gridLines: {
                color: "rgba(0, 0, 0, 0.06)",
                zeroLineColor: "rgba(0,0,0,0.1)"
              }
            }
          ]
        },
        legend: {
          display: true,
          position: "bottom",
          labels: { fontSize: 25 }
        }
      }
    };

    new Chart(ctxBarChartMin1680px, configBarChart);
    console.log("1680px monitor to 1920px monitor");
  } else if (deviceSize[3].matches) {
    //1600
    pushData();

    var configBarChart = {
      type: "bar",
      data: stackedBarChartData,
      options: {
        maintainAspectRatio: true,
        tooltips: {
          mode: "label",
          bodySpacing: 6,
          titleMarginBottom: 10,
          footerMarginTop: 8,
          titleFontSize: 22,
          bodyFontSize: 19,
          callbacks: {
            footer: function(tooltipItem /*, data*/) {
              var total = 0;
              tooltipItem.forEach(function(element /*, index, array*/) {
                total += element.yLabel;
              });
            }
          }
        },
        scales: {
          xAxes: [
            {
              stacked: true,
              ticks: {
                maxRotation: 60,
                autoSkip: false,
                fontSize: 31
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0.06)",
                zeroLineColor: "rgba(0,0,0,0.1)"
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 100,
                callback: function(value) {
                  return value + "%";
                }
              },
              scaleLabel: {
                display: true,
                labelString: "% of Working Hours",
                fontSize: 31
              },

              stacked: true,
              gridLines: {
                color: "rgba(0, 0, 0, 0.06)",
                zeroLineColor: "rgba(0,0,0,0.1)"
              }
            }
          ]
        },
        legend: {
          display: true,
          position: "bottom",
          labels: { fontSize: 25 }
        }
      }
    };

    new Chart(ctxBarChartMin1600px, configBarChart);
    console.log("1600px monitor to 1680px monitor");
  } else if (deviceSize[4].matches) {
    //1366
    pushData();

    var configBarChart = {
      type: "bar",
      data: stackedBarChartData,
      options: {
        maintainAspectRatio: true,
        tooltips: {
          mode: "label",
          bodySpacing: 6,
          titleMarginBottom: 10,
          footerMarginTop: 8,
          titleFontSize: 14,
          bodyFontSize: 14,
          callbacks: {
            footer: function(tooltipItem /*, data*/) {
              var total = 0;
              tooltipItem.forEach(function(element /*, index, array*/) {
                total += element.yLabel;
              });
            }
          }
        },
        scales: {
          xAxes: [
            {
              stacked: true,
              ticks: {
                maxRotation: 60,
                autoSkip: false,
                fontSize: 24
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0.06)",
                zeroLineColor: "rgba(0,0,0,0.1)"
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 100,
                callback: function(value) {
                  return value + "%";
                }
              },
              scaleLabel: {
                display: true,
                labelString: "% of Working Hours",
                fontSize: 23
              },

              stacked: true,
              gridLines: {
                color: "rgba(0, 0, 0, 0.06)",
                zeroLineColor: "rgba(0,0,0,0.1)"
              }
            }
          ]
        },
        legend: {
          display: true,
          position: "bottom",
          labels: { fontSize: 19 }
        }
      }
    };

    new Chart(ctxBarChartMin1366px, configBarChart);
    console.log("1366px monitor to 1680px monitor");
  } else if (deviceSize[5].matches) {
    //1024
    pushData();

    var configBarChart = {
      type: "bar",
      data: stackedBarChartData,
      options: {
        maintainAspectRatio: true,
        tooltips: {
          mode: "label",
          bodySpacing: 6,
          titleMarginBottom: 10,
          footerMarginTop: 8,
          titleFontSize: 15,
          bodyFontSize: 12,
          callbacks: {
            footer: function(tooltipItem /*, data*/) {
              var total = 0;
              tooltipItem.forEach(function(element /*, index, array*/) {
                total += element.yLabel;
              });
            }
          }
        },
        scales: {
          xAxes: [
            {
              stacked: true,
              ticks: {
                maxRotation: 60,
                autoSkip: false,
                fontSize: 18
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0.06)",
                zeroLineColor: "rgba(0,0,0,0.1)"
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 100,
                callback: function(value) {
                  return value + "%";
                }
              },
              scaleLabel: {
                display: true,
                labelString: "% of Working Hours",
                fontSize: 18
              },

              stacked: true,
              gridLines: {
                color: "rgba(0, 0, 0, 0.06)",
                zeroLineColor: "rgba(0,0,0,0.1)"
              }
            }
          ]
        },
        legend: {
          display: true,
          position: "bottom",
          labels: { fontSize: 15 }
        }
      }
    };

    new Chart(ctxBarChartMin1024px, configBarChart);
    console.log("1024px monitor to 1366px monitor");
  } else if (deviceSize[6].matches) {
    //768
    pushData();

    var configBarChart = {
      type: "bar",
      data: stackedBarChartData,
      options: {
        maintainAspectRatio: true,
        tooltips: {
          mode: "label",
          bodySpacing: 6,
          titleMarginBottom: 10,
          footerMarginTop: 8,
          titleFontSize: 17,
          bodyFontSize: 13,
          callbacks: {
            footer: function(tooltipItem /*, data*/) {
              var total = 0;
              tooltipItem.forEach(function(element /*, index, array*/) {
                total += element.yLabel;
              });
            }
          }
        },
        scales: {
          xAxes: [
            {
              stacked: true,
              ticks: {
                maxRotation: 60,
                autoSkip: false,
                fontSize: 17
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0.06)",
                zeroLineColor: "rgba(0,0,0,0.1)"
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 100,
                callback: function(value) {
                  return value + "%";
                }
              },
              scaleLabel: {
                display: true,
                labelString: "% of Working Hours",
                fontSize: 17
              },

              stacked: true,
              gridLines: {
                color: "rgba(0, 0, 0, 0.06)",
                zeroLineColor: "rgba(0,0,0,0.1)"
              }
            }
          ]
        },
        legend: {
          display: true,
          position: "bottom",
          labels: { fontSize: 11 }
        }
      }
    };

    new Chart(ctxBarChartMin768px, configBarChart);
    console.log("768px monitor to 1024px monitor");
  } else if (deviceSize[7].matches) {
    //414
    pushData();

    var configBarChart = {
      type: "bar",
      data: stackedBarChartData,
      options: {
        maintainAspectRatio: true,
        tooltips: {
          mode: "label",
          bodySpacing: 6,
          titleMarginBottom: 10,
          footerMarginTop: 8,
          titleFontSize: 13,
          bodyFontSize: 10,
          callbacks: {
            footer: function(tooltipItem /*, data*/) {
              var total = 0;
              tooltipItem.forEach(function(element /*, index, array*/) {
                total += element.yLabel;
              });
            }
          }
        },
        scales: {
          xAxes: [
            {
              stacked: true,
              ticks: {
                maxRotation: 60,
                autoSkip: false,
                fontSize: 8
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0.06)",
                zeroLineColor: "rgba(0,0,0,0.1)"
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 100,
                callback: function(value) {
                  return value + "%";
                }
              },
              scaleLabel: {
                display: true,
                labelString: "% of Working Hours",
                fontSize: 13
              },

              stacked: true,
              gridLines: {
                color: "rgba(0, 0, 0, 0.06)",
                zeroLineColor: "rgba(0,0,0,0.1)"
              }
            }
          ]
        },
        legend: {
          display: true,
          position: "bottom",
          labels: { fontSize: 8 }
        }
      }
    };

    new Chart(ctxBarChartMin414px, configBarChart);
    console.log("414px monitor to 768px monitor");
  } else if (deviceSize[8].matches) {
    //375
    pushData();

    var configBarChart = {
      type: "bar",
      data: stackedBarChartData,
      options: {
        maintainAspectRatio: true,
        tooltips: {
          mode: "label",
          bodySpacing: 6,
          titleMarginBottom: 10,
          footerMarginTop: 8,
          titleFontSize: 8,
          bodyFontSize: 8,
          callbacks: {
            footer: function(tooltipItem /*, data*/) {
              var total = 0;
              tooltipItem.forEach(function(element /*, index, array*/) {
                total += element.yLabel;
              });
            }
          }
        },
        scales: {
          xAxes: [
            {
              stacked: true,
              ticks: {
                maxRotation: 60,
                autoSkip: false,
                fontSize: 6
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0.06)",
                zeroLineColor: "rgba(0,0,0,0.1)"
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 100,
                callback: function(value) {
                  return value + "%";
                }
              },
              scaleLabel: {
                display: true,
                labelString: "% of Working Hours",
                fontSize: 11
              },

              stacked: true,
              gridLines: {
                color: "rgba(0, 0, 0, 0.06)",
                zeroLineColor: "rgba(0,0,0,0.1)"
              }
            }
          ]
        },
        legend: {
          display: true,
          position: "bottom",
          labels: { fontSize: 7 }
        }
      }
    };

    new Chart(ctxBarChartMin375px, configBarChart);
    console.log("375px monitor to 414px monitor");
  } else if (deviceSize[9].matches) {
    //320
    pushData();

    var configBarChart = {
      type: "bar",
      data: stackedBarChartData,
      options: {
        maintainAspectRatio: true,
        tooltips: {
          mode: "label",
          bodySpacing: 6,
          titleMarginBottom: 10,
          footerMarginTop: 8,
          titleFontSize: 8,
          bodyFontSize: 7,
          callbacks: {
            footer: function(tooltipItem /*, data*/) {
              var total = 0;
              tooltipItem.forEach(function(element /*, index, array*/) {
                total += element.yLabel;
              });
            }
          }
        },
        scales: {
          xAxes: [
            {
              stacked: true,
              ticks: {
                maxRotation: 60,
                autoSkip: false,
                fontSize: 7
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0.06)",
                zeroLineColor: "rgba(0,0,0,0.1)"
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 100,
                callback: function(value) {
                  return value + "%";
                }
              },
              scaleLabel: {
                display: true,
                labelString: "% of Working Hours",
                fontSize: 11
              },

              stacked: true,
              gridLines: {
                color: "rgba(0, 0, 0, 0.06)",
                zeroLineColor: "rgba(0,0,0,0.1)"
              }
            }
          ]
        },
        legend: {
          display: true,
          position: "bottom",
          labels: { fontSize: 7 }
        }
      }
    };

    new Chart(ctxBarChartMin320px, configBarChart);
    console.log("320px monitor to 375px monitor");
  } else {
    console.log("too small of a screen");
  }
}

showChart();

////Thanks to MIT and nagubal
