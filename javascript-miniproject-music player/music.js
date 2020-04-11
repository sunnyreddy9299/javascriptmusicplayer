const songs=[
    "bensound-anewbeginning.mp3",
    "bensound-creativeminds.mp3",
    "bensound-happyrock.mp3",
    "bensound-littleidea.mp3",
    "bensound-summer.mp3",
    "bensound-ukulele.mp3"   
]
const CreateSongList = () =>{
    const list= document.createElement('ol')
    for(let i=0;i<songs.length;i++){
        const item=document.createElement('li')
        item.appendChild(document.createTextNode(songs[i]))
        list.appendChild(item)
    }
    return list
}
const player=document.getElementById('Player')
document.getElementById('Songlist').appendChild(CreateSongList())
Songlist.onclick = (e) =>{
     //console.log(e)
     const clickedItem=e.target
     const source=document.getElementById('source')
     source.src='songs/'+clickedItem.innerText
     //console.log(clickedItem.innerText)
     document.getElementById('currentlyPlayingSong').innerText = "Currently Playing:"
     document.getElementById('currentSong').innerText = clickedItem.innerText
     player.load()
     player.play()
}
const PlayAudio = () =>{
    if(player.readyState){
        player.play()
    }
}
const PauseAudio = () =>{
    player.pause()
}
const changer =document.getElementById('VolumeChanger')
changer.oninput=(e)=>{
    //console.log(e)
    const vol =e.target.value
    player.volume=vol
}
const updateProgress =() =>{
    if(player.currentTime>0){
    const progress1=document.getElementById('progress')
    progress1.value=(player.currentTime/player.duration)*100
    }
}