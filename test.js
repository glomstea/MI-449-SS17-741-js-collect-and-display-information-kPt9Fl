var firstInput = document.getElementById('first')
var lastInput = document.getElementById('last')
var profileParagraph = document.getElementById('profile')

var updateProfile = function () {
  var first = firstInput.value
  var last = lastInput.value

  profileParagraph.innerHTML = 'Hi' + first + ' ' + last
}

firstInput.addEventListener('input', updateProfile)
lastInput.addEventListener('input', updateProfile)
