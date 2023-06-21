export const App = () => {
  return (
    <div className="App">
      <head>
  <title>name</title>
  
  <style>
    /* Modal styles */
    .modal {
      display: none;
      position: fixed;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgba(0, 0, 0, 0.4);
    }
    
    .modal-content {
      background-color: #fefefe;
      margin: 15% auto;
      padding: 20px;
      border: 1px solid #888;
      width: 80%;
      max-width: 500px;
    }
    
    .close {
      color: #aaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
      cursor: pointer;
    }
    
    .close:hover,
    .close:focus {
      color: black;
      text-decoration: none;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <header>
    <h1>Welcome to Your Website</h1>
    <button onclick="openModal()">Click here</button>

    <div id="myModal" class="modal">
      <div class="modal-content">
        <span class="close" onclick="closeModal()">&times;</span>
        <p>asdasdasd.</p>
      </div>
    </div>

    <script>
      // Open the modal
      function openModal() {
        const modal = document.getElementById("myModal");
        modal.style.display = "block";
      }
      
      // Close the modal
      function closeModal() {
        const modal = document.getElementById("myModal");
        modal.style.display = "none";
      }
    </script>
  </header>

  <main>
    <h2>About</h2>
    <p>This is the main content of your website. You can add paragraphs, headings, images, and other elements here.</p>
  </main>

  <footer>
    <p>&copy; 2023 Your Website. All rights reserved.</p>
    
  </footer>
      <h1>AppJsx</h1>
      
    </div>
  );
};
  