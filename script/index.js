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
const navigation = document.querySelector('#navigation')
const memberName = document.querySelector('#member__name')

function changesStatusButtons(){
  const prev = document.querySelector('#button_prev');
  const isFirst = activeMember === 0;
  prev.disabled = isFirst
  const next = document.querySelector('#button_next');
  const isLast = activeMember === members.length - 1;
  next.disabled = isLast
}

function chamgeMember(memberId){
  activeMember = memberId;
  const member = members[activeMember]
  images.style.transform = `translateY(${-100 * activeMember}vh)`
  memberName.classList = member.id
  changesStatusButtons()
  changeName(member.name)
}

function navigationMenber(direction) {
 chamgeMember(activeMember + direction)
}

function changeMenu(){
  menu.classList.toggle('active')
  navigation.classList.toggle('active')
}

function setMember(memberId){
  chamgeMember(memberId)
  changeMenu()
}