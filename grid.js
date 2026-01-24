const gameCell=Array.from(document.querySelectorAll('.cell'))

const upFirst=[0,1,2,3]
const upSecond=[4,5,6,7]
const upThird=[8,9,10,11]

const downFirst=[12,13,14,15]
const downSecond=[8,9,10,11]
const downThird=[4,5,6,7]

const leftFirst=[0,4,8,12]
const leftSecond=[1,5,9,13]
const leftThird=[2,6,10,14]

const rightFirst=[3,7,11,15]
const rightSecond=[2,6,10,14]
const rightThird=[1,5,9,13]

let upError,downError,rightError,leftError;
function checkValid(){
    if(rightError&&leftError&&upError&&downError){
        console.log('Game Finsihed')
    }
}
function getEmptyCells(){
    const emptyCells=gameCell.filter(function(cell){
        if(!cell.textContent) return cell
    })
    return emptyCells;
}

function checkColor(){
    gameCell.forEach((cell)=>{
        let value=Number(cell.textContent)
        const power=Math.log2(value)
        const backgroundLightness=100-power*9
        cell.style.setProperty('--background-lightness',`${backgroundLightness}%`)
        cell.style.setProperty('--text-lightness',`${backgroundLightness <=50?90:10}%`)
    })
}
function createNewTiles(){  
    const emptyCells=getEmptyCells()
    let first = Math.floor(Math.random() *emptyCells.length);;
    emptyCells[first].classList.add('tile')
    emptyCells[first].textContent=2
    checkColor()
}
function removeEmptyUp(){
    upFirst.forEach((d)=>{
        if(gameCell[d+4].textContent){
            if(!gameCell[d].textContent){
            gameCell[d].classList.add('tile')
            gameCell[d].textContent=gameCell[d+4].textContent
            gameCell[d+4].textContent=''
            gameCell[d+4].classList.remove('tile')
            }
        }
        if(gameCell[d+8].textContent){
            if(!gameCell[d].textContent&&!gameCell[d+4].textContent){
                gameCell[d].classList.add('tile')
                gameCell[d].textContent=gameCell[d+8].textContent
                gameCell[d+8].textContent=''
                gameCell[d+8].classList.remove('tile')
            }
            else if(gameCell[d].textContent&&!gameCell[d+4].textContent){
                gameCell[d+4].classList.add('tile')
                gameCell[d+4].textContent=gameCell[d+8].textContent
                gameCell[d+8].textContent=''
                gameCell[d+8].classList.remove('tile')
            }
        }
        if(gameCell[d+12].textContent){
            if(!gameCell[d].textContent&&!gameCell[d+4].textContent&&!gameCell[d+8].textContent){
                gameCell[d].classList.add('tile')
                gameCell[d].textContent=gameCell[d+12].textContent
                gameCell[d+12].textContent=''
                gameCell[d+12].classList.remove('tile')
            }
            else if(gameCell[d].textContent&&!gameCell[d+4].textContent&&!gameCell[d+8].textContent){
                gameCell[d+4].classList.add('tile')
                gameCell[d+4].textContent=gameCell[d+12].textContent
                gameCell[d+12].textContent=''
                gameCell[d+12].classList.remove('tile')
            }
            else if(gameCell[d].textContent&&gameCell[d+4].textContent&&!gameCell[d+8].textContent){
                gameCell[d+8].classList.add('tile')
                gameCell[d+8].textContent=gameCell[d+12].textContent
                gameCell[d+12].textContent=''
                gameCell[d+12].classList.remove('tile')
            }
        }
        
        
       
    })
}
function removeEmptyDown(){
    downFirst.forEach((d)=>{
        if(gameCell[d-4].textContent){
            if(!gameCell[d].textContent){
            gameCell[d].classList.add('tile')
            gameCell[d].textContent=gameCell[d-4].textContent
            gameCell[d-4].textContent=''
            gameCell[d-4].classList.remove('tile')
            }
        }
        if(gameCell[d-8].textContent){
            if(!gameCell[d].textContent&&!gameCell[d-4].textContent){
                gameCell[d].classList.add('tile')
                gameCell[d].textContent=gameCell[d-8].textContent
                gameCell[d-8].textContent=''
                gameCell[d-8].classList.remove('tile')
            }
            else if(gameCell[d].textContent&&!gameCell[d-4].textContent){
                gameCell[d-4].classList.add('tile')
                gameCell[d-4].textContent=gameCell[d-8].textContent
                gameCell[d-8].textContent=''
                gameCell[d-8].classList.remove('tile')
            }
        }
        if(gameCell[d-12].textContent){
            if(!gameCell[d].textContent&&!gameCell[d-4].textContent&&!gameCell[d-8].textContent){
                gameCell[d].classList.add('tile')
                gameCell[d].textContent=gameCell[d-12].textContent
                gameCell[d-12].textContent=''
                gameCell[d-12].classList.remove('tile')
            }
            else if(gameCell[d].textContent&&!gameCell[d-4].textContent&&!gameCell[d-8].textContent){
                gameCell[d-4].classList.add('tile')
                gameCell[d-4].textContent=gameCell[d-12].textContent
                gameCell[d-12].textContent=''
                gameCell[d-12].classList.remove('tile')
            }
            else if(gameCell[d].textContent&&gameCell[d-4].textContent&&!gameCell[d-8].textContent){
                gameCell[d-8].classList.add('tile')
                gameCell[d-8].textContent=gameCell[d-12].textContent
                gameCell[d-12].textContent=''
                gameCell[d-12].classList.remove('tile')
            }
        }
        
    })
}
function removeEmptyLeft(){
    leftFirst.forEach((d)=>{
        if(gameCell[d+1].textContent){
            if(!gameCell[d].textContent){
            gameCell[d].classList.add('tile')
            gameCell[d].textContent=gameCell[d+1].textContent
            gameCell[d+1].textContent=''
            gameCell[d+1].classList.remove('tile')
            }
        }
        if(gameCell[d+2].textContent){
            if(!gameCell[d].textContent&&!gameCell[d+1].textContent){
                gameCell[d].classList.add('tile')
                gameCell[d].textContent=gameCell[d+2].textContent
                gameCell[d+2].textContent=''
                gameCell[d+2].classList.remove('tile')
            }
            else if(gameCell[d].textContent&&!gameCell[d+1].textContent){
                gameCell[d+1].classList.add('tile')
                gameCell[d+1].textContent=gameCell[d+2].textContent
                gameCell[d+2].textContent=''
                gameCell[d+2].classList.remove('tile')
            }
        }
        if(gameCell[d+3].textContent){
            if(!gameCell[d].textContent&&!gameCell[d+1].textContent&&!gameCell[d+2].textContent){
                gameCell[d].classList.add('tile')
                gameCell[d].textContent=gameCell[d+3].textContent
                gameCell[d+3].textContent=''
                gameCell[d+3].classList.remove('tile')
            }
            else if(gameCell[d].textContent&&!gameCell[d+1].textContent&&!gameCell[d+2].textContent){
                gameCell[d+1].classList.add('tile')
                gameCell[d+1].textContent=gameCell[d+3].textContent
                gameCell[d+3].textContent=''
                gameCell[d+3].classList.remove('tile')
            }
            else if(gameCell[d].textContent&&gameCell[d+1].textContent&&!gameCell[d+2].textContent){
                gameCell[d+2].classList.add('tile')
                gameCell[d+2].textContent=gameCell[d+3].textContent
                gameCell[d+3].textContent=''
                gameCell[d+3].classList.remove('tile')
            }
        }
        
        
       
    })
}
function removeEmptyRight(){
    
    rightFirst.forEach((d)=>{
        if(gameCell[d-1].textContent){
            if(!gameCell[d].textContent){
            gameCell[d].classList.add('tile')
            gameCell[d].textContent=gameCell[d-1].textContent
            gameCell[d-1].textContent=''
            gameCell[d-1].classList.remove('tile')
            }
        }
        if(gameCell[d-2].textContent){
            if(!gameCell[d].textContent&&!gameCell[d-1].textContent){
                gameCell[d].classList.add('tile')
                gameCell[d].textContent=gameCell[d-2].textContent
                gameCell[d-2].textContent=''
                gameCell[d-2].classList.remove('tile')
            }
            else if(gameCell[d].textContent&&!gameCell[d-1].textContent){
                gameCell[d-1].classList.add('tile')
                gameCell[d-1].textContent=gameCell[d-2].textContent
                gameCell[d-2].textContent=''
                gameCell[d-2].classList.remove('tile')
            }
        }
        if(gameCell[d-3].textContent){
            if(!gameCell[d].textContent&&!gameCell[d-1].textContent&&!gameCell[d-2].textContent){
                gameCell[d].classList.add('tile')
                gameCell[d].textContent=gameCell[d-3].textContent
                gameCell[d-3].textContent=''
                gameCell[d-3].classList.remove('tile')
            }
            else if(gameCell[d].textContent&&!gameCell[d-1].textContent&&!gameCell[d-2].textContent){
                gameCell[d-1].classList.add('tile')
                gameCell[d-1].textContent=gameCell[d-3].textContent
                gameCell[d-3].textContent=''
                gameCell[d-3].classList.remove('tile')
            }
            else if(gameCell[d].textContent&&gameCell[d-1].textContent&&!gameCell[d-2].textContent){
                gameCell[d-2].classList.add('tile')
                gameCell[d-2].textContent=gameCell[d-3].textContent
                gameCell[d-3].textContent=''
                gameCell[d-3].classList.remove('tile')
            }
        }
        
    })

}

