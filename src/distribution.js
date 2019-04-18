// var SVG = $('#map-svg');
// var ngPath = $('#NG');


// let coords = getCoords(ngPath);

// function getCoords(el) {
//     var d = el.attr('d').split(',');
//     return [parseFloat(d[0].replace(/\M/g,'')), parseFloat(d[1])];
// }

// function x() {
//     var p1x = parseFloat(document.getElementById("au").getAttribute("cx"));
//     var p1y = parseFloat(document.getElementById("au").getAttribute("cy"));
//     var p2x = parseFloat(document.getElementById("sl").getAttribute("cx"));
//     var p2y = parseFloat(document.getElementById("sl").getAttribute("cy"));

//     // mid-point of line:
//     var mpx = (p2x + p1x) * 0.5;
//     var mpy = (p2y + p1y) * 0.5;

//     // angle of perpendicular to line:
//     var theta = Math.atan2(p2y - p1y, p2x - p1x) - Math.PI / 2;

//     // distance of control point from mid-point of line:
//     var offset = 30;

//     // location of control point:
//     var c1x = mpx + offset * Math.cos(theta);
//     var c1y = mpy + offset * Math.sin(theta);

//     // show where the control point is:
//     var c1 = document.getElementById("cp");
//     c1.setAttribute("cx", c1x);
//     c1.setAttribute("cy", c1y);

//     // construct the command to draw a quadratic curve
//     var curve = "M" + p1x + " " + p1y + " Q " + c1x + " " + c1y + " " + p2x + " " + p2y;
//     var curveElement = document.getElementById("curve");
//     curveElement.setAttribute("d", curve);
// }