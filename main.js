link = "https://teachablemachine.withgoogle.com/models/EMh6w31zj/"
dog = "0";
cat = "0";
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
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("sound").innerHTML = "I can hear: " + results[0].label;
        document.getElementById("sound").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";

        img1 = document.getElementById("img");

        if (results[0].label == "Dog barking"){
            img1.src = "dog.gif"

        }
        else if(results[0].label == "Cat meowing"){
            img1.src = "cat.gif"

        }
        else{
            img1.src = "listen.gif"

        }


    }
}
