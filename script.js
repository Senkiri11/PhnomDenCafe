// Select all filter buttons
const filterButtons = document.querySelectorAll(".filter");

// Select all menu items
const menuItems = document.querySelectorAll(".item");

// Filter menu items when a button is clicked
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Get selected category
    const selected = button.dataset.filter;

    // Update active button
    filterButtons.forEach((btn) => {
      btn.classList.toggle("active", btn === button);
    });

    // Show or hide menu items
    menuItems.forEach((item) => {
      const show = selected === "all" || item.dataset.category === selected;

      item.classList.toggle("hidden", !show);
    });
  });
});
