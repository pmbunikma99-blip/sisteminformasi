import React, { useState } from 'react';
import { CheckCircle, Send, MessageSquare, Mail, Phone, MapPin, Download, FileText, ArrowRight, X } from 'lucide-react';

interface PmbRegistrationProps {
  isOpenModal?: boolean;
  onCloseModal?: () => void;
}

export const PmbRegistration: React.FC<PmbRegistrationProps> = ({
  isOpenModal = false,
  onCloseModal,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    whatsapp: '',
    email: '',
    origin: '',
    programType: 'Reguler (Pagi/Siang)',
    profileInterest: 'PL02 - UI/UX & Product Design',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [regCode, setRegCode] = useState('');
  const [showBrochureModal, setShowBrochureModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.whatsapp) return;

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const code = `PMB-UNIKMA-SI-${randomSuffix}`;
    setRegCode(code);
    setSubmitted(true);
  };

  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Halo PMB Universitas Komputama,\nSaya ingin berkonsultasi mengenai pendaftaran Program Studi Sistem Informasi:\n\n` +
      `No. Registrasi: ${regCode}\n` +
      `Nama: ${formData.fullName}\n` +
      `WhatsApp: ${formData.whatsapp}\n` +
      `Email: ${formData.email || '-'}\n` +
      `Asal Sekolah/Domisili: ${formData.origin || '-'}\n` +
      `Jalur Pilihan: ${formData.programType}\n` +
      `Minat Profil Lulusan: ${formData.profileInterest}\n` +
      `Catatan: ${formData.notes || '-'}`
    );
    // WhatsApp URL (can use standard format)
    return `https://wa.me/6281234567890?text=${text}`;
  };

  const generateMailtoUrl = () => {
    const subject = encodeURIComponent(`Pendaftaran Mahasiswa Baru SI UNIKMA - ${formData.fullName}`);
    const body = encodeURIComponent(
      `Halo Tim PMB Universitas Komputama,\n\nBerikut data pendaftaran & permohonan konsultasi saya:\n` +
      `No. Registrasi: ${regCode}\n` +
      `Nama: ${formData.fullName}\n` +
      `No. WhatsApp: ${formData.whatsapp}\n` +
      `Email: ${formData.email}\n` +
      `Asal Sekolah / Domisili: ${formData.origin}\n` +
      `Jalur Kuliah: ${formData.programType}\n` +
      `Minat Profil Lulusan: ${formData.profileInterest}\n` +
      `Pertanyaan: ${formData.notes}\n\nTerima kasih.`
    );
    return `mailto:pmb@unikma.ac.id?subject=${subject}&body=${body}`;
  };

  const formContent = (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
              Formulir Pendaftaran & Konsultasi Online
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
              Penerimaan Mahasiswa Baru 2026/2027
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Isi data diri singkat untuk mendapatkan brosur lengkap kurikulum, rincian biaya studi, serta jadwal konsultasi dengan dosen Sistem Informasi Universitas Komputama.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Nama Lengkap <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="Contoh: Muhammad Rizky Pratama"
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Nomor WhatsApp Aktif <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                placeholder="081234567890"
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Alamat Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="nama@email.com"
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Asal Sekolah / Domisili
              </label>
              <input
                type="text"
                value={formData.origin}
                onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                placeholder="Contoh: SMA Negeri 1 / Cilacap"
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Pilihan Jalur Kuliah
              </label>
              <select
                value={formData.programType}
                onChange={(e) => setFormData({ ...formData, programType: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white"
              >
                <option value="Reguler (Pagi/Siang)">Reguler (Pagi/Siang)</option>
                <option value="Kelas Karyawan (Sore/Malam)">Kelas Karyawan (Sore/Malam & Hybrid)</option>
                <option value="Jalur Beasiswa Prestasi">Jalur Beasiswa Prestasi / Rapor</option>
                <option value="Jalur KIP-Kuliah / Bantuan Pendidikan">Jalur KIP-Kuliah / Bantuan Pendidikan</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Minat Profil Lulusan Utama
              </label>
              <select
                value={formData.profileInterest}
                onChange={(e) => setFormData({ ...formData, profileInterest: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white"
              >
                <option value="PL01 - Komunikasi Interpersonal & Akhlakul Karimah">PL01: Komunikasi Interpersonal & Akhlakul Karimah</option>
                <option value="PL02 - UI/UX Designer & Product Experience">PL02: UI/UX & Product Design (IS2020)</option>
                <option value="PL03 - System Analyst & Information Systems">PL03: System Analyst & Konsultan TI (IS2020)</option>
                <option value="PL04 - Software Engineer & Technopreneur">PL04: Software Engineer & Technopreneur (IS2020)</option>
                <option value="Belum Tahu (Ingin Konsultasi Minat)">Belum Tahu (Ingin Konsultasi Minat Dulu)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Pertanyaan atau Catatan Khusus (Opsional)
            </label>
            <textarea
              rows={3}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Contoh: Saya ingin menanyakan jadwal perkuliahan kelas karyawan atau syarat beasiswa prestasi..."
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              className="w-full sm:w-auto px-7 py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Kirim Formulir Pendaftaran</span>
            </button>
            <button
              type="button"
              onClick={() => setShowBrochureModal(true)}
              className="w-full sm:w-auto px-5 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Unduh Silabus & Brosur Ringkas</span>
            </button>
          </div>
        </form>
      ) : (
        /* Submission Confirmation */
        <div className="text-center py-6 space-y-6">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-8 h-8" />
          </div>

          <div className="space-y-1">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
              Pendaftaran Berhasil Dikirim
            </span>
            <h3 className="text-2xl font-bold text-slate-900 font-display">
              Terima Kasih, {formData.fullName}!
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Data Anda telah tersimpan dengan nomor registrasi resmi. Tim PMB Sistem Informasi Universitas Komputama akan segera menghubungi Anda.
            </p>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl max-w-md mx-auto text-left text-xs space-y-2">
            <div className="flex justify-between border-b border-slate-200 pb-2">
              <span className="text-slate-500">Nomor Registrasi:</span>
              <span className="font-mono font-bold text-blue-700">{regCode}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Program Pilihan:</span>
              <span className="font-medium text-slate-800">{formData.programType}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Fokus Minat:</span>
              <span className="font-medium text-slate-800">{formData.profileInterest}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">WhatsApp:</span>
              <span className="font-medium text-slate-800">{formData.whatsapp}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-xl shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Konfirmasi via WhatsApp Sekarang</span>
            </a>
            <a
              href={generateMailtoUrl()}
              className="w-full sm:w-auto px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm rounded-xl shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Kirim Email PMB (pmb@unikma.ac.id)</span>
            </a>
          </div>

          <div className="pt-2">
            <button
              onClick={() => setSubmitted(false)}
              className="text-xs text-slate-500 hover:text-slate-800 underline cursor-pointer"
            >
              Daftarkan Calon Mahasiswa Lain
            </button>
          </div>
        </div>
      )}
    </div>
  );

  // Brochure modal
  const brochureModal = showBrochureModal && (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={() => setShowBrochureModal(false)}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider">
            <FileText className="w-4 h-4" />
            <span>Dokumen Informasi Resmi PMB</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
            Ringkasan Kurikulum & Profil Lulusan SI UNIKMA
          </h3>

          <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-b border-slate-100 py-4">
            <div className="p-3 bg-blue-50 rounded-xl text-blue-900">
              <strong>Visi 2032:</strong> Menjadi Program Studi Berdaya Saing Nasional yang Menghasilkan Lulusan Kompeten dalam Menerapkan Sistem Informasi di Bidang Rekayasa Sistem Informasi dan Memiliki Kemampuan Komunikasi Interpersonal & Technopreneur pada Tahun 2032.
            </div>

            <div>
              <strong className="text-slate-900 block mb-1">3 Pilar Keilmuan:</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Komputer:</strong> Pemrograman, Jaringan Komputer, Basis Data, Pengembangan Software.</li>
                <li><strong>Manajemen:</strong> Prinsip Manajemen, Manajemen Sistem Informasi, Manajemen Proyek.</li>
                <li><strong>Bisnis:</strong> Administrasi Bisnis, SI Akuntansi, Pengembangan & Pemasaran Produk, Perilaku Organisasi.</li>
              </ul>
            </div>

            <div>
              <strong className="text-slate-900 block mb-1">Target & Sasaran Utama:</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>Kurikulum berbasis KKNI & IS2020.</li>
                <li>Minimal 75% lulusan mencapai IPK ≥ 3,00.</li>
                <li>Minimal 75% lulusan meraih nilai skripsi A.</li>
                <li>Lulusan mandiri berjiwa wirausaha TI (Technopreneur).</li>
              </ul>
            </div>

            <div>
              <strong className="text-slate-900 block mb-1">Kontak Resmi PMB:</strong>
              <p>Email: <strong>pmb@unikma.ac.id</strong></p>
              <p>Universitas Komputama - Fakultas Sains dan Teknologi</p>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              onClick={() => window.print()}
              className="px-4 py-2.5 bg-blue-700 text-white rounded-xl text-xs sm:text-sm font-semibold hover:bg-blue-800 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Cetak / Simpan PDF Brosur</span>
            </button>
            <button
              onClick={() => setShowBrochureModal(false)}
              className="px-4 py-2.5 bg-slate-100 text-slate-700 rounded-xl text-xs sm:text-sm font-medium hover:bg-slate-200 transition-colors cursor-pointer"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // If used as modal
  if (isOpenModal) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="max-w-2xl w-full relative max-h-[95vh] overflow-y-auto rounded-3xl">
          <button
            onClick={onCloseModal}
            className="absolute top-5 right-5 z-10 p-2 text-slate-400 hover:text-slate-700 bg-white/80 rounded-full hover:bg-white"
          >
            <X className="w-5 h-5" />
          </button>
          {formContent}
        </div>
        {brochureModal}
      </div>
    );
  }

  // Embedded Section
  return (
    <section id="pmb" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: PMB Information & Trust Badges */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                Penerimaan Mahasiswa Baru
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display tracking-tight">
                Mulai Perjalanan Menjadi Sarjana Komputer di UNIKMA
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Bergabunglah bersama keluarga besar Program Studi Sistem Informasi Universitas Komputama. Kami siap membimbing Anda dari pemula hingga menjadi profesional TI dan Technopreneur berakhlakul karimah.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700">
                <Mail className="w-4 h-4 text-blue-700 shrink-0" />
                <div>
                  <span className="font-semibold block text-slate-900">Email PMB Resmi</span>
                  <span>pmb@unikma.ac.id</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700">
                <MapPin className="w-4 h-4 text-blue-700 shrink-0" />
                <div>
                  <span className="font-semibold block text-slate-900">Kampus Universitas Komputama</span>
                  <span>Program Studi Sistem Informasi</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700">
                <Phone className="w-4 h-4 text-blue-700 shrink-0" />
                <div>
                  <span className="font-semibold block text-slate-900">Layanan Konsultasi Akademik</span>
                  <span>Senin – Sabtu, 08:00 – 16:30 WIB</span>
                </div>
              </div>
            </div>

            {/* Direct Official Portal Link */}
            <div className="p-4 bg-gradient-to-r from-blue-700 to-indigo-700 text-white rounded-2xl shadow-sm space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-200 block">
                Portal Resmi PMB UNIKMA
              </span>
              <p className="text-xs text-blue-100">
                Pendaftaran online mandiri dapat langsung diakses melalui portal resmi penerimaan mahasiswa baru:
              </p>
              <a
                href="https://pmb.unikmacilacap.ac.id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-blue-800 text-xs font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-xs"
              >
                <span>Buka pmb.unikmacilacap.ac.id</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Trust Quote */}
            <div className="p-4 bg-blue-50/70 border border-blue-200/80 rounded-2xl text-xs text-blue-900 space-y-1">
              <span className="font-bold block">Beasiswa & Bantuan Biaya Studi:</span>
              <p className="leading-relaxed">
                Tersedia beasiswa KIP-Kuliah, beasiswa prestasi akademik/hafiz, serta kemudahan skema cicilan perkuliahan tanpa bunga untuk kelas reguler dan karyawan.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            {formContent}
          </div>

        </div>
      </div>
      {brochureModal}
    </section>
  );
};
