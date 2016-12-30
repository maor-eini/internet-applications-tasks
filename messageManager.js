/**
 * Created by maoreini on 24/12/2016.
 */

var msgs = require('./data/messages');

var messageManager = (function () {

    var filterMessagesByScreenId = function(screenId) {
        var result = msgs.filter(function(msg){
            var count = msg.stations.filter(function(id) {
                return id == screenId;
            });
            return count.length > 0;
        });
        return result;
    };

    return {
        AddMessages: function (messages) {
            msgs.push(messages);
        },
        GetMessagesByScreenId: function (screenId) {
            return filterMessagesByScreenId(screenId);
        },
        RemoveMessage: function(msgs){

        }
    };

})();

module.exports = messageManager;