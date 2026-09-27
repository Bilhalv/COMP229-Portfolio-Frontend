import { useEffect, useState } from "react";
import { getContactInfo } from "/services/contact";

export default function useContactController() {
  const [info, setInfo] = useState(undefined);

  useEffect(() => {
    let isCurrent = true;
    getContactInfo().then((data) => {
      if (isCurrent) {
        setInfo(data);
      }
    });
    return () => {
      isCurrent = false;
    };
  }, []);

  return info;
}