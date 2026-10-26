import React from 'react';
import { Camera, ShieldCheck, User } from 'lucide-react';

interface AvatarBadgeProps {
  avatarUrl?: string;
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showEditOverlay?: boolean;
  showVerifiedShield?: boolean;
  onClick?: () => void;
  className?: string;
}

export const AvatarBadge: React.FC<AvatarBadgeProps> = ({
  avatarUrl,
  name,
  size = 'md',
  showEditOverlay = false,
  showVerifiedShield = false,
  onClick,
  className = '',
}) => {
  const [imageError, setImageError] = React.useState(false);

  // Reset image error if avatarUrl changes
  React.useEffect(() => {
    setImageError(false);
  }, [avatarUrl]);

  const initials = name
    .trim()
    .split(/\s+/)
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase() || 'SJ';

  const sizeClasses = {
    xs: 'w-7 h-7 text-[10px] rounded-full',
    sm: 'w-9 h-9 text-xs rounded-full',
    md: 'w-11 h-11 text-sm rounded-2xl',
    lg: 'w-14 h-14 text-lg rounded-2xl',
    xl: 'w-20 h-20 text-2xl rounded-3xl',
  };

  const isInteractive = Boolean(onClick);

  return (
    <div
      onClick={onClick}
      role={isInteractive ? 'button' : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      onKeyDown={(e) => {
        if (isInteractive && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick?.();
        }
      }}
      className={`relative inline-flex items-center justify-center shrink-0 select-none ${
        isInteractive ? 'cursor-pointer group active:scale-95 transition-transform' : ''
      } ${className}`}
    >
      <div
        className={`${sizeClasses[size]} overflow-hidden flex items-center justify-center font-black transition-all border border-[#0BA89A]/20 shadow-xs ${
          avatarUrl && !imageError
            ? 'bg-white'
            : 'bg-gradient-to-br from-[#E6F6F4] to-[#c7eee9] text-[#006A61]'
        }`}
      >
        {avatarUrl && !imageError ? (
          <img
            src={avatarUrl}
            alt={name}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="tracking-tight">{initials}</span>
        )}
      </div>

      {/* Edit camera badge overlay */}
      {showEditOverlay && (
        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#0BA89A] text-white flex items-center justify-center shadow-md border-2 border-white group-hover:scale-110 transition-transform">
          <Camera className="w-3 h-3 stroke-[2.5]" />
        </div>
      )}

      {/* Verified Shield icon */}
      {showVerifiedShield && !showEditOverlay && (
        <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#0BA89A] text-white flex items-center justify-center shadow-xs border-2 border-white">
          <ShieldCheck className="w-3 h-3 stroke-[3]" />
        </div>
      )}
    </div>
  );
};
