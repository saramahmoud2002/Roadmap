document.addEventListener('DOMContentLoaded', function () {
    // Add click event listener to major links
    const majorLinks = document.querySelectorAll('.major-link');
    majorLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const majorName = this.textContent;
            alert('You clicked on ' + majorName);
        });
    });
});
