/**
 * Created by maoreini on 24/12/2016.
 */
var messageManager = (function () {
    var msgs = [
        {
            "name": "message1",
            "text": [
                "bla bla bla",
                "bla bla bla",
                "bla bla bla",
                "bla bla bla"
            ],
            "images": [
                "img1",
                "img2"
            ],
            "template": "templateA",
            "length": 10,
            "time-frame": [
                {
                    "from-date": "01/01/2016",
                    "to-date": "31/12/2016",
                    "start-time": "06:00",
                    "end-time": "12:00",
                    "week-days": [
                        2
                    ]
                },
                {
                    "from-date": "01/01/2016",
                    "to-date": "31/12/2016",
                    "start-time": "13:00",
                    "end-time": "20:00",
                    "week-days": [
                        4
                    ]
                }
            ],
            "stations": [
                1,
                3
            ]
        },
        {
            "name": "message2",
            "text": [
                "bla bla bla",
                "bla bla bla",
                "bla bla bla",
                "bla bla bla",
                "bla bla bla",
                "bla bla bla",
                "bla bla bla",
                "bla bla bla",
                "bla bla bla",
                "bla bla bla"
            ],
            "images": [
                "img1"
            ],
            "template": "templateB",
            "length": 10,
            "time-frame": [
                {
                    "from-date": "01/03/2016",
                    "to-date": "30/04/2016",
                    "start-time": "10:00",
                    "end-time": "16:00",
                    "week-days": [
                        3,
                        4
                    ]
                }
            ],
            "stations": [
                1,
                3
            ]
        },
        {
            "name": "message3",
            "text": [],
            "images": [],
            "template": "templateC",
            "length": 10,
            "time-frame": [
                {
                    "from-date": "01/05/2016",
                    "to-date": "15/06/2016",
                    "start-time": "08:00",
                    "end-time": "22:00",
                    "week-days": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7
                    ]
                }
            ],
            "stations": [
                2,
                3
            ]
        },
        {
            "name": "message4",
            "text": [
                "bla bla bla",
                "bla bla bla"
            ],
            "images": [],
            "template": "templateA",
            "length": 10,
            "time-frame": [
                {
                    "from-date": "29/03/2016",
                    "to-date": "15/04/2016",
                    "start-time": "15:00",
                    "end-time": "19:00",
                    "week-days": [
                        2
                    ]
                }
            ],
            "stations": [
                3
            ]
        },
        {
            "name": "message5",
            "text": [
                "bla bla bla",
                "bla bla bla",
                "bla bla bla",
                "bla bla bla",
                "bla bla bla",
                "bla bla bla",
                "bla bla bla"
            ],
            "images": [
                "img1",
                "img2"
            ],
            "template": "templateB",
            "length": 10,
            "time-frame": [
                {
                    "from-date": "01/04/2016",
                    "to-date": "30/04/2016",
                    "start-time": "01:00",
                    "end-time": "23:00",
                    "week-days": [
                        3
                    ]
                }
            ],
            "stations": [
                3
            ]
        }
    ];

    console.log('Hello');
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