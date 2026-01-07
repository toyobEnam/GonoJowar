const BASE_PATH = location.hostname.includes("github.io")
  ? "/golper-bahar"
  : "";

fetch(`${BASE_PATH}/components/footer/footer.html`)
  .then(res => res.text())
  .then(html => {
    document.getElementById("footer").innerHTML = html;
  });
