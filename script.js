fetch('data/cv.json')
  .then(res => res.json())
  .then(data => {
    document.querySelector("h1").innerText = data.name;
    document.querySelector("h2").innerText = data.title;
  });
