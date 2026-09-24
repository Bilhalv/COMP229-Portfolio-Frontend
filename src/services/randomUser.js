export default function getFakePerson() {
  return Promise.resolve({
    name: { first: "Alex", last: "Developer" },
    email: "alex.developer@example.com",
    picture: { large: null },
  });
}