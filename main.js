const tableBody = document.getElementById('table-body')

let flights = [
    {
        time: "08:11",
        destination: "DELHI",
        flight: "DC 304",
        gate: "R 03",
        remarks: "ON TIME"
    },
    {
        time: "09:30",
        destination: "LONDON",
        flight: "LON 212",
        gate: "A 01",
        remarks: "ON TIME"
    },
    {
        time: "09:45",
        destination: "MILAN",
        flight: "ML 103",
        gate: "B 02",
        remarks: "CANCELLED"
    },
    {
        time: "10:05",
        destination: "NEW YORK",
        flight: "NY 904",
        gate: "A 03",
        remarks: "ON TIME"
    },
    {
        time: "10:10",
        destination: "CHENNAI",
        flight: "CHN 604",
        gate: "F 09",
        remarks: "LATE"
    }
]

function populateTable() {
    for(const flight of flights) {
        const tableRow = document.createElement("tr")

        for(const flightDetail in flight) {
            const tableCell = document.createElement("td")
            tableCell.innerHTML = flight[flightDetail]
            tableRow.appendChild(tableCell)
        }
        tableBody.append(tableRow)
    }
}

populateTable()