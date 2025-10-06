// ==================== Navbar Toggle ==================== //
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

if (hamburger) {
  hamburger.onclick = () => {
    navbarNav.classList.toggle("active");
  };

  document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove("active");
    }
  });
}

// ==================== Pencarian Menu dengan Redirect ==================== //
function searchMenu() {
  const input = document.getElementById("searchInput");
  const keyword = input.value.trim().toLowerCase();

  if (keyword === "") {
    alert("Masukkan kata kunci terlebih dahulu!");
    return;
  }

  // Simpan keyword ke localStorage
  localStorage.setItem("searchKeyword", keyword);

  // Redirect ke halaman sesuai kategori
  if (
    keyword.includes("sanger") ||
    keyword.includes("gayo panas") ||
    keyword.includes("kopi sanger panas") ||
    keyword.includes("kopi") ||
    keyword.includes("kopi panas") ||
    keyword.includes("kocok panas") ||
    keyword.includes("milo panas") ||
    keyword.includes("teh panas") ||
    keyword.includes("teh tarik panas") ||
    keyword.includes("cappucino panas") ||
    keyword.includes("chocolate panas") ||
    keyword.includes("susu pandan") ||
    keyword.includes("red velvet panas") ||
    keyword.includes("taro panas") ||
    keyword.includes("green tea panas") ||
    keyword.includes("cappucino gula aren panas") ||
    keyword.includes("coffe latte panas") ||
    keyword.includes("aqua") ||
    keyword.includes("sanger espresso panas") ||
    keyword.includes("tst") ||
    keyword.includes("kopi milo gelas besar") ||
    keyword.includes("lemon tea panas") ||
    keyword.includes("espresso panas") ||
    keyword.includes("podding") ||
    keyword.includes("susu panas") ||
    keyword.includes("gayo panas") ||
    keyword.includes("americano panas")
  ) {
    window.location.href = "minuman-panas.html";
  } else if (
    keyword.includes("dingin") ||
    keyword.includes("alpukat") ||
    keyword.includes("jeruk") ||
    keyword.includes("guava") ||
    keyword.includes("sanger dingin") ||
    keyword.includes("gayo dingin") ||
    keyword.includes("kopi dingin") ||
    keyword.includes("kopi kocok dingin") ||
    keyword.includes("milo dingin") ||
    keyword.includes("teh dingin") ||
    keyword.includes("teh tarik dingin") ||
    keyword.includes("cappucino dingin") ||
    keyword.includes("chocolate dingin") ||
    keyword.includes("susu dingin") ||
    keyword.includes("red velvet dingin") ||
    keyword.includes("taro dingin") ||
    keyword.includes("green tea dingin") ||
    keyword.includes("cappucino gula aren dingin") ||
    keyword.includes("coffe latte dingin") ||
    keyword.includes("aqua") ||
    keyword.includes("sanger espresso dingin") ||
    keyword.includes("tst") ||
    keyword.includes("kopi milo gelas besar") ||
    keyword.includes("lemon tea dingin") ||
    keyword.includes("espresso dingin") ||
    keyword.includes("podding") ||
    keyword.includes("susu dingin") ||
    keyword.includes("gayo dingin") ||
    keyword.includes("jus")
  ) {
    window.location.href = "minuman-dingin.html";
  } else if (
    keyword.includes("nasi gurih telur") ||
    keyword.includes("nasi gurih") ||
    keyword.includes("lontong") ||
    keyword.includes("mie lontong") ||
    keyword.includes("nasi gurih rendang") ||
    keyword.includes("bubur ayam") ||
    keyword.includes("telur bulat") ||
    keyword.includes("keripik kentang") ||
    keyword.includes("rendang") ||
    keyword.includes("lupis") ||
    keyword.includes("cakue") ||
    keyword.includes("sarapan")
  ) {
    window.location.href = "sarapan.html";
  } else if (
    keyword.includes("snack") ||
    keyword.includes("kue") ||
    keyword.includes("sate") ||
    keyword.includes("keripik pisang") ||
    keyword.includes("risol") ||
    keyword.includes("timpan") ||
    keyword.includes("srikaya") ||
    keyword.includes("kelapa") ||
    keyword.includes("pisang crispy") ||
    keyword.includes("pisang bakar") ||
    keyword.includes("roti") ||
    keyword.includes("tahu") ||
    keyword.includes("gorengan") ||
    keyword.includes("bugis") ||
    keyword.includes("lemper") ||
    keyword.includes("kacang") ||
    keyword.includes("pulut") ||
    keyword.includes("dimsum") ||
    keyword.includes("pisang") ||
    keyword.includes("roti")
  ) {
    window.location.href = "cemilan.html";
  } else if (
    keyword.includes("ifumie") ||
    keyword.includes("indomie") ||
    keyword.includes("kwetiaw") ||
    keyword.includes("bihun") ||
    keyword.includes("bangladesh") ||
    keyword.includes("mie banda") ||
    keyword.includes("mie banda biasa jumbo")
  ) {
    window.location.href = "aneka-mie.html";
  } else if (
    keyword.includes("nasi") ||
    keyword.includes("nasi ayam penyet") ||
    keyword.includes("ayam penyet") ||
    keyword.includes("nasi ayam sambel ijo") ||
    keyword.includes("nasi ayam lada hitam") ||
    keyword.includes("nasi ayam asam manis") ||
    keyword.includes("nasi ayam pedas sangat") ||
    keyword.includes("nasi ayam tangkap") ||
    keyword.includes("cumi ") ||
    keyword.includes("udang") ||
    keyword.includes("tom yam") ||
    keyword.includes("tom yam ayam") ||
    keyword.includes("tom yam daging") ||
    keyword.includes("tom yam seafood") ||
    keyword.includes("soto") ||
    keyword.includes("bebek") ||
    keyword.includes("capcay") ||
    keyword.includes("nasi goreng") ||
    keyword.includes("ikan") ||
    keyword.includes("nasi kuning")||
    keyword.includes("ikan lada hitam") ||
    keyword.includes("ikan asam manis") ||
    keyword.includes("sop")
  ) {
    window.location.href = "makanan-utama.html";
  } else {
    alert("Menu tidak ditemukan!");
  }
  // Kosongkan input
  input.value = "";
}

