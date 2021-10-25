function wordSearch(){ 
    let word = document.getElementsByClassName("input")[0].value;
    let audioBox = document.querySelector('.audio');
    fetch(`https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=b874b7b1-f08f-41f0-948b-530978e079bf`)
    .then((res)=> res.json())
    .then((res1)=>{
        console.log(res1);
       
        const card=document.createElement('div');
        card.setAttribute('class','card');
        const cardbody=document.createElement('div');
        cardbody.setAttribute('class','card-body');
        const head=document.createElement('h5');
        head.setAttribute('class','card-title');
        head.innerHTML="Meaning:"
        
        const spann= document.createElement('span');
        spann.innerHTML=res1[0].fl;
    
        const p = document.createElement('p');
        p.innerHTML= res1[0].shortdef;
       
        const span= document.createElement('span');
        span.innerHTML=res1[1].fl;
    
        const p1 = document.createElement('p');
        p1.innerHTML= res1[1].shortdef;
      
        const head2= document.createElement('h5');
        head2.setAttribute('class','card-title');
        head2.innerHTML=`Words similar to ${word}`;
        
        const p2 = document.createElement('p');
        p2.innerHTML= res1[0].meta.stems;
    
        const head3=document.createElement('h5');
        head3.setAttribute('class','card-title');
        head3.innerHTML="Pronounciation";
        const br= document.createElement('br');
        const soundName = res1[0].hwi.prs[0].sound.audio;
        if(soundName) {
            renderSound(soundName);
        }
        function renderSound(soundName) {
            let subfolder = soundName.charAt(0);
            let soundSrc = `https://media.merriam-webster.com/soundc11/${subfolder}/${soundName}.wav?key=b874b7b1-f08f-41f0-948b-530978e079bf`;
        
            let aud = document.createElement('audio');
            aud.src = soundSrc;
            aud.controls = true;
            audioBox.append(aud);
        }

        cardbody.append(head,spann,p,span,p1,head2,p2,head3,br,audioBox);
        card.append(cardbody);
        document.body.append(card);
        
        document.onclick = function()
        {
            window.location.reload();
        }
    })
          
    .catch((err)=>{
        console.log(err);
    });
        
}

