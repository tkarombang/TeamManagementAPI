const apiBaseUrl = "http://localhost:5020/api";

// FUNGSI UNTUK MENDAPATKAN DAFTAR DEVELOPER DARI API
const fetchDevelopers = async () => {
  try {
    const response = await fetch(`${apiBaseUrl}/Developers`);
    if (response.ok) {
      const developers = await response.json(); // PARSING DATA JSON
      renderDeveloperList(developers); // PANGGIL FUNGSI UNTUK MENAMPILKAN DATA
    } else {
      alert("FAILED TO FETCH DEVELOPERS...");
    }
  } catch (err) {
    console.error(err);
    alert("ERROR FETCHING DEVELOPERS...");
  }
};

// RENDER DAFTAR DEVELOPER KE TABLE
const renderDeveloperList = (developers: any[]) => {
  const tbody = document.querySelector("table tbody") as HTMLTableSectionElement;
  tbody.innerHTML = ""; //BERSIHKAN ISI TABEL SEBELUMNYA

  developers.forEach((dev) => {
    const row = document.createElement("tr");

    row.innerHTML = `
  <td>${dev.developer_id}</td>
  <td>${dev.nama}</td>
  <td>${dev.email}</td>
  <td>${dev.role}</td>
  <td class="action-btns">
    <button onclick="editDeveloper(${dev.developer_id})">Edit</button>
    <button class="delete" onclick="deleteDeveloper(${dev.developer_id})">Delete</button>
  </td>
    `;

    tbody.appendChild(row);
  });
};

// PANGGIL fetchDevelopers saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  fetchDevelopers();
});
