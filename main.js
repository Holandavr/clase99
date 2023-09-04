
var SpeechRecognition = window.webkitSpeechRecognition;// Web Speech API se  utiliza para reconocer lo que decimos y convertirlo en texto

//Almacenamos el  Web Speach API en una variable 
var recognition = new SpeechRecognition();

//Definimos la variable Textbox para tomar el texto del input
var Textbox = document.getElementById("textbox");

//Definimos la función Start y  la programamos
function start()
{
    //correccion v/s LP [document.getElementById("textbox").innerHTML = "";]
    Textbox.innerHTML = "";
    //siempre que pulsemos el botón limpiamos el área de texto

    //Llamaremos a la función start() de Web Speach API
    recognition.start();
}
    //Llamaremos a la función onresult()
    recognition.onresult=function(event)
    {
        console.log(event);

        var Content=event.results [0][0].transcript;
        console.log(Content);

        //correccion v/s LP[document.getElementById("textbox").innerHTML=Content;]
        Textbox.innerHTML = Content;
        speak();
    }
        function speak(){
            var synth=window.speechSynthesis;
            speak_data=document.getElementById("textbox").value;
            var utterThis=new SpeechSynthesisUtterance(speak_data);
            synth.speak(utterThis) 
            Webcam.attach(camera)
        }
            webcam.set({
                width:360,
                height:250,
                image_format:"png",
                png_quality:90,
            });
            camera=document.getElementById("camera");