// Enter key trigger search
const searchInput = document.getElementById("searchInput");
if (searchInput) {
  searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      searchMenu();
    }
  });
}

// ==================== Pencarian Real-time di Halaman ==================== //
if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    const filter = searchInput.value.toLowerCase();
    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach((item) => {
      const itemName =
        item.querySelector("h3")?.textContent.toLowerCase() || "";
      const itemPrice =
        item.querySelector("p")?.textContent.toLowerCase() || "";

      if (itemName.includes(filter) || itemPrice.includes(filter)) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  });
}

// ==================== Modal Gambar ==================== //
const modal = document.getElementById("menuModal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

if (modal && modalImg && captionText && closeBtn) {
  const images = document.querySelectorAll(".menu-item img");
  images.forEach((img) => {
    img.addEventListener("click", function () {
      modal.style.display = "flex";
      modalImg.src = this.src;

      const parent = this.closest(".menu-item");
      const name = parent.querySelector("h3")?.textContent;
      const price = parent.querySelector("p")?.textContent;

      captionText.innerHTML = `<b>${name}</b><br>${price}`;
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
}

// ==================== Highlight hasil pencarian ==================== //
document.addEventListener("DOMContentLoaded", function () {
  const keyword = localStorage.getItem("searchKeyword");
  if (!keyword) return;

  const items = document.querySelectorAll(".menu-item");
  let found = false;

  items.forEach((item) => {
    const name = item.querySelector("h3")?.textContent.toLowerCase() || "";
    const price = item.querySelector("p")?.textContent.toLowerCase() || "";

    if (name.includes(keyword) || price.includes(keyword)) {
      item.style.border = "3px solid red";
      item.scrollIntoView({ behavior: "smooth", block: "center" });
      found = true;
    }
  });

  if (!found) {
    alert("Menu tidak ditemukan di halaman ini!");
  }

  localStorage.removeItem("searchKeyword");
});
