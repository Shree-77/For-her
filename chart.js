
const ctx = document.getElementById('hourChart').getContext('2d');

new Chart(ctx, {
  type: 'bar',
  data: {
  labels: [
    '12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM',
    '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM',
    '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM',
    '7 PM', '8 PM', '9 PM', '10 PM', '11 PM'
  ],
  datasets: [{
    data: [
      500, // 12 AM
      480, // 1 AM
      430, // 2 AM
      300, // 3 AM
       900, // 4 AM
       500, // 5 AM
       400, // 6 AM
       1800, // 7 AM
      7200, // 8 AM (START morning peak)
      7800, // 9 AM
      8100, // 10 AM (END morning peak)
       1900, // 11 AM
       1800, // 12 PM
       1600, // 1 PM
       1500, // 2 PM
       1450, // 3 PM
       1500, // 4 PM
       1700, // 5 PM
      1200, // 6 PM
      9000, // 7 PM (START evening peak)
      9500, // 8 PM
     10000, // 9 PM
     11000, // 10 PM
     10500  // 11 PM (END peak)
    ],
    borderRadius: 6,
    barPercentage: 0.7,
    backgroundColor: '#c41257'
  }]
},
  options: {
    plugins: { legend: { display: false }},
    scales: {
      x: { ticks: { font: { size: 10 }}},
      y: { display: false }
    }
  }
});

