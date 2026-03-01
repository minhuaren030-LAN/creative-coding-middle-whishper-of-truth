async function getAdvice() {
  const page = document.getElementById("pageInput").value; 
  const response = await fetch(`/advice/${page}`);       
  const data = await response.json();                    

  if (data.slip) {                                       
    document.getElementById("result").innerText = data.slip.advice;
  } else {
    document.getElementById("result").innerText = "No advice found."; 
  }
}