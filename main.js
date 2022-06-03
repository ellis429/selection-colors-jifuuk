var gridOptions = {
  columnDefs: [
    {
      field: "athlete",
      minWidth: 150,
      checkboxSelection: true
    },

    { field: "age", maxWidth: 90 },
    { field: "country", minWidth: 150 },
    { field: "sport", minWidth: 150 },
    { field: "gold" }
  ],

  enableRangeSelection: true,
  rowSelection: "multiple",
  onFirstDataRendered: params => {
    params.api.sizeColumnsToFit();
    // select first two nodes
    params.api.getRowNode(0).setSelected(true);
    params.api.getRowNode(1).setSelected(true);
  }
};

document.addEventListener("DOMContentLoaded", function() {
  var gridDiv = document.querySelector("#myGrid");
  new agGrid.Grid(gridDiv, gridOptions);
});

function replaceClassName(newClass) {
  var gridDivThemeWrapperDiv = document.querySelector("#grid-theme-wrapper");
  gridDivThemeWrapperDiv.className = newClass;
}

fetch("./data.json").then(response => {
  response.json().then(rowData => {
    gridOptions.api.setRowData(rowData);
  });
});
