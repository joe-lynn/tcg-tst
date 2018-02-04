$(document).ready(function () {

    var c = document.getElementById("canvas");

    c.width  = window.innerWidth;
    c.height = window.innerHeight;

    setup();
});

var assetLibrary = {
    card: {
        draw: function (canvas, x, y, scale, angleRotate) {
            var rect = new fabric.Rect({
                top : y,
                left : x,
                width : scale,
                height : scale+scale*.5,
                fill: '#d3d3d3',
                stroke: 'black',
                strokeWidth: 3,
                rx: 10,
                ry: 10
            });
            var tri1 = new fabric.Triangle({
                top: y+scale*0.05,
                left: x+scale*0.15,
                width: scale*0.3,
                height: scale*0.3,
                fill: '#ffb3ba',
                stroke: 'black',
                strokeWidth: 3
            });
            var txt2 = new fabric.Text("1", {
                fontSize:scale*0.15,
                top: (y+scale*0.05)+scale*0.1,
                left: (x+scale*0.15)+scale*0.12
            });
            var tri2 = new fabric.Triangle({
                top: y+scale*0.04,
                left: x+scale*0.35,
                width: scale*0.3,
                height: scale*0.3,
                fill: '#bae1ff',
                stroke: 'black',
                strokeWidth: 3,
                centeredRotation: true
            });
            tri2.rotate(180);
            var txt3 = new fabric.Text("3", {
                fontSize:scale*0.15,
                top: (y+scale*0.04)+scale*0.025,
                left: (x+scale*0.35)+scale*0.12
            });
            var tri3 = new fabric.Triangle({
                top: y+scale*0.05,
                left: x+scale*0.55,
                width: scale*0.3,
                height: scale*0.3,
                fill: '#baffc9',
                stroke: 'black',
                strokeWidth: 3,
                centeredRotation: true
            });
            var txt4 = new fabric.Text("5", {
                fontSize:scale*0.15,
                top: (y+scale*0.05)+scale*0.1,
                left: (x+scale*0.55)+scale*0.12
            });
            var rect2 = new fabric.Rect({
                top : y+(scale+scale*0.5)*0.6,
                left : x+scale*0.05,
                width : scale*0.9,
                height : scale*0.55,
                fill: '#ededed',
                stroke: 'black',
                strokeWidth: 3
            });
            var txt1 = new fabric.Text("Card text", {
                fontSize:scale*0.1,
                top: y+(scale+scale*0.5)*0.7,
                left: (x+scale*0.05)+scale*0.25
            });
            var cardGroup = new fabric.Group([rect, tri1, tri2, tri3, rect2, txt1, txt2, txt3, txt4], {

            });
            cardGroup.rotate(angleRotate);
            canvas.add(cardGroup);
        }
    },
    board: {
        draw: function (canvas, x, y) {
            var line1 = new fabric.Line([x*0.2, 0, x*0.2, y], {
                stroke: 'black',
                strokeWidth: 3
            });

            var line2 = new fabric.Line([x*0.8, 0, x*0.8, y], {
                stroke: 'black',
                strokeWidth: 3
            });

            var line3 = new fabric.Line([x*0.2, y*0.5, x, y*0.5], {
                stroke: 'black',
                strokeWidth: 3
            });


            var path = new fabric.Path('C '+ x*0.2 +' ' + y*0.05 + ' ' + x*0.5 + ' ' + y*0.2 + ' ' + x*0.8 + ' ' + y*0.05);
            path.set({ stroke: 'black', fill: 'transparent' });


            var path2 = new fabric.Path('C '+ x*0.2 +' ' + y*0.95 + ' ' + x*0.5 + ' ' + y*0.8 + ' ' + x*0.8 + ' ' + y*0.95);
            path2.set({ stroke: 'black', fill: 'transparent' });


            var rect = new fabric.Rect({
                top : y*0.3,
                left : x*0.825,
                width : x*0.15,
                height : y*0.15,
                fill: '#d3d3d3',
                stroke: 'black',
                strokeWidth: 3
            });
            var txt1 = new fabric.Text("Deck", {
                top: y*0.35,
                left: x*0.88
            });

            var rect2 = new fabric.Rect({
                top : y*0.55,
                left : x*0.825,
                width : x*0.15,
                height : y*0.15,
                fill: '#d3d3d3',
                stroke: 'black',
                strokeWidth: 3
            });
            var txt2 = new fabric.Text("Deck", {
                top: y*0.6,
                left: x*0.88
            });

            var circle = new fabric.Circle({
                left: x*.3,
                top: y*0.1,
                radius: y*0.035,
                fill: 'transparent',
                stroke: 'black'
            });
            var txt3 = new fabric.Text("10", {
                top: y*0.119,
                left: x*0.31
            });

            var circle2 = new fabric.Circle({
                left: x*.3,
                top: y*0.83,
                radius: y*0.035,
                fill: 'transparent',
                stroke: 'black'
            });
            var txt4 = new fabric.Text("10", {
                top: y*0.846,
                left: x*0.31
            });
            var boardGroup = new fabric.Group([line1, line2, line3, path, path2, rect, txt1, rect2, txt2, circle, txt3, circle2, txt4], {
                selectable: false
            });
            canvas.add(boardGroup);

        }
    }
};

