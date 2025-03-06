const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 2048
canvas.height = 1125

const collisionsMap = []
for (let i = 0; i < collisions.length; i += 70) {
  collisionsMap.push(collisions.slice(i, 70 + i))
}

const battleZonesMap = []
for (let i = 0; i < battleZonesData.length; i += 70) {
  battleZonesMap.push(battleZonesData.slice(i, 70 + i))
}

const battleZonesMap2 = []
for (let i = 0; i < battleZonesData2.length; i += 70) {
  battleZonesMap2.push(battleZonesData2.slice(i, 70 + i))
}

const battleZonesMap3 = []
for (let i = 0; i < battleZonesData3.length; i += 70) {
  battleZonesMap3.push(battleZonesData3.slice(i, 70 + i))
}

const battleZonesMap4 = []
for (let i = 0; i < battleZonesData4.length; i += 70) {
  battleZonesMap4.push(battleZonesData4.slice(i, 70 + i))
}

const battleZonesMap5 = []
for (let i = 0; i < battleZonesData5.length; i += 70) {
  battleZonesMap5.push(battleZonesData5.slice(i, 70 + i))
}

const battleZonesMap6 = []
for (let i = 0; i < battleZonesData6.length; i += 70) {
  battleZonesMap6.push(battleZonesData6.slice(i, 70 + i))
}

const battleZonesMap7 = []
for (let i = 0; i < battleZonesData7.length; i += 70) {
  battleZonesMap7.push(battleZonesData7.slice(i, 70 + i))
}

const battleZonesMap8 = []
for (let i = 0; i < battleZonesData8.length; i += 70) {
  battleZonesMap8.push(battleZonesData8.slice(i, 70 + i))
}

const charactersMap = []
for (let i = 0; i < charactersMapData.length; i += 70) {
  charactersMap.push(charactersMapData.slice(i, 70 + i))
}
console.log(charactersMap)

const charactersMap2 = []
for (let i = 0; i < charactersMapData2.length; i += 70) {
  charactersMap2.push(charactersMapData2.slice(i, 70 + i))
}
console.log(charactersMap2)

const charactersMap3 = []
for (let i = 0; i < charactersMapData3.length; i += 70) {
  charactersMap3.push(charactersMapData3.slice(i, 70 + i))
}
console.log(charactersMap3)

const charactersMap4 = []
for (let i = 0; i < charactersMapData4.length; i += 70) {
  charactersMap4.push(charactersMapData4.slice(i, 70 + i))
}
console.log(charactersMap4)

const charactersMap5 = []
for (let i = 0; i < charactersMapData5.length; i += 70) {
  charactersMap5.push(charactersMapData5.slice(i, 70 + i))
}
console.log(charactersMap5)

const charactersMap6 = []
for (let i = 0; i < charactersMapData6.length; i += 70) {
  charactersMap6.push(charactersMapData6.slice(i, 70 + i))
}
console.log(charactersMap6)

const charactersMap7 = []
for (let i = 0; i < charactersMapData7.length; i += 70) {
  charactersMap7.push(charactersMapData7.slice(i, 70 + i))
}
console.log(charactersMap7)

const charactersMap8 = []
for (let i = 0; i < charactersMapData8.length; i += 70) {
  charactersMap8.push(charactersMapData8.slice(i, 70 + i))
}
console.log(charactersMap8)

const boundaries = []
const offset = {
  x: -735,
  y: -650
}

collisionsMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 1025)
      boundaries.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          }
        })
      )
  })
})

const battleZones = []
const battleZone2 = []
const battleZone3 = []
const battleZone4 = []
const battleZone5 = []
const battleZone6 = []
const battleZone7 = []
const battleZone8 = []

battleZonesMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 1025)
      battleZones.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          }
        })
      )
  })
})

battleZonesMap2.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 1025)
      battleZone2.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          }
        })
      )
  })
})

battleZonesMap3.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 1025)
      battleZone3.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          }
        })
      )
  })
})

battleZonesMap4.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 1025)
      battleZone4.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          }
        })
      )
  })
})

