let students = JSON.parse(localStorage.getItem("students")) || [];

displayStudents();

function addStudent() {
  let id = document.getElementById("studentId").value.trim();
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let course = document.getElementById("course").value.trim();

  if (!id || !name || !email || !course) {
    alert("Please fill in all fields.");
    return;
  }

  if (students.some(s => s.id === id)) {
    alert("Student ID already exists.");
    return;
  }

  students.push({ id, name, email, course });
  localStorage.setItem("students", JSON.stringify(students));

  document.getElementById("studentId").value = "";
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("course").value = "";

  displayStudents();
}

function displayStudents(list = students) {
  document.getElementById("rowCount").textContent = `Total Students: ${students.length}`;
  let table = document.getElementById("studentTable");
  table.innerHTML = "";

  list.forEach((student) => {
    let realIndex = students.indexOf(student);
    table.innerHTML += `
<tr>
<td>${student.id}</td>
<td>${student.name}</td>
<td>${student.email}</td>
<td>${student.course}</td>
<td>
<button onclick="editStudent(${realIndex})">Edit</button>
<button onclick="deleteStudent(${realIndex})">Delete</button>
</td>
</tr>`;
  });
}

function deleteStudent(index) {
  if (!confirm("Are you sure you want to delete this student?")) return;
  students.splice(index, 1);
  localStorage.setItem("students", JSON.stringify(students));
  displayStudents();
}

function editStudent(index) {
  let student = students[index];

  document.getElementById("studentId").value = student.id;
  document.getElementById("name").value = student.name;
  document.getElementById("email").value = student.email;
  document.getElementById("course").value = student.course;

  students.splice(index, 1);
  localStorage.setItem("students", JSON.stringify(students));
  displayStudents();
}

function searchStudent() {
  let searchValue = document.getElementById("search").value.toLowerCase();
  let filtered = students.filter(student =>
    student.name.toLowerCase().includes(searchValue)
  );
  displayStudents(filtered);
}