function moveUp(){
    try{
    upFirst.forEach((d)=>{
        if(gameCell[d].textContent&&gameCell[d+4].textContent&&Number(gameCell[d].textContent)===Number(gameCell[d+4].textContent)){
            gameCell[d].textContent=Number(gameCell[d].textContent)+Number(gameCell[d+4].textContent)
            gameCell[d+4].textContent=''
            gameCell[d+4].classList.remove('tile')
        }
        else if(gameCell[d].textContent&&!gameCell[d+4].textContent&&gameCell[d+8].textContent&&Number(gameCell[d].textContent)===Number(gameCell[d+8].textContent)){
            gameCell[d].textContent=Number(gameCell[d].textContent)+Number(gameCell[d+8].textContent)
            gameCell[d+8].textContent=''
            gameCell[d+8].classList.remove('tile')
        }
        else if(gameCell[d].textContent&&!gameCell[d+4].textContent&&!gameCell[d+8].textContent&&gameCell[d+12].textContent&&Number(gameCell[d].textContent)===Number(gameCell[d+12].textContent)){
            gameCell[d].textContent=Number(gameCell[d].textContent)+Number(gameCell[d+12].textContent)
            gameCell[d+12].textContent=''
            gameCell[d+12].classList.remove('tile')
        }
    })
    upSecond.forEach((d)=>{

        if(gameCell[d].textContent&&gameCell[d+4].textContent&&Number(gameCell[d].textContent)===Number(gameCell[d+4].textContent)){            
            gameCell[d].textContent=Number(gameCell[d].textContent)+Number(gameCell[d+4].textContent)
            gameCell[d+4].textContent=''
            gameCell[d+4].classList.remove('tile')            
        }

        else if(gameCell[d].textContent&&!gameCell[d+4].textContent&&gameCell[d+8].textContent&&Number(gameCell[d].textContent)===Number(gameCell[d+8].textContent)){
            gameCell[d].textContent=Number(gameCell[d].textContent)+Number(gameCell[d+8].textContent)
            gameCell[d+8].textContent=''
            gameCell[d+8].classList.remove('tile') 
        }

    })

    upThird.forEach((d)=>{
        
        if(gameCell[d].textContent&&gameCell[d+4].textContent&&Number(gameCell[d].textContent)===Number(gameCell[d+4].textContent)){            
            gameCell[d].textContent=Number(gameCell[d].textContent)+Number(gameCell[d+4].textContent)
            gameCell[d+4].textContent=''
            gameCell[d+4].classList.remove('tile')            
        } 
    })
    removeEmptyUp()
    checkColor()
    createNewTiles()
    createNewTiles()
    leftError=''
    rightError=''
    downError=''
    }
    catch(err){
       upError=err
    }
}

