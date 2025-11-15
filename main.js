function diffFromDate(dateString) {
  const past = new Date(dateString);
  const now = new Date();

  let year = now.getFullYear() - past.getFullYear();
  let month = now.getMonth() - past.getMonth();
  let day = now.getDate() - past.getDate();
  let hour = now.getHours() - past.getHours();
  let minute = now.getMinutes() - past.getMinutes();
  let second = now.getSeconds() - past.getSeconds();

  // Adjust negative values with borrowing logic
  if (second < 0) {
    second += 60;
    minute--;
  }
  if (minute < 0) {
    minute += 60;
    hour--;
  }
  if (hour < 0) {
    hour += 24;
    day--;
  }
  
  if (day < 0) {
    // get days in previous month
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    day += prevMonth.getDate();
    month--;
  }
  if (month < 0) {
    month += 12;
    year--;
  }

  return {
    year,
    month,
    day,
    hour,
    minute,
    second
  };
}


function showDiff() {
  // Replace this date with what you want to compare
  const result = diffFromDate("2024-06-10T17:30:00");

  document.getElementById("years").textContent = result.year;
  document.getElementById("months").textContent = result.month;
  document.getElementById("days").textContent = result.day;
  document.getElementById("hours").textContent = result.hour;
  document.getElementById("minutes").textContent = result.minute;
  document.getElementById("seconds").textContent = result.second;

}
 setInterval(showDiff, 1000);

 //Bear  button functionality

 document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('bear-button');
    const container = document.getElementById('animation-container');
    
    // Array of bear-related emojis/images to use
    const bears = ['💖', '🖤', '🌝', '🩵', '💚']; 
    const PARTICLE_COUNT = 400; // Number of bears to generate on click
    const ANIMATION_DURATION = 1500; // 1.5 seconds

    button.addEventListener('click', (event) => {
        // 1. Get the exact center coordinates of the button
       const rect = button.getBoundingClientRect();
const startX = rect.left + window.scrollX + rect.width / 2;
const startY = rect.top + window.scrollY + rect.height / 2;

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            // 2. Create the particle element
            const particle = document.createElement('span');
            particle.classList.add('particle');
            
            // Randomly select a bear emoji
            const emoji = bears[Math.floor(Math.random() * bears.length)];
            particle.textContent = emoji;

            // 3. Set the initial position (center of the button)
            particle.style.left = `${startX}px`;
            particle.style.top = `${startY}px`;

            // 4. Calculate a random ending point (explosion vector)
            // Use polar coordinates for a more circular explosion
            const angle = Math.random() * 360; // 0 to 360 degrees
            const radius = Math.random() * 200 + 100; // Distance from center (100px to 300px)
            
            // Convert polar to Cartesian coordinates (X and Y displacement)
            const endX = radius * Math.cos(angle * (Math.PI / 180));
            const endY = radius * Math.sin(angle * (Math.PI / 180));

            // 5. Apply CSS Variables for Keyframe Animation
            particle.style.setProperty('--end-x', `${endX}px`);
            particle.style.setProperty('--end-y', `${endY}px`);

            // Apply animation styles
            particle.style.animationName = 'explode-and-fade';
            particle.style.animationDuration = `${ANIMATION_DURATION}ms`;
            particle.style.animationTimingFunction = 'ease-out';
            
            // Randomize delay slightly to make the effect look more natural
            const delay = Math.random() * 100; 
            particle.style.animationDelay = `${delay}ms`;

            // 6. Append and clean up
            container.appendChild(particle);

            // Remove the element after the animation is complete
            setTimeout(() => {
                particle.remove();
            }, ANIMATION_DURATION + delay);
        }
    });
});

// This is conceptual JS for illustration, not a complete, runnable script.

document.addEventListener('DOMContentLoaded', () => {
    const images = [
        "image1.jpg", 
         "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg",
        "image6.jpg",
        "image7.jpg"
    ];
    const imageElement = document.querySelector('.carousel-image');
    const indexElement = document.querySelector('.photo-index');
    const prevButton = document.querySelector('.prev-arrow');
    const nextButton = document.querySelector('.next-arrow');

    let currentIndex = 0;

    function updateCarousel() {
        // Update the image source
        imageElement.src = images[currentIndex];
        
        // Update the index text
        indexElement.textContent = `${currentIndex + 1}/${images.length}`;
        
        // In a real app, you would also add CSS classes here to handle sliding animations.
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    });

    // Initialize the carousel
    updateCarousel();
});