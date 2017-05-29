# vue-camera
A simple component for VueJS to show PC camera or rear (i.e. back or environment) camera on mobile

## Rear camera
It not so easy to set-up a ```<video>``` element to show the preview of the rear camera on mobile.

WebRTC [Adapter](https://github.com/webrtc/adapter) allows to solve most of the issues with different browsers.

Here I built a simple Component the fantastic framework [VueJs](https://vuejs.org/). The component allows simple integration of a view of rear-camera (or webcam on PCs) simply using the component:
```html
<vue-app-or-other-component>
	<camera-component></camera-component>
<vue-app-or-other-component>
```

## Usage
To use the component simply import the component and use it in your templates or HTML files

```javascript
import VueCamera from '@/components/vue-camera.vue'

Vue.component('camera-component', VueCamera);
```

### Live Demo
See the demo [here](https://vue-camera.glitch.me/).

## PROs
1. Simple usage
2. Solves common issues of rear camera on mobile web apps, using Adapter and "ideal" constraints to get best camera settings.

## Todo
- [x] Make the component a .vue SFC
- [ ] Add "Take snapshot" feature with canvas
- [ ] Have an option for adding a canvas to play with video image



