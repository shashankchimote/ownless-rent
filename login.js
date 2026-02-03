let generatedOTP = "";

function sendOTP() {
  const phone = document.getElementById("phone").value;

  if (phone.length !== 10) {
    alert("Enter valid 10-digit phone number");
    return;
  }

  generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
  console.log("OTP (for testing):", generatedOTP);

  document.getElementById("phone-section").classList.add("hidden");
  document.getElementById("otp-section").classList.remove("hidden");
}

function verifyOTP() {
  const otp = document.getElementById("otp").value;

  if (otp === generatedOTP) {
    alert("Login successful!");
    window.location.href = "home.html"; // change later
  } else {
    alert("Invalid OTP");
  }
}
