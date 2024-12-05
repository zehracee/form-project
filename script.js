// Tüm abstract'lar ve ilgili modeller
const abstracts = [
    {
        abstract: "Abstract 1 bilgisi...",
        models: [
            "Model 1 Tahmini: Başlık 1",
            "Model 2 Tahmini: Başlık 2",
            "Model 3 Tahmini: Başlık 3",
            "Model 4 Tahmini: Başlık 4"
        ]
    },
    {
        abstract: "Abstract 2 bilgisi...",
        models: [
            "Model 1 Tahmini: Başlık 1",
            "Model 2 Tahmini: Başlık 2",
            "Model 3 Tahmini: Başlık 3",
            "Model 4 Tahmini: Başlık 4"
        ]
    },
    // Buraya diğer abstract'lar eklenebilir
];

// Sayfalama ayarları
const itemsPerPage = 2; // Bir sayfada gösterilecek abstract sayısı
let currentPage = 1;

// Sayfa yükleme işlevi
function loadPage(page) {
    const container = document.getElementById("abstract-container");
    container.innerHTML = ""; // Mevcut içeriği temizle

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentItems = abstracts.slice(start, end);

    currentItems.forEach((item, index) => {
        const abstractDiv = document.createElement("div");
        abstractDiv.classList.add("abstract-section");

        abstractDiv.innerHTML = `
            <p class="abstract"><b>Abstract ${start + index + 1}:</b> ${item.abstract}</p>
            ${item.models.map((model, idx) => `
                <div class="form-section">
                    <h2><span class="model">Model ${idx + 1} Tahmini: </span> ${model}</h2>
                    <div class="criteria-grid">
                        <div>
                            <label for="model${start + index + 1}-${idx + 1}-criterion1">Netlik</label>
                            <select id="model${start + index + 1}-${idx + 1}-criterion1" name="model${start + index + 1}-${idx + 1}-criterion1" required>
                                <option value="" disabled selected>Seçiniz</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div>
                            <label for="model${start + index + 1}-${idx + 1}-criterion2">Akıcılık</label>
                            <select id="model${start + index + 1}-${idx + 1}-criterion2" name="model${start + index + 1}-${idx + 1}-criterion2" required>
                                <option value="" disabled selected>Seçiniz</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div>
                            <label for="model${start + index + 1}-${idx + 1}-criterion3">Bağlamsal İlgi</label>
                            <select id="model${start + index + 1}-${idx + 1}-criterion3" name="model${start + index + 1}-${idx + 1}-criterion3" required>
                                <option value="" disabled selected>Seçiniz</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div>
                            <label for="model${start + index + 1}-${idx + 1}-criterion4">Tutarlılık</label>
                            <select id="model${start + index + 1}-${idx + 1}-criterion4" name="model${start + index + 1}-${idx + 1}-criterion4" required>
                                <option value="" disabled selected>Seçiniz</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </div>
                </div>
            `).join("")}
        `;
        container.appendChild(abstractDiv);
    });

    // Sayfa kontrol butonlarını güncelle
    document.getElementById("page-info").innerText = `Sayfa ${page}`;
    document.getElementById("prev").disabled = page === 1;
    document.getElementById("next").disabled = page * itemsPerPage >= abstracts.length;
}

// Sayfa değişim kontrolleri
document.getElementById("prev").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        loadPage(currentPage);
    }
});

document.getElementById("next").addEventListener("click", () => {
    if (currentPage * itemsPerPage < abstracts.length) {
        currentPage++;
        loadPage(currentPage);
    }
});

// İlk sayfa yüklemesi
loadPage(currentPage);