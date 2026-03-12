import { useState } from "react";
import { faker } from "@faker-js/faker";
import { Header } from "./Header";
import { Messages } from "./Messages";

// For demo purposes. In a real app, you'd have real user data.
const NAME = getOrSetFakeName();

export default function App() {
  return (
    <div className="app-container">
      <Header userName={NAME} />
      <Messages userName={NAME} />
    </div>
  );
}

function getOrSetFakeName() {
  const NAME_KEY = "tutorial_name";
  const name = sessionStorage.getItem(NAME_KEY);
  if (!name) {
    const newName = faker.person.firstName();
    sessionStorage.setItem(NAME_KEY, newName);
    return newName;
  }
  return name;
}
