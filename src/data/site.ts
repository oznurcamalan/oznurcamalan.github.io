import veri from './site.json';

export type IkonAdi = 'kisi' | 'cift' | 'video';

type BaslikAciklama = { baslik: string; aciklama: string };
type Hizmet = BaslikAciklama & { ikon: IkonAdi };

const ikonlar: IkonAdi[] = ['kisi', 'cift', 'video'];
const metin = (deger: unknown) => (typeof deger === 'string' ? deger.trim() : '');
const liste = <T>(deger: unknown): T[] => (Array.isArray(deger) ? (deger as T[]) : []);
const yazili = (dizi: string[]) => dizi.map(metin).filter(Boolean);
const yoksa = (deger: unknown, varsayilan: string) => metin(deger) || varsayilan;

// 'https://cal.com/oznurcamalan/ongorusme/' -> 'oznurcamalan/ongorusme'
function calBaglantisi(deger: unknown, varsayilan: string) {
  const yol = metin(deger)
    .replace(/^https?:\/\//, '')
    .replace(/^(app\.)?cal\.com\//, '')
    .replace(/^\/+|\/+$/g, '');
  return /^[\w.-]+\/[\w.-]+$/.test(yol) ? yol : varsayilan;
}

// '0 (532) 123 45 67' -> '+905321234567'; geçerli numara yoksa ''
function telefonBaglantisi(telefon: string) {
  let rakamlar = telefon.replace(/\D/g, '');
  if (rakamlar.startsWith('90')) rakamlar = rakamlar.slice(2);
  else if (rakamlar.startsWith('0')) rakamlar = rakamlar.slice(1);
  return rakamlar.length === 10 ? `+90${rakamlar}` : '';
}

const telefon = metin(veri.telefon);

export const site = {
  ad: metin(veri.ad),
  unvan: metin(veri.unvan),
  heroBaslik: metin(veri.heroBaslik),
  slogan: metin(veri.slogan),
  eposta: metin(veri.eposta),
  telefon,
  telefonLink: telefonBaglantisi(telefon),
  sehir: metin(veri.sehir),

  foto: metin(veri.foto),
  fotoAlt: metin(veri.fotoAlt),

  hizmetlerGiris: metin(veri.hizmetlerGiris),
  hizmetler: liste<Partial<Hizmet>>(veri.hizmetler).map(
    (h): Hizmet => ({
      baslik: metin(h.baslik),
      aciklama: metin(h.aciklama),
      ikon: ikonlar.includes(h.ikon as IkonAdi) ? (h.ikon as IkonAdi) : 'kisi',
    }),
  ),
  surecAdimlari: liste<Partial<BaslikAciklama>>(veri.surecAdimlari).map(
    (a): BaslikAciklama => ({ baslik: metin(a.baslik), aciklama: metin(a.aciklama) }),
  ),

  hakkinda: yazili(liste<string>(veri.hakkinda)),
  egitim: yazili(liste<string>(veri.egitim)),
  calismaAlanlari: yazili(liste<string>(veri.calismaAlanlari)),
  yaklasim: yazili(liste<string>(veri.yaklasim)),

  makalelerGiris: metin(veri.makalelerGiris),
  yazarNotu: metin(veri.yazarNotu),

  onGorusmeLink: calBaglantisi(veri.onGorusmeLink, 'oznurcamalan/ongorusme'),
  randevuLink: calBaglantisi(veri.randevuLink, 'oznurcamalan/oturum'),
  onGorusmeAciklama: yoksa(veri.onGorusmeAciklama, 'Kısaca tanışır, ihtiyacınızı ve beklentinizi konuşuruz.'),
  randevuAciklama: yoksa(veri.randevuAciklama, 'Size uygun gün ve saati takvimden kendiniz seçersiniz.'),
  onGorusmeSure: metin(veri.onGorusmeSure),
  randevuSure: metin(veri.randevuSure),

  anaSayfaCta: yoksa(veri.anaSayfaCta, 'Hazır olduğunuzda, ilk adımı birlikte atalım.'),
  hakkimdaCta: yoksa(veri.hakkimdaCta, 'Tanışmak için kısa bir ön görüşmeyle başlayabiliriz.'),
  iletisimBaslik: yoksa(veri.iletisimBaslik, 'Hazır olduğunuzda, size uygun yoldan başlayın.'),
  iletisimGiris: metin(veri.iletisimGiris),
  randevuBaslik: yoksa(veri.randevuBaslik, 'Görüşme planlamak birkaç adım sürer.'),
  randevuGiris: metin(veri.randevuGiris),

  seoHakkimda: metin(veri.seoHakkimda),
  seoIletisim: metin(veri.seoIletisim),
  seoRandevu: metin(veri.seoRandevu),
};