function cardSelectHandler(){
    console.log("gotem");
}

function setup() {
    var canvas = new fabric.Canvas('canvas');
    assetLibrary.card.draw(canvas, window.innerWidth*0.3, window.innerHeight*-0.15, window.innerWidth*0.075, 180);
    assetLibrary.card.draw(canvas, window.innerWidth*0.38, window.innerHeight*-0.15, window.innerWidth*0.075, 180);
    assetLibrary.card.draw(canvas, window.innerWidth*0.46, window.innerHeight*-0.15, window.innerWidth*0.075, 180);
    assetLibrary.card.draw(canvas, window.innerWidth*0.54, window.innerHeight*-0.15, window.innerWidth*0.075, 180);
    assetLibrary.card.draw(canvas, window.innerWidth*0.62, window.innerHeight*-0.15, window.innerWidth*0.075, 180);

    assetLibrary.card.draw(canvas, window.innerWidth*0.3, window.innerHeight*0.93, window.innerWidth*0.075, 0);
    assetLibrary.card.draw(canvas, window.innerWidth*0.38, window.innerHeight*0.93, window.innerWidth*0.075, 0);
    assetLibrary.card.draw(canvas, window.innerWidth*0.46, window.innerHeight*0.93, window.innerWidth*0.075, 0);
    assetLibrary.card.draw(canvas, window.innerWidth*0.54, window.innerHeight*0.93, window.innerWidth*0.075, 0);
    assetLibrary.card.draw(canvas, window.innerWidth*0.62, window.innerHeight*0.93, window.innerWidth*0.075, 0);

    assetLibrary.card.draw(canvas, window.innerWidth*0.38, window.innerHeight*0.25, window.innerWidth*0.075, 0);
    assetLibrary.card.draw(canvas, window.innerWidth*0.46, window.innerHeight*0.25, window.innerWidth*0.075, 0);
    assetLibrary.card.draw(canvas, window.innerWidth*0.54, window.innerHeight*0.25, window.innerWidth*0.075, 0);

    assetLibrary.card.draw(canvas, window.innerWidth*0.38, window.innerHeight*0.55, window.innerWidth*0.075, 0);
    assetLibrary.card.draw(canvas, window.innerWidth*0.46, window.innerHeight*0.55, window.innerWidth*0.075, 0);
    assetLibrary.card.draw(canvas, window.innerWidth*0.54, window.innerHeight*0.55, window.innerWidth*0.075, 0);

    assetLibrary.board.draw(canvas, window.innerWidth, window.innerHeight);






}
