import users from "./fetch-users";

const usersList = document.getElementById("users-list");
export function renderUsers() {
  usersList.innerHTML = `
<p> ${users} </p> 
`;
}
