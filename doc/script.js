const admin = {
  username: "admin",
  password: "1234"
};

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (user === admin.username && pass === admin.password) {
    document.querySelector(".container").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
  } else {
    error.textContent = "Invalid credentials!";
  }
}

function logout() {
  location.reload();
}

let students = [];

function addStudent() {
  const name = document.getElementById("name").value;
  const room = document.getElementById("room").value;
  const date = document.getElementById("date").value;
  const fee = document.getElementById("fee").value;

  if (name && room && date && fee) {
    students.push({ name, room, date, fee });
    alert("Student added!");
    document.getElementById("name").value = "";
    document.getElementById("room").value = "";
    document.getElementById("date").value = "";
    document.getElementById("fee").value = "";
  } else {
    alert("Please fill all fields.");
  }
}

function showAddStudent() {
  document.getElementById("addStudent").style.display = "block";
  document.getElementById("studentList").style.display = "none";
}

function showStudents() {
  const list = document.getElementById("studentList");
  list.innerHTML = "<h3>Student List</h3>";

  students.forEach((s, index) => {
    list.innerHTML += `
      <div>
        <strong>${index + 1}. ${s.name}</strong><br>
        Room: ${s.room} | Date: ${s.date} | Fee: ${s.fee}
      </div><hr/>
    `;
  });

  document.getElementById("addStudent").style.display = "none";
  list.style.display = "block";
}
