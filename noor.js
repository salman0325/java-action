<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Inline Example</title>
  <style>
    /* Inline CSS */
    body {
      font-family: Arial, sans-serif;
      background-color: #f0f0f0;
      text-align: center;
    }
    .container {
      padding: 20px;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
      width: 80%;
      margin: 20px auto;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Inline HTML, CSS, and JavaScript Example for the cloud devops</h1>
    <p>This is an example of inline HTML, CSS, and JavaScript.</p>
    <button onclick="changeText()">Click me</button>
    <p id="demo">Click the button to change this text.</p>
  </div>

  <script>
    // Inline JavaScript
    function changeText() {
      document.getElementById("demo").innerHTML = "Text changed!";
    }
  </script>
</body>
</html>
