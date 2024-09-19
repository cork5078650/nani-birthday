// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const revealButton = document.getElementById('revealButton');
    const surpriseSection = document.getElementById('surpriseSection');
    const clickButton = document.getElementById('clickButton');
    const finalMessage = document.getElementById('finalMessage');

    // Click to reveal the surprise section
    revealButton.addEventListener('click', function() {
        surpriseSection.classList.remove('hidden');
        revealButton.classList.add('hidden'); // Hide the reveal button
        startConfetti(); // Trigger confetti animation
    });

    // Click to reveal the final message
    clickButton.addEventListener('click', function() {
        finalMessage.classList.remove('hidden');
        clickButton.classList.add('hidden'); // Hide the click button
    });

    // Confetti effect
    function startConfetti() {
        const confettiSettings = { target: 'confetti-canvas' };
        const confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
    }
});
