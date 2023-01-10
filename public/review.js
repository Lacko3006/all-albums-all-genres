submitEventHandler = async (e) => {
  e.preventDefault();
  const review = document.getElementById("review-text").value;
  console.log(review);
};

document.getElementById("submit-button").addEventListener("click", submitEventHandler);