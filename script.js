document.body.addEventListener('click', (event)=>{

  let fire = document.createElement('div');
  fire.className = "flame";
  document.body.append(fire);

  setTimeout(()=>{    
    fire.style.top = `${event.clientY}px`;
    fire.style.left = `${event.clientX}px`;
  }, 300);

  setTimeout(()=>{
    fire.style.transform = "rotate(0deg)"
    fire.style.animation = "bite .1s infinite alternate"
  }, 2000)

  setTimeout(()=>{
    fire.style.display = "none";
  }, 10000)

  let audio = new Audio();
  audio.preload = 'auto';
  audio.src = './audio.mp3';
  audio.play();
})