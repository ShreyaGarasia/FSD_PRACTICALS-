async function calculate(op) {
  const a = document.getElementById('a').value.trim();
  const b = document.getElementById('b').value.trim();
  const errorEl = document.getElementById('error');
  const resultEl = document.getElementById('result');

  // Reset messages
  errorEl.hidden = true;
  resultEl.hidden = true;

  if (a === "" || b === "") {
    errorEl.textContent = "Please enter both numbers.";
    errorEl.hidden = false;
    return;
  }

  if (isNaN(a) || isNaN(b)) {
    errorEl.textContent = "Invalid input! Only numbers allowed.";
    errorEl.hidden = false;
    return;
  }

  try {
    const res = await fetch("/calculate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ a, b, op })
    });

    const data = await res.json();

    if (!res.ok) {
      errorEl.textContent = data.error || "Something went wrong!";
      errorEl.hidden = false;
      return;
    }

    resultEl.textContent = "Result: " + data.result;
    resultEl.hidden = false;
  } catch (err) {
    errorEl.textContent = "Server error!";
    errorEl.hidden = false;
  }
}
