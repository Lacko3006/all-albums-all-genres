submitEventHandler = async (e) => {
  e.preventDefault();
  const review = document.getElementById("review-text").value;

  const response = await fetch("api/album/review", {
    method: "POST",
    body: JSON.stringify({ review }),
    headers: { "Content-Type": "application/json" },
  });
};

document
  .getElementById("submit-button")
  .addEventListener("click", submitEventHandler);