battleZonesMap5.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 1025)
      battleZone5.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          }
        })
      )
  })
})

battleZonesMap6.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 1025)
      battleZone6.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          }
        })
      )
  })
})

battleZonesMap7.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 1025)
      battleZone7.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          }
        })
      )
  })
})

battleZonesMap8.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 1025)
      battleZone8.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          }
        })
      )
  })
})

const characters = []
const villagerImg = new Image()
villagerImg.src = './img/villager/Idle.png'

const oldManImg = new Image()
oldManImg.src = './img/oldMan/Idle.png'

charactersMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    // 1026 === villager
    if (symbol === 1026) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: villagerImg,
          frames: {
            max: 4,
            hold: 60
          },
          scale: 3,
          animate: true,
          dialogue: ['PROBLEM TYPE: CSS', 'HELLO TRAINER THIS IS "GYM 1" AND YOU HAVE TO HAVE KNOWLEDGE ABOUT CSS ANIMARION GOOD LUCK!!']
        })
      )
    }
    
    if (symbol !== 0) {
      boundaries.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          }
        })
      )
    }
  })
})


charactersMap2.forEach((row, i) => {
  row.forEach((symbol, j) => {
    // 1026 === villager
    if (symbol === 1026) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: villagerImg,
          frames: {
            max: 4,
            hold: 60
          },
          scale: 3,
          animate: true,
          dialogue: ['PROBLEM TYPE: JS', 'HELLO TRAINER THIS IS "GYM 2" AND YOU HAVE TO HAVE KNOWLEDGE ABOUT DOM MANIPULATION GOOD LUCK!!']
        })
      )
    }
    
    if (symbol !== 0) {
      boundaries.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          }
        })
      )
    }
  })
})

charactersMap3.forEach((row, i) => {
  row.forEach((symbol, j) => {
    // 1026 === villager
    if (symbol === 1001) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: villagerImg,
          frames: {
            max: 4,
            hold: 60
          },
          scale: 3,
          animate: true, 
          dialogue: ['PROBLEM TYPE: JUST PLAY IT', 'HELLO TRAINER THIS IS "GYM 3" THIS A FUN GAME COMEPLETE THE GAME AND PROGRESS FURTHUR GOOD LUCK!!']
        })
      )
    }
    
    if (symbol !== 0) {
      boundaries.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          }
        })
      )
    }
  })
})

charactersMap4.forEach((row, i) => {
  row.forEach((symbol, j) => {
    // 1026 === villager
    if (symbol === 1026) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: villagerImg,
          frames: {
            max: 4,
            hold: 60
          },
          scale: 3,
          animate: true, 
          dialogue: ['PROBLEM TYPE: HTML/CSS', 'HELLO TRAINER THIS IS "GYM 4" YOU HAVE TO DO CSS ALIGHNING AND HTML GOOD LUCK!!']
        })
      )
    }
    
    if (symbol !== 0) {
      boundaries.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          }
        })
      )
    }
  })
})


charactersMap5.forEach((row, i) => {
  row.forEach((symbol, j) => {
    // 1026 === villager
    if (symbol === 1026) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: villagerImg,
          frames: {
            max: 4,
            hold: 60
          },
          scale: 3,
          animate: true, 
          dialogue: ['PROBLEM TYPE: JS', 'HELLO TRAINER THIS IS "GYM 5" GAIN KEEN KNOWLEDGE OF JS GOOD LUCK!!']
        })
      )
    }
    
    if (symbol !== 0) {
      boundaries.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          }
        })
      )
    }
  })
})

charactersMap6.forEach((row, i) => {
  row.forEach((symbol, j) => {
    // 1026 === villager
    if (symbol === 1026) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: villagerImg,
          frames: {
            max: 4,
            hold: 60
          },
          scale: 3,
          animate: true, 
          dialogue: ['PROBLEM TYPE: CSS', 'HELLO TRAINER THIS IS "GYM 6" DO YOU KNOW CSS PROPERTY GOOD LUCK!!']
        })
      )
    }
    
    if (symbol !== 0) {
      boundaries.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          }
        })
      )
    }
  })
})

