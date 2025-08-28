document.querySelector("button").addEventListener("click", function (e) {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const consent = document.getElementById("consent").checked;
  const queryType = document.querySelector('input[name="query"]:checked');

  if (!firstName || !lastName || !email || !message || !queryType || !consent) {
    alert("Please complete all required fields.");
    return;
  }

  alert("Form submitted successfully.");
});
