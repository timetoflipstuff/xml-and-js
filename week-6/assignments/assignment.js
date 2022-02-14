const xhttp = new XMLHttpRequest();
const table = document.getElementById(`generated-content`);

xhttp.onreadystatechange = ({ target }) => {
    if (target.readyState == 4 && target.status == 200) {
        loadFile(target);
    }
};

xhttp.open("GET", "http://localhost:8080/week-6/assignments/people.xml", true);
xhttp.send();

const htmlToElement = html => {
    const template = document.createElement("template");
    template.innerHTML = html;
    return template.content;
};

const generateRows = (item) => {
    const people = Array.from(item.getElementsByTagName(`person`));
    return people.reduce((prev, current) => {
        const id = current.attributes[0];
        const firstName = current.getElementsByTagName(`first_name`)[0];
        const lastName = current.getElementsByTagName(`last_name`)[0];
        const email = current.getElementsByTagName(`email`)[0];
        const gender = current.getElementsByTagName(`gender`)[0];
        const ipAddress = current.getElementsByTagName(`ip_address`)[0];

        return prev + `<tr>
            <td>${id.textContent}</td>
            <td>${firstName.textContent} ${lastName.textContent}</td>
            <td>${email.textContent}</td>
            <td>${gender.textContent}</td>
            <td>${ipAddress.textContent}</td>
        </tr>`;
    }, "");
};

const loadFile = xml => table.appendChild(htmlToElement(generateRows(xml.responseXML)));

