export default function getFakePerson() {
  return Promise.resolve({
    name: { first: "Alex", last: "Developer" },
    email: "alex.developer@example.com",
    picture: { large: "https://randomuser.me/api/portraits/men/32.jpg" },
    bio: "A passionate Computer Programming student at Centennial College who enjoys crafting clean, accessible web interfaces. Driven by curiosity and a love for solving real-world problems with code.",
    resumeUrl: "/resume.pdf",
  });
}