// Initialize line chart
var ctxl = document.getElementById("lineChartDemo").getContext("2d");
var lineChart = new Chart(ctxl, {
  type: "line",
  data: data,
  options: {
    responsive: true,
    // Add any specific options you need for the line chart
  },
});

// Initialize pie chart
var ctxp = document.getElementById("pieChartDemo").getContext("2d");
var pieChart = new Chart(ctxp, {
  type: "pie",
  data: pdata,
  options: {
    responsive: true,
    // Add any specific options you need for the pie chart
  },
});
