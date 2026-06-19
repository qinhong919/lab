
async function loadDB(){
  const res = await fetch('./data/db.json');
  return await res.json();
}

async function renderIndex(){
  const db = await loadDB();
  const box = document.getElementById('list');

  db.articles.forEach(a=>{
    const el = document.createElement('div');
    el.className='card';
    el.innerHTML=`
      <span class="badge">${a.type}</span>
      <h3>${a.title_cn}</h3>
      <div>${a.title_en}</div>
      <p>${a.author}</p>
      <a href="${a.file}">阅读全文</a>
    `;
    box.appendChild(el);
  });
}