function moveDown(){
    try{
    downFirst.forEach((d)=>{
        if(gameCell[d].textContent&&gameCell[d-4].textContent&&Number(gameCell[d].textContent)===Number(gameCell[d-4].textContent)){
            gameCell[d].textContent=Number(gameCell[d].textContent)+Number(gameCell[d-4].textContent)
            gameCell[d-4].textContent=''
            gameCell[d-4].classList.remove('tile')
        }
        else if(gameCell[d].textContent&&!gameCell[d-4].textContent&&gameCell[d-8].textContent&&Number(gameCell[d].textContent)===Number(gameCell[d-8].textContent)){
            gameCell[d].textContent=Number(gameCell[d].textContent)+Number(gameCell[d-8].textContent)
            gameCell[d-8].textContent=''
            gameCell[d-8].classList.remove('tile')
        }
        else if(gameCell[d].textContent&&!gameCell[d-4].textContent&&!gameCell[d-8].textContent&&gameCell[d-12].textContent&&Number(gameCell[d].textContent)===Number(gameCell[d-12].textContent)){
            gameCell[d].textContent=Number(gameCell[d].textContent)+Number(gameCell[d-12].textContent)
            gameCell[d-12].textContent=''
            gameCell[d-12].classList.remove('tile')
        }
    })
    downSecond.forEach((d)=>{

        if(gameCell[d].textContent&&gameCell[d-4].textContent&&Number(gameCell[d].textContent)===Number(gameCell[d-4].textContent)){            
            gameCell[d].textContent=Number(gameCell[d].textContent)+Number(gameCell[d-4].textContent)
            gameCell[d-4].textContent=''
            gameCell[d-4].classList.remove('tile')            
        }

        else if(gameCell[d].textContent&&!gameCell[d-4].textContent&&gameCell[d-8].textContent&&Number(gameCell[d].textContent)===Number(gameCell[d-8].textContent)){
            gameCell[d].textContent=Number(gameCell[d].textContent)+Number(gameCell[d-8].textContent)
            gameCell[d-8].textContent=''
            gameCell[d-8].classList.remove('tile') 
        }

    })

    downThird.forEach((d)=>{
        
        if(gameCell[d].textContent&&gameCell[d-4].textContent&&Number(gameCell[d].textContent)===Number(gameCell[d-4].textContent)){            
            gameCell[d].textContent=Number(gameCell[d].textContent)+Number(gameCell[d-4].textContent)
            gameCell[d-4].textContent=''
            gameCell[d-4].classList.remove('tile')            
        } 
    })
    removeEmptyDown()
    checkColor()
    createNewTiles()
    createNewTiles()
    upError=''
    rightError=''
    leftError=''
    }
    catch(err){
        downError=err
    }
}

