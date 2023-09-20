function retry() {
  // Get all installed extensions
  chrome.management.getAll(function(extensions) {
  // Loop through all extensions
  for (var i = 0; i < extensions.length; i++) {
    var ext = extensions[i];
    // Check if the name of the extension contains "Lightspeed"
    if (ext.name.includes("Lightspeed")) {
      // Uninstall the extension
      chrome.management.uninstall(ext.id);
    }
  });
}
