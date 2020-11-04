var pc;
var enemy , enemyGroup;
var score;
var bullet , BulletGroup;
var bulletImg, enemyImg, pcImg;





function preload(){

bulletImg = loadImage("images/gun.png");
enemyImg = loadImage("images/enemy.png");
pcImg = loadImage("images/hero.png");


}



function setup() {
  createCanvas(1000,800);

  pc = createSprite(158, 350, 50, 50); 
  pc.addImage(pcImg);
  pc.scale = 0.4;
  

  EnemyGroup = new Group();

  BulletGroup = new Group();

  var score=0

}

  function draw() {
  background("gray");




  for(var i = 0; i < EnemyGroup.lenght;i++){


    if (BulletGroup.isTouching(EnemyGroup)) {
    EnemyGroup.get(i).destroyEach();
    score=score+2
    }
  }




          



        
        if (keyDown("Up")){

          pc.y = pc.y - 10;

        
        
        }; 

        if (keyIsDown("Down")){

          pc.y = pc.y + 10

        };


        if (keyCode===32){


          
        

        Bullet();

          

          };


        SpawnEnemy();

        stroke("green")
        textSize(30);
        text("score"+score, 306,56);
        
        
        
        drawSprites();

      


      }

      function SpawnEnemy(){

        if(frameCount % 60 === 0) {
        enemy = createSprite(800,360,50,50);
        enemy.addImage(enemyImg);
        enemy.velocityX = -8;

          
              
          enemy.scale = 0.9;

          EnemyGroup.add(enemy);

          

          Bullet();
        
        
        }
      } 
        

      function Bullet(){

        bullet = createSprite(158, 350, 10, 10);
        bullet.addImage(bulletImg);
        bullet.velocityX = 9;
        bullet.scale = 0.1;
        bullet.y = pc.y;

        bullet.depth = pc.depth;

        pc.depth = +3; 


      BulletGroup.add(bullet);


      };
          
          
        
        


