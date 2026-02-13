// islandManager.js
// Gerenciador de ilhas: carrega dinamicamente Island1 → Island5

import { setupIsland1 } from './island1.js';
import { setupIsland2 } from './island2.js';
import { setupIsland3 } from './island3.js';
import { setupIsland4 } from './island4.js';
import { setupIsland5 } from './island5.js';

const islands = [
    { id: 1, name: "Ilha Verdejante", setup: setupIsland1 },
    { id: 2, name: "Ilha da Selva", setup: setupIsland2 },
    { id: 3, name: "Ilha Rochosa", setup: setupIsland3 },
    { id: 4, name: "Ilha Densa", setup: setupIsland4 },
    { id: 5, name: "Ilha Final", setup: setupIsland5 }
];

/**
 * Carrega uma ilha pelo ID e adiciona no scene
 * @param {number} islandId - ID da ilha (1 a 5)
 * @param {THREE.Scene} scene - Cena principal do jogo
 */
export function loadIsland(islandId, scene) {
    // Limpa ilha anterior
    while(scene.children.length > 0){ 
        scene.remove(scene.children[0]);
    }

    const island = islands.find(i => i.id === islandId);
    if (!island) {
        console.error(`Ilha ${islandId} não encontrada!`);
        return;
    }

    // Setup da ilha
    island.setup(scene);

    console.log(`Ilha carregada: ${island.name}`);
}

/**
 * Retorna o total de ilhas disponíveis
 * Útil para avançar fases ou looping de mundo
 */
export function getTotalIslands() {
    return islands.length;
}
