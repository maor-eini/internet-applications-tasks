function renderMessages(msgs) {
    console.log(msgs)
    var msgsInTimeFrame = msgs.reduce(function (result, msg) {
        var validTimeFrame = msg.timeFrame.filter(function (frame) {
            return (new Date(frame.fromDate) <= Date.now() &&
            new Date(frame.toDate) >= Date.now() &&
            new Date(0, 0, 0, frame.startTime.split(':')[0]).getHours() <= new Date().getHours() &&
            new Date(0, 0, 0, frame.endTime.split(':')[0]).getHours() >= new Date().getHours() &&
            frame.weekDays.includes(new Date().getDay()))
        });

        if (validTimeFrame.length != 0)
            result.push(msg);

        return result;
    }, []);


    if (msgsInTimeFrame.length != 0) {
        var renderFunc = function render(messages) {
            if (messages.length != 0) {
                $('body').empty();
                $('body').load(messages[0].template);
                messages[0].text.forEach(function (line) {
                    $('#content').append(`<p>${line}</p>`)
                });

                messages[0].images.forEach(function(img){
                    $('#imgs').append(`<img src=${img}/>`);
                });

                setTimeout(render, messages[0].length * 1000, messages.slice(1))
            }
            else {
                renderMessages(msgs);
            }
        };
        renderFunc(msgsInTimeFrame);


        // for(var i = 0; i< msgsInTimeFrame.length ; i++){
        //     $('body').load(msgsInTimeFrame[0].template);
        //
        //     msg.text.forEach(function (line) {
        //         $('#content').append(`<p>${line}</p>`)
        //     });
        //
        //     setTimeout()
        // }
        //
        // msgsInTimeFrame.forEach(function(msg){
        //     $('body').load(msg.template);
        //
        //     console.log(msg)
        //     msg.text.forEach(function (line) {
        //         $('#content').append(`<p>${line}</p>`)
        //     })
        //
        //     setTimeout("" , 5000)
        // })

    }

}