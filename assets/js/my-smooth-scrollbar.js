console.log("now loading scroll")

var Scrollbar = window.Scrollbar;

var options = {
    'damping': 0.5
    // thumbMinSize: number,
    // renderByPixels: boolean,
    // alwaysShowTracks: boolean,
    // continuousScrolling: boolean,
    // wheelEventTarget: EventTarget | null,
    // plugins: any,
}


Scrollbar.init(document.querySelector('#my-scrollbar', options));

Scrollbar.initAll();