charactersMap7.forEach((row, i) => {
  row.forEach((symbol, j) => {
    // 1026 === villager
    if (symbol === 1026) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: villagerImg,
          frames: {
            max: 4,
            hold: 60
          },
          scale: 3,
          animate: true, 
          dialogue: ['PROBLEM TYPE: CSS', 'HELLO TRAINER THIS IS "GYM 7" BE A DETECTIVE GOOD LUCK!!']
        })
      )
    }
    
    if (symbol !== 0) {
      boundaries.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          }
        })
      )
    }
  })
})

charactersMap8.forEach((row, i) => {
  row.forEach((symbol, j) => {
    // 1026 === villager
    if (symbol === 1026) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: villagerImg,
          frames: {
            max: 4,
            hold: 60
          },
          scale: 3,
          animate: true, 
          dialogue: ['PROBLEM TYPE: HTML/CSS', 'HELLO TRAINER THIS IS "GYM 8" YOU HAVE TO HAVE SKILLS OF CRTL C AND CRTL V GOOD LUCK!!']
        })
      )
    }
    
    if (symbol !== 0) {
      boundaries.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          }
        })
      )
    }
  })
})


const image = new Image()
image.src = './img/Semi.png'

// const foregroundImage = new Image()
// foregroundImage.src = './img/foregroundObjects.png'

const playerDownImage = new Image()
playerDownImage.src = './img/playerDown.png'

const playerUpImage = new Image()
playerUpImage.src = './img/playerUp.png'

const playerLeftImage = new Image()
playerLeftImage.src = './img/playerLeft.png'

const playerRightImage = new Image()
playerRightImage.src = './img/playerRight.png'

const player = new Sprite({
  position: {
    x: canvas.width / 2 - 192 / 4 / 2,
    y: canvas.height / 2 - 500/ 2
  },
  image: playerDownImage,
  frames: {
    max: 4,
    hold: 10
  },
  sprites: {
    up: playerUpImage,
    left: playerLeftImage,
    right: playerRightImage,
    down: playerDownImage
  }
})

const background = new Sprite({
  position: {
    x: offset.x,
    y: offset.y
  },
  image: image,
});


// const foreground = new Sprite({
//   position: {
//     x: offset.x,
//     y: offset.y
//   },
//   image: foregroundImage
// })

const keys = {
  w: {
    pressed: false
  },
  a: {
    pressed: false
  },
  s: {
    pressed: false
  },
  d: {
    pressed: false
  }
}

const movables = [
  background,
  ...boundaries,
  // foreground,
  ...battleZones,
  ...battleZone2,
  ...battleZone3,
  ...battleZone4,
  ...battleZone5,
  ...battleZone6,
  ...battleZone7,
  ...battleZone8,
  ...characters
]
const renderables = [
  background,
  ...boundaries,
  ...battleZones,
  ...battleZone2,
  ...battleZone3,
  ...battleZone4,
  ...battleZone5,
  ...battleZone6,
  ...battleZone7,
  ...battleZone8,
  ...characters,
  player
  // foreground
]

const battle = {
  initiated: false
}

