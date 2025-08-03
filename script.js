function createTable() {
    //Write your code here
  const rows = prompt("Input number of rows");
    const columns = prompt("Input number of columns");

    if (rows === null || columns === null) return;

    const rowCount = parseInt(rows);
    const columnCount = parseInt(columns);

    if (isNaN(rowCount) || isNaN(columnCount)) return;
    if (rowCount <= 0 || columnCount <= 0) {
        alert("Please enter positive numbers for rows and columns.");
        return;
    }

    const table = document.getElementById("myTable");
    table.innerHTML = "";

    for (let i = 0; i < rowCount; i++) {
        const row = table.insertRow(i);
        for (let j = 0; j < columnCount; j++) {
            const cell = row.insertCell(j);
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }

}
