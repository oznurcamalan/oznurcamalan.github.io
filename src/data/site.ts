// Fotoğraf yolu profil.json içinde tutulur; ileride admin panelinden güncellenebilsin diye ayrı dosyada.
import profil from './profil.json';

export type IkonAdi = 'kisi' | 'cift' | 'video';

export const site = {
  ad: 'Ad Soyad',
  unvan: 'Psikolojik Danışman',
  // Ana sayfa hero başlığı (örnek metin, değiştirilebilir)
  heroBaslik: 'Kendinizi dinlemek için güvenli ve sakin bir alan.',
  // Hero alt metni
  slogan: 'Kısa, sade bir tanıtım cümlesi.',
  eposta: 'ornek@eposta.com',
  telefon: '0 (5xx) xxx xx xx',
  telefonLink: '+905xxxxxxxxx',
  sehir: 'Şehir',

  // Fotoğraf: boşsa kemer biçimli yer tutucu gösterilir. Örnek: '/images/danisman.jpg'
  foto: profil.foto,
  fotoAlt: profil.fotoAlt,

  hizmetlerGiris: '[Hizmetlere genel bir giriş cümlesi.]',
  hizmetler: [
    {
      baslik: 'Bireysel Danışmanlık',
      aciklama: 'Hizmetin iki üç cümlelik açıklaması.',
      ikon: 'kisi' as IkonAdi,
    },
    {
      baslik: 'Çift Danışmanlığı',
      aciklama: 'Hizmetin iki üç cümlelik açıklaması.',
      ikon: 'cift' as IkonAdi,
    },
    {
      baslik: 'Online Görüşme',
      aciklama: '[Hizmetin iki üç cümlelik açıklaması.]',
      ikon: 'video' as IkonAdi,
    },
  ],

  surecAdimlari: [
    { baslik: 'Ön görüşme', aciklama: 'Kısaca tanışır, ihtiyacınızı ve beklentinizi konuşuruz.' },
    { baslik: 'Randevu', aciklama: 'Size uygun gün ve saati takvimden kendiniz seçersiniz.' },
    { baslik: 'Görüşmeler', aciklama: 'Kendi hızınızda, güvenli bir alanda birlikte çalışırız.' },
  ],

  hakkinda: [
    '[Danışmanın kendini tanıttığı birinci paragraf: nasıl bir yaklaşımla çalıştığı.]',
    '[İkinci paragraf: danışanlarının neler bulmasını umduğu, görüşmelerin havası.]',
  ],
  egitim: ['[Üniversite, bölüm, yıl]', '[Sertifika ya da ek eğitim, yıl]'],
  calismaAlanlari: [
    '[Çalışma alanı]',
    '[Çalışma alanı]',
    '[Çalışma alanı]',
    '[Çalışma alanı]',
    '[Çalışma alanı]',
  ],
  yaklasim: [
    '[Görüşmelerin nasıl işlediği, gizlilik ve güven konusundaki yaklaşım.]',
    '[Görüşme süresi, sıklığı ve yüz yüze / online seçenekler hakkında kısa bilgi.]',
  ],

  makalelerGiris: '[Makalelerin ne hakkında olduğunu anlatan bir iki cümle.]',
  // Makale sonundaki yazar kutusunda görünen kısa not
  yazarNotu: '[Danışmanın yazılarla ilgili kısa notu ya da tanıtım cümlesi.]',

  onGorusmeSure: '[Süre bilgisi]',
  randevuSure: '[Süre bilgisi]',
};
