var $trackingAreas,
    //eventUrl = 'https://www.indiana.edu/~psych101/event_tracker/public/index.php/postevent';
    //temp, change to prod!
    //eventUrl = 'https://elearn.webtest.iu.edu/assessments/public/index.php/api/saveevent'
    eventUrl = '/index.php/api/saveevent';
    

function initTrackingAreas() {
    $trackingAreas = $('[data-trackable="1"]');
}

function trackClicks() {
    $trackingAreas.click(function(event) {
        var content_code = $(this).attr('data-contentCode'),
            event_type = 'click',
            event_label = $(this).attr('data-eventLabel');
        
        postEvent({
            'content_code': content_code,
            'event_type': event_type,
            'event_label': event_label,
			'x': event.pageX,
			'y': event.pageY
        });
    });
}

function trackHover() {
    var timer;

    $trackingAreas.mouseover(function(event) {
        var content_code = $(this).attr('data-contentCode'),
            event_type = 'hover',
            event_label = $(this).attr('data-eventLabel');
        
        timer = window.setTimeout(function() {
            postEvent({
                'content_code': content_code,
                'event_type': event_type,
                'event_label': event_label,
				'x': event.pageX,
				'y': event.pageY
            });
        }, 1000);   
    });
    
    $trackingAreas.mouseleave(function() {
        window.clearTimeout(timer);
    });
}

function trackDrag() {
    $trackingAreas.on('dragstart', function(event, ui) {
        var content_code = $(this).attr('data-contentCode'),
            event_type = 'dragstart',
            event_label = $(this).attr('data-eventLabel');
        
        postEvent({
                'content_code': content_code,
                'event_type': event_type,
                'event_label': event_label,
				'x': event.pageX,
				'y': event.pageY
            });
    });
    
    $trackingAreas.on('dragstop', function(event, ui) {
        var content_code = $(this).attr('data-contentCode'),
            event_type = 'dragstop',
            event_label = $(this).attr('data-eventLabel');
        
        postEvent({
                'content_code': content_code,
                'event_type': event_type,
                'event_label': event_label,
				'x': event.pageX,
				'y': event.pageY
            });  
    });
}

function trackDrop() {
    $trackingAreas.on('drop', function(event, ui) {
        var content_code = $(this).attr('data-contentCode'),
            event_type = 'drop',
            event_label = $(this).attr('data-eventLabel');
        
        postEvent({
                'content_code': content_code,
                'event_type': event_type,
                'event_label': event_label,
				'x': event.pageX,
				'y': event.pageY
            });
    });
}

function postEvent(params) {
    var group_code = translateGroup(queryParams.group),
        content_code = params.content_code,
        event_type = params.event_type,
        event_label = params.event_label,
        x = params.x,
        y = params.y,
        //timestamp explanation: 
        //http://stackoverflow.com/questions/6044052/storing-javascript-date-in-mysql
        timestamp = new Date().valueOf() / 1000;
    var eventData = {
            'attempt_id': attemptId, //defined globally
            'group_code': group_code,
            'content_code': content_code,
            'event_type': event_type,
            'event_label': event_label,
            'timestamp': timestamp,
            'x': x,
            'y': y
        };
    //only send event data if the user is in a P101-specific group
    if (group_code) {
       $.ajax({
            type: 'POST',
            url: eventUrl,
            dataType: 'json',
            data: eventData,
            success: function(result) {
                return true;
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
                return false;
            }
        }); 
    }    
}