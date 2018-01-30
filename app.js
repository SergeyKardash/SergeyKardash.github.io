var htmlBar = new ProgressBar.Circle(html, {
    strokeWidth: 5,
    easing: 'easeOut',
    duration: 1400,
    color: '#FFEA82',
    svgStyle: null
});
var cssBar = new ProgressBar.Circle(css, {
    strokeWidth: 5,
    easing: 'easeOut',
    duration: 1400,
    color: '#FFEA82',
    svgStyle: null
});
var jsBar = new ProgressBar.Circle(js, {
    strokeWidth: 5,
    easing: 'easeOut',
    duration: 1400,
    color: '#FFEA82',
    svgStyle: null
});
var angularBar = new ProgressBar.Circle(angular, {
    strokeWidth: 5,
    easing: 'easeOut',
    duration: 1400,
    color: '#FFEA82',
    svgStyle: null
});

htmlBar.animate(-0.9);  // Number from 0.0 to 1.0
cssBar.animate(-0.9);  // Number from 0.0 to 1.0
jsBar.animate(-0.85);  // Number from 0.0 to 1.0
angularBar.animate(-0.75);  // Number from 0.0 to 1.0

var htmlCssLineBar = new ProgressBar.Line(htmlCssLine, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 4,
    svgStyle: {width: '100%', height: '100%'}
});

var JSLineBar = new ProgressBar.Line(JSLine, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 4,
    svgStyle: {width: '100%', height: '100%'}
});
JSLineBar.animate(0.8);
htmlCssLineBar.animate(0.9);