function moveLeft(){
    try{
    leftFirst.forEach((d)=>{
        if(gameCell[d].textContent&&gameCell[d+1].textContent&&Number(gameCell[d].textContent)===Number(gameCell[d+1].textContent)){
            gameCell[d].textContent=Number(gameCell[d].textContent)+Number(gameCell[d+1].textContent)
            gameCell[d+1].textContent=''
            gameCell[d+1].classList.remove('tile')
        }
        else if(gameCell[d].textContent&&!gameCell[d+1].textContent&&gameCell[d+2].textContent&&Number(gameCell[d].textContent)===Number(gameCell[d+2].textContent)){
            gameCell[d].textContent=Number(gameCell[d].textContent)+Number(gameCell[d+2].textContent)
            gameCell[d+2].textContent=''
            gameCell[d+2].classList.remove('tile')
        }
        else if(gameCell[d].textContent&&!gameCell[d+1].textContent&&!gameCell[d+2].textContent&&gameCell[d+3].textContent&&Number(gameCell[d].textContent)===Number(gameCell[d+3].textContent)){
            gameCell[d].textContent=Number(gameCell[d].textContent)+Number(gameCell[d+3].textContent)
            gameCell[d+3].textContent=''
            gameCell[d+3].classList.remove('tile')
        }
    })
    leftSecond.forEach((d)=>{

        if(gameCell[d].textContent&&gameCell[d+1].textContent&&Number(gameCell[d].textContent)===Number(gameCell[d+1].textContent)){            
            gameCell[d].textContent=Number(gameCell[d].textContent)+Number(gameCell[d+1].textContent)
            gameCell[d+1].textContent=''
            gameCell[d+1].classList.remove('tile')            
        }

        else if(gameCell[d].textContent&&!gameCell[d+1].textContent&&gameCell[d+2].textContent&&Number(gameCell[d].textContent)===Number(gameCell[d+2].textContent)){
            gameCell[d].textContent=Number(gameCell[d].textContent)+Number(gameCell[d+2].textContent)
            gameCell[d+2].textContent=''
            gameCell[d+2].classList.remove('tile') 
        }

    })

    leftThird.forEach((d)=>{
        
        if(gameCell[d].textContent&&gameCell[d+1].textContent&&Number(gameCell[d].textContent)===Number(gameCell[d+1].textContent)){            
            gameCell[d].textContent=Number(gameCell[d].textContent)+Number(gameCell[d+1].textContent)
            gameCell[d+1].textContent=''
            gameCell[d+1].classList.remove('tile')            
        } 
    })
    removeEmptyLeft()
    checkColor()
    createNewTiles()
    createNewTiles()
    upError=''
    downError=''
    rightError=''
    }
    catch(err){
        leftError=err
    }
}

