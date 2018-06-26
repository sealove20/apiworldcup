function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el); 
}


const ul = document.getElementById('teams');
const url = 'https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json'

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let teamsData = data.teams;
    return teamsData.map(function(dados) {
      let li = createNode('li'),
          img = createNode('img'),
          span = createNode('span');
      img.src = dados.flag;
      span.innerHTML = `${dados.name}`;
      append(li, img);
      append(li, span);
      append(ul, li);
    })
  })
  .catch((err) => {
    console.log(err);
  });