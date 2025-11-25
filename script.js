// Interactive Map Functionality
function showInfo(info) {
    document.getElementById('info-display').innerHTML = '<p>' + info + '</p>';
}

// Virtual Tour Language Change (Placeholder)
function changeLanguage(lang) {
    alert('Switching to ' + (lang === 'en' ? 'English' : 'Indonesian') + ' narration. (This is a placeholder - actual implementation would change video/audio)');
}

// Contact Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            alert(`Thank you for your message, ${name}! We'll get back to you at ${email} soon.`);

            // Reset form
            this.reset();
        });
    }
});



// Update summary function
function updateSummary() {
    const duration = document.getElementById('duration');
    const groupSize = document.getElementById('group-size');
    const summaryDuration = document.getElementById('summary-duration');
    const summaryGroup = document.getElementById('summary-group');
    const summaryPrice = document.getElementById('summary-price');

    if (duration && summaryDuration) {
        // Update duration display
        const durationOptions = {
            '1': '1 Hour',
            '2': '2 Hours',
            '3': '3 Hours',
            '4': 'Half Day',
            '8': 'Full Day'
        };
        summaryDuration.textContent = durationOptions[duration.value] || '-';
    }

    if (groupSize && summaryGroup) {
        // Update group size
        summaryGroup.textContent = groupSize.value || '-';
    }

    // Update price
    calculateTotal();
}

// Calculate total price based on duration and group size
function calculateTotal() {
    const duration = document.getElementById('duration');
    const groupSize = document.getElementById('group-size');
    const summaryPrice = document.getElementById('summary-price');

    if (!duration || !groupSize || !summaryPrice) return;

    const durationValue = duration.value;
    const groupSizeValue = parseInt(groupSize.value) || 1;

    let basePrice = 0;
    switch(durationValue) {
        case '1': basePrice = 50000; break;
        case '2': basePrice = 75000; break;
        case '3': basePrice = 100000; break;
        case '4': basePrice = 150000; break;
        case '8': basePrice = 250000; break;
    }

    const total = basePrice * groupSizeValue;
    const formattedTotal = 'Rp ' + total.toLocaleString('id-ID');

    summaryPrice.textContent = formattedTotal;
}

// Add event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Duration change listener
    const durationSelect = document.getElementById('duration');
    if (durationSelect) {
        durationSelect.addEventListener('change', updateSummary);
    }

    // Group size change listener
    const groupSizeInput = document.getElementById('group-size');
    if (groupSizeInput) {
        groupSizeInput.addEventListener('input', updateSummary);
    }

    // Form submission
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Booking submitted successfully! You will receive a confirmation email shortly.');
        });
    }

    // Initialize summary
    updateSummary();
});
