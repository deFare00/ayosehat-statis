export interface TopicItem {
  name: string;
  isNew?: boolean;
}

export const topicsData: Record<string, TopicItem[]> = {
  A: [
    { name: "ADHD" },
    { name: "AIDS" },
    { name: "Alzheimer" },
    { name: "Alzheimer pada Lansia" },
    { name: "Akupunktur", isNew: true },
    { name: "Alergi" },
    { name: "Alergi Makanan" },
    { name: "Alergi Obat" },
    { name: "Alopesia" },
    { name: "Amandel" },
    { name: "Anemia", isNew: true }
  ],
  B: [
    { name: "Batu Empedu" },
    { name: "Batu Ginjal" },
    { name: "Batuk Berdahak", isNew: true },
    { name: "Batuk" }
  ],
  C: [
    { name: "Cacar Air" },
    { name: "Campak" },
    { name: "Cantengan" },
    { name: "Cedera Kepala", isNew: true },
    { name: "Cedera Medula Spinalis" },
    { name: "Cedera Ligamen Lutut Anterior" }
  ],
  D: [
    { name: "Diabetes Melitus" },
    { name: "Diabetes Insipidus" },
    { name: "Demam Berdarah Dengue" },
    { name: "Dengue" },
    { name: "Demam", isNew: true },
    { name: "Depresi" },
    { name: "Dermatitis Atopik" },
    { name: "Dermatitis Kontak" },
    { name: "Dermatitis Seboroik" },
    { name: "Dermatitis Popok" },
    { name: "Dermatomiositis" },
    { name: "Disentri" },
    { name: "Disinfeksi dan Sterilisasi" },
    { name: "Dislokasi Bahu" },
    { name: "Dislokasi Mandibula" },
    { name: "Disleksia" }
  ],
  E: [
    { name: "Eksim" }
  ],
  F: [
    { name: "Fimosis" }
  ],
  G: [
    { name: "Gagal Ginjal" },
    { name: "Gagal Jantung" },
    { name: "Gangguan Bipolar", isNew: true },
    { name: "Gangguan Kecemasan" },
    { name: "Gangguan Kepribadian" }
  ],
  H: [
    { name: "Hepatitis" },
    { name: "Hipertensi" },
    { name: "Hipotermia", isNew: true },
    { name: "Hipotensi" },
    { name: "Human Papillomavirus" }
  ],
  I: [
    { name: "Iman", isNew: true },
    { name: "Impetigo" },
    { name: "Infertilitas" },
    { name: "Influenza" },
    { name: "Insomnia" }
  ],
  J: [
    { name: "Jantung Koroner" },
    { name: "Jerawat", isNew: true }
  ],
  K: [
    { name: "Kanker" },
    { name: "Kanker Darah (Leukemia)" },
    { name: "Kanker Serviks (Kanker Leher Rahim)" },
    { name: "Kanker Hati" },
    { name: "Kanker Otak" },
    { name: "Kanker Payudara" },
    { name: "Kanker Rahim (Endometrium)" },
    { name: "Kanker Lambung (Kanker Lambung)" },
    { name: "Kanker Kulit (Melanoma)" },
    { name: "Kanker Paru (Kanker Paru-Paru)" },
    { name: "Kanker Tenggorokan (Laring)" },
    { name: "Kanker Tulang (Osteosarkoma)" },
    { name: "Kanker Lidah" },
    { name: "Kanker Testis" },
    { name: "Kanker Tiroid" },
    { name: "Kanker Prostat (Kanker Prostat)", isNew: true },
    { name: "Kanker Pankreas" },
    { name: "Kanker Ginjal" },
    { name: "Kanker Kantung Kemih" },
    { name: "Kanker Esofagus" },
    { name: "Kanker Kolorektal (Usus Besar)" },
    { name: "Kanker Mulut (Rongga Mulut)", isNew: true },
    { name: "Kanker Mata (Retinoblastoma)" },
    { name: "Kanker Usus" },
    { name: "Kanker Kandung Empedu", isNew: true },
    { name: "Kanker Usus Halus" },
    { name: "Kanker Saluran Empedu" },
    { name: "Keloid" }
  ],
  L: [
    { name: "Laringitis" },
    { name: "Leukemia" },
    { name: "Limfoma" },
    { name: "Lupus", isNew: true }
  ],
  M: [
    { name: "Malaria" },
    { name: "Migrain", isNew: true },
    { name: "Meningitis" },
    { name: "Mata Silinder" },
    { name: "Mata Minus" }
  ],
  N: [
    { name: "Narkoba" },
    { name: "Nefritis" },
    { name: "Neuropati" },
    { name: "Nyeri Sendi" },
    { name: "Nyeri Punggung" }
  ],
  O: [
    { name: "Obesitas" },
    { name: "Osteoporosis" },
    { name: "Otitis Media" },
    { name: "Otitis Eksterna" },
    { name: "Osteoartritis" }
  ],
  P: [
    { name: "Panu" },
    { name: "Penyakit Cek Kesehatan Rutin" },
    { name: "Psoriasis" },
    { name: "Pterigium", isNew: true },
    { name: "Penyakit Jantung" },
    { name: "Penyakit Jantung Koroner" },
    { name: "Penyakit Jantung Bawaan" },
    { name: "Penyakit Paru Obstruktif Kronis (PPOK)" },
    { name: "Penyakit Menular Seksual (PMS)" },
    { name: "Penyakit Ginjal" },
    { name: "Penyakit Paru" },
    { name: "Penyakit Hati" },
    { name: "Penyakit Lambung" },
    { name: "Penyakit Tulang" },
    { name: "Penyakit Sendi" },
    { name: "Penyakit Otot" },
    { name: "Penyakit Kulit" },
    { name: "Penyakit Saraf" },
    { name: "Penyakit Telinga" },
    { name: "Penyakit Mata" },
    { name: "Penyakit Gigi dan Mulut" },
    { name: "Penyakit Pencernaan", isNew: true },
    { name: "Penyakit Pernapasan" },
    { name: "Penyakit Endokrin" },
    { name: "Penyakit Infeksi Tropis" },
    { name: "Penyakit Menular" },
    { name: "Penyakit Tidak Menular" },
    { name: "Penyakit Kanker" },
    { name: "Penyakit Imun" },
    { name: "Penyakit Darah" },
    { name: "Penyakit Saluran Kemih" }
  ],
  Q: [],
  R: [
    { name: "Rabies" },
    { name: "Radang Tenggorokan" },
    { name: "Rematik" },
    { name: "Rubela", isNew: true }
  ],
  S: [
    { name: "Sakit Kepala", isNew: true },
    { name: "Sakit Gigi" },
    { name: "Sakit Maag" },
    { name: "Sakit Pinggang" },
    { name: "Sakit Telinga" },
    { name: "Sarkoidosis" },
    { name: "Scabies" },
    { name: "Schizophrenia" },
    { name: "Sifilis" },
    { name: "Sinusitis" },
    { name: "Stroke", isNew: true },
    { name: "Selulitis" },
    { name: "Sembelit" },
    { name: "Sariawan" },
    { name: "Skleroderma" },
    { name: "Spina Bifida" },
    { name: "Spondilitis Ankilosa" },
    { name: "Spondilosis" },
    { name: "Sprain dan Strain" },
    { name: "Stenosis Spinal" },
    { name: "Stunting" },
    { name: "Sumbing Bibir" },
    { name: "Sindrom Lorong Karpal" },
    { name: "Sindrom Kaki Gelisah" },
    { name: "Sindrom Down" },
    { name: "Sindrom Iritasi Usus" },
    { name: "Sindrom Ovarium Polikistik (SOPK)", isNew: true },
    { name: "Sindrom Kelelahan Kronis" },
    { name: "Sindrom Kematian Bayi Mendadak" },
    { name: "Sindrom Nefrotik" },
    { name: "Sindrom Prader-Willi" },
    { name: "Sindrom Sjögren" },
    { name: "Sindrom Turner" },
    { name: "Sindrom Klinefelter" },
    { name: "Sindrom Asperger" },
    { name: "Sindrom Rett" },
    { name: "Sindrom Tourette" },
    { name: "Sindrom Guillain-Barre" },
    { name: "Sepsis" },
    { name: "Silikosis" },
    { name: "Sistitis" }
  ],
  T: [
    { name: "TBC" },
    { name: "Tifus" },
    { name: "Tinitus" },
    { name: "Tonsilitis" },
    { name: "Tetanus" },
    { name: "Trombositopenia" },
    { name: "Talasemia" },
    { name: "Tiroiditis" },
    { name: "Toksoplasmosis" },
    { name: "Tinea Pedis" },
    { name: "Tinea Capitis" },
    { name: "Tinea Corporis" },
    { name: "Tinea Versicolor" },
    { name: "Tremor" },
    { name: "Trikotilomania" },
    { name: "Tuberkulosis (TBC)" }
  ],
  U: [],
  V: [
    { name: "Varises", isNew: true },
    { name: "Vitiligo" }
  ],
  W: [
    { name: "Wabah" }
  ],
  X: [],
  Y: [],
  Z: []
};
