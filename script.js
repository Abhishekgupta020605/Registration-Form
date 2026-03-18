// FORM SUBMISSION
document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Basic inputs
    let name = document.querySelector('#username').value.trim();
    let phone = document.querySelector('#phone').value.trim();
    let email = document.querySelector('#email').value.trim();
    let password = document.querySelector('#password').value.trim();
    let dob = document.querySelector('#dob').value;
    let branch = document.querySelector('select[name="branch"]').value;
    let subjects = document.querySelectorAll('input[name="subjects"]:checked');
    let gender = document.querySelector('input[name="gender"]:checked');

    // REQUIRED CHECKS
    if (!name || !phone || !email || !password || !dob || !branch) {
        alert("⚠️ Please fill all required fields");
        return;
    }

    // PHONE VALIDATION: Only digits, no length restriction
    let phonePattern = /^[0-9]+$/;
    if (!phonePattern.test(phone)) {
        alert("⚠️ Phone number must contain digits only");
        return;
    }

    // EMAIL VALIDATION
    let emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailPattern.test(email)) {
        alert("⚠️ Email must end with @gmail.com");
        return;
    }

    // PASSWORD STRENGTH
    let passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,}$/;
    if (!passwordPattern.test(password)) {
        alert("⚠️ Password must be 8+ chars, with uppercase, lowercase, number & special char");
        return;
    }

    // SUBJECTS CHECK
    if (subjects.length === 0) {
        alert("⚠️ Please select at least one subject");
        return;
    }

    // GENDER CHECK
    if (!gender) {
        alert("⚠️ Please select your gender");
        return;
    }

    alert("✅ Form Submitted Successfully!");
});

// PHONE INPUT: digits only (no limit)
document.querySelector('#phone').addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9]/g, '');
});

// FLOAT LABEL FOR SELECT AND DOB
const branchSelect = document.querySelector('select[name="branch"]');
branchSelect.addEventListener('change', function() {
    if (this.value) {
        this.classList.add('filled');
    } else {
        this.classList.remove('filled');
    }
});

const dobInput = document.querySelector('#dob');
dobInput.addEventListener('input', function() {
    if (this.value) {
        this.classList.add('filled');
    } else {
        this.classList.remove('filled');
    }
});
