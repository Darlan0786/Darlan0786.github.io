// island5.js
// Skeleton da Ilha 5: ilha final, cenário desafiador e realista

import { spawnPosition } from './helpers.js';
import { createParticleEffect } from './effectManager.js';

export function setupIsland5(scene) {
    // Terreno escarpado
    const geometry = new THREE.PlaneGeometry(100, 100, 40, 40);
    const material = new THREE.MeshStandardMaterial({ color: 0xA0522D });
    const terrain = new THREE.Mesh(geometry, material);
    terrain.rotation.x = -Math.PI/2;
    terrain.receiveShadow = true;
    scene.add(terrain);

    // NPCs mais fortes e numerosos
    for(let i=0;i<10;i++){
        const pos = spawnPosition({x:0,y:0,z:0}, 40);
        const npc = new THREE.Mesh(
            new THREE.CylinderGeometry(0.6,0.6,2.2,16),
            new THREE.MeshStandardMaterial({ color: 0xff69b4 })
        );
        npc.position.set(pos.x, pos.y+1.1, pos.z);
        scene.add(npc);
    }

    // Boss final
    const boss = new THREE.Mesh(
        new THREE.BoxGeometry(8,12,8),
        new THREE.MeshStandardMaterial({ color: 0x8B4513 })
    );
    boss.position.set(0,6,40);
    scene.add(boss);

    // Partículas de impacto / efeito
    for(let i=0;i<6;i++){
        const pos = spawnPosition({x:0,y:1,z:0}, 20);
        createParticleEffect('./assets/particles/fire.png', pos, scene);
        createParticleEffect('./assets/particles/spark.png', pos, scene);
    }

    console.log("Ilha 5 carregada!");
}
