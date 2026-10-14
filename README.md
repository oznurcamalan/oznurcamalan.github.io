# Öznur Çamalan · Psikolojik Danışman

[oznurcamalan.com](https://oznurcamalan.com) sitesinin kaynak kodu. Site [Astro](https://astro.build) ile üretilen statik bir sitedir ve GitHub Pages üzerinde yayınlanır.

## İçerik nasıl güncellenir?

Kod bilgisi gerekmez. İçerikler [oznurcamalan.com/admin](https://oznurcamalan.com/admin) adresindeki yönetim panelinden (Decap CMS) GitHub hesabıyla giriş yapılarak düzenlenir:

- **Makaleler:** Yeni yazı ekleme, düzenleme, taslak olarak saklama.
- **Site Bilgileri:** Ad, unvan, iletişim bilgileri, danışman fotoğrafı, hizmetler, eğitim, çalışma alanları ve sayfa metinleri.

Panelde yapılan her kayıt depoya bir commit olarak gider ve site birkaç dakika içinde otomatik olarak yeniden yayınlanır.

## Gizlilik

Site ziyaretçi verisini üçüncü taraflara göndermemek üzere kurulmuştur:

- Analiz, reklam ya da takip aracı yoktur; site çerez kullanmaz.
- Yazı tipleri (Fraunces, DM Sans) siteyle birlikte sunulur, Google Fonts kullanılmaz.
- Randevu sistemi [Cal.com](https://cal.com)'dur. Cal.com betiği sayfa açılışında değil, ziyaretçi bir randevu düğmesine tıkladığında yüklenir.

## Geliştirme

Node.js 22.12 ya da üstü gerekir.

| Komut | Açıklama |
| :-- | :-- |
| `npm install` | Bağımlılıkları kurar |
| `npm run dev` | Yerel geliştirme sunucusunu `localhost:4321` adresinde başlatır |
| `npm run build` | Siteyi `dist/` klasörüne derler |
| `npm run preview` | Derlenen siteyi yerelde önizler |

Yönetim panelini yerelde denemek için `npm run build` ve `npm run preview` çalışırken ayrı bir terminalde `npx decap-server` başlatıp `localhost:4321/admin` adresini açın.

## Klasör yapısı

```text
public/
├── admin/            Yönetim paneli (Decap CMS) ve ayarları (config.yml)
├── images/           Danışman fotoğrafı, paylaşım görseli ve makale görselleri
├── CNAME             Özel alan adı (oznurcamalan.com)
└── robots.txt
src/
├── components/       Header, Footer, randevu düğmeleri ve diğer parçalar
├── content/makaleler/  Makaleler (Markdown, panelden yönetilir)
├── data/site.json    Site bilgileri (panelden yönetilir)
├── layouts/          Ortak sayfa iskeleti, meta ve paylaşım etiketleri
├── pages/            Sayfalar: ana sayfa, hakkımda, makaleler, randevu, iletişim, KVKK, 404
└── styles/global.css Renkler, yazı tipleri ve ortak stiller
```

## Yayın

`main` dalına gelen her değişiklik `.github/workflows/deploy.yml` ile derlenir ve GitHub Pages'e yayınlanır. Alan adı `public/CNAME` dosyasındadır; depo adı (`oznurcamalan.github.io`) alan adı değildir.
