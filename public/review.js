submitEventHandler = async (e) => {
  e.preventDefault();
  const id = document.getElementById("review-id").value
  const review = document.getElementById("review-text").value;

  const response = await fetch("/api/album", {
    method: "POST",
    body: JSON.stringify({ id, review }),
    headers: { "Content-Type": "application/json" },
  });
};

document
  .getElementById("submit-button")
  .addEventListener("click", submitEventHandler);
