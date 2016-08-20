
var eventListener = new EventListener();
console.log('ran content script again')
chrome.extension.onMessage.addListener(function (req, sender, sendRes){
  console.log('received a request!')
  if (!eventListener[req.eventName]) return
  eventListener.emit(req.eventName, req);
})

var $email = $('input[type="email"]')
var $password = $('input[type="password"]')
var $username = $('input[type="username]')
var usernameArr = []
var $usernames = $('input[type="text"]').each(function (){
  // console.log('clicked on input type text')
  var placeholder = $(this).attr('placeholder')
  var id = $(this).is('#username') || $(this).is('#email') || $(this).hasClass('username') || $(this).hasClass('email')
  // console.log(placeholder)
  if (placeholder && placeholder.toLowerCase().match(/(username)|(email)/) || id) usernameArr.push($(this))
})


if ($email.length || $password.length) {
  console.log('sending')
  chrome.extension.sendMessage({eventName: 'logins', currentUrl: window.location.href.toLowerCase()})
}

eventListener.on('loginRes', function (data) {

  data.logins.forEach(function (account) {
    // console.log(account);
    // var lowerName = account.name.split(' ').join('').toLowerCase()
    // var accountRe = new RegExp(lowerName)
    // if (window.location.href.toLowerCase().match(accountRe) || (account.name.toLowerCase() == 'gmail' && window.location.href.toLowerCase().match(/google/))) {
    //   console.log('got a match');
      if ($password.length){
        $password.val(account.password);
      }
      if ($email.length){
        $email.val(account.username);
      }
      if (usernameArr.length){
        usernameArr.forEach(function (input){
          input.val(account.username)
        })
      }
    // }
  })
})

eventListener.on('autoFill', function (data){
  console.log('autofill!!!!!!!!!!!')
  var forms = $('form')
  for (var i = 0; i < forms.length; i++){
    // forms[i].submit()
    console.log(forms, forms[i])
  }
  console.log('still executing after url change')
})

