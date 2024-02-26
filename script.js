document.addEventListener("DOMContentLoaded", function() {
    const folderButtonsContainer = document.getElementById("folderButtons");
    const folders = ["DIAGRAM", "PILIHAN GANDA"];
  
    folders.forEach(folder => {
      const button = document.createElement("button");
      button.textContent = folder;
      button.addEventListener("click", function() {
        window.open(folder + "/index.html", "_blank");
      });
      folderButtonsContainer.appendChild(button);
    });
  });
  