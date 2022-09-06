const inicialButton = document.createElement("button");
inicialButton.className = "first-click";
inicialButton.innerText = "Acessar o HuffVerso";

const body = document.getElementsByTagName("body")[0];
body.appendChild(inicialButton);

const main = document.createElement("main");
const header = document.createElement("header");
const section = document.createElement("section");
const nav = document.createElement("nav");

const startClick = () => {
  body.innerHTML = "";
  body.append(header, main);
  header.appendChild(nav);
  nav.append(btn_all, btn_cavaleiro, btn_Deuses, btn_other);
};

inicialButton.addEventListener("click", startClick);

// const body = document.querySelector("body");

const btn_all = document.createElement("button");
btn_all.innerText = "Todos";
const btn_cavaleiro = document.createElement("button");
btn_cavaleiro.innerText = "SwanQueen";
const btn_Deuses = document.createElement("button");
btn_Deuses.innerText = "SuperCorp";
const btn_other = document.createElement("button");
btn_other.innerText = "Outros";

btn_all.addEventListener("click", createPerson);
btn_cavaleiro.addEventListener("click", createPerson);
btn_Deuses.addEventListener("click", createPerson);
btn_other.addEventListener("click", createPerson);

const containerUl = document.createElement("ul");
containerUl.classList.add("container");

function createPerson(e) {
  containerUl.innerHTML = "";

  const clickType = e.path[0].innerText;

  console.log(clickType);

  if (clickType === "Todos") {
    listPerson(fics, containerUl);
  } else {
    listForClass(fics, clickType, containerUl);
  }
  main.appendChild(containerUl);
}

function listPerson(list, obj) {
  for (let i = 0; i < list.length; i++) {
    const item = document.createElement("li");
    item.innerHTML = `
		<h4>${list[i].name}</h4>
		<img src="${list[i].img}"></img>
		<p>${list[i].cap}</p>
    <p>${list[i].status}</p>
    <section>
      <a href="${list[i].linkSpirit}">
        <button>Spirit</button>
      </a>
      <a href="${list[i].linkWattpad}">
        <button>Wattpad</button>
      </a>
    </section>
		`;
    obj.appendChild(item);
  }
}

function listForClass(list, classe, obj) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].class === classe) {
      const item = document.createElement("li");
      item.innerHTML = `
		<h4>${list[i].name}</h4>
		<img src="${list[i].img}"></img>
		<p>${list[i].cap}</p>
    <p>${list[i].status}</p>
    <section>
      <a href="${list[i].linkSpirit}">
        <button>Spirit</button>
      </a>
      <a href="${list[i].linkWattpad}">
        <button>Wattpad</button>
      </a>
    </section>
		                `;
      obj.appendChild(item);
    }
  }
}
