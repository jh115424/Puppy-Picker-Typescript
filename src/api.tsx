import { Dog } from "./types.ts";

export const baseUrl = "http://localhost:3000";

export const Requests = {
  getAllDogs: () =>
    fetch(`${baseUrl}/dogs`).then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP request failed: ${response.status}`);
      }
      return response.json();
    }),

  postDog: (dog: Omit<Dog, "id">) => {
    return fetch(`${baseUrl}/dogs`, {
      body: JSON.stringify(dog),
      method: "POST",
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP request failed: ${response.status}`);
      }
      return response.json();
    });
  },

  deleteDog: (dog: Dog) => {
    return fetch(`${baseUrl}/dogs/${dog.id}`, {
      method: "DELETE",
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP request failed: ${response.status}`);
      }
      return response.json();
    });
  },

  updateDog: (dog: Dog, isFavorite: boolean) => {
    return fetch(`${baseUrl}/dogs/${dog.id}`, {
      body: JSON.stringify({ isFavorite: isFavorite }),
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP request failed: ${response.status}`);
      }
      return response.json();
    });
  },

  dummyFunction: () => {
    console.log("dummy stuff");
  },
};
