function loadHTMLContent() {
    // Get the container to load HTML content
    var container = document.getElementById('loadedContent');
  
    // Load content.html using fetch API
    fetch('content.html')
      .then(response => response.text())
      .then(data => {
        // Set the loaded HTML content to the container
        container.innerHTML = data;
  
        // Highlight code blocks in the loaded content
        var codeBlocks = container.querySelectorAll('code');
        codeBlocks.forEach(function(codeBlock) {
          Prism.highlightElement(codeBlock);
        });
      })
      .catch(error => console.log('Error loading HTML content:', error));
  }
  