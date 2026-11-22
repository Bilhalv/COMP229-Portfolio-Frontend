let users = [
  {
    id: "1",
    firstname: "Pedro",
    lastname: "Bilhalva",
    email: "pedro@example.com",
    password: "password123",
    created: "2026-01-10",
    updated: "2026-01-10",
  },
];

function delay(value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), 150));
}

function response(data, message = "Success") {
  return { success: true, message, data };
}

export async function getAdminUsers() {
  return delay(response([...users], "Users list retrieved successfully."));
}

export async function getAdminUserById(id) {
  const user = users.find((item) => item.id === id) || null;
  return delay(response(user, "User retrieved successfully."));
}

export async function createAdminUser(data) {
  const now = new Date().toISOString().slice(0, 10);
  const user = { ...data, id: crypto.randomUUID(), created: now, updated: now };
  users = [user, ...users];
  return delay(response(user, "User added successfully."));
}

export async function updateAdminUser(id, data) {
  const now = new Date().toISOString().slice(0, 10);
  users = users.map((user) =>
    user.id === id ? { ...user, ...data, id, updated: now } : user,
  );
  const user = users.find((item) => item.id === id) || null;
  return delay(response(user, "User updated successfully."));
}

export async function deleteAdminUser(id) {
  users = users.filter((user) => user.id !== id);
  return delay({ success: true, message: "User deleted successfully." });
}
