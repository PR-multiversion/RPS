let rotation="rotate(360deg)";
let comp=0;
let player=0;
let play_score=0;
let com_score=0;
function rotate(clicked_id)
{
    if(clicked_id == 1)
    {
        player =clicked_id;
        computer();
        document.querySelector('.opp').style.background="url(https://www.pngitem.com/pimgs/m/109-1094400_rock-paper-scissors-png-clipart-rock-paper-scissor.png)";
        document.querySelector('.opp').style.backgroundSize="100% 100%";
        
        document.querySelector('.opp').style.transition ="0.2s";
        document.querySelector('.opp').style.transform = rotation;
        document.querySelector('.com').style.transition ="0.2s";
        document.querySelector('.com').style.transform = rotation;
        if(rotation == "rotate(360deg)")
        {
            rotation="rotate(720deg)";
        }
        else{
            rotation="rotate(360deg)"
        }
        result();
        setTimeout(() => {
            const box = document.querySelector('.show');
          
            // 👇️ removes element from DOM
            box.style.display = 'block';
          
            // 👇️ hides element (still takes up space on page)
            // box.style.visibility = 'hidden';
          }, 0.2); // 👈️ time in milliseconds
        
        setTimeout(() => {
            const box = document.querySelector('.show');
            box.style.display = 'none';
          }, 1000);
    }
    else if(clicked_id == 2)
    {
        player=clicked_id;
        computer();
        document.querySelector('.opp').style.background="url(https://www.pngitem.com/pimgs/m/266-2667252_transparent-rock-paper-scissors-clipart-rock-paper-scissors.png)";
        document.querySelector('.opp').style.backgroundSize="100% 100%";
        document.querySelector('.opp').style.transition ="0.2s";
        document.querySelector('.opp').style.transform = rotation;
        document.querySelector('.com').style.transition ="0.2s";
        document.querySelector('.com').style.transform = rotation;
        if(rotation == "rotate(360deg)")
        {
            rotation="rotate(0deg)";
        }
        else{
            rotation="rotate(360deg)"
        }
        result();
        setTimeout(() => {
            const box = document.querySelector('.show');
          
            // 👇️ removes element from DOM
            box.style.display = 'block';
          
            // 👇️ hides element (still takes up space on page)
            // box.style.visibility = 'hidden';
          }, 0.2); // 👈️ time in milliseconds
        
        setTimeout(() => {
            const box = document.querySelector('.show');
            box.style.display = 'none';
          }, 1000);
    }
    else
    {
        player=clicked_id;
        computer();
        document.querySelector('.opp').style.background="url(https://www.kindpng.com/picc/m/502-5025794_rock-paper-scissors-clipart-hd-png-download.png)";
        document.querySelector('.opp').style.backgroundSize="100% 100%";
        document.querySelector('.opp').style.transition ="0.2s";
        document.querySelector('.opp').style.transform = rotation;
        document.querySelector('.com').style.transition ="0.2s";
        document.querySelector('.com').style.transform = rotation;
        if(rotation == "rotate(360deg)")
        {
            rotation="rotate(720deg)";
        }
        else{
            rotation="rotate(360deg)"
        }
        result();
        setTimeout(() => {
            const box = document.querySelector('.show');
          
            // 👇️ removes element from DOM
            box.style.display = 'block';
          
            // 👇️ hides element (still takes up space on page)
            // box.style.visibility = 'hidden';
          }, 0.2); // 👈️ time in milliseconds
        
        setTimeout(() => {
            const box = document.querySelector('.show');
            box.style.display = 'none';
          }, 1000); // 👈️ time in milliseconds
          
          
    }
}

function computer()
{
    let random= Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    comp=random;
    if(random == 1)
    {
        
        document.querySelector('.com').style.background="url(https://www.pngitem.com/pimgs/m/109-1094400_rock-paper-scissors-png-clipart-rock-paper-scissor.png)";
        document.querySelector('.com').style.backgroundSize="100% 100%";
    }
    else if(random == 2)
    {
        document.querySelector('.com').style.background="url(https://www.pngitem.com/pimgs/m/266-2667252_transparent-rock-paper-scissors-clipart-rock-paper-scissors.png)";
        document.querySelector('.com').style.backgroundSize="100% 100%"; 
    }
    else{
        document.querySelector('.com').style.background="url(https://www.kindpng.com/picc/m/502-5025794_rock-paper-scissors-clipart-hd-png-download.png)";
        document.querySelector('.com').style.backgroundSize="100% 100%";
    }
}
function result()
{
    const box = document.querySelector('.show .para');
    let point1 = document.querySelector('.play-point');
    let point2= document.querySelector('.com-point');
    const oppo = comp;
    const play = Number( player);
    switch(play)
    {
        
        case oppo:
            box.innerHTML = "Tie game!";
            break;
        case 1:
            if(oppo === 2)
            {
                box.innerHTML = "computer wins!";
                com_score+=1;
                point2.innerHTML=com_score;

            }
            else{
                box.innerHTML = "Player wins!";
                play_score+=1;
                point1.innerHTML=play_score;
            }
            break;
        case 2:
            if(oppo === 3)
            {
                box.innerHTML = "Computer wins!";
                com_score+=1;
                point2.innerHTML=com_score;
            }
            else
            {
                box.innerHTML = "Player wins!";
                play_score+=1;
                point1.innerHTML=play_score;
            }
            break;
        default:
            if(oppo === 1)
            {
                box.innerHTML = "Computer wins!";
                com_score+=1;
                point2.innerHTML=com_score;
            }
            else{
                box.innerHTML = "Player wins!";
                play_score+=1;
                point1.innerHTML=play_score;
            }
            break;
    }
}
function restart()
{
    let point1 = document.querySelector('.play-point');
    let point2= document.querySelector('.com-point');
    com_score=0;
    play_score=0;
    point2.innerHTML=0;
    point1.innerHTML=0;
}