"use strict";

//-------------------------------------------------------------------------------------------------
// On Document Ready event handler
// http://youmightnotneedjquery.com/
function onDocumentReady(fn)
{
	if (document.readyState != 'loading')
	{
		fn();
	}
	else
	{
		document.addEventListener('DOMContentLoaded', fn);
	}
}

function defineCameraComponent()
{
  Vue.component('camera-component', {
    template: `
      <video autoplay></video>
    `,
    mounted: function()
    {
      console.log(this.$el);
      
      navigator.mediaDevices.enumerateDevices().then( devices =>
      {
        devices= devices.filter( v => (v.kind=="videoinput"));
        console.log("Found "+devices.length +" video devices");

        let lastDevice= devices[devices.length-1];
        devices= devices.filter( v => (v.label.indexOf("back")>0));

        let device= null;
        if( devices.length > 1 )
        {
          console.log("Taking a 'back' camera");
          device= devices[devices.length-1];
        }
        else
        {
          console.log("Taking last camera");
          device= lastDevice;
        }
          
        if( !device )
        {
          console.log("No devices!");
          return;
        }
        
        let constraints =
        {
          audio: false, 
          video: {
            deviceId: {ideal: device.deviceId},
            //width: {min: 480}, height: {min: 480}
            width: {ideal: window.innerWidth}, height: {ideal: window.innerHeight}
          }
        };

        navigator.mediaDevices.getUserMedia(constraints)
        .then( stream =>
        {
          try {
		this.$el.srcObject = stream;
	  } catch (error) {
	  	this.$el.srcObject = URL.createObjectURL(stream);
	  }

          //info.innerHTML+= "<pre>DONE</pre>";
          console.log("DONE");
        })
        .catch( err =>
        {
          console.log(err.name + ": " + err.message);
        });	
      })
      .catch( err =>
      {
        console.log(err.name + ": " + err.message);
      });
    }
  })  
}

//-------------------------------------------------------------------------------------------------
// Main
onDocumentReady( () =>
{
  defineCameraComponent();
  
  var app = new Vue({
    el: '#app',
    data: {}
  });

});