function animate() {
  const animationId = window.requestAnimationFrame(animate)
  renderables.forEach((renderable) => {
    renderable.draw()
  })

  let moving = true
  player.animate = false

  // if (battle.initiated) return

  // activate a battle1
  function checkBattleZoneCollision() {
    for (let i = 0; i < battleZones.length; i++) {
      const battleZone = battleZones[i]
      const overlappingArea =
        (Math.min(
          player.position.x + player.width,
          battleZone.position.x + battleZone.width
        ) -
          Math.max(player.position.x, battleZone.position.x)) *
        (Math.min(
          player.position.y + player.height,
          battleZone.position.y + battleZone.height
        ) -
          Math.max(player.position.y, battleZone.position.y))
  
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: battleZone
        }) &&
        overlappingArea > (player.width * player.height) / 2 &&
        Math.random() < 1.1
      ) {
        // Battle starts immediately upon entering the zone
        if (!battle.initiated) { // Ensure it only triggers once
          battle.initiated = true;
          window.open("gyms/gym1/gym1.html", "_blank");
        }
        break;
      }
    }
  }
  
  // Call this function continuously in the game loop
  function gameLoop() {
    checkBattleZoneCollision(); // Always check battle zones
    requestAnimationFrame(gameLoop); // Continue the game loop
  }
  
  gameLoop(); // Start the loop
  
  

  // activate battle2
  // if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed) {
  //   for (let i = 0; i < battleZone2.length; i++) {
  //     const battleZone = battleZone2[i]
  //     const overlappingArea =
  //       (Math.min(
  //         player.position.x + player.width,
  //         battleZone.position.x + battleZone.width
  //       ) -
  //         Math.max(player.position.x, battleZone.position.x)) *
  //       (Math.min(
  //         player.position.y + player.height,
  //         battleZone.position.y + battleZone.height
  //       ) -
  //         Math.max(player.position.y, battleZone.position.y))
  //     if (
  //       rectangularCollision({
  //         rectangle1: player,
  //         rectangle2: battleZone
  //       }) &&
  //       overlappingArea > (player.width * player.height) / 2 &&
  //       Math.random() < 0.01
  //     ) {
  //       // deactivate current animation loop
  //       // window.cancelAnimationFrame(animationId)

  //       // audio.Map.stop()
  //       // audio.initBattle.play()
  //       // audio.battle.play()

  //       if(battle.initiated = true){// Create a button element
          
          
  //             window.open("gyms/gym2/pokemon-master/pokemon.html", "_blank");
          
  //         }
        
  //       break
  //     }
  //   }
  // }

  for (let i = 0; i < battleZone2.length; i++) {
    const battleZone = battleZone2[i]
    const overlappingArea =
      (Math.min(
        player.position.x + player.width,
        battleZone.position.x + battleZone.width
      ) -
        Math.max(player.position.x, battleZone.position.x)) *
      (Math.min(
        player.position.y + player.height,
        battleZone.position.y + battleZone.height
      ) -
        Math.max(player.position.y, battleZone.position.y))
  
    if (
      rectangularCollision({
        rectangle1: player,
        rectangle2: battleZone
      }) &&
      overlappingArea > (player.width * player.height) / 2 &&
      Math.random() > 0
    ) {
      // Battle has started immediately upon entering the zone
      if (battle.initiated = true) {
        window.open("gyms/gym2/gym2.html", "_blank");
      }
  
      break
    }
  }
  

  // activate a battle3
  if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed) {
    for (let i = 0; i < battleZone3.length; i++) {
      const battleZone = battleZone3[i]
      const overlappingArea =
        (Math.min(
          player.position.x + player.width,
          battleZone.position.x + battleZone.width
        ) -
          Math.max(player.position.x, battleZone.position.x)) *
        (Math.min(
          player.position.y + player.height,
          battleZone.position.y + battleZone.height
        ) -
          Math.max(player.position.y, battleZone.position.y))
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: battleZone
        }) &&
        overlappingArea > (player.width * player.height) / 2 &&
        Math.random() < 1.1
      ) {
        // deactivate current animation loop
        // window.cancelAnimationFrame(animationId)

        // audio.Map.stop()
        // audio.initBattle.play()
        // audio.battle.play()

        if(battle.initiated = true){// Create a button element
          
          
              window.open("gyms/gym3 (do not open, it's a GAME)/who-is-that-pokemon-main/index.html", "_blank");
          
          }
        
        break
      }
    }
  }

  // activate battle4
  if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed) {
    for (let i = 0; i < battleZone4.length; i++) {
      const battleZone = battleZone4[i]
      const overlappingArea =
        (Math.min(
          player.position.x + player.width,
          battleZone.position.x + battleZone.width
        ) -
          Math.max(player.position.x, battleZone.position.x)) *
        (Math.min(
          player.position.y + player.height,
          battleZone.position.y + battleZone.height
        ) -
          Math.max(player.position.y, battleZone.position.y))
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: battleZone
        }) &&
        overlappingArea > (player.width * player.height) / 2 &&
        Math.random() < 0.01
      ) {
        // deactivate current animation loop
        // window.cancelAnimationFrame(animationId)

        // audio.Map.stop()
        // audio.initBattle.play()
        // audio.battle.play()

        if(battle.initiated = true){// Create a button element
          
          
              window.open("gyms/gym4/gym4.html", "_blank");
          
          }
        
        break
      }
    }
  }

  // activate a battle5
  if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed) {
    for (let i = 0; i < battleZone5.length; i++) {
      const battleZone = battleZone5[i]
      const overlappingArea =
        (Math.min(
          player.position.x + player.width,
          battleZone.position.x + battleZone.width
        ) -
          Math.max(player.position.x, battleZone.position.x)) *
        (Math.min(
          player.position.y + player.height,
          battleZone.position.y + battleZone.height
        ) -
          Math.max(player.position.y, battleZone.position.y))
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: battleZone
        }) &&
        overlappingArea > (player.width * player.height) / 2 &&
        Math.random() < 1.1
      ) {
        // deactivate current animation loop
        // window.cancelAnimationFrame(animationId)

        // audio.Map.stop()
        // audio.initBattle.play()
        // audio.battle.play()

        if(battle.initiated = true){// Create a button element
          
          
              window.open("gyms/gym5/pokemon.html", "_blank");
          
          }
        
        break
      }
    }
  }

  // activate battle6
  if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed) {
    for (let i = 0; i < battleZone6.length; i++) {
      const battleZone = battleZone6[i]
      const overlappingArea =
        (Math.min(
          player.position.x + player.width,
          battleZone.position.x + battleZone.width
        ) -
          Math.max(player.position.x, battleZone.position.x)) *
        (Math.min(
          player.position.y + player.height,
          battleZone.position.y + battleZone.height
        ) -
          Math.max(player.position.y, battleZone.position.y))
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: battleZone
        }) &&
        overlappingArea > (player.width * player.height) / 2 &&
        Math.random() < 0.01
      ) {
        // deactivate current animation loop
        // window.cancelAnimationFrame(animationId)

        // audio.Map.stop()
        // audio.initBattle.play()
        // audio.battle.play()

        if(battle.initiated = true){// Create a button element
          
          
              window.open("gyms/gym6/index.html", "_blank");
          
          }
        
        break
      }
    }
  }

  // activate a battle7
  if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed) {
    for (let i = 0; i < battleZone7.length; i++) {
      const battleZone = battleZone7[i]
      const overlappingArea =
        (Math.min(
          player.position.x + player.width,
          battleZone.position.x + battleZone.width
        ) -
          Math.max(player.position.x, battleZone.position.x)) *
        (Math.min(
          player.position.y + player.height,
          battleZone.position.y + battleZone.height
        ) -
          Math.max(player.position.y, battleZone.position.y))
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: battleZone
        }) &&
        overlappingArea > (player.width * player.height) / 2 &&
        Math.random() < 1.1
      ) {
        // deactivate current animation loop
        // window.cancelAnimationFrame(animationId)

        // audio.Map.stop()
        // audio.initBattle.play()
        // audio.battle.play()

        if(battle.initiated = true){// Create a button element
          
          
              window.open("gyms/gym7/Hangman-main/index.html", "_blank");
          
          }
        
        break
      }
    }
  }

  // activate battle8
  if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed) {
    for (let i = 0; i < battleZone8.length; i++) {
      const battleZone = battleZone8[i]
      const overlappingArea =
        (Math.min(
          player.position.x + player.width,
          battleZone.position.x + battleZone.width
        ) -
          Math.max(player.position.x, battleZone.position.x)) *
        (Math.min(
          player.position.y + player.height,
          battleZone.position.y + battleZone.height
        ) -
          Math.max(player.position.y, battleZone.position.y))
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: battleZone
        }) &&
        overlappingArea > (player.width * player.height) / 2 &&
        Math.random() < 0.01
      ) {
        // deactivate current animation loop
        // window.cancelAnimationFrame(animationId)

        // audio.Map.stop()
        // audio.initBattle.play()
        // audio.battle.play()

        if(battle.initiated = true){// Create a button element
          
          
              window.open("gyms/gym8/index.html", "_blank");
          
          }
        
        break
      }
    }
  }

  if (keys.w.pressed && lastKey === 'w') {
    player.animate = true
    player.image = player.sprites.up

    checkForCharacterCollision({
      characters,
      player,
      characterOffset: { x: 0, y: 3 }
    })

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i]
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y + 3
            }
          }
        })
      ) {
        moving = false
        break
      }
    }

    if (moving)
      movables.forEach((movable) => {
        movable.position.y += 3
      })
  } else if (keys.a.pressed && lastKey === 'a') {
    player.animate = true
    player.image = player.sprites.left

    checkForCharacterCollision({
      characters,
      player,
      characterOffset: { x: 3, y: 0 }
    })

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i]
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x + 3,
              y: boundary.position.y
            }
          }
        })
      ) {
        moving = false
        break
      }
    }

    if (moving)
      movables.forEach((movable) => {
        movable.position.x += 3
      })
  } else if (keys.s.pressed && lastKey === 's') {
    player.animate = true
    player.image = player.sprites.down

    checkForCharacterCollision({
      characters,
      player,
      characterOffset: { x: 0, y: -3 }
    })

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i]
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y - 3
            }
          }
        })
      ) {
        moving = false
        break
      }
    }

    if (moving)
      movables.forEach((movable) => {
        movable.position.y -= 3
      })
  } else if (keys.d.pressed && lastKey === 'd') {
    player.animate = true
    player.image = player.sprites.right

    checkForCharacterCollision({
      characters,
      player,
      characterOffset: { x: -3, y: 0 }
    })

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i]
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x - 3,
              y: boundary.position.y
            }
          }
        })
      ) {
        moving = false
        break
      }
    }

    if (moving)
      movables.forEach((movable) => {
        movable.position.x -= 3
      })
  }
}
//animate()

