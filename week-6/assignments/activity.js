const xhttp = new XMLHttpRequest();
const table = document.getElementById(`generated-content`);

xhttp.onreadystatechange = ({ target }) => {
    if (target.readyState == 4 && target.status == 200) {
        loadFile(target);
    }
};

xhttp.open("GET", "http://localhost:8080/week-6/assignments/students.xml", true);
xhttp.send();

const htmlToElement = html => {
    const template = document.createElement("template");
    template.innerHTML = html;
    return template.content;
};

const generateRows = (item) => {
    const students = Array.from(item.getElementsByTagName(`student`));
    return students.reduce((prev, current) => {
        const rollNo = current.attributes[0];
        const firstName = current.getElementsByTagName(`firstname`)[0];
        const lastName = current.getElementsByTagName(`lastname`)[0];
        const nickname = current.getElementsByTagName(`nickname`)[0];
        const marks = current.getElementsByTagName(`marks`)[0];

        return prev + `<tr>
            <td>${rollNo.textContent}</td>
            <td>${firstName.textContent} ${lastName.textContent}</td>
            <td>${nickname.textContent}</td>
            <td>${marks.textContent}</td>
        </tr>`;
    }, "");
};

const loadFile = xml => table.appendChild(htmlToElement(generateRows(xml.responseXML)));

