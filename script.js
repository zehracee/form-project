document.addEventListener("DOMContentLoaded", function () {
  
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

 const itemsPerPage = 4;
    let currentPage = 1;
    let answers = JSON.parse(localStorage.getItem("answers")) || {}; // Önceden kaydedilen cevaplar

    // Sayfa yükleme işlevi
    function loadPage(page) {
        const container = document.getElementById("abstract-container");
        const pagination = document.getElementById("pagination");
        
        container.innerHTML = ""; // Mevcut içeriği temizle
        pagination.innerHTML = ""; // Sayfa numarası butonlarını temizle

        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const currentItems = abstracts.slice(start, end);

        currentItems.forEach((item, index) => {
            const abstractDiv = document.createElement("div");
            abstractDiv.classList.add("abstract");

            const abstractText = document.createElement("p");
            abstractText.textContent = item.abstract;
            abstractDiv.appendChild(abstractText);

            const modelsList = document.createElement("ul");
            item.models.forEach((model, idx) => {
                const listItem = document.createElement("li");
                listItem.textContent = model;

                // Puanlama (Rating) ekleme
                const ratingDiv = document.createElement("div");
                const ratingLabel = document.createElement("label");
                ratingLabel.textContent = "Puanla (1-5): ";
                ratingDiv.appendChild(ratingLabel);

                for (let i = 1; i <= 5; i++) {
                    const radioInput = document.createElement("input");
                    radioInput.type = "radio";
                    radioInput.name = `rating-${start + index}-${idx}`;
                    radioInput.value = i;
                    radioInput.id = `rating-${start + index}-${idx}-${i}`;
                    radioInput.checked = answers[radioInput.name] == i; // Önceden kaydedilen puanı yükle
                    radioInput.addEventListener("change", () => {
                        saveRating(radioInput.name, radioInput.value); // Puan değiştiğinde kaydedilir
                    });

                    const radioLabel = document.createElement("label");
                    radioLabel.setAttribute("for", radioInput.id);
                    radioLabel.textContent = i;
                    ratingDiv.appendChild(radioInput);
                    ratingDiv.appendChild(radioLabel);
                }
                listItem.appendChild(ratingDiv);
                modelsList.appendChild(listItem);
            });
            abstractDiv.appendChild(modelsList);

            container.appendChild(abstractDiv);
        });

        // Sayfa numaralarını oluştur
        const totalPages = Math.ceil(abstracts.length / itemsPerPage);
        for (let i = 1; i <= totalPages; i++) {
            const pageLink = document.createElement("button");
            pageLink.textContent = i;
            pageLink.onclick = function () {
                loadPage(i); // Sayfayı değiştirme
            };
            pagination.appendChild(pageLink);
        }

        // Sayfa numarasını güncelle
        const pageInfo = document.getElementById("page-info");
        pageInfo.textContent = `Sayfa ${currentPage}`;

        // Sayfa geçiş butonlarının devre dışı bırakılması
        const prevButton = document.getElementById("prev");
        const nextButton = document.getElementById("next");

        prevButton.disabled = currentPage === 1;
        nextButton.disabled = currentPage === totalPages;

        // Sayfa geçiş butonları
        prevButton.onclick = function () {
            if (currentPage > 1) {
                currentPage--;
                loadPage(currentPage);
            }
        };

        nextButton.onclick = function () {
            if (currentPage < totalPages) {
                currentPage++;
                loadPage(currentPage);
            }
        };
    }

    // Veriyi localStorage'a kaydet (cevaplar ve puanlar)
    function saveRating(name, value) {
        answers[name] = value;
        localStorage.setItem("answers", JSON.stringify(answers));
    }

    loadPage(currentPage);
});
