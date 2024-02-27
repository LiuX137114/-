let playGameState = "lgs"
const dropdown = document.getElementById("animations")
dropdown.addEventListener('change', function (e) {
  playGameState = e.target.value
  console.log(e.target.value);
})

const canvas = document.getElementById('canvasOne')
const ctx = canvas.getContext('2d')
//画布大小
const CANVAS_WIDTH = canvas.width = 600
const CANVAS_HEIGHT = canvas.height = 600
const playerImage = new Image()
playerImage.src = './image/rong.png'
//位移位置
const spriteWidth = 64
const spriteHeight = 64
// let playerX = 0由于已经计算出来每张图的坐标所有不需要了
// let playerY = 10
let gameFrame = 0
const gameRate = 30//游戏速度
const spriteAnimations = []
const animationStates = [
  {
    name: 'pzw',
    frames: 7
  },
  {
    name: 'pza',
    frames: 7
  }, {
    name: 'pzs',
    frames: 7
  }, {
    name: 'pzd',
    frames: 7
  },
  {
    name: 'law',
    frames: 8
  },
  {
    name: 'laa',
    frames: 8
  }, {
    name: 'las',
    frames: 8
  }, {
    name: 'lad',
    frames: 8
  },
  {
    name: 'xzw',
    frames: 9
  }, {
    name: 'xza',
    frames: 9
  }, {
    name: 'xzs',
    frames: 9
  }, {
    name: 'xzd',
    frames: 9
  },
  {
    name: 'zhw',
    frames: 6
  }, {
    name: 'zha',
    frames: 6
  }, {
    name: 'zhs',
    frames: 6
  }, {
    name: 'zhd',
    frames: 6
  },
  {
    name: 'lgw',
    frames: 13
  }, {
    name: 'lga',
    frames: 13
  }, {
    name: 'lgs',
    frames: 13
  }, {
    name: 'lgd',
    frames: 13
  },
  {
    name: 'dl',
    frames: 6
  },
]
//提前计算好图像的位置
animationStates.forEach((state, index) => {
  let frames = {
    loc: []
  }
  for (let j = 0; j < state.frames; j++) {//计算所有图片的位置
    let positionX = j * spriteWidth
    let positionY = index * spriteHeight
    frames.loc.push({ x: positionX, y: positionY })//添加进入对应图片位置
  }
  spriteAnimations[state.name] = frames
})
console.log(spriteAnimations);

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  let position = Math.floor(gameFrame / gameRate) % spriteAnimations[playGameState].loc.length//有多少张图片
  let playerX = position * spriteWidth
  let playerY = spriteAnimations[playGameState].loc[position].y

  ctx.drawImage(playerImage, playerX, playerY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight) // 绘制图片
  gameFrame++

  requestAnimationFrame(animate)//动画优化,每秒调用60次
}

animate()
