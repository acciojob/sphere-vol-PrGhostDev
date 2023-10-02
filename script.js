function volume_sphere() {
    //Write your code here
  const radiusInput = document.getElementById('radius');
  const radius = parseFloat(radiusInput.value);
  if (!isNaN(radius)) {
    const volume = (4/3) * Math.PI * Math.pow(radius, 3);
    const roundedVolume = volume.toFixed(4);
    const volumeField = document.getElementById('volume');
    volumeField.value = roundedVolume;
  }
  return false;  
} 
window.onload = function() {
  document.getElementById('MyForm').onsubmit = volume_sphere;
};