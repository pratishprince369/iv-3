'use client';

interface SectionConfig {
  startPct: number;
  endPct: number;
  position: 'bottom-left' | 'top-right' | 'center';
  label: string;
  headline: string;
  headlinePx: number;
  headlineWeight: number;
  headlineItalic?: boolean;
  headlineGradient?: 'cream-to-amber' | 'amber-to-cream';
  headlineColor?: string;
  subtext: string;
  showCTA?: boolean;
}

const SECTIONS: SectionConfig[] = [
  {
    startPct: 0,
    endPct: 22,
    position: 'bottom-left',
    label: 'Vital Hydration',
    headline: 'Pure Life.\nPerfectly\nDelivered.',
    headlinePx: 84,
    headlineWeight: 300,
    headlineItalic: true,
    headlineGradient: 'cream-to-amber',
    subtext: 'Intravenous excellence. Pure. Potent. Precise.',
  },
  {
    startPct: 30,
    endPct: 55,
    position: 'top-right',
    label: 'The Flow Moment',
    headline: 'Liquid\nVitality.',
    headlinePx: 76,
    headlineWeight: 400,
    headlineColor: '#FFF9F2',
    subtext: '100% essential nutrients. Direct to your system.',
  },
  {
    startPct: 60,
    endPct: 78,
    position: 'center',
    label: 'Back to Balance',
    headline: "Nature's\nFlow.",
    headlinePx: 92,
    headlineWeight: 300,
    headlineItalic: true,
    headlineGradient: 'amber-to-cream',
    subtext: 'Every drop restoring your natural equilibrium.',
  },
  {
    startPct: 84,
    endPct: 96,
    position: 'center',
    label: '',
    headline: 'Feel the Flow.',
    headlinePx: 96,
    headlineWeight: 300,
    headlineColor: '#FFF9F2',
    subtext: 'Expert care. Medical grade. Total restoration.',
    showCTA: true,
  },
];

function calcOpacity(
  progressPct: number,
  startPct: number,
  endPct: number
): number {
  const fadeIn = 2;
  const fadeOut = 2;

  if (progressPct < startPct - fadeIn || progressPct > endPct + fadeOut)
    return 0;
  if (progressPct < startPct)
    return (progressPct - (startPct - fadeIn)) / fadeIn;
  if (progressPct > endPct) return 1 - (progressPct - endPct) / fadeOut;
  return 1;
}

function getPositionStyle(
  position: SectionConfig['position']
): React.CSSProperties {
  switch (position) {
    case 'bottom-left':
      return {
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        textAlign: 'left',
        width: '90%',
      };
    case 'top-right':
      return {
        position: 'absolute',
        top: '12%',
        right: '5%',
        textAlign: 'right',
        width: '90%',
      };
    case 'center':
      return {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        width: '90%',
        maxWidth: '800px',
      };
  }
}

function getHeadlineStyle(section: SectionConfig): React.CSSProperties {
  const base: React.CSSProperties = {
    fontFamily: 'var(--font-serif, "Cormorant Garamond", serif)',
    fontSize: `clamp(32px, 8vw, ${section.headlinePx}px)`,
    fontWeight: section.headlineWeight,
    fontStyle: section.headlineItalic ? 'italic' : 'normal',
    lineHeight: 1.1,
    whiteSpace: 'pre-line',
    display: 'block',
    filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))',
  };

  if (section.headlineGradient === 'cream-to-amber') {
    return {
      ...base,
      background: 'linear-gradient(135deg, #FFF9F2 0%, #C9956C 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    };
  }
  if (section.headlineGradient === 'amber-to-cream') {
    return {
      ...base,
      background:
        'linear-gradient(135deg, #C9956C 0%, #E8D5A3 50%, #FFF9F2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    };
  }
  return { ...base, color: section.headlineColor ?? '#FFF9F2' };
}

interface Props {
  progress: number;
}

export default function TextOverlay({ progress }: Props) {
  const progressPct = progress * 100;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Subtle vignette for text readability */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,0,0,0.25)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(0,0,0,0.2)_0%,transparent_40%)] pointer-events-none opacity-60" />

      {SECTIONS.map((section, i) => {
        const opacity = calcOpacity(progressPct, section.startPct, section.endPct);
        if (opacity === 0) return null;

        return (
          <div
            key={i}
            style={{
              ...getPositionStyle(section.position),
              opacity,
              transition: 'opacity 0.4s ease, transform 0.4s ease',
              zIndex: 2,
              pointerEvents: section.showCTA ? 'auto' : 'none',
              transform: section.position === 'center' 
                ? `translate(-50%, calc(-50% + ${(1 - opacity) * 20}px))`
                : `translateY(${(1 - opacity) * 20}px)`,
            }}
          >
            {section.label && (
              <span
                className="block font-sans text-[9px] md:text-[11px] tracking-[4px] md:tracking-[5px] text-[#C9956C] font-bold uppercase mb-4 drop-shadow-md"
              >
                {section.label}
              </span>
            )}

            <span style={getHeadlineStyle(section)}>{section.headline}</span>

            <p
              className="font-sans text-sm md:text-base font-medium text-white/90 mt-6 leading-relaxed max-w-[450px] mx-auto md:mx-0 drop-shadow-lg"
              style={{ 
                marginLeft: section.position === 'center' ? 'auto' : undefined,
                marginRight: section.position === 'center' ? 'auto' : undefined,
                textAlign: section.position === 'top-right' ? 'right' : section.position === 'center' ? 'center' : 'left'
              }}
            >
              {section.subtext}
            </p>

            {section.showCTA && (
              <button
                data-cursor-expand
                className="px-8 md:px-12 py-3 md:py-4 bg-gradient-to-br from-[#C9956C] to-[#A67550] text-white font-sans text-[10px] md:text-[11px] font-bold tracking-[0.24em] uppercase rounded-[3px] transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(201,149,108,0.45)] mt-8 md:mt-10 pointer-events-auto shadow-xl"
              >
                Book Your Session →
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
