// effectManager.js
// Gerencia partículas, efeitos visuais e shaders

export function createParticleEffect(texture, position, scene) {
    const spriteMap = new THREE.TextureLoader().load(texture);
    const material = new THREE.SpriteMaterial({ map: spriteMap, transparent: true });
    const sprite = new THREE.Sprite(material);
    sprite.position.copy(position);
    scene.add(sprite);
    return sprite;
}

export function removeEffect(effect, scene) {
    scene.remove(effect);
    if (effect.material) effect.material.dispose();
    if (effect.geometry) effect.geometry.dispose();
}
