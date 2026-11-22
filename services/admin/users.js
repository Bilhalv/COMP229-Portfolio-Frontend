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

export async function getAdminUsers() {
  return delay([...users]);
}

export async function getAdminUserById(id) {
  return delay(users.find((user) => user.id === id) || null);
}

export async function createAdminUser(data) {
  const now = new Date().toISOString().slice(0, 10);
  const user = { ...data, id: crypto.randomUUID(), created: now, updated: now };
  users = [user, ...users];
  return delay(user);
}

export async function updateAdminUser(id, data) {
  const now = new Date().toISOString().slice(0, 10);
  users = users.map((user) =>
    user.id === id ? { ...user, ...data, id, updated: now } : user,
  );
  return delay(users.find((user) => user.id === id) || null);
}

export async function deleteAdminUser(id) {
  users = users.filter((user) => user.id !== id);
  return delay(true);
}
