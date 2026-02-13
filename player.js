// player.js
// Skeleton do personagem principal

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { animationHelper } from './animationHelper.js';

export class Player {
    constructor(scene, position = {x:0, y:0, z:0}) {
        this.scene = scene;
        this.position = position;
        this.model = null;
        this.mixer = null;
        this.actions = {};
        this.currentAction = null;
        this.health = 100;
        this.mana = 100;

        this.loadModel();
    }

    loadModel() {
        const loader = new GLTFLoader();
        loader.load('./models/player.glb', gltf => {
            this.model = gltf.scene;
            this.model.position.set(this.position.x, this.position.y, this.position.z);
            this.model.traverse(node => {
                if (node.isMesh) node.castShadow = true;
            });

            this.scene.add(this.model);

            this.mixer = new THREE.AnimationMixer(this.model);

            // Configurações iniciais de animação
            gltf.animations.forEach(anim => {
                this.actions[anim.name] = this.mixer.clipAction(anim);
            });

            this.playAction('Idle');
        });
    }

    playAction(actionName) {
        if(!this.actions[actionName]) return;
        if(this.currentAction) this.currentAction.fadeOut(0.2);
        this.currentAction = this.actions[actionName];
        this.currentAction.reset().fadeIn(0.2).play();
    }

    update(delta) {
        if(this.mixer) this.mixer.update(delta);
    }

    useSkill(skillName) {
        // Skeleton de skill: cooldown e impacto
        console.log(`Player usou skill: ${skillName}`);
        this.playAction(skillName); // exemplo de animação
        animationHelper.createImpact(this.model.position, this.scene);
    }
}
