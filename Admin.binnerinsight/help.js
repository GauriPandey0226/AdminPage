document.addEventListener('DOMContentLoaded', function() {
    // Handle click events for links
    const userManualLink = document.querySelector('a[href="user-manual.pdf"]');
    const faqsLink = document.querySelector('a[href="faqs.html"]');
    const contactSupportLink = document.querySelector('a[href="contact.html"]');

    userManualLink.addEventListener('click', function(event) {
        // Open the User Manual link in a new tab/window
        event.preventDefault();
        window.open(userManualLink.href, '_blank');
    });

    faqsLink.addEventListener('click', function(event) {
        // Open the FAQs link in a new tab/window
        event.preventDefault();
        window.open(faqsLink.href, '_blank');
    });

    contactSupportLink.addEventListener('click', function(event) {
        // Open the Contact Support link in a new tab/window
        event.preventDefault();
        window.open(contactSupportLink.href, '_blank');
    });
});
