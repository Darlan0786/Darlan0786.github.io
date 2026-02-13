const Systems = {

  player: {
    hp: 1000,
    maxHp: 1000,
    energy: 100,
    maxEnergy: 100,
    coins: 500,
    crystals: 1600,
    atk: 100,
    crit: 0.1,
    level: 1
  },

  banner: {
    pity: 0,
    guarantee: false,
    rate5: 0.016,
    rate4: 0.12
  },

  rollBanner() {
    if (this.player.crystals < 160) {
      alert("Cristais insuficientes");
      return;
    }

    this.player.crystals -= 160;
    this.banner.pity++;

    let roll = Math.random();
    let result = "3★ Arma Comum";

    if (this.banner.pity >= 80) {
      result = "★★★★★ Personagem Limitado";
      this.banner.pity = 0;
    } else if (roll < this.banner.rate5) {
      result = "★★★★★ Personagem";
      this.banner.pity = 0;
    } else if (roll < this.banner.rate4) {
      result = "★★★★ Personagem";
    }

    alert("Você recebeu: " + result);
  },

  updateUI() {
    document.getElementById("hp").innerText =
      this.player.hp + "/" + this.player.maxHp;
    document.getElementById("energy").innerText =
      this.player.energy + "/" + this.player.maxEnergy;
    document.getElementById("coins").innerText = this.player.coins;
    document.getElementById("crystals").innerText = this.player.crystals;
  }

};
