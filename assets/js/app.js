
async function loadDB(){
  const res = await fetch('./data/db.json');
  return await res.json();
}

async function renderIndex(){
  const db = await loadDB();
  const box = document.getElementById('list');
  db.articles.forEach(a=>{
    const div = document.createElement('div');
    div.className='card';
    div.innerHTML=`
      <div class="badge">${a.type}</div>
      <h3>${a.title_cn}</h3>
      <p>${a.title_en}</p>
      <p>${a.author}</p>
      <a href="${a.file}">阅读全文</a>
    `;
    box.appendChild(div);
  });
}
