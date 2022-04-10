// Create Variables
// const span= document.querySelector('.copy');
const gLink= document.getElementById('glink');
const btn= document.getElementById('btn');
const dowloadLink= document.getElementById('download-link');
const embedAudio = document.getElementById('embed-audio');
const embedVideo = document.getElementById('embed-video');
const clearBtn=document.getElementById('clear');

btn.addEventListener('click', generateLink);
clearBtn.addEventListener('click',()=>{
    gLink.value="";
    dowloadLink.value="";
    embedAudio.value="";
    embedVideo.value="";
})

function generateLink(e){
    e.preventDefault();
    const gLinkValue = gLink.value;
    const confirmLink=gLinkValue.includes('https://drive.google.com/file/d');
    if (confirmLink == true){
        const replaceStringLink = gLinkValue.substring(gLinkValue.indexOf('/view'), gLinkValue.length);
        const getDownloadLink = gLinkValue
        .replace("https://drive.google.com/file/d/", "https://drive.google.com/uc?export=download&id=")
        .replace(replaceStringLink," ");

        dowloadLink.value = getDownloadLink;
        console.log(getDownloadLink)
        function copyText(target){
            if (target.value == ""){
                alert('Please generate a download link')
            } else {
                target.select();
                document.execCommand('copy');
                alert('Link has been copied to clipboard');
            }
        }
        const copy = document.querySelector('.copy')
        copy.addEventListener('click', () =>{
            return copyText(dowloadLink);
        } );
        // Embed audio function
        const audio1 = '<audio width="300" height="32" controls="controls" src="';
        const audio2 = '" type="audio/mp3"></audio>';
        embedAudio.value=`${audio1}${getDownloadLink}${audio2}`;
        // Copy audio embed code
        const copyAudio = document.querySelector('.copy-audio');
        copyAudio.addEventListener('click',()=>{
            return copyText(embedAudio);
        })

        //Embed video function
        const getVideoLink = gLinkValue
        .replace(replaceStringLink," ")
        const video1 = '<iframe src="';
        const video2 = '/preview" width="560" height="315"></iframe>';
        embedVideo.value=`${video1}${getVideoLink}${video2}`;

        const copyVideo = document.querySelector('.copy-video');
        copyVideo.addEventListener('click',()=>{
            return copyText(embedVideo);
        });

    }else{
        alert('Invalid link: Please enter a Google Drive file link.');
    }

}