function moveRight(){
    try{
    rightFirst.forEach((d)=>{
        if(gameCell[d].textContent&&gameCell[d-1].textContent&&Number(gameCell[d].textContent)===Number(gameCell[d-1].textContent)){
            gameCell[d].textContent=Number(gameCell[d].textContent)+Number(gameCell[d-1].textContent)
            gameCell[d-1].textContent=''
            gameCell[d-1].classList.remove('tile')
        }
        else if(gameCell[d].textContent&&!gameCell[d-1].textContent&&gameCell[d-2].textContent&&Number(gameCell[d].textContent)===Number(gameCell[d-2].textContent)){
            gameCell[d].textContent=Number(gameCell[d].textContent)+Number(gameCell[d-2].textContent)
            gameCell[d-2].textContent=''
            gameCell[d-2].classList.remove('tile')
        }
        else if(gameCell[d].textContent&&!gameCell[d-1].textContent&&!gameCell[d-2].textContent&&gameCell[d-3].textContent&&Number(gameCell[d].textContent)===Number(gameCell[d-3].textContent)){
            gameCell[d].textContent=Number(gameCell[d].textContent)+Number(gameCell[d-3].textContent)
            gameCell[d-3].textContent=''
            gameCell[d-3].classList.remove('tile')
        }
    })
    rightSecond.forEach((d)=>{
        if(gameCell[d].textContent&&gameCell[d-1].textContent&&Number(gameCell[d].textContent)===Number(gameCell[d-1].textContent)){            
            gameCell[d].textContent=Number(gameCell[d].textContent)+Number(gameCell[d-1].textContent)
            gameCell[d-1].textContent=''
            gameCell[d-1].classList.remove('tile')            
        }

        else if(gameCell[d].textContent&&!gameCell[d-1].textContent&&gameCell[d-2].textContent&&Number(gameCell[d].textContent)===Number(gameCell[d-2].textContent)){
            gameCell[d].textContent=Number(gameCell[d].textContent)+Number(gameCell[d-2].textContent)
            gameCell[d-2].textContent=''
            gameCell[d-2].classList.remove('tile') 
        }

    })

    rightThird.forEach((d)=>{
        
        if(gameCell[d].textContent&&gameCell[d-1].textContent&&Number(gameCell[d].textContent)===Number(gameCell[d-1].textContent)){            
            gameCell[d].textContent=Number(gameCell[d].textContent)+Number(gameCell[d-1].textContent)
            gameCell[d-1].textContent=''
            gameCell[d-1].classList.remove('tile')            
        } 
    })
    removeEmptyRight()
    checkColor()
    createNewTiles()
    createNewTiles()
    upError=''
    downError=''
    leftError=''
    }
    catch(err){
        rightError=err
    }

}
window.addEventListener('keyup',function (e){
    checkValid()
    let direction=e.code
    if(direction==='ArrowUp') moveUp();
    if(direction==='ArrowDown') moveDown();
    if(direction==='ArrowLeft') moveLeft();
    if(direction==='ArrowRight') moveRight();
    
})
let touchEndX,touchStartX,touchStartY,touchEndY;
window.addEventListener('touchstart',function(e){
    touchStartX=e.changedTouches[0].screenX
    touchStartY=e.changedTouches[0].screenY
})
window.addEventListener('touchend',function(e){
    touchEndX=e.changedTouches[0].screenX
    touchEndY=e.changedTouches[0].screenY
    touchDetect()
})
function touchDetect(){
    if(Math.abs(touchStartY-touchEndY)<=30 && (touchEndX-touchStartX) >=50 ) moveRight()
    if(Math.abs(touchStartY-touchEndY)<=30 && (touchStartX-touchEndX) >=50) moveLeft()
    if(Math.abs(touchStartX-touchEndX)<=30 && (touchStartY-touchEndY) >=50) moveUp()
    if(Math.abs(touchStartX-touchEndX)<=30 && (touchEndY-touchStartY) >=50) moveDown()

}
createNewTiles()
createNewTiles()
