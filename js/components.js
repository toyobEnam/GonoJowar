fetch("./components/footer/footer.html")
  .then(res => {
    if (!res.ok) throw new Error("Network response was not ok");
    return res.text();
  })
  .then(html => {
    const mount = document.getElementById("footer");
    if (!mount) throw new Error("#footer not found");
    mount.innerHTML = html;
  })
  .catch(err => console.error("Footer load error:", err));
