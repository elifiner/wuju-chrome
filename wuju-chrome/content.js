$(function() {
    var element = $('#change-username-tooltip-id');
    var top = element.offset().top + element.height();
    var left = element.offset().left;
    $('body').append(`
        <style>
            #wuju {
                background: #fff;
                z-index: 100000;
                position: fixed;
                top: ${top}px;
                left: ${left}px;
                width: 350px;
                height: 500px;
                margin: 10px 0 0 -10px;
                padding: 3px;
                border-radius: 3px;
                box-shadow: 1px 1px 10px 1px #888;
                display:none;
            }
            #wuju-iframe {
                width: 100%;
                height: 100%;
            }
        </style>
        <div id="wuju">
            <iframe
                id="wuju-iframe"
                onload="document.getElementById('wuju').style.display='block';"
                src="https://wuju.app">
            </iframe>
        </div>
    `);
});
