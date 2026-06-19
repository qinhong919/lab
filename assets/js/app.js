
async function load(){
  return await (await fetch('./data/db.json')).json();
}

async function render(){
  const db = await load();
  const box = document.getElementById('list');

  const feature = db.articles.find(a=>a.id===db.featured);

  document.getElementById("featureTitle").innerText =
    feature.cn;

  document.getElementById("featureEn").innerText =
    feature.en;

  db.articles.forEach(a=>{
    const div = document.createElement('div');
    div.className="card";
    div.innerHTML=`
      <span class="badge">${a.type}</span>
      <h3>${a.cn}</h3>
      <div>${a.en}</div>
      <p>${a.author}</p>
      <a href="${a.file}">阅读全文</a>
    `;
    box.appendChild(div);
  });
}
