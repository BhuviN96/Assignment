function submitForm() {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const genderElements = document.getElementsByName("gender");
    const gender = [...genderElements].find((el) => el.checked)?.value;
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
  
    if (!firstName || !lastName || !dob || !country || !gender || !profession || !email || !mobile) {
      alert("Please fill out all the required fields.");
      return;
    }
  
    const message = `First Name: ${firstName}\nLast Name: ${lastName}\nDate of Birth: ${dob}\nCountry: ${country}\nGender: ${gender}\nProfession: ${profession}\nEmail: ${email}\nMobile Number: ${mobile}`;
    alert(message);
  
    resetForm();
  }
  
  function resetForm() {
    document.getElementById("survey-form").reset();
  }
  