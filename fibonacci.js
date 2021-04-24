const series = [];
series[0] = 0;
series[1] = 1;

const fibonacciSeries = function (number) {
  for (let i = 2; i <= number; i++) {
    series[i] = series[i - 2] + series[i - 1];
  }
};

fibonacciSeries(10);
console.log(series);
