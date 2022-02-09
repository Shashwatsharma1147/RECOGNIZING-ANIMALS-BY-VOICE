link = "https://teachablemachine.withgoogle.com/models/EMh6w31zj/"
function start_classification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/EMh6w31zj/model.json', modelReady);

}

function modelReady() {
    classifier.classify(getResult);
}

function getResult(error, results) {
    if (error) {
        console.log(error);
    }
    else{
        console.log(results);
    }
}