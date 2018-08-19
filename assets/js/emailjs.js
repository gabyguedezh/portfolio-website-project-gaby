function sendMail(default_service, portfolio_project, contactForm) {
    emailjs.send("gmail", "portfolio-project", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "info_request": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}