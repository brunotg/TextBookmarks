module.exports.successMessage = function ( message ){
    var m = { status : 'OK' };
    for ( var attr in message )
        m[ attr ] = message[ attr ];
    return m;
} ;

module.exports.errorMessage = function ( message ) {
	return { status : 'Error', message : message };
};