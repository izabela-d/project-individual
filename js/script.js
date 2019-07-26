function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  if (sidebar.className === "sidebar") {
    sidebar.className += " responsive-open";
  } else {
    sidebar.className = "sidebar";
  }
}
