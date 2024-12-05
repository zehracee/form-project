// Abstract verileri
const abstracts = [
    {
        abstract: "Eloksallı ve anodize edilmemiş Ti6Al4V ve Mg AZ31B biyomalzemelerinin korozyon davranışına ilişkin uzun vadeli bir araştırma, kontrollü koşullar altında gerçekleştirilmiştir. Ti6Al4V fosforik asit ve oksalik asit içinde anodize edilirken, Mg AZ31B fosforik asit ve potasyum hidroksit içinde 20V DC potansiyel uygulanarak anodize edilmiştir. %3 NaCl, fosfat tamponlu salin (PBS) ve deiyonize (DI) su çözeltilerine daldırılarak uzun süreli deneyler yapıldı. Korozyon hızı ve deseni elektrokimyasal analiz ile ölçülmüş ve anotlamanın malzeme yüzeyindeki doğal oksit tabakasını arttırdığı, korozyon hızını azalttığı ve biyomalzemenin ömrünü uzattığı gözlemlenmiştir.",
        models: [
            "Model 1 Tahmini: GELİŞMİŞ KOROZYON DİRENCİ İÇİN ELOKSALLI METALİK İMPLANTLARIN ELEKTROKİMYASAL DAVRANIŞLARININ İNCELENMESİ",
            "Model 2 Tahmini: GELİŞMİŞ KOROZYON DİRENCİ İÇİN ELOKSALLI METALİK İMPLANTLARIN ELEKTROKİMYASAL DAVRANIŞLARININ İNCELENMESİ",
            "Model 3 Tahmini: GELİŞMİŞ KOROZYON DİRENCİ İÇİN ELOKSALLI METALİK İMPLANTLARIN ELEKTROKİMYASAL DAVRANIŞLARININ İNCELENMESİ",
            "Model 4 Tahmini: GELİŞMİŞ KOROZYON DİRENCİ İÇİN ELOKSALLI METALİK İMPLANTLARIN ELEKTROKİMYASAL DAVRANIŞLARININ İNCELENMESİ"
        ]
    },
    {
        abstract: "Diğer örnek 2 bilgisi...",
        models: [
            "Model 1 Tahmini: Başlık 1",
            "Model 2 Tahmini: Başlık 2",
            "Model 3 Tahmini: Başlık 3",
            "Model 4 Tahmini: Başlık 4"
        ]
    }
    // Diğer abstract'lar buraya eklenebilir
];

let pageIndex = 0; // Başlangıç sayfası
const itemsPerPage = 1; // Her sayfada gösterilecek abstract sayısı
const abstractContainer = document.getElementById("abstract-container");
const pageInfo = document.getElementById("page-info");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

// Model değerlendirmelerini tutan değişken
const modelRatings = {
    // Her bir model için değerlendirilen puanları buraya ekleyeceğiz
};

function loadPage() {
    // Sayfada gösterilecek veriyi hesapla
    const startIndex = pageIndex * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Abstract container'ı temizle
    abstractContainer.innerHTML = ""; // Bu, eski içeriği temizler

    // Bu sayfada yer alacak abstract'ları ekle
    const abstractsToDisplay = abstracts.slice(startIndex, endIndex);
    abstractsToDisplay.forEach((item, abstractIndex) => {
        const abstractElement = document.createElement("div");
        abstractElement.classList.add("abstract");

        const abstractText = document.createElement("p");
        abstractText.innerHTML = `<b>Abstract:</b> ${item.abstract}`;
        abstractElement.appendChild(abstractText);

        // Modelleri ekleyelim
        item.models.forEach((model, modelIndex) => {
            const modelElement = document.createElement("div");
            modelElement.classList.add("model");
            modelElement.innerHTML = `<b>Model ${modelIndex + 1} Tahmini:</b> ${model}`;

            // Model için değerlendirme formu ekleyelim
            const ratingElement = document.createElement("div");
            ratingElement.classList.add("rating");

            // Yıldızlar (1-5 arasında) için inputlar
            const stars = [1, 2, 3, 4, 5];
            stars.forEach(star => {
                const starInput = document.createElement("input");
                starInput.type = "radio";
                starInput.name = `rating-${abstractIndex}-${modelIndex}`;
                starInput.value = star;
                starInput.id = `rating-${abstractIndex}-${modelIndex}-${star}`;
                
                // Değerlendirme yapılınca bu değerlere ulaşmak için event listener ekle
                starInput.addEventListener("change", () => {
                    modelRatings[`${abstractIndex}-${modelIndex}`] = star; // Model için puan kaydet
                });

                const starLabel = document.createElement("label");
                starLabel.setAttribute("for", `rating-${abstractIndex}-${modelIndex}-${star}`);
                starLabel.innerText = "★";
                ratingElement.appendChild(starInput);
                ratingElement.appendChild(starLabel);
            });

            modelElement.appendChild(ratingElement);
            abstractElement.appendChild(modelElement);
        });

        abstractContainer.appendChild(abstractElement);
    });

    // Sayfa bilgilerini güncelle
    pageInfo.innerText = `Sayfa ${pageIndex + 1}`;

    // Sayfalama butonlarını yönet
    prevButton.disabled = pageIndex === 0;
    nextButton.disabled = (pageIndex + 1) * itemsPerPage >= abstracts.length;
}

// Sayfalar arasında geçiş yapmak için butonlara tıklama işlevi
prevButton.addEventListener("click", () => {
    if (pageIndex > 0) {
        pageIndex--;
        loadPage();
    }
});

nextButton.addEventListener("click", () => {
    if ((pageIndex + 1) * itemsPerPage < abstracts.length) {
        pageIndex++;
        loadPage();
    }
});

// Sayfayı yükle
loadPage();
