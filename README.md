# vue-camera
A simple component for VueJS to show PC camera or rear (i.e. back or environment) camera on mobile

## Rear camera
It not so easy to set-up a ```<video>``` element to show the preview of the rear camera on mobile.

WebRTC [Adapter](https://github.com/webrtc/adapter) allows to solve most of the issues with different browsers.

Here I built a simple Component the fantastic framework [VueJs](https://vuejs.org/). The component allows simple integration of a view of rear-camera (or webcam on PCs) simply using the component:
```
<vue-app-or-other-component>
	<camera-component></camera-component>
<vue-app-or-other-component>
```

after calling a simple ```defineCameraComponent();``` before the creation of the main Vue instance (```new Vue(...)```) or creation of components using it.

See the demo [here](https://vue-camera.glitch.me/).

## PROs
1. Simple usage
2. Solves common issues of rear camera on mobile web apps, using Adapter and "ideal" constraints to get best camera settings.

## Todo
1. Put ```defineCameraComponent();``` in a separate .js file
2. Build a Vue Plugin of this code
3. Add "Take snapshot" feature with canvas
4. Have an option for adding a canvas to play with video image
5. ...


