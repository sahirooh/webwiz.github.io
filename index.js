
const canvas = new fabric.Canvas('canvas', {

    width : 1199,
    height : 550,
});

const setBackground = (url, canvas) => {

    fabric.Image.fromURL(url, (img) => {
        
        canvas.backgroundImage = img
        canvas.requestRenderAll()
    })
} 

const imgAdded = (e) =>{
    console.log(e)
    const inputElem = document.getElementById('myImg')
    const file = inputElem.files[0];
    reader.readAsDataURL(file)
}

const reader = new FileReader()

setBackground('https://coolbackgrounds.io/images/backgrounds/index/ranger-4df6c1b6.png', canvas);

const inputFile = document.getElementById('myImg');
inputFile.addEventListener('change', imgAdded)

reader.addEventListener("load", () => {
    fabric.Image.fromURL(reader.result, img =>{
        canvas.add(img)
        canvas.requestRenderAll()
    })
})

canvas.on('mouse:wheel', function(opt) {
    
    const center = canvas.getCenter();
    const centerPoint = new fabric.Point(center.left, center.top);

    var delta = opt.e.deltaY;
    var zoom = canvas.getZoom();
    zoom *= 0.999 ** delta;
    if (zoom > 20) zoom = 20;
    if (zoom < 0.01) zoom = 0.01;

    canvas.zoomToPoint(centerPoint, zoom);
    
    opt.e.preventDefault();
    opt.e.stopPropagation();
        
  });
