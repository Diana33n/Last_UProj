document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('trip-form');
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        const location = document.getElementById('location').value;
        const date = document.getElementById('date').value;
        console.log(`Fetching info for ${location} on ${date}`);
        // Add API call logic here
    });
});
