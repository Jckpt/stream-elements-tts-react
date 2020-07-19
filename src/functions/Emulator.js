let emulator = async (select, input) => {
  let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  let speak = await fetch(`${proxyUrl}+https://api.streamelements.com/kappa/v2/speech?voice=${select}&text=${encodeURIComponent(input.trim())}`);
  let mp3 = await speak.blob();

  let blobUrl = URL.createObjectURL(mp3);
  /*     let audio = document.getElementById('audio');
          audio.pause();
          audio.load();
          audio.play(); */
  return { blobUrl };
};

export default emulator;
