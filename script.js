function volume_sphere() {
    //Write your code here
  const radiusInput = document.getElementById('radius');
  const radius = parseFloat(radiusInput.value);
  if (!isNaN(radius)) {
    const volume = (4/3) * Math.PI * Math.pow(radius, 3);

    // Update the "Volume" field with the calculated volume
    const volumeField = document.getElementById('volume');
    volumeField.value = volume.toFixed(2); 
  } else {
    // alert('Please enter a valid radius.');
  }

  return false;  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
