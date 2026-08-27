 const playerContainer = document.getElementById('players-container');
// console.log(playerContainer);


// console.log(playerContainer.childNodes[3].childNodes[1]);


const findParent = playerContainer.childNodes[3].childNodes[1].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
.parentNode;
// console.log(findParent);


//* create element:  and set innerText.
const createNewPlayer = document.createElement('li');
createNewPlayer.innerText = 'hary ken';

// find parent and append child.

const playerList = document.getElementById('player-list');

// append child: 
playerList.appendChild(createNewPlayer);


