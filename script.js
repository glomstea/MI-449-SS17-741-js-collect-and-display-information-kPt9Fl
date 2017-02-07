var firstInput = document.getElementById('first')
var lastInput = document.getElementById('last')
var describeInput = document.getElementById('describe')
var emailInput = document.getElementById('email')
var phoneInput = document.getElementById('phone')
var nameParagraph = document.getElementById('name-out')
var describeParagraph = document.getElementById('describe-out')
var contactParagraph = document.getElementById('contact-out')
var dateParagraph = document.getElementById('date-preview')
var codeParagraph = document.getElementById('code-preview')

var updateProfile = function () {
  var first = firstInput.value
  var last = lastInput.value
  var describe = describeInput.value
  var email = emailInput.value
  var phone = phoneInput.value

  nameParagraph.innerHTML = 'Hi, my name is ' + first + ' ' + last + '!'
  describeParagraph.innerHTML = describe
  contactParagraph.innerHTML = "If you're interested in a date, you can email me at " + '<a href="mailto:' + email + '">' + email + '</a>' + " or give me a call at " + '<a href="tel:' + phone + '">' + phone + '</a>' + "."
  codeParagraph.textContent = dateParagraph.innerHTML
}

firstInput.addEventListener('input', updateProfile)
lastInput.addEventListener('input', updateProfile)
describeInput.addEventListener('input', updateProfile)
emailInput.addEventListener('input', updateProfile)
phoneInput.addEventListener('input', updateProfile)
