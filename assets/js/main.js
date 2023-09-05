const navbarToggle = document.querySelector('.hamburger-menu');
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.mobile-menu');
const menuItems = [
  { text: "About Us", link: "about.html" },
  { text: "Career", link: "#" },
  { text: "Contact a pharmacist", link: "contact.html" },
  { text: "Contact Us", link: "contact.html" }
];

function createMobileMenu(items) {
  const mobileNav = document.createElement('nav');
  const mobileNavList = document.createElement('ul');
  mobileNavList.classList.add('navlist');
  
  items.forEach(item => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.textContent = item.text;
      link.href = item.link;
      listItem.appendChild(link);
      mobileNavList.appendChild(listItem);
  });

  mobileNav.appendChild(mobileNavList);
  return mobileNav;
}

navbarToggle.addEventListener('click', function() {
  menu.classList.toggle("menu-open");
  hamburger.classList.toggle("menu-open");

  if (menu.classList.contains("menu-open")) {
      const mobileMenu = createMobileMenu(menuItems);
      menu.innerHTML = ''; // Clear the existing content
      menu.appendChild(mobileMenu);
  }
});

const swiper = new Swiper('.mySwiper', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: false,

    // autoplay: {
    //     delay: 500,
    //     disableOnInteraction: false,
    //   },

    // Responsive breakpoints
    breakpoints: {
        // When window width is >= 768px
        768: {
        slidesPerView: 2,
        },
        // When window width is >= 992px
        992: {
        slidesPerView: 2,
        },
        // Add more breakpoints as needed
    },
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });




  