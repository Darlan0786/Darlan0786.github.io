// island4.js
// Skeleton da Ilha 4: ilha com vegetação densa e realismo

import { spawnPosition } from './helpers.js';
import { createParticleEffect } from './effectManager.js';

export function setupIsland4(scene) {
    // Terreno verdejante
    const geometry = new THREE.PlaneGeometry(80, 80, 25, 25);
    const material = new THREE.MeshStandardMaterial({ color: 0x2E8B57 });
    const terrain = new THREE.Mesh(geometry, material);
    terrain.rotation.x = -Math.PI/2;
    terrain.receiveShadow = true;
    scene.add(terrain);

    // NPCs
    for(let i=0;i<8;i++){
        const pos = spawnPosition({x:0,y:0,z:0}, 35);
        const npc = new THREE.Mesh(
            new THREE.CylinderGeometry(0.5,0.5,2,16),
            new THREE.MeshStandardMaterial({ color: 0xffff00 })
        );
        npc.position.set(pos.x, pos.y+1, pos.z);
        scene.add(npc);
    }

    // Boss
    const boss = new THREE.Mesh(
        new THREE.BoxGeometry(6,9,6),
        new THREE.MeshStandardMaterial({ color: 0x00008B })
    );
    boss.position.set(0,4.5,30);
    scene.add(boss);

    // Partículas
    for(let i=0;i<5;i++){
        const pos = spawnPosition({x:0,y:1,z:0}, 15);
        createParticleEffect('./assets/particles/heal.png', pos, scene);
    }

    console.log("Ilha 4 carregada!");
}
