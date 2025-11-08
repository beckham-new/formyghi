document.addEventListener("DOMContentLoaded", () => {
  const addWishBtn = document.getElementById("addWishBtn");
  const wishInput = document.getElementById("wishInput");
  const wishList = document.getElementById("wishList");

  // Ambil data dari localStorage (kalau ada)
  let wishes = JSON.parse(localStorage.getItem("wishes")) || [];

  // Tampilkan daftar wish begitu halaman dibuka
  renderWishes();

  // Tambah wish baru
  addWishBtn.addEventListener("click", () => {
    const wishText = wishInput.value.trim();
    if (wishText !== "") {
      wishes.push(wishText);
      localStorage.setItem("wishes", JSON.stringify(wishes));
      renderWishes();
      wishInput.value = "";
      createFallingStar();
    }
  });

  // Render semua wish ke halaman
  function renderWishes() {
    wishList.innerHTML = "";
    wishes.forEach((wish, i) => {
      const li = document.createElement("li");
      li.textContent = `☆ ${wish}`;

      // Tombol hapus kecil
      const delBtn = document.createElement("button");
      delBtn.textContent = "✘";
      delBtn.classList.add("delete-btn");

      // Event hapus dengan konfirmasi
      delBtn.addEventListener("click", () => {
        const confirmBox = document.createElement("div");
        confirmBox.classList.add("confirm-box");
        confirmBox.innerHTML = `
          <div class="confirm-content">
            <p>Are you sure you want to delete this wish?</p>
            <div class="confirm-buttons">
              <button class="yes-btn">Yes</button>
              <button class="no-btn">No</button>
            </div>
          </div>
        `;
        document.body.appendChild(confirmBox);

        // Tombol Yes
        confirmBox.querySelector(".yes-btn").addEventListener("click", () => {
          wishes.splice(i, 1);
          localStorage.setItem("wishes", JSON.stringify(wishes));
          renderWishes();
          confirmBox.remove();
        });

        // Tombol No
        confirmBox.querySelector(".no-btn").addEventListener("click", () => {
          confirmBox.remove();
        });
      });

      li.appendChild(delBtn);
      wishList.appendChild(li);
    });
  }

  // Efek bintang jatuh tiap kali tambah wish ✨
  function createFallingStar() {
    const star = document.createElement("div");
    star.classList.add("falling-star");
    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.top = "0px";
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 1500);
  }
});
