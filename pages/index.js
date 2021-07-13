import React, { useEffect, useState } from "react";
import { Fragment } from "react";

export default function index() {
  // let numbers = [1, 2, 5, -6, 8, 9];
  // let filtered = numbers.filter((number) => {
  //   return number >= 0;
  // });
  // console.log(filtered);

  // useState hook
  const [lang, setLang] = useState("Uzb");
  // function increment() {
  //   {setCount(count + 2)}
  // }
  const [count, setCount] = useState(10);

  useEffect(() => {
    document.title = ` You clicked ${count} this`;
  }, []);

  function changer() {
    {
      if (lang == "Uzb") {
        setLang("Rus");
      } else {
        setLang("Uzb");
      }
    }
  }

  return (
    <Fragment>
      <p>You clicked {count} this</p>
      <button onClick={() => setCount(count + 1)}>Ad</button>
      <p>{lang}</p>
      <button onClick={changer}>{lang}</button>
    </Fragment>
  );
}
