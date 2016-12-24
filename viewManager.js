/**
 * Created by maoreini on 24/12/2016.
 */
var viewModule = (function () {
    var messages = [] ;

    var display = function () {
        setInterval(function() {
            var newMessage = messages[i++ % messages.length];
            $("#result").fadeOut(500, function () {
                $(this).text(newText).fadeIn(500);
            });
        }, 1 * 1000);
    };

    return {
        AddMessages: function (message) {

        },
        GetMessages: function (name) {

        },
        RemoveMessage: function(message){

        }
    };

})();
