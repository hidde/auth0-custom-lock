var filterConnections = require( 'decorators/filter-connections' );
var ui = require( 'helpers/ui' );
var hasParams = require( 'helpers/has-params' );

module.exports = function decideScreen( element ) {

  if ( hasParams( 'action=autologin_settings' ) ) {
    ui.setLockState( element, 'autologin-settings' );
  }
  else if ( hasParams( 'action=signup' ) ) {
    filterConnections( element, 'initial-login-signup' );
  }
  else {
    filterConnections( element );
  }
};
