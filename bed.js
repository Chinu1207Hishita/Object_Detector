img = "";
status = "";
objects = "";

function preload()
{
    img = loadImage ('bed.jpeg');
}

function setup()
{
    canvas = createCanvas (600, 500);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
   console.log("ModelLoaded")
   status = true;
}

function gotResult(error, results)
{
if(error) {
    console.log(error);
}
    console.log(results);
}
function draw()
{
    image (img, 0, 0, 600, 500);
    
    if(status != "")
    {

        r = random(255);
        g = random(255);
        b = random(255);

        objectDetector.detect(image, gotResult);

        for (i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status : Objects Detected";
            document.getElementById("numberofObjects").innerHTML = "Number oF objects Detected are :"+ objects.length;

            fill("r,g,b");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("r,g,b");
            rect ( objects[i].x , objects[i].y , objects[i].width, objects[i].height);
        }
    }
}
function navigate()
{
    window.location = "index.html"
}