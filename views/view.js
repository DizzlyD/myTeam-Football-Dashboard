export default class View {
  _data;
  // defaultChartTheme = [
  //   "rgb(34, 169, 227)",
  //   "rgba(34, 169, 227, 0.25)",
  //   "rgb(200, 205, 86)",
  // ];
  // themeCheck;
  // chartThemeColor = "#22A9E3";
  //
  constructor() {}
  //
  render(data) {
    this._data = data;
    this.clear();
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  // renderChart(data) {
  //   this._data = data;
  //   const chart = this.myChart;
  //   chart.destory();
    
  // }

  clear() {
    this._parentElement.innerHTML = "";
  }
}

// export default new View()
