document.addEventListener("DOMContentLoaded", () => {
  const cartCountSpan = document.getElementById("cart-count");

  if (
    window.location.pathname === "/" ||
    window.location.pathname === "/index.html"
  ) {
    const productGrid = document.querySelector(".product-grid");

    function fetchAndRenderProducts() {
      fetch("/api/products")
        .then((res) => res.json())
        .then((products) => {
          productGrid.innerHTML = "";
          products.forEach((product) => {
            const productCard = document.createElement("div");
            productCard.className = "product-card";
            productCard.innerHTML = `
                            <img src="${product.imageUrl}" alt="${product.name}">
                            <h3>${product.name}</h3>
                            <p>${product.description}</p>
                            <p><strong>${product.price} บาท</strong></p>
                            <button class="add-to-cart" data-id="${product.id}">เพิ่มลงตะกร้า</button>
                        `;
            productGrid.appendChild(productCard);
          });
        });
    }
    fetchAndRenderProducts(); // เรียกฟังก์ชัน fetchAndRenderProducts

     productGrid.addEventListener("click", (e) => {
        if (e.target.classList.contains("add-to-cart")) {
          const productId = parseInt(e.target.dataset.id);
          fetch("/api/products")
            .then((res) => res.json())
            .then((products) => {
              const product = products.find((p) => p.id === productId);

              let cart = JSON.parse(localStorage.getItem("cart")) || [];
              if (cart[productId]) {
                cart[productId].quantity++
              } else {
                cart[productId = { ...product, quantity: 1 }];
              }
              localStorage.setItem("cart", JSON.stringify(cart));
              alert(`${product.name} ถูกเพิ่มลงตะกร้าแล้ว`);

              console.log("เพิ่มสินค้าลงตะกร้า:", product);
            });
        }
      });

  }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Admin
  if (
      window.location.pathname === "/admin" ||
      window.location.pathname === "/admin/"
    ) {
      const adminTableBody = document.querySelector("#admin-table tbody");
      
      function fetchAndRenderAdminProducts() {
        fetch("/admin/api/products")
        .then((res) => res.json())
        .then((products) => {
          adminTableBody.innerHTML = "";
          products.forEach((product) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                            <td>${product.id}</td>
                            <td>${product.name}</td>
                            <td>${product.price}</td>
                            <td>${product.stock}</td>
                            <td>
                            <button class="edit-btn" data-id="${product.id}">แก้ไข</button>
                            <button class="delete-btn" data-id="${product.id}">ลบ</button>
                            </td>
                            `;
            adminTableBody.appendChild(row);
          });
        });
      }
      fetchAndRenderAdminProducts(); // เรียกฟังก์ชัน fetchAndRenderAdminProducts
    }
});