let lastKey = ''
window.addEventListener('keydown', (e) => {
  if (player.isInteracting) {
    switch (e.key) {
      case ' ':
        player.interactionAsset.dialogueIndex++

        const { dialogueIndex, dialogue } = player.interactionAsset
        if (dialogueIndex <= dialogue.length - 1) {
          document.querySelector('#characterDialogueBox').innerHTML =
            player.interactionAsset.dialogue[dialogueIndex]
          return
        }

        // finish conversation
        player.isInteracting = false
        player.interactionAsset.dialogueIndex = 0
        document.querySelector('#characterDialogueBox').style.display = 'none'

        break
    }
    return
  }

  switch (e.key) {
    case ' ':
      if (!player.interactionAsset) return

      // beginning the conversation
      const firstMessage = player.interactionAsset.dialogue[0]
      document.querySelector('#characterDialogueBox').innerHTML = firstMessage
      document.querySelector('#characterDialogueBox').style.display = 'flex'
      player.isInteracting = true
      break
    case 'w':
      keys.w.pressed = true
      lastKey = 'w'
      break
    case 'a':
      keys.a.pressed = true
      lastKey = 'a'
      break

    case 's':
      keys.s.pressed = true
      lastKey = 's'
      break

    case 'd':
      keys.d.pressed = true
      lastKey = 'd'
      break
  }
})

window.addEventListener('keyup', (e) => {
  switch (e.key) {
    case 'w':
      keys.w.pressed = false
      break
    case 'a':
      keys.a.pressed = false
      break
    case 's':
      keys.s.pressed = false
      break
    case 'd':
      keys.d.pressed = false
      break
  }
})

let clicked = false
addEventListener('click', () => {
  if (!clicked) {
    audio.Map.play()
    clicked = true
  }
})
