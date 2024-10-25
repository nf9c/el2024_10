const addUserBtn = document.getElementById("addUserBtn");
const userForm = document.getElementById("userForm");
const usersData = document.getElementById("usersBody");
const submitUserBtn = document.getElementById("submitUserBtn");
const cancelBtn = document.getElementById("cancelBtn");
let usersList = [];
let userKey = 1;

addUserBtn.addEventListener("click", () => {
  userForm.classList.remove("hidden");
});

cancelBtn.addEventListener("click", () => {
  userForm.classList.add("hidden");
});

submitUserBtn.addEventListener("click", () => {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const newUser = {
    id: userKey++,
    name: nameInput.value,
    email: emailInput.value,
  };

  usersList.push(newUser);
  updateTable();

  nameInput.value = "";
  emailInput.value = "";
  userForm.classList.add("hidden");
});

const updateTable = () => {
  usersData.innerHTML = "";

  usersList.forEach((user) => {
    const row = document.createElement("tr");

    row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
        `;

    usersData.appendChild(row);
  });
};
