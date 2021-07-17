import React, { useEffect, useState } from "react";
import { Fragment } from "react";
export default function Home() {
  useEffect(() => {
    document.title = "This site is fake!!";
  });
  let isabookShopOpen = false;
  let WillIgetNewBook = new Promise((resolve, reject) => {
    if (isabookShopOpen) {
      let book = {
        author: "John Uik",
        name: "Clear History",
      };
      resolve(book);
    } else {
      reject(console.log("Errror"));
      console.log(reject);
    }
  });
  console.log(WillIgetNewBook);

  return (
    <Fragment>
      <ul>{}</ul>
    </Fragment>
  );
}
