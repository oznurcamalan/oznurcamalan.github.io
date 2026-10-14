// Site bilgileri site.json içinde tutulur ve admin panelinden (Site Bilgileri) düzenlenir.
// Bu dosya yalnızca o veriyi okur, eksik alanlara güvenli varsayılan verir ve telefon bağlantısını üretir.
import veri from './site.json';

export type IkonAdi = 'kisi' | 'cift' | 'video';

type BaslikAciklama = { baslik: string; aciklama: string };
type Hizmet = BaslikAciklama & { ikon: IkonAdi };

const ikonlar: IkonAdi[] = ['kisi', 'cift', 'video'];
const metin = (deger: unknown) => (typeof deger === 'string' ? deger.trim() : '');
const liste = <T>(deger: unknown): T[] => (Array.isArray(deger) ? (deger as T[]) : []);
const yazili = (dizi: string[]) => dizi.map(metin).filter(Boolean);

// '0 (532) 123 45 67' -> '+905321234567'
function telefonBaglantisi(telefon: string) {
  const rakamlar = telefon.replace(/\D/g, '');
  if (rakamlar.startsWith('90')) return `+${rakamlar}`;
  if (rakamlar.startsWith('0')) return `+90${rakamlar.slice(1)}`;
  return rakamlar ? `+90${rakamlar}` : '';
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

  // Boşsa kemer biçimli yer tutucu gösterilir. Örnek: '/images/danisman.jpg'
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
  onGorusmeSure: metin(veri.onGorusmeSure),
  randevuSure: metin(veri.randevuSure),
};
