import React, { useRef, useState } from 'react';
import { Upload, Camera, Trash2, X, Check, Sparkles, Smile, Image as ImageIcon } from 'lucide-react';
import { AvatarBadge } from './AvatarBadge';
import { useLanguage } from '../context/LanguageContext';

interface AvatarUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentAvatar?: string;
  userName: string;
  onSaveAvatar: (avatarUrl: string | undefined) => void;
}

// Preset avatars with colorful themed SVG data URIs
const PRESET_AVATARS = [
  {
    id: 'sparkle',
    label: 'Sparkle Fresh',
    url: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><rect width="100" height="100" rx="28" fill="%230BA89A"/><circle cx="50" cy="50" r="32" fill="%23E6F6F4"/><path d="M50 25L54 44L73 50L54 56L50 75L46 56L27 50L46 44Z" fill="%230BA89A"/><circle cx="68" cy="34" r="5" fill="%23FFD166"/></svg>',
  },
  {
    id: 'eco-leaf',
    label: 'Eco Leaf',
    url: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><rect width="100" height="100" rx="28" fill="%23E6F6F4"/><path d="M50 20C34 20 25 35 25 55C25 72 38 78 50 80C62 78 75 72 75 55C75 30 50 20 50 20Z" fill="%230BA89A"/><path d="M50 30V75M50 48L38 40M50 58L62 50" stroke="white" stroke-width="4" stroke-linecap="round"/></svg>',
  },
  {
    id: 'sunshine',
    label: 'Florida Sun',
    url: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><rect width="100" height="100" rx="28" fill="%23FFF6E5"/><circle cx="50" cy="50" r="24" fill="%23FFAA00"/><g stroke="%23FFAA00" stroke-width="4" stroke-linecap="round"><line x1="50" y1="14" x2="50" y2="22"/><line x1="50" y1="78" x2="50" y2="86"/><line x1="14" y1="50" x2="22" y2="50"/><line x1="78" y1="50" x2="86" y2="50"/><line x1="24" y1="24" x2="30" y2="30"/><line x1="70" y1="70" x2="76" y2="76"/><line x1="24" y1="76" x2="30" y2="70"/><line x1="70" y1="30" x2="76" y2="24"/></g></svg>',
  },
  {
    id: 'clean-droplet',
    label: 'Pure Aqua',
    url: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><rect width="100" height="100" rx="28" fill="%23E0F2FE"/><path d="M50 22C50 22 30 46 30 60C30 71 39 80 50 80C61 80 70 71 70 60C70 46 50 22 50 22Z" fill="%230284C7"/><ellipse cx="43" cy="55" rx="5" ry="10" transform="rotate(-20 43 55)" fill="white" opacity="0.6"/></svg>',
  },
  {
    id: 'homeowner',
    label: 'Cozy Home',
    url: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><rect width="100" height="100" rx="28" fill="%2304264A"/><path d="M50 24L24 46H32V76H68V46H76L50 24Z" fill="%23E6F6F4"/><rect x="44" y="54" width="12" height="22" rx="2" fill="%230BA89A"/><circle cx="50" cy="40" r="5" fill="%230BA89A"/></svg>',
  },
  {
    id: 'truck',
    label: 'Limpi Unit',
    url: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><rect width="100" height="100" rx="28" fill="%23E6F6F4"/><rect x="22" y="38" width="40" height="26" rx="4" fill="%230BA89A"/><path d="M62 46L72 48V64H62V46Z" fill="%2304264A"/><circle cx="34" cy="68" r="8" fill="%2304264A"/><circle cx="34" cy="68" r="3" fill="white"/><circle cx="64" cy="68" r="8" fill="%2304264A"/><circle cx="64" cy="68" r="3" fill="white"/></svg>',
  },
  {
    id: 'palm',
    label: 'Lehigh Palm',
    url: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><rect width="100" height="100" rx="28" fill="%23F0FDF4"/><path d="M50 78C48 60 50 48 54 36" stroke="%23854D0E" stroke-width="6" stroke-linecap="round"/><path d="M54 36C40 32 30 38 24 46M54 36C46 22 36 20 28 22M54 36C56 20 66 18 74 22M54 36C66 26 74 34 78 44" stroke="%2316A34A" stroke-width="5" stroke-linecap="round"/></svg>',
  },
  {
    id: 'star-vip',
    label: 'VIP Clean',
    url: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><rect width="100" height="100" rx="28" fill="%23FEF9C3"/><polygon points="50,18 59,38 81,40 64,55 69,77 50,65 31,77 36,55 19,40 41,38" fill="%23EAB308"/><circle cx="50" cy="50" r="10" fill="%23CA8A04"/></svg>',
  },
];

