function calculate() {
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var op = document.getElementById("op").value;
  fetch("http://localhost:3000/calculate", {
    method: "POST",
    body: JSON.stringify({ a: a, b: b, op: op }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => (document.getElementById("result").innerText = data.c))
    .catch((error) => {
      console.error("Error:", error);
    });
}
