import { useEffect, useState } from "react";
import getFakePerson from "/services/randomUser";

export default function AboutMe() {
  const [person, setPerson] = useState(null);

  useEffect(() => {
    let isCurrent = true;
    getFakePerson().then((person) => {
      if (isCurrent) {
        setPerson(person);
      }
    });
    return () => {
      isCurrent = false;
    };
  }, []);

  const { name, email, picture } = person ?? {};

  const status = "Available for collaborations";

  return (
    <div className="flex flex-col items-center gap-2 text-text-primary">
      {picture?.large && (
        <img
          src={picture.large}
          alt={name?.first ?? "Profile"}
          className="rounded-full size-40"
        />
      )}
      <h1 className="font-bold">{name?.first ?? "Loading..."}</h1>
      <p>{email ?? "Profile unavailable"}</p>
      <p className="text-accent-soft">{status}</p>
    </div>
  );
}