export const AvatarUploadModal: React.FC<AvatarUploadModalProps> = ({
  isOpen,
  onClose,
  currentAvatar,
  userName,
  onSaveAvatar,
}) => {
  const { language } = useLanguage();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedPreview, setSelectedPreview] = useState<string | undefined>(currentAvatar);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  React.useEffect(() => {
    setSelectedPreview(currentAvatar);
  }, [currentAvatar, isOpen]);

  if (!isOpen) return null;

  const t = {
    en: {
      title: 'Profile Picture & Avatar',
      subtitle: 'Upload a personal photo or choose a neighborhood avatar',
      uploadBtn: 'Upload from Device',
      removeBtn: 'Remove Picture',
      choosePreset: 'Choose an Avatar',
      saveBtn: 'Save Picture',
      cancelBtn: 'Cancel',
      successUploaded: 'Photo uploaded successfully!',
      successSaved: 'Profile picture updated!',
    },
    es: {
      title: 'Foto de Perfil y Avatar',
      subtitle: 'Sube una foto personal o elige un avatar del vecindario',
      uploadBtn: 'Subir desde dispositivo',
      removeBtn: 'Eliminar foto',
      choosePreset: 'Elige un avatar',
      saveBtn: 'Guardar foto',
      cancelBtn: 'Cancelar',
      successUploaded: '¡Foto subida con éxito!',
      successSaved: '¡Foto de perfil actualizada!',
    },
    ht: {
      title: 'Foto Pwofil ak Avata',
      subtitle: 'Telechaje yon foto pèsonèl oswa chwazi yon bèl avata Limpi',
      uploadBtn: 'Telechaje depi aparèy ou',
      removeBtn: 'Retire foto a',
      choosePreset: 'Chwazi yon avata',
      saveBtn: 'Anrejistre foto a',
      cancelBtn: 'Anile',
      successUploaded: 'Foto a monte avèk siksè!',
      successSaved: 'Foto pwofil la mete ajou!',
    },
  }[language];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please select an image file (PNG, JPG, WebP, etc.).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        setSelectedPreview(result);
        setToastMessage(t.successUploaded);
        setTimeout(() => setToastMessage(null), 2500);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSelectPreset = (url: string) => {
    setSelectedPreview(url);
  };

  const handleRemove = () => {
    setSelectedPreview(undefined);
  };

  const handleSave = () => {
    onSaveAvatar(selectedPreview);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#04264A]/60 backdrop-blur-sm p-4 animate-in fade-in">
      <div className="bg-white rounded-3xl w-full max-w-sm p-5 shadow-2xl flex flex-col gap-4 max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-1 border-b border-[#04264A]/8">
          <div className="flex items-center gap-2">
            <Camera className="w-5 h-5 text-[#0BA89A]" />
            <h3 className="text-base font-extrabold text-[#04264A]">
              {t.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-[#04264A]/70 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Current Avatar Big Preview */}
        <div className="flex flex-col items-center justify-center py-2 gap-2 text-center">
          <AvatarBadge
            name={userName}
            avatarUrl={selectedPreview}
            size="xl"
            showVerifiedShield={true}
          />
          <div>
            <h4 className="text-sm font-extrabold text-[#04264A]">{userName}</h4>
            <p className="text-xs text-[#04264A]/60 mt-0.5">{t.subtitle}</p>
          </div>
          {toastMessage && (
            <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full animate-in fade-in">
              ✓ {toastMessage}
            </span>
          )}
        </div>

        {/* Upload Button & Remove Button */}
        <div className="flex items-center gap-2">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="flex-1 h-11 rounded-xl bg-[#0BA89A] hover:bg-[#099185] active:scale-[0.98] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
          >
            <Upload className="w-4 h-4" />
            <span>{t.uploadBtn}</span>
          </button>

          {selectedPreview && (
            <button
              type="button"
              onClick={handleRemove}
              className="h-11 px-3 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              title={t.removeBtn}
            >
              <Trash2 className="w-4 h-4" />
              <span className="hidden sm:inline">{t.removeBtn}</span>
            </button>
          )}
        </div>

        {/* Preset Avatars Grid */}
        <div className="flex flex-col gap-2 pt-2 border-t border-[#04264A]/8">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#04264A] flex items-center gap-1.5">
              <Smile className="w-4 h-4 text-[#0BA89A]" />
              {t.choosePreset}
            </span>
            <span className="text-[10px] text-[#04264A]/50 uppercase font-semibold">
              8 Options
            </span>
          </div>

          <div className="grid grid-cols-4 gap-2.5">
            {PRESET_AVATARS.map((avatar) => {
              const isSelected = selectedPreview === avatar.url;
              return (
                <button
                  key={avatar.id}
                  type="button"
                  onClick={() => handleSelectPreset(avatar.url)}
                  className={`p-1.5 rounded-2xl border-2 transition-all flex flex-col items-center justify-center gap-1 cursor-pointer group ${
                    isSelected
                      ? 'border-[#0BA89A] bg-[#E6F6F4]/60 scale-105 shadow-xs'
                      : 'border-transparent hover:border-[#0BA89A]/30 bg-slate-50'
                  }`}
                >
                  <img
                    src={avatar.url}
                    alt={avatar.label}
                    className="w-11 h-11 rounded-xl object-contain shadow-2xs group-hover:scale-105 transition-transform"
                  />
                  <span className="text-[10px] font-bold text-[#04264A] truncate max-w-[60px] text-center">
                    {avatar.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#04264A]/8">
          <button
            type="button"
            onClick={onClose}
            className="h-11 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#04264A] font-bold text-xs cursor-pointer active:scale-[0.98] transition-transform"
          >
            {t.cancelBtn}
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="h-11 rounded-xl bg-[#0BA89A] hover:bg-[#099185] text-white font-bold text-xs shadow-xs cursor-pointer active:scale-[0.98] transition-transform flex items-center justify-center gap-1.5"
          >
            <Check className="w-4 h-4" />
            <span>{t.saveBtn}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
