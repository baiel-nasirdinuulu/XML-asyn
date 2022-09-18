const btn = document.getElementById("get-data");

btn.addEventListener("click", loadData);

function loadData() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "users.txt", true);
  //status
  //200 = ok
  //404 = not found
  // 500 = server error
  //403 = for hidden
  xhr.onload = function () {
    if (this.status === 200) {
      const data = this.responseText;
      const output = document.querySelector(".output");
      output.innerHTML = `<h1>${data}<h1/>`;
    }
  };
  xhr.send();
}
