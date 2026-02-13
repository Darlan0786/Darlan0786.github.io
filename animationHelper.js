// animationHelper.js
// Gerencia animações do Three.js e GLTFLoader

export function playAnimation(mixer, actionName, loop = true) {
    const action = mixer.clipAction(actionName);
    if (loop) action.setLoop(THREE.LoopRepeat);
    action.reset();
    action.play();
}

export function stopAnimation(mixer, actionName) {
    const action = mixer.clipAction(actionName);
    action.stop();
}
