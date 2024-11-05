
document.getElementById('loginButton').addEventListener('click', function() {
    const userID = document.getElementById('userID').value;
    const password = document.getElementById('password').value;

    
    const validID = 'authenticator.advantageous';
    const validPassword = 'sophistication$8319*0';

   
    if (userID === validID && password === validPassword) {
        
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
    } else {
        alert('Invalid ID or Password');
    }
});


async function translateText(text, sourceLang, targetLang) {
    const response = await fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=${sourceLang}|${targetLang}&de=parshottamahirwal2002@gmail.com`);
    const data = await response.json();
    return data.responseData.translatedText;
}


document.getElementById('nameEnglishInput').addEventListener('input', async function() {
    const englishName = this.value;
    const hindiName = await translateText(englishName, 'en', 'hi');
    document.getElementById('nameHindiInput').value = hindiName;
});

document.getElementById('addressEnglishInput').addEventListener('input', async function() {
    const englishAddress = this.value;
    const hindiAddress = await translateText(englishAddress, 'en', 'hi');
    document.getElementById('addressHindiInput').value = hindiAddress;
});

document.getElementById('fname').addEventListener('input', async function() {
    const englishFatherName = this.value;
    const hindiFatherName = await translateText(englishFatherName, 'en', 'hi');
    document.getElementById('fnamehindi').value = hindiFatherName;
});


document.getElementById('aadharForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const nameEnglish = document.getElementById('nameEnglishInput').value;
    const nameHindi = document.getElementById('nameHindiInput').value;
    const dob = document.getElementById('dobInput').value;
    const gender = document.getElementById('genderInput').value;
    const careof = document.getElementById('care').value;
    const addressEnglish = document.getElementById('addressEnglishInput').value;
    const addressHindi = document.getElementById('addressHindiInput').value;
    const aadharNumFront = document.getElementById('AadharNum').value.replace(/\s+/g, ''); 
    const fathernameE = document.getElementById('fname').value;
    const fathernameH = document.getElementById('fnamehindi').value;

    
    const dateParts = dob.split('-'); 
    const formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`; 

    const genderHindi = gender === 'MALE' ? 'पुरुष' : 'महिला'; 
    const genderUppercase = gender.toUpperCase(); 

    // Update card elements
    document.getElementById('name-english').innerText = nameEnglish;
    document.getElementById('name-hindi').innerText = nameHindi;
    document.getElementById('dob').innerText = `जन्म तिथि/DOB: ${formattedDate}`;
    document.getElementById('gender').innerText = `${genderHindi}/${genderUppercase}`;


    document.getElementById('address-hindi').innerHTML = ` <b>पता:</b><br>${careof}: ${fathernameH}, ${addressHindi}`;
    document.getElementById('address-english').innerHTML = `<b>Address:</b><br>${careof}: ${fathernameE}, ${addressEnglish}`;

  
    document.getElementById('A').innerText = formatAadhaarNumber(aadharNumFront);
    document.getElementById('B').innerText = formatAadhaarNumber(aadharNumFront);

   
const fileInput = document.getElementById('imageInput');
const userPhoto = document.getElementById('user-photo');

if (fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();

    reader.onload = function(e) {
        userPhoto.src = e.target.result;
        userPhoto.style.display = 'block'; 
    };


    reader.readAsDataURL(fileInput.files[0]);
}


    alert("YOUR AADHAR IS CREATED");
});


function formatAadhaarNumber(num) {
    return num.replace(/(\d{4})(?=\d)/g, '$1 '); 
}


document.getElementById('AadharNum').addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 '); 
});

document.getElementById('AadharBack').addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
});
