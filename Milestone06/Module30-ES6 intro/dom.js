// add border
document.getElementById('add-border').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    container.style.border = '3px solid tomato'
});
// addBackgroundColor
function addBackgroundColor() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightblue';
    }
};
// addFriend
document.getElementById('add-friend').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    const friendDivAdd = document.createElement('div');
    friendDivAdd.classList.add('friend');
    friendDivAdd.innerHTML = `
   <h3 class="friend-name">New Friend</h3>
   <p>Quisquam, rerum?</p>
   `;
    container.appendChild(friendDivAdd);
});