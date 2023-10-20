const members = [
  { name: 'Peter Quill', id: 'peter' },
  { name: 'Gamora Titan', id: 'gamora' },
  { name: 'Drax o Destruidor', id: 'drax' },
  { name: 'Mantis', id: 'mantis' },
  { name: 'Rocket Raccoon', id: 'rocket' },
  { name: 'I am Groot', id: 'groot' },
]

let activeMember = 0;
const images = document.querySelector('#images')
const menu = document.querySelector('#menu')

function changesStatusButtons(){
  const prev = document.querySelector('#button_prev');
  const isFirst = activeMember === 0;
  prev.disabled = isFirst
  const next = document.querySelector('#button_next');
  const isLast = activeMember === members.length - 1;
  next.disabled = isLast
}

function navigationMenber(direction) {
  activeMember = activeMember + direction

  const member = members[activeMember]

  console.log(activeMember, member);

  images.style.transform = `translateY(${-100 * activeMember}vh)`

  changesStatusButtons()

}

function changeMenu(){
  menu.classList.toggle('active')
}