// weapons.js (balanceado)
// ASTRA V3 Supremo – Armas signature e buffs

export const weapons = [
  // 6★ Weapons – 8 armas
  {
    id: 1,
    name: "Celestial Edge",
    rarity: 6,
    owner: "Aurelia",
    baseAttack: 310,
    buffs: {
      ownerBuff: { skillMultiplier: 1.22, ultimateMultiplier: 1.38 },
      otherBuff: { skillMultiplier: 1.05, ultimateMultiplier: 1.1 }
    },
    animation: { idle: "celestialIdle()", attack: "celestialAttack()", skill: "celestialSkill()", ultimate: "celestialUltimate()" },
    effects: "glowParticle(), impactFrame(), cinematicTrail()"
  },
  {
    id: 2,
    name: "Luminous Fang",
    rarity: 6,
    owner: "Selene",
    baseAttack: 308,
    buffs: { ownerBuff: { skillMultiplier: 1.23, ultimateMultiplier: 1.36 }, otherBuff: { skillMultiplier: 1.05, ultimateMultiplier: 1.1 } },
    animation: { idle: "luminousIdle()", attack: "luminousAttack()", skill: "luminousSkill()", ultimate: "luminousUltimate()" },
    effects: "flareTrail(), impactFrame(), cinematicGlow()"
  },
  {
    id: 3,
    name: "Starlight Crescent",
    rarity: 6,
    owner: "Lyra",
    baseAttack: 306,
    buffs: { ownerBuff: { skillMultiplier: 1.21, ultimateMultiplier: 1.37 }, otherBuff: { skillMultiplier: 1.05, ultimateMultiplier: 1.1 } },
    animation: { idle: "crescentIdle()", attack: "crescentAttack()", skill: "crescentSkill()", ultimate: "crescentUltimate()" },
    effects: "sparkParticle(), impactFrame(), cinematicTrail()"
  },
  {
    id: 4,
    name: "Nova Lance",
    rarity: 6,
    owner: "Isolde",
    baseAttack: 312,
    buffs: { ownerBuff: { skillMultiplier: 1.22, ultimateMultiplier: 1.39 }, otherBuff: { skillMultiplier: 1.05, ultimateMultiplier: 1.1 } },
    animation: { idle: "novaIdle()", attack: "novaAttack()", skill: "novaSkill()", ultimate: "novaUltimate()" },
    effects: "energyTrail(), impactFrame(), cinematicGlow()"
  },
  {
    id: 5,
    name: "Aurora Bow",
    rarity: 6,
    owner: "Elara",
    baseAttack: 305,
    buffs: { ownerBuff: { skillMultiplier: 1.2, ultimateMultiplier: 1.35 }, otherBuff: { skillMultiplier: 1.05, ultimateMultiplier: 1.1 } },
    animation: { idle: "auroraIdle()", attack: "auroraAttack()", skill: "auroraSkill()", ultimate: "auroraUltimate()" },
    effects: "lightTrail(), impactFrame(), cinematicSpark()"
  },
  {
    id: 6,
    name: "Solar Flare",
    rarity: 6,
    owner: "Cressida",
    baseAttack: 309,
    buffs: { ownerBuff: { skillMultiplier: 1.23, ultimateMultiplier: 1.37 }, otherBuff: { skillMultiplier: 1.05, ultimateMultiplier: 1.1 } },
    animation: { idle: "solarIdle()", attack: "solarAttack()", skill: "solarSkill()", ultimate: "solarUltimate()" },
    effects: "flameTrail(), impactFrame(), cinematicExplosion()"
  },
  {
    id: 7,
    name: "Eclipse Saber",
    rarity: 6,
    owner: "Nyx",
    baseAttack: 311,
    buffs: { ownerBuff: { skillMultiplier: 1.21, ultimateMultiplier: 1.38 }, otherBuff: { skillMultiplier: 1.05, ultimateMultiplier: 1.1 } },
    animation: { idle: "eclipseIdle()", attack: "eclipseAttack()", skill: "eclipseSkill()", ultimate: "eclipseUltimate()" },
    effects: "shadowTrail(), impactFrame(), cinematicFade()"
  },
  {
    id: 8,
    name: "Radiant Spear",
    rarity: 6,
    owner: "Seraphine",
    baseAttack: 308,
    buffs: { ownerBuff: { skillMultiplier: 1.2, ultimateMultiplier: 1.36 }, otherBuff: { skillMultiplier: 1.05, ultimateMultiplier: 1.1 } },
    animation: { idle: "radiantIdle()", attack: "radiantAttack()", skill: "radiantSkill()", ultimate: "radiantUltimate()" },
    effects: "lightBeamTrail(), impactFrame(), cinematicFlash()"
  },

  // 5★ Weapons – 7 armas
  {
    id: 9,
    name: "Twilight Dagger",
    rarity: 5,
    owner: "Aurora",
    baseAttack: 280,
    buffs: { ownerBuff: { skillMultiplier: 1.16, ultimateMultiplier: 1.24 }, otherBuff: { skillMultiplier: 1.04, ultimateMultiplier: 1.07 } },
    animation: { idle: "twilightIdle()", attack: "twilightAttack()", skill: "twilightSkill()", ultimate: "twilightUltimate()" },
    effects: "shadowParticle(), impactFrame(), cinematicSlash()"
  },
  {
    id: 10,
    name: "Moonlit Blade",
    rarity: 5,
    owner: "Selina",
    baseAttack: 283,
    buffs: { ownerBuff: { skillMultiplier: 1.17, ultimateMultiplier: 1.25 }, otherBuff: { skillMultiplier: 1.04, ultimateMultiplier: 1.07 } },
    animation: { idle: "moonlitIdle()", attack: "moonlitAttack()", skill: "moonlitSkill()", ultimate: "moonlitUltimate()" },
    effects: "lightParticle(), impactFrame(), cinematicGlow()"
  },
  {
    id: 11,
    name: "Crimson Fang",
    rarity: 5,
    owner: "Lyanna",
    baseAttack: 279,
    buffs: { ownerBuff: { skillMultiplier: 1.16, ultimateMultiplier: 1.23 }, otherBuff: { skillMultiplier: 1.04, ultimateMultiplier: 1.07 } },
    animation: { idle: "crimsonIdle()", attack: "crimsonAttack()", skill: "crimsonSkill()", ultimate: "crimsonUltimate()" },
    effects: "fireTrail(), impactFrame(), cinematicFlare()"
  },
  {
    id: 12,
    name: "Azure Spear",
    rarity: 5,
    owner: "Isla",
    baseAttack: 281,
    buffs: { ownerBuff: { skillMultiplier: 1.16, ultimateMultiplier: 1.24 }, otherBuff: { skillMultiplier: 1.04, ultimateMultiplier: 1.07 } },
    animation: { idle: "azureIdle()", attack: "azureAttack()", skill: "azureSkill()", ultimate: "azureUltimate()" },
    effects: "waterTrail(), impactFrame(), cinematicSplash()"
  },
  {
    id: 13,
    name: "Verdant Bow",
    rarity: 5,
    owner: "Celia",
    baseAttack: 278,
    buffs: { ownerBuff: { skillMultiplier: 1.15, ultimateMultiplier: 1.23 }, otherBuff: { skillMultiplier: 1.04, ultimateMultiplier: 1.07 } },
    animation: { idle: "verdantIdle()", attack: "verdantAttack()", skill: "verdantSkill()", ultimate: "verdantUltimate()" },
    effects: "leafTrail(), impactFrame(), cinematicBloom()"
  },
  {
    id: 14,
    name: "Obsidian Edge",
    rarity: 5,
    owner: "Mira",
    baseAttack: 280,
    buffs: { ownerBuff: { skillMultiplier: 1.16, ultimateMultiplier: 1.24 }, otherBuff: { skillMultiplier: 1.04, ultimateMultiplier: 1.07 } },
    animation: { idle: "obsidianIdle()", attack: "obsidianAttack()", skill: "obsidianSkill()", ultimate: "obsidianUltimate()" },
    effects: "shadowTrail(), impactFrame(), cinematicFlash()"
  },
  {
    id: 15,
    name: "Celestia Wand",
    rarity: 5,
    owner: "Serena",
    baseAttack: 277,
    buffs: { ownerBuff: { skillMultiplier: 1.15, ultimateMultiplier: 1.22 }, otherBuff: { skillMultiplier: 1.04, ultimateMultiplier: 1.07 } },
    animation: { idle: "celestiaIdle()", attack: "celestiaAttack()", skill: "celestiaSkill()", ultimate: "celestiaUltimate()" },
    effects: "magicTrail(), impactFrame(), cinematicSpark()"
  },

  // 4★ Weapons – 5 armas
  {
    id: 16,
    name: "Silver Blade",
    rarity: 4,
    owner: "Lyra",
    baseAttack: 250,
    buffs: { ownerBuff: { skillMultiplier: 1.12, ultimateMultiplier: 1.16 }, otherBuff: { skillMultiplier: 1.03, ultimateMultiplier: 1.05 } },
    animation: { idle: "silverIdle()", attack: "silverAttack()", skill: "silverSkill()", ultimate: "silverUltimate()" },
    effects: "lightTrail(), impactFrame(), cinematicGlow()"
  },
  {
    id: 17,
    name: "Emerald Bow",
    rarity: 4,
    owner: "Celine",
    baseAttack: 248,
    buffs: { ownerBuff: { skillMultiplier: 1.12, ultimateMultiplier: 1.15 }, otherBuff: { skillMultiplier: 1.03, ultimateMultiplier: 1.05 } },
    animation: { idle: "emeraldIdle()", attack: "emeraldAttack()", skill: "emeraldSkill()", ultimate: "emeraldUltimate()" },
    effects: "leafTrail(), impactFrame(), cinematicSpark()"
  },
  {
    id: 18,
    name: "Sapphire Staff",
    rarity: 4,
    owner: "Isla",
    baseAttack: 247,
    buffs: { ownerBuff: { skillMultiplier: 1.11, ultimateMultiplier: 1.15 }, otherBuff: { skillMultiplier: 1.03, ultimateMultiplier: 1.05 } },
    animation: { idle: "sapphireIdle()", attack: "sapphireAttack()", skill: "sapphireSkill()", ultimate: "sapphireUltimate()" },
    effects: "waterTrail(), impactFrame(), cinematicGlow()"
  },
  {
    id: 19,
    name: "Crimson Saber",
    rarity: 4,
    owner: "Mira",
    baseAttack: 249,
    buffs: { ownerBuff: { skillMultiplier: 1.12, ultimateMultiplier: 1.16 }, otherBuff: { skillMultiplier: 1.03, ultimateMultiplier: 1.05 } },
    animation: { idle: "crimsonIdle()", attack: "crimsonAttack()", skill: "crimsonSkill()", ultimate: "crimsonUltimate()" },
    effects: "fireTrail(), impactFrame(), cinematicFlash()"
  },
  {
    id: 20,
    name: "Moonlight Wand",
    rarity: 4,
    owner: "Aurora",
    baseAttack: 246,
    buffs: { ownerBuff: { skillMultiplier: 1.11, ultimateMultiplier: 1.14 }, otherBuff: { skillMultiplier: 1.03, ultimateMultiplier: 1.05 } },
    animation: { idle: "moonlightIdle()", attack: "moonlightAttack()", skill: "moonlightSkill()", ultimate: "moonlightUltimate()" },
    effects: "magicTrail(), impactFrame(), cinematicSpark()"
  }
];

// Skeleton de funções de animação (placeholder)
function celestialIdle(){} function celestialAttack(){} function celestialSkill(){} function celestialUltimate(){}
function luminousIdle(){} function luminousAttack(){} function luminousSkill(){} function luminousUltimate(){}
// ... e assim por diante para cada animação
