import tableContents from "./tableContents.js";
const table = document.getElementById("generated-content");
const filterNames = ['first-name', 'last-name', 'email', 'gender', 'ip-address']

const generateHtmlRow = (row) => {
    return `<tr><td>${row.id}</td>` +
    `<td>${row.first_name}</td>` +
    `<td>${row.last_name}</td>` +
    `<td>${row.email}</td>` +
    `<td>${row.gender}</td>` +
    `<td>${row.ip_address}</td></tr>`
}

const htmlToElement = html => {
    const template = document.createElement("template");
    template.innerHTML = html;
    return template.content;
};

const fillTable = (withFilters) => {
    let resultingTable = tableContents;
    if (withFilters) {
        const params = new URLSearchParams(window.location.search);
        filterNames.forEach(filterName => {
            const filter = params.get(filterName).toLowerCase();
            if (filter.length > 0) {
                const inputControl = document.getElementById(`${filterName}-filter`);
                inputControl.value = filter;
                resultingTable = resultingTable.filter(entry => entry[filterName.replace('-', '_')].toLowerCase().includes(filter));
            }
        });
    }
    const htmlString = resultingTable.reduce(((prev, next) => prev + generateHtmlRow(next)), "");
    table.appendChild(htmlToElement(htmlString));
}

fillTable(Boolean(window.location.search));