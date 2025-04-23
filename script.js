// Complete moods object with additional moods
const moods = {
    happy: {
      colors: ['#FFE066', '#1a1b1c', '#FFD93D', '#6BCB77'],
      emojis: ['😊', '😄', '😁', '🎉', '🥳', '✨', '💫', '👍'],
      avatars: ['😎', '🤩', '✨', '🎈', '🌞', '🌈', '🦄', '🍦'],
      animations: ['pulse', 'bounce', 'rotate', 'shake'],
      
      fonts: ['Comic Sans MS', 'Nunito', 'Quicksand', 'Bubblegum Sans']
    },
    calm: {
      colors: ['#A8DADC', '#457B9D', '#F1FAEE', '#E63946'],
      emojis: ['😌', '🧘‍♂️', '🌿', '💧', '🌱', '🍃', '🌙', '🌊'],
      avatars: ['😴', '🥱', '☁️', '🦋', '🌸', '🧠', '🧿', '🕊️'],
      animations: ['fade', 'pulse'],
     
      fonts: ['Montserrat', 'Lato', 'Open Sans', 'Raleway']
    },
    energetic: {
      colors: ['#FF7F50', '#FF4500', '#FFD700', '#ADFF2F'],
      emojis: ['⚡', '🔥', '🚀', '🎶', '💯', '⭐', '💪', '🏆'],
      avatars: ['🤘', '🏋️', '💥', '🎊', '🏃‍♀️', '🤾‍♂️', '🤸‍♀️', '🚴‍♂️'],
      animations: ['pulse', 'shake', 'bounce'],
   
      fonts: ['Bebas Neue', 'Oswald', 'Anton', 'Bangers']
    },
    sad: {
      colors: ['#4D96FF', '#3E64FF', '#2C2C54', '#1B262C'],
      emojis: ['😢', '😞', '💧', '🌧️', '🌫️', '🥀', '💔', '📉'],
      avatars: ['🥺', '😭', '🖤', '😶', '🌑', '🕸️', '☔', '🌩️'],
      animations: ['fade'],
   
      fonts: ['Merriweather', 'Playfair Display', 'Georgia', 'Garamond']
    },
    romantic: {
      colors: ['#FF69B4', '#FA8072', '#FFDDF4', '#E6005C'],
      emojis: ['❤️', '💕', '💘', '💖', '💞', '💓', '🌹', '✨'],
      avatars: ['💑', '👩‍❤️‍👨', '💏', '💋', '🌙', '🍷', '🍓', '🌸'],
      animations: ['pulse', 'fade'],
   
      fonts: ['Dancing Script', 'Great Vibes', 'Parisienne', 'Tangerine']
    },
    mysterious: {
      colors: ['#9370DB', '#483D8B', '#301934', '#4B0082'],
      emojis: ['🔮', '✨', '🌟', '👁️', '🧿', '🌙', '⭐', '🪄'],
      avatars: ['🧙‍♀️', '🧙‍♂️', '🔍', '👤', '🦉', '🦇', '🕸️', '🎭'],
      animations: ['fade', 'pulse'],
   
      fonts: ['Cinzel', 'Philosopher', 'Eczar', 'Almendra']
    },
    playful: {
      colors: ['#FF6EC7', '#7AFCFF', '#FEFF9E', '#FFF740'],
      emojis: ['🎮', '🎯', '🎪', '🎨', '🧩', '🎭', '🎡', '🎪'],
      avatars: ['🤪', '🤹‍♀️', '🎲', '🦄', '🌈', '🧸', '🎠', '🎪'],
      animations: ['bounce', 'shake', 'rotate'],
    
      fonts: ['Fredoka One', 'Chewy', 'Luckiest Guy', 'Patrick Hand']
    },
    custom: {
      colors: [],
      emojis: ['🔍', '🎨', '✏️', '📝'],
      avatars: ['👤', '🧑‍🎨', '🧑‍💻', '👾'],
      animations: ['pulse', 'fade', 'bounce', 'shake', 'rotate'],
      
      fonts: ['Your Custom Font', 'Personal Choice', 'Favorite Typography', 'Unique Style']
    }
  };
  
  // Quotes for each mood
  const quotes = {
    happy: [
      {text: "Happiness is not by chance, but by choice.", author: "Jim Rohn"},
      {text: "The most wasted of all days is one without laughter.", author: "E.E. Cummings"},
      {text: "Happiness is when what you think, what you say, and what you do are in harmony.", author: "Mahatma Gandhi"},
      {text: "The happiness of your life depends upon the quality of your thoughts.", author: "Marcus Aurelius"}
    ],
    calm: [
      {text: "Peace comes from within. Do not seek it without.", author: "Buddha"},
      {text: "Calm mind brings inner strength and self-confidence.", author: "Dalai Lama"},
      {text: "The quieter you become, the more you can hear.", author: "Ram Dass"},
      {text: "Life isn't as serious as the mind makes it out to be.", author: "Eckhart Tolle"}
    ],
    energetic: [
      {text: "Energy and persistence conquer all things.", author: "Benjamin Franklin"},
      {text: "If you want to go fast, go alone. If you want to go far, go together.", author: "African Proverb"},
      {text: "The higher your energy level, the more efficient your body. The better you feel.", author: "Tony Robbins"},
      {text: "Action is the foundational key to all success.", author: "Pablo Picasso"}
    ],
    sad: [
      {text: "Even the darkest night will end and the sun will rise.", author: "Victor Hugo"},
      {text: "The wound is the place where the light enters you.", author: "Rumi"},
      {text: "There is a crack in everything, that's how the light gets in.", author: "Leonard Cohen"},
      {text: "In the middle of winter I at last discovered that there was in me an invincible summer.", author: "Albert Camus"}
    ],
    romantic: [
      {text: "Love is composed of a single soul inhabiting two bodies.", author: "Aristotle"},
      {text: "The best thing to hold onto in life is each other.", author: "Audrey Hepburn"},
      {text: "Where there is love there is life.", author: "Mahatma Gandhi"},
      {text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.", author: "Dr. Seuss"}
    ],
    mysterious: [
      {text: "The possession of knowledge does not kill the sense of wonder and mystery.", author: "Anais Nin"},
      {text: "The most beautiful experience we can have is the mysterious.", author: "Albert Einstein"},
      {text: "Mystery creates wonder and wonder is the basis of human's desire to understand.", author: "Neil Armstrong"},
      {text: "The universe is full of magical things patiently waiting for our wits to grow sharper.", author: "Eden Phillpotts"}
    ],
    playful: [
      {text: "You don't stop playing because you grow old; you grow old because you stop playing.", author: "George Bernard Shaw"},
      {text: "Play is the highest form of research.", author: "Albert Einstein"},
      {text: "Life must be lived as play.", author: "Plato"},
      {text: "It is a happy talent to know how to play.", author: "Ralph Waldo Emerson"}
    ],
    custom: [
      {text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde"},
      {text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt"},
      {text: "Whatever you are, be a good one.", author: "Abraham Lincoln"},
      {text: "The only way to do great work is to love what you do.", author: "Steve Jobs"}
    ]
  };
  
  // Track current mood and state
  let currentMood = '';
  let isPlaying = false;
  let savedCustomThemes = [];
  
  // Initialize the page
  document.addEventListener('DOMContentLoaded', function() {
    // Set default mood
    updateContent('happy');
    
    // Set up event listeners
  
    document.getElementById('modeToggle').addEventListener('click', toggleMode);
    
    // Set up color preview updaters
    document.getElementById('custom-color1').addEventListener('input', updateColorPreview);
    document.getElementById('custom-color2').addEventListener('input', updateColorPreview);
    document.getElementById('custom-color3').addEventListener('input', updateColorPreview);
    document.getElementById('custom-color4').addEventListener('input', updateColorPreview);
    
    // Initialize color preview
    updateColorPreview();
    
    // Add active state to mood buttons
    const moodButtons = document.querySelectorAll('.mood-buttons button');
    moodButtons.forEach(button => {
      button.addEventListener('click', function() {
        moodButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
      });
    });
    
    // Set first button as active by default
    moodButtons[0].classList.add('active');
    
    // Generate initial quote
    generateQuote();
    
    // Check for saved themes in localStorage
    loadSavedThemes();
    
    // Add background transition effect for page
    document.body.addEventListener('animationend', function() {
      this.classList.remove('bg-transition');
    });
  });
  
  // Load any saved custom themes from localStorage
  function loadSavedThemes() {
    const saved = localStorage.getItem('customThemes');
    if (saved) {
      savedCustomThemes = JSON.parse(saved);
      
      // Create button for each saved theme
      savedCustomThemes.forEach(theme => {
        addCustomThemeButton(theme);
      });
    }
  }
  
  // Add button for custom theme to the UI
  function addCustomThemeButton(theme) {
    const moodButtons = document.querySelector('.mood-buttons');
    const customBtn = document.createElement('button');
    customBtn.innerText = `✨ ${theme.name}`;
    customBtn.dataset.mood = 'saved-' + theme.name.toLowerCase().replace(/\s+/g, '-');
    customBtn.onclick = function() {
      applyCustomTheme(theme);
    };
    moodButtons.appendChild(customBtn);
  }
  
  // Apply a saved custom theme
  function applyCustomTheme(theme) {
    currentMood = 'custom';
    
    // Update custom moods with saved values
    moods.custom.colors = theme.colors;
    moods.custom.name = theme.name;
    
    // Update body background color
    document.body.style.backgroundColor = theme.colors[3];
    document.body.classList.add('bg-transition');
    
    // Update sections
    updateSection('color-section', theme.colors, true);
    updateSection('emoji-section', moods.custom.emojis);
  
    updateSection('animation-section', moods.custom.animations);

    updateSection('font-section', moods.custom.fonts);
    

    
    // Generate a new quote
    generateQuote();
  }
  
  // Update content based on selected mood
  function updateContent(mood) {
    currentMood = mood;
    
    // Show/hide custom theme section
    document.getElementById('customThemeSection').style.display = mood === 'custom' ? 'block' : 'none';
    
    // Update body background color based on mood with transition
    if (mood !== 'custom') {
      document.body.style.backgroundColor = moods[mood].colors[1];
      document.body.classList.add('bg-transition');
    }
    
    // Update sections
    updateSection('color-section', moods[mood].colors, true);
    updateSection('emoji-section', moods[mood].emojis);
    updateSection('animation-section', moods[mood].animations);
   
    updateSection('font-section', moods[mood].fonts);
    
   
    
    // Generate a new quote for this mood
    generateQuote();
  }
  
  // Update section content with items
  function updateSection(sectionId, items, isColor = false) {
    const section = document.getElementById(sectionId);
    section.innerHTML = '';
    
    items.forEach(item => {
      const div = document.createElement('div');
      div.className = 'item';
      
      if (isColor) {
        div.style.backgroundColor = item;
        div.innerText = item;
      } else if (sectionId === 'font-section') {
        div.style.fontFamily = item;
        div.innerText = 'Aa';
        div.style.fontSize = '2rem';
      } else {
        div.innerText = item;
      }
      
      // For animations
      if (sectionId === 'animation-section') {
        div.classList.add('animated-text');
        div.style.animationName = item;
        div.innerText = item;
      }
      
      // Add tooltip
      const tooltip = document.createElement('span');
      tooltip.className = 'tooltip';
      tooltip.innerText = 'Click to copy';
      div.appendChild(tooltip);
      
      div.onclick = () => {
        navigator.clipboard.writeText(item);
        tooltip.innerText = 'Copied!';
        
        // Add a visual feedback for copy
        div.classList.add('copied');
        setTimeout(() => {
          div.classList.remove('copied');
          tooltip.innerText = 'Click to copy';
        }, 1000);
      };
      
      section.appendChild(div);
    });
  }
  
  // Update color preview in custom theme creator
  function updateColorPreview() {
    const color1 = document.getElementById('custom-color1').value;
    const color2 = document.getElementById('custom-color2').value;
    const color3 = document.getElementById('custom-color3').value;
    const color4 = document.getElementById('custom-color4').value;
    
    const preview = document.getElementById('colorPreview');
    const divs = preview.querySelectorAll('div');
    
    divs[0].style.backgroundColor = color1;
    divs[1].style.backgroundColor = color2;
    divs[2].style.backgroundColor = color3;
    divs[3].style.backgroundColor = color4;
  }
  
  // Save custom theme
  function saveCustomTheme() {
    const name = document.getElementById('custom-name').value || 'My Mood';
    const color1 = document.getElementById('custom-color1').value;
    const color2 = document.getElementById('custom-color2').value;
    const color3 = document.getElementById('custom-color3').value;
    const color4 = document.getElementById('custom-color4').value;
    
    // Create theme object
    const theme = {
      name: name,
      colors: [color1, color2, color3, color4]
    };
    
    // Add to saved themes
    savedCustomThemes.push(theme);
    
    // Save to localStorage
    localStorage.setItem('customThemes', JSON.stringify(savedCustomThemes));
    
    // Add button to UI
    addCustomThemeButton(theme);
    
    // Update the custom mood
    moods.custom.colors = [color1, color2, color3, color4];
    
    // Update UI to show the custom colors
    updateSection('color-section', moods.custom.colors, true);
    
    // Change page background
    document.body.style.backgroundColor = color4;
    document.body.classList.add('bg-transition');
    
    // Show success message
    showNotification(`${name} has been created and saved!`);
  }
  
  // Show notification
  function showNotification(message) {
    // Check if notification element exists
    let notification = document.getElementById('notification');
    
    if (!notification) {
      notification = document.createElement('div');
      notification.id = 'notification';
      notification.style.position = 'fixed';
      notification.style.bottom = '20px';
      notification.style.right = '20px';
      notification.style.padding = '15px 20px';
      notification.style.background = '#4CAF50';
      notification.style.color = 'white';
      notification.style.borderRadius = '5px';
      notification.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
      notification.style.zIndex = '1000';
      notification.style.opacity = '0';
      notification.style.transition = 'opacity 0.3s ease';
      document.body.appendChild(notification);
    }
    
    notification.textContent = message;
    notification.style.opacity = '1';
    
    setTimeout(() => {
      notification.style.opacity = '0';
    }, 3000);
  }
  
  
  // Toggle between light and dark mode
  function toggleMode() {
    document.body.classList.toggle('light-mode');
    const modeToggle = document.getElementById('modeToggle');
    
    if (document.body.classList.contains('light-mode')) {
      modeToggle.innerText = '🌙';
      showNotification('Light mode activated');
      document.body.style.backgroundColor="#c98a4b";
    } else {
      modeToggle.innerText = '🌓';
      showNotification('Dark mode activated');
      document.body.style.backgroundColor="black";
    }
  }
  
  // Generate random quote based on current mood
  function generateQuote() {
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    
    // Get quotes for current mood
    const moodQuotes = quotes[currentMood];
    
    if (moodQuotes && moodQuotes.length > 0) {
      // Get random quote
      const randomIndex = Math.floor(Math.random() * moodQuotes.length);
      const randomQuote = moodQuotes[randomIndex];
      
      // Display with typing animation
      typeQuote(randomQuote.text, quoteText);
      quoteAuthor.textContent = '- ' + randomQuote.author;
    } else {
      quoteText.textContent = "Select a mood to get inspired";
      quoteAuthor.textContent = '';
    }
  }
  
  // Typing animation for quotes
  function typeQuote(text, element) {
    element.textContent = '';
    let i = 0;
    
    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, 30);
      }
    }
    
    type();
  }
  


  
  // Generate random color palette
  function generateRandomPalette() {
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    const color3 = getRandomColor();
    const color4 = getRandomColor();
    
    // Update color inputs
    document.getElementById('custom-color1').value = color1;
    document.getElementById('custom-color2').value = color2;
    document.getElementById('custom-color3').value = color3;
    document.getElementById('custom-color4').value = color4;
    
    // Update preview
    updateColorPreview();
    showNotification('Random color palette generated!');
  }
  