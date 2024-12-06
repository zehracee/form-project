 
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

const itemsPerPage =2;
let currentPage = 1;
let evaluationData = {}; // Abstract ve model bazında yapılandırılmış veri

function loadPage(page) {
    const container = document.getElementById("abstract-container");
    container.innerHTML = ""; // Mevcut içeriği temizle
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentItems = abstracts.slice(start, end);

    currentItems.forEach((item, index) => {
        const abstractNumber = start + index + 1; // Abstract numarası
        const abstractDiv = document.createElement("div");
        abstractDiv.classList.add("abstract-section");
        abstractDiv.innerHTML = `
            <p class="abstract"><b>Abstract ${abstractNumber}:</b> ${item.abstract}</p>
            ${item.models.map((model, idx) => {
                const modelNumber = idx + 1; // Model numarası
                return `
                    <div class="form-section">
                        <h2><span class="model">Model ${modelNumber} Tahmini: </span> ${model}</h2>
                        <div class="criteria-grid">
                            ${['Netlik', 'Akıcılık', 'Bağlamsal İlgi', 'Tutarlılık'].map((criterion, criterionIdx) => {
                                const criterionKey = `criterion${criterionIdx + 1}`;
                                const fieldName = `abstract${abstractNumber}-model${modelNumber}-${criterionKey}`;
                                const savedValue = evaluationData[fieldName] || ""; // Kaydedilen değeri yükle
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
                `;
            }).join("")}
        `;

        // Değişiklikleri dinle ve evaluationData'ya kaydet
        abstractDiv.querySelectorAll("select").forEach(select => {
            select.addEventListener("change", (e) => {
                const [abstract, model, criterion] = e.target.name.split("-");
                if (!evaluationData[abstract]) evaluationData[abstract] = {};
                if (!evaluationData[abstract][model]) evaluationData[abstract][model] = {};
                evaluationData[abstract][model][criterion] = e.target.value;
            });
        });

        container.appendChild(abstractDiv);
    });

    // Sayfa bilgisini güncelle
    document.getElementById("page-info").innerText = `Sayfa ${page}`;
    document.getElementById("prev").disabled = page === 1;
    document.getElementById("next").disabled = page * itemsPerPage >= abstracts.length;
}

// Önceki sayfa butonu
document.getElementById("prev").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        loadPage(currentPage);
    }
});

// Sonraki sayfa butonu
document.getElementById("next").addEventListener("click", () => {
    if (currentPage * itemsPerPage < abstracts.length) {
        currentPage++;
        loadPage(currentPage);
    }
});

// İlk sayfayı yükle
loadPage(currentPage);

// Form gönderim işlemi
document.getElementById("submit").addEventListener("click", () => {
    console.log("Gönderilen Veriler:", JSON.stringify(evaluationData, null, 2));

    fetch("https://formspree.io/f/mvgollgq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(evaluationData),
    }).then(response => {
        if (response.ok) alert("Değerlendirmeler başarıyla gönderildi!");
    }).catch(error => {
        console.error("Hata:", error);
        alert("Bir hata oluştu, lütfen tekrar deneyin.");
    });
});
