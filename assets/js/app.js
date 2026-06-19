
async function load(){
  return await (await fetch('./data/db.json')).json();
}

async function render(){
  const db = await load();

  const box = document.getElementById('list');
  const side = document.getElementById('side');
  const hero = db.articles.find(a=>a.id===db.featured);

  document.getElementById("heroTitle").innerText = hero.cn;
  document.getElementById("heroEn").innerText = hero.en;

  db.articles.forEach(a=>{
    const d = document.createElement('div');
    d.className="card";
    d.innerHTML=`
      <span class="badge">${a.type}</span>
      <h3>${a.cn}</h3>
      <div>${a.en}</div>
      <p>${a.author}</p>
      <a href="${a.file}">阅读全文</a>
    `;
    box.appendChild(d);
  });

  side.innerHTML = `
    <h3>期刊信息</h3>
    <p>Vol.1 No.1 2026</p>
    <p>Open Access</p>
    <p>国际超心理学与中国传统文化</p>
  `;
}
