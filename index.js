/*HIDDEN PASSWORD*/

const showHiddenInput = (passwordOverlayId, passwordInputId, toggleIconId) => {
  const overlay = document.getElementById(passwordOverlayId);
  const input = document.getElementById(passwordInputId);
  const iconEye = document.getElementById(toggleIconId) ;


iconEye.addEventListener( 'click', () => {
if (input.type === 'password') {
input.type = 'text';
iconEye.classList.add( 'bx-show') ;
} 
else {
input.type = 'password' ;
iconEye.classList.remove( 'bx-show');
}

overlay.classList.toggle( 'overlay-content' );
});

}
showHiddenInput('password-overlay' ,'password-input', 'toggle-visibility-icon');
