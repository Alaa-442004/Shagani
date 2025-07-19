fetch('../js/data.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('workout-text').textContent = data.workout;
    document.getElementById('nutrition-text').textContent = data.nutrition;
    document.getElementById('weight-text').textContent = data.weight;
    document.getElementById('community-text').textContent = data.community;
  })
  .catch(error => {
    console.error('Error loading data:', error);
  });
