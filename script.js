const text = document.getElementById("letterAnim");
const originalContent = text.innerHTML.trim();   // original saved
const delayPerChar = 0.03;                       // letter delay
const gap = 1000;                                // 1 second gap between repeats

function animateText() {

    text.innerHTML = "";      // reset text
    let delay = 0;

    const parts = originalContent.split(/(<br\s*\/?>)/g);

    parts.forEach(part => {

        // Handle <br>
        if (["<br>", "<br/>", "<br />"].includes(part)) {
            const br = document.createElement("br");
            text.appendChild(br);
            return;
        }

        // Split words & spaces
        part.split(/(\s+)/).forEach(piece => {

            // Space
            if (piece.trim() === "") {
                text.innerHTML += " ";
                return;
            }

            // Animate letters
            [...piece].forEach(char => {
                const span = document.createElement("span");
                span.classList.add("char");
                span.style.animationDelay = delay + "s";
                span.textContent = char;
                text.appendChild(span);
                delay += delayPerChar;
            });

        });

    });

    // after full animation ends → restart
    const totalTime = delay * 1000 + gap;
    setTimeout(animateText, totalTime);
}

// start the loop
animateText();
