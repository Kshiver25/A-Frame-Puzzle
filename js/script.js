<script>
    const key = document.querySelector('#key');
    const door = document.querySelector('#door');
    const switchButton = document.querySelector('#switch');
    const book = document.querySelector('#book');

    key.addEventListener('click', () => {
        // Move the key to the door
        key.setAttribute('animation', 'to: 0 1.1 7.5; dur: 1000');
        // Make the door clickable
        door.setAttribute('class', 'clickable');
        // Remove the key once it reaches the door
        setTimeout(() => {
            key.setAttribute('visible', 'false');
        }, 1000);
    });

    door.addEventListener('click', () => {
        // Check if the door has been unlocked
        if (door.getAttribute('class') === 'clickable') {
            // Open the door
            door.setAttribute('animation', 'property: rotation; to: 0 -90 0; dur: 1000');
            // Move the camera to the other side of the door
            const camera = document.querySelector('a-camera');
            camera.setAttribute('animation', 'to: 0 1.6 -10; dur: 1000');
            // Disable the movement controls
            const rig = document.querySelector('#rig');
            rig.setAttribute('movement-controls', 'enabled: false');
            // Show a message
            const message = document.createElement('div');
            message.style.position = 'absolute';
            message.style.width = '100%';
            message.style.textAlign = 'center';
            message.style.color = '#FFFFFF';
            message.style.top = '50%';
            message.style.transform = 'translateY(-50%)';
            message.style.fontFamily = 'Montserrat';
            message.style.fontSize = '2em';
            message.innerText = 'Congratulations! You escaped the classroom!';
            document.body.appendChild(message);
        }
    });

    switchButton.addEventListener('click', () => {
        // Change the color of the book
        book.setAttribute('color', '#FFC107');
        // Make the book clickable
        book.setAttribute('class', 'clickable');
        // Remove the switch once it has been clicked
        switchButton.setAttribute('visible', 'false');
    });

    book.addEventListener('click', () => {
        // Move the book to the switch
        book.setAttribute('animation', 'to: 0.5 0.5 -0.1; dur: 1000');
        // Make the switch clickable
        switchButton.setAttribute('class', 'clickable');
        // Remove the book once it reaches the switch
        setTimeout(() => {
            book.setAttribute('visible', 'false');
        }, 1000);
    });
</script>