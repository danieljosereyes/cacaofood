function DataPost(data) {
  fetch("http://localhost:3000/api/register", {
    method: "POST", // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then((res) => res.json())
  .catch((error) => console.error("Error:", error))
  .then((response) => console.log("Success:", response));
}

export default DataPost;
