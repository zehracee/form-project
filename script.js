 
const abstracts = [
    {
        abstract: "Eloksallı ve anodize edilmemiş Ti6Al4V ve Mg AZ31B biyomalzemelerinin korozyon davranışına ilişkin uzun vadeli bir araştırma, kontrollü koşullar altında gerçekleştirilmiştir. Ti6Al4V fosforik asit ve oksalik asit içinde anodize edilirken, Mg AZ31B fosforik asit ve potasyum hidroksit içinde 20V DC potansiyel uygulanarak anodize edilmiştir. %3 NaCl, fosfat tamponlu salin (PBS) ve deiyonize (DI) su çözeltilerine daldırılarak uzun süreli deneyler yapıldı. Korozyon hızı ve deseni elektrokimyasal analiz ile ölçülmüş ve anotlamanın malzeme yüzeyindeki doğal oksit tabakasını arttırdığı, korozyon hızını azalttığı ve biyomalzemenin ömrünü uzattığı gözlemlenmiştir.",
        models: [
            "GELİŞMİŞ KOROZYON DİRENCİ İÇİN ELOKSALLI METALİK İMPLANTLARIN ELEKTROKİMYASAL DAVRANIŞLARININ İNCELENMESİ",
            "GELİŞMİŞ KOROZYON DİRENCİ İÇİN ELOKSALLI METALİK İMPLANTLARIN ELEKTROKİMYASAL DAVRANIŞLARININ İNCELENMESİ",
            "GELİŞMİŞ KOROZYON DİRENCİ İÇİN ELOKSALLI METALİK İMPLANTLARIN ELEKTROKİMYASAL DAVRANIŞLARININ İNCELENMESİ",
            "GELİŞMİŞ KOROZYON DİRENCİ İÇİN ELOKSALLI METALİK İMPLANTLARIN ELEKTROKİMYASAL DAVRANIŞLARININ İNCELENMESİ"
        ]
    },
    {
        abstract: "Eloksallı ve anodize edilmemiş Ti6Al4V ve Mg AZ31B biyomalzemelerinin korozyon davranışına ilişkin uzun vadeli bir araştırma, kontrollü koşullar altında gerçekleştirilmiştir. Ti6Al4V fosforik asit ve oksalik asit içinde anodize edilirken, Mg AZ31B fosforik asit ve potasyum hidroksit içinde 20V DC potansiyel uygulanarak anodize edilmiştir. %3 NaCl, fosfat tamponlu salin (PBS) ve deiyonize (DI) su çözeltilerine daldırılarak uzun süreli deneyler yapıldı. Korozyon hızı ve deseni elektrokimyasal analiz ile ölçülmüş ve anotlamanın malzeme yüzeyindeki doğal oksit tabakasını arttırdığı, korozyon hızını azalttığı ve biyomalzemenin ömrünü uzattığı gözlemlenmiştir.",
        models: [
            "GELİŞMİŞ KOROZYON DİRENCİ İÇİN ELOKSALLI METALİK İMPLANTLARIN ELEKTROKİMYASAL DAVRANIŞLARININ İNCELENMESİ",
            "GELİŞMİŞ KOROZYON DİRENCİ İÇİN ELOKSALLI METALİK İMPLANTLARIN ELEKTROKİMYASAL DAVRANIŞLARININ İNCELENMESİ",
            "GELİŞMİŞ KOROZYON DİRENCİ İÇİN ELOKSALLI METALİK İMPLANTLARIN ELEKTROKİMYASAL DAVRANIŞLARININ İNCELENMESİ",
            "GELİŞMİŞ KOROZYON DİRENCİ İÇİN ELOKSALLI METALİK İMPLANTLARIN ELEKTROKİMYASAL DAVRANIŞLARININ İNCELENMESİ"
        ]
    }
];

const itemsPerPage = 1;
let currentPage = 1;
let evaluationData = {};
let username = ""; // Kullanıcı adı dinamik olarak alınacak

// Kullanıcı adını formdan almak
document.getElementById("username").addEventListener("input", (e) => {
    username = e.target.value.trim();
});

// Sayfa yükleme fonksiyonu
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
                        ${['Netlik', 'Akıcılık', 'Bağlamsal İlgi', 'Tutarlılık'].map((criterion, criterionIdx) => {
                            const fieldName = `model${start + index + 1}-${idx + 1}-criterion${criterionIdx + 1}`;
                            const savedValue = evaluationData[fieldName] || ""; 
                            return `
                                <div>
                                    <label for="${fieldName}">${criterion}</label>
                                    <select id="${fieldName}" name="${fieldName}" required>
                                        <option value="" disabled ${!savedValue ? "selected" : ""}>Seçiniz</option>
                                        ${[1, 2, 3, 4, 5].map(option => `
                                            <option value="${option}" ${savedValue == option ? "selected" : ""}>${option}</option>
                                        `).join("")}
                                    </select>
                                </div>
                            `;
                        }).join("")}
                    </div>
                </div>
            `).join("")}
        `;

        // Değişiklikleri kaydet
        abstractDiv.querySelectorAll("select").forEach(select => {
            select.addEventListener("change", (e) => {
                evaluationData[e.target.name] = e.target.value;
            });
        });

        container.appendChild(abstractDiv);
    });

    document.getElementById("page-info").innerText = `Sayfa ${page}`;
    document.getElementById("prev").disabled = page === 1;
    document.getElementById("next").disabled = page * itemsPerPage >= abstracts.length;

    // Gönder butonunun aktifliği
    const submitBtn = document.getElementById("submit");
    submitBtn.disabled = page !== Math.ceil(abstracts.length / itemsPerPage) || !username.trim();
}

// Önceki ve sonraki sayfa butonları
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

// Verileri gönderme
document.getElementById("submit").addEventListener("click", () => {
    // Kullanıcı adı kontrolü
    if (!username.trim()) {
        alert("Lütfen kullanıcı adınızı girin.");
        return;
    }

    // Değerlendirme verilerini formatla
    const formattedData = Object.entries(evaluationData).map(([key, value]) => {
        const [abstractNum, modelNum, criterionIdx] = key.match(/\d+/g);
        const criterionLabels = ['Netlik', 'Akıcılık', 'Bağlamsal İlgi', 'Tutarlılık'];
        return {
            username: username,
            abstract: parseInt(abstractNum),
            model: parseInt(modelNum),
            criterion: criterionLabels[criterionIdx - 1],
            score: parseInt(value)
        };
    });

    // Fetch ile verileri gönder
    fetch("https://script.google.com/macros/s/AKfycbwCASQxi9kp-QJLxA9gKF1B57DMuKtUkp_GFvM5UaR7mubUGs-sc_iv_YwtOzFeOgocxA/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedData),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Değerlendirme Google Sheets'e kaydedildi!");
        } else {
            alert("Sunucudan hata döndü: " + data.message);
        }
    })
    .catch(error => {
        console.error("Hata:", error);
        alert("Bir hata oluştu, lütfen tekrar deneyin.");
    });
});

// Sayfa başlat
loadPage(currentPage);

