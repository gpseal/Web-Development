console.log("now loading scroll")

var Scrollbar = window.Scrollbar;

var options = {
    'damping': 0.01,
    thumbMinSize: 200,
    // renderByPixels: boolean,
    // alwaysShowTracks: boolean,
    // continuousScrolling: boolean,
    // wheelEventTarget: EventTarget | null,
    // plugins: any,
}


Scrollbar.init(document.querySelector('#my-scrollbar', options));

let nav = document.querySelector('.header');

Scrollbar.destroy(nav);
