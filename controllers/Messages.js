var textMessageSender = require('textBelt'),
    Helper = require('./helper');

module.exports = function(){

    var controller = {};

    controller.sendTextMessage = function ( request, response ){
        var Message = request.body.message,
            Destination = request.body.destinationNumber;

        console.log("the message is ", Message);
        console.log("the destination is ", Destination);

        if (Message === undefined) {
            response.json(Helper.errorMessage ("Message service failed to send messages: Message is undefined"));
            return;
        }

        if (Destination === undefined){
            response.json(Helper.errorMessage ("Message service failed to send messages: Destination is undefined"));
            return;
        }

        textMessageSender.send(Destination, Message, undefined, function ( err ){
            if ( err ){
                console.log(Helper.errorMessage ("Message service failed to send message: ", err));
            }
            else {
                var firstMessage = [];
                firstMessage.push("Message sent succesfully")
                console.log(Helper.successMessage(firstMessage));
                response.redirect('/sendTextMessage');
            }
        });
    }

    controller.sendMail = function ( request, response ){

    }

    return controller;
}