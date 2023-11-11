<script>
        // Array of text to cycle through
        const textOptions = ["Create Image", "Create Picture", "Create Figure"];
        let currentIndex = 0;
        const changingTextElement = document.getElementById("changingText");

        // Function to change the text
        function changeText() {
            changingTextElement.textContent = textOptions[currentIndex];
            currentIndex = (currentIndex + 1) % textOptions.length;
        }

        // Change the text every 2 seconds (2000 milliseconds)
        setInterval(changeText, 2000);
    </script>