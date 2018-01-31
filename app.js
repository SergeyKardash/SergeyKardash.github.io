// Circle Progress bars
var htmlBar = new ProgressBar.Circle(html, {
    strokeWidth: 5,
    easing: 'easeOut',
    duration: 2000,
    color: '#FFEA82',
    svgStyle: null
});
var cssBar = new ProgressBar.Circle(css, {
    strokeWidth: 5,
    easing: 'easeOut',
    duration: 2000,
    color: '#FFEA82',
    svgStyle: null
});
var jsBar = new ProgressBar.Circle(js, {
    strokeWidth: 5,
    easing: 'easeOut',
    duration: 2000,
    color: '#FFEA82',
    svgStyle: null
});
var angularBar = new ProgressBar.Circle(angular, {
    strokeWidth: 5,
    easing: 'easeOut',
    duration: 2000,
    color: '#FFEA82',
    svgStyle: null
});

htmlBar.animate(-0.9);
cssBar.animate(-0.9);
jsBar.animate(-0.85);
angularBar.animate(-0.75);

// Line progress bars (Professional skills)
var htmlCssLineBar = new ProgressBar.Line(htmlCssLine, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 2000,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 4,
    svgStyle: {width: '100%', height: '100%'}
});

var JSLineBar = new ProgressBar.Line(JSLine, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 2000,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 4,
    svgStyle: {width: '100%', height: '100%'}
});

var responseBar = new ProgressBar.Line(responseLine, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 2000,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 4,
    svgStyle: {width: '100%', height: '100%'}
});

var angularLineBar = new ProgressBar.Line(angularLine, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 2000,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 4,
    svgStyle: {width: '100%', height: '100%'}
});

var compilerLineBar = new ProgressBar.Line(compilerLine, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 2000,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 4,
    svgStyle: {width: '100%', height: '100%'}
});

var packetLineBar = new ProgressBar.Line(packetLine, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 2000,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 4,
    svgStyle: {width: '100%', height: '100%'}
});

var JSFeatureLineBar = new ProgressBar.Line(JSFeatureLine, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 2000,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 4,
    svgStyle: {width: '100%', height: '100%'}
});

var gitLineBar = new ProgressBar.Line(gitLine, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 2000,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 4,
    svgStyle: {width: '100%', height: '100%'}
});



// Personal skills
var communicationLineBar = new ProgressBar.Line(communicationLine, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 2000,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 4,
    svgStyle: {width: '100%', height: '100%'}
});

var teamworkLineBar = new ProgressBar.Line(teamworkLine, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 2000,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 4,
    svgStyle: {width: '100%', height: '100%'}
});

var creativityLineBar = new ProgressBar.Line(creativityLine, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 2000,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 4,
    svgStyle: {width: '100%', height: '100%'}
});

var managementLineBar = new ProgressBar.Line(managementLine, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 2000,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 4,
    svgStyle: {width: '100%', height: '100%'}
});

var leadershipLineBar = new ProgressBar.Line(leadershipLine, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 2000,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 4,
    svgStyle: {width: '100%', height: '100%'}
});

document.addEventListener('DOMContentLoaded', function () {
    setTimeout( showPage, 2000)
} );

function showPage () {
    document.querySelector('.page-wrapper').style.display = 'block';
    loadProgressBars();
}

function loadProgressBars() {

    htmlCssLineBar.animate(0.9);
    responseBar.animate(0.8);
    JSLineBar.animate(0.8);
    angularLineBar.animate(0.75);
    compilerLineBar.animate(0.6);
    packetLineBar.animate(0.75);
    JSFeatureLineBar.animate(0.75);
    gitLineBar.animate(0.75);

    communicationLineBar.animate(0.85);
    teamworkLineBar.animate(0.8);
    creativityLineBar.animate(0.7);
    managementLineBar.animate(0.9);
    leadershipLineBar.animate(0.85);
}