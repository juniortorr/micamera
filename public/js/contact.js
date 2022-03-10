

(function() {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init('QISjpQBbhEnGDqTWD');
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_pi5r2bc', 'template_rd4pjrf', this)
            .then(function() {
                console.log('SUCCESS!');
                alert('Email Sent!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}
