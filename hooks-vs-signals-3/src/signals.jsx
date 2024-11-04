import { signal } from "@preact/signals-react";
import { LOCAL_STORAGE_KEY } from "./constants";

function getTodoFromLocalStorage() {
  const value = localStorage.getItem(LOCAL_STORAGE_KEY);
  console.log({ value });
  if (value == null) {
    return [];
  }
  return JSON.parse(value);
}

export const todos = signal(getTodoFromLocalStorage());
