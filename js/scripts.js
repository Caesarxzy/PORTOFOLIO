/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
// Fungsi untuk mencari tugas atau proyek berdasarkan kata kunci
function searchTasks() {
    const searchQuery = document.getElementById("searchInput").value.toLowerCase();
    
    // Ambil semua elemen tugas (misalnya item proyek)
    const items = document.querySelectorAll('.task-item');
    
    // Loop melalui setiap item
    items.forEach(item => {
        // Ambil judul dan deskripsi item
        const title = item.querySelector('.task-title').textContent.toLowerCase();
        const description = item.querySelector('.task-description').textContent.toLowerCase();
        
        // Jika kata kunci ditemukan di dalam judul atau deskripsi, tampilkan item, sebaliknya sembunyikan
        if (title.includes(searchQuery) || description.includes(searchQuery)) {
            item.style.display = "block"; // Tampilkan item
        } else {
            item.style.display = "none"; // Sembunyikan item
        }
    });
}
