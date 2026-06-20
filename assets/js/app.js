
async function loadDB(){
  return await fetch('data/db.json').then(r=>r.json());
}

function getParam(name){
  return new URLSearchParams(window.location.search).get(name);
}

async function renderIndex(){
  const db = await loadDB();

  const feature = db.articles.find(a=>a.id===db.featured);

  document.getElementById("f_title").innerText = feature.cn;
  document.getElementById("f_en").innerText = feature.en;

  const list = document.getElementById("list");
  const side = document.getElementById("side");

  db.articles.forEach(a=>{
    const div = document.createElement("div");
    div.className="card";
    div.dataset.cat = a.category;

    div.innerHTML=`
      <span class="badge">${a.type}</span>
      <h3>${a.cn}</h3>
      <div>${a.en}</div>
      <p>${a.author}</p>
      <a href="article.html?id=${a.id}">阅读全文</a>
    `;
    list.appendChild(div);
  });

  side.innerHTML = `
    <h3>期刊信息</h3>
    <p>${db.journal.cn}</p>
    <p>${db.journal.en}</p>
    <p>${db.journal.vol} ${db.journal.no}</p>
  `;
}

async function renderArticle(){
  const id = getParam("id");
  const db = await loadDB();
  const art = db.articles.find(a=>a.id===id);

  document.getElementById("articleBox").innerHTML = `
    <h1>${art.cn}</h1>
    <h3>${art.en}</h3>
    <p><b>${art.author}</b></p>
    <hr/>
    <p>全文内容（占位）</p>
  `;
}

function filter(cat){
  document.querySelectorAll(".card").forEach(c=>{
    if(cat==="all" || c.dataset.cat===cat){
      c.style.display="block";
    }else{
      c.style.display="none";
    }
  });
}
