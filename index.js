
// addingEventListener()

function addingEventListener() {
    const input = document.getElementById('button');

    function clickAlert() {
        console.log();('I was clicked!');
    }

    input.addEventListener('click', clickAlert);
}