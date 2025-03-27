const artist = document.getElementById("artist-name");
const song = document.getElementById('song-name');

const altArtist = document.getElementById('alt-artist');

const altSong = document.getElementById('alt-song');

const postDescription = document.getElementById('postDescription');

const myTags = document.getElementById('my-tags');

const imageAlternative = document.getElementById("img-alt");

const totalChars = document.getElementById('totalChars');

const submitBtn = document.getElementById('submit');

const resetBtn = document.getElementById('reset');

resetBtn.addEventListener('click',function(){
    artist.value="";
    song.value="";

    altArtist.value="";
    altSong.value ="";
    
})

submitBtn.addEventListener('click',function(){

    // const myFinalTags= (`${song.value}, biography of ${song.value}, songs of ${song.value}, Chords of ${song.value},Lyrics of ${song.value},Guitar Chords of ${song.value},${song.value} Lyrics and Chords,Song Key of ${song.value},${song.value} BPM,${song.value} by ${artist.value}`);
    const myFinalTags= (`${song.value}, lyrics of ${song.value}, chords of ${song.value},Guitar Chords of ${song.value},${song.value} Lyrics and Chords, Song Key of ${song.value}, ${song.value} BPM, ${song.value} by ${artist.value}`);

        myTags.value=myFinalTags;
        totalChars.innerHTML=myFinalTags.length;


    const myPostDescription = `Guitar lyrics and chords of "${song.value}" by "${artist.value}" with song BPM, Guitar Tutorial, Guitar Lesson, Key music by "Chords Nepal"`;
    postDescription.value = myPostDescription;

    const ImageAlt = `${song.value} - ${artist.value} Lyrics and Chords`;

    imageAlternative.value = ImageAlt;
    
})

function myFunction() {
      
    myTags.select();
    myTags.setSelectionRange(0, 99999); 
  
    document.execCommand("copy");

  }

  function myEndingText(){
    endingText.select();
    endingText.setSelectionRange(0, 99999);  
    document.execCommand("copy");

  }

  function siteDescription(){
    postDescription.select();
    postDescription.setSelectionRange(0, 99999);  
    document.execCommand("copy");

  }

  function altImage(){
    imageAlternative.select();
    imageAlternative.setSelectionRange(0, 99999);  
    document.execCommand("copy");

  }
  // document.getElementById('bpmContainer').addEventListener('click', function (event) {

  //   console.log("hello")

  //   if (event.target.id === 'bpmContainer') {
  //     handleBPMClick();
  //   }
  
  //   function handleBPMClick() {
  //     let beats = [];
  //     let isRunning = false;
  //     let lastClickTime;
  
  //     // Remove the click event listener temporarily
  //     document.removeEventListener('click', handleBPMClick);
  
  //     if (!isRunning) {
  //       beats = [];
  //       isRunning = true;
  //       lastClickTime = Date.now();
  
  //       document.getElementById('totalBpm').innerText = 'Running...';
  
  //       document.addEventListener('click', handleBeat);
  //     }
  
  //     function handleBeat() {
  //       let currentTime = Date.now();
  //       beats.push(currentTime);
  
  //       if (beats.length >= 2) {
  //         updateBPM();
  //       }
  
  //       lastClickTime = currentTime;
  //     }
  
  //     function updateBPM() {
  //       let totalElapsedTime = beats[beats.length - 1] - beats[0];
  //       let averageInterval = totalElapsedTime / (beats.length - 1);
  //       let currentBPM = 60000 / averageInterval;  // Convert milliseconds to minutes
  
  //       document.getElementById('totalBpm').innerText = `BPM: ${Math.round(currentBPM)}`;
  
  //       if (Date.now() - lastClickTime > 5000) {
  //         isRunning = false;
  //         document.getElementById('totalBpm').innerText = 'Click to start BPM counter';
  //         document.removeEventListener('click', handleBeat);
  
  //         // Re-add the click event listener after BPM calculation is complete
  //         document.addEventListener('click', handleBPMClick);
  //       }
  //     }
  //   }
  // });
  
  
const videoUrlInput = document.getElementById("generateImage")
const btnThumbnailGen = document.getElementById("btnThumbnailGen")


btnThumbnailGen.addEventListener("click", () => {

  let exurl = "https://youtu.be/7aoDZ8UeUxU"
  // https://www.youtube.com/watch?v=7aoDZ8UeUxU

  const url = videoUrlInput.value;
  const urlId = (url.split("=")[1]) || url.split("/")[3]

  const thumbnailURL = `https://img.youtube.com/vi/${urlId}/maxresdefault.jpg`
  const thumbnailUrlSD = `https://img.youtube.com/vi/${urlId}/sddefault.jpg`
  const thumbnailNormal = `https://i3.ytimg.com/vi/${urlId}/hqdefault.jpg`
  document.getElementById("generatedURL").value = thumbnailURL

  const thumbnailImage = document.createElement('img');
  thumbnailImage.src = thumbnailURL;
  thumbnailImage.alt = 'Thumbnail';

  const thumbnailSection = document.getElementById('HighQuality');
  thumbnailSection.innerHTML = '<p> High Quality </p>'; // Clear previous content
  thumbnailSection.appendChild(thumbnailImage);


  //for standard Quality

  const thumbnailImageSd = document.createElement('img');
  thumbnailImageSd.src = thumbnailUrlSD;
  thumbnailImageSd.alt = 'Thumbnailsd';

  const thumbnailSectionSD = document.getElementById('StandardQuality');
  thumbnailSectionSD.innerHTML = '<p> Standard Quality </p>'; // Clear previous content
  thumbnailSectionSD.appendChild(thumbnailImageSd);


  //for NormalImage
  const thumbnailImageNormal = document.createElement('img');
  thumbnailImageNormal.src = thumbnailNormal;
  thumbnailImageNormal.alt = 'Thumbnailsd';

  const thumbnailNormalSection = document.getElementById('NormalQuality');
  thumbnailNormalSection.innerHTML = '<p> Normal Quality </p>'; // Clear previous content
  thumbnailNormalSection.appendChild(thumbnailImageNormal);

})

const generatedURL = document.getElementById("generatedURL")

generatedURL.addEventListener("click", () => {
  console.log("clicked")
  console.log(generatedURL.value)
  generatedURL.select();
  generatedURL.setSelectionRange(0, 99999);  
  document.execCommand("copy");
})
