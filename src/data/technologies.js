export const technologiesPromise = fetch(import.meta.env.BASE_URL + "data/technologies.json")
  .then((response) => response.json())
  .then((data) => new Promise((resolve) => setTimeout(() => resolve(data), 600)));