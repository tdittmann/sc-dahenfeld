/*
As of zone.js 0.8.27, certain APIs for Web Components also cause change detection to run. This can have the
undesirable side effect of your app slowing down when a large number of components are initializing. To prevent
this from happening, the zone.js flag that manages this portion of change detection can be disabled.

See https://ionicframework.com/docs/troubleshooting/runtime#angular-change-detection
 */

(window as any).__Zone_disable_customElements = true;
