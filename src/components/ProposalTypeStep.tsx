import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Building2, Tractor, Building } from 'lucide-react';

type ProposalType = 'PF' | 'PJ' | 'Rural' | 'Condomínio' | null;

interface CardOption {
  id: ProposalType;
  label: string;
  description: string;
  icon: React.ReactNode;
  contextLabel: string;
  contextValue: string;
  accentColor: string;
  glowColor: string;
}

const cards: CardOption[] = [
  {
    id: 'PF',
    label: 'PF',
    description: 'Economia inteligente para residências.',
    icon: <Home strokeWidth={1.5} size={22} />,
    contextLabel: 'Economia média residencial',
    contextValue: 'Até 25% de redução na conta de luz',
    accentColor: '#16968D',
    glowColor: 'rgba(22,150,141,0.18)',
  },
  {
    id: 'PJ',
    label: 'PJ',
    description: 'Redução de custos para empresas.',
    icon: <Building2 strokeWidth={1.5} size={22} />,
    contextLabel: 'Redução operacional anual',
    contextValue: 'Até 35% de economia nos custos energéticos',
    accentColor: '#832472',
    glowColor: 'rgba(131,36,114,0.15)',
  },
  {
    id: 'Rural',
    label: 'Rural',
    description: 'Energia sustentável para produção rural.',
    icon: <Tractor strokeWidth={1.5} size={22} />,
    contextLabel: 'Economia para o agronegócio',
    contextValue: 'Até 30% de redução em insumos energéticos',
    accentColor: '#FF8C47',
    glowColor: 'rgba(255,140,71,0.15)',
  },
  {
    id: 'Condomínio',
    label: 'Condomínio',
    description: 'Economia coletiva para condomínios.',
    icon: <Building strokeWidth={1.5} size={22} />,
    contextLabel: 'Economia coletiva estimada',
    contextValue: 'Até 20% de redução por unidade',
    accentColor: '#FFC837',
    glowColor: 'rgba(255,200,55,0.15)',
  },
];

export default function ProposalTypeStep() {
  const [selected, setSelected] = useState<ProposalType>(null);
  const [hovered, setHovered] = useState<ProposalType>(null);

  const activeCard = cards.find((c) => c.id === selected);

  return (
    <div className="min-h-screen bg-[#F7F7F8] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-2xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#832472] opacity-80">
              Etapa 1
            </span>
            <span className="w-8 h-px bg-[#832472] opacity-30" />
          </div>
          <h1 className="text-[2rem] font-semibold tracking-tight text-[#111113] leading-tight mb-2">
            Tipo de Proposta
          </h1>
          <p className="text-[#6B6B7A] text-[0.95rem] font-normal leading-relaxed">
            Selecione o perfil ideal para personalizar a proposta.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 gap-4">
          {cards.map((card, i) => {
            const isSelected = selected === card.id;
            const isHovered = hovered === card.id;

            return (
              <motion.button
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: 0.08 * i,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onClick={() => setSelected(card.id)}
                onHoverStart={() => setHovered(card.id)}
                onHoverEnd={() => setHovered(null)}
                className="relative text-left outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-2xl"
                style={{
                  '--accent': card.accentColor,
                  '--glow': card.glowColor,
                } as React.CSSProperties}
              >
                <motion.div
                  animate={{
                    scale: isHovered && !isSelected ? 1.015 : 1,
                    y: isHovered && !isSelected ? -2 : 0,
                  }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="relative rounded-2xl overflow-hidden"
                  style={{
                    background: isSelected
                      ? `linear-gradient(145deg, #fff 60%, ${card.glowColor.replace('0.15', '0.06')} 100%)`
                      : '#fff',
                    border: isSelected
                      ? `1.5px solid ${card.accentColor}40`
                      : '1.5px solid #E4E4E8',
                    boxShadow: isSelected
                      ? `0 0 0 3px ${card.glowColor}, 0 8px 32px ${card.glowColor}, 0 2px 8px rgba(0,0,0,0.06)`
                      : isHovered
                      ? '0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)'
                      : '0 1px 4px rgba(0,0,0,0.05)',
                    transition: 'box-shadow 0.25s ease, border-color 0.25s ease, background 0.25s ease',
                  }}
                >
                  {/* Selected indicator dot */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-3.5 right-3.5 w-2 h-2 rounded-full"
                        style={{ background: card.accentColor }}
                      />
                    )}
                  </AnimatePresence>

                  <div className="p-6">
                    {/* Icon */}
                    <motion.div
                      animate={{
                        color: isSelected || isHovered ? card.accentColor : '#9191A0',
                      }}
                      transition={{ duration: 0.2 }}
                      className="mb-4"
                      style={{ color: '#9191A0' }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{
                          background: isSelected
                            ? `${card.accentColor}12`
                            : isHovered
                            ? `${card.accentColor}08`
                            : '#F4F4F6',
                          color: isSelected || isHovered ? card.accentColor : '#9191A0',
                          transition: 'background 0.25s ease, color 0.25s ease',
                        }}
                      >
                        {card.icon}
                      </div>
                    </motion.div>

                    {/* Label */}
                    <p
                      className="text-base font-semibold tracking-tight mb-1 transition-colors duration-200"
                      style={{
                        color: isSelected ? card.accentColor : '#111113',
                      }}
                    >
                      {card.label}
                    </p>

                    {/* Description */}
                    <p className="text-[0.8125rem] leading-relaxed text-[#84848F]">
                      {card.description}
                    </p>

                    {/* Context reveal on selection */}
                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div
                            className="pt-4"
                            style={{
                              borderTop: `1px solid ${card.accentColor}20`,
                            }}
                          >
                            <p
                              className="text-[0.7rem] font-semibold uppercase tracking-widest mb-1"
                              style={{ color: `${card.accentColor}99` }}
                            >
                              {card.contextLabel}
                            </p>
                            <p
                              className="text-[0.8125rem] font-medium leading-snug"
                              style={{ color: card.accentColor }}
                            >
                              {card.contextValue}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </motion.button>
            );
          })}
        </div>

        {/* Simulation panel context */}
        <AnimatePresence mode="wait">
          {activeCard && (
            <motion.div
              key={activeCard.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 rounded-2xl px-6 py-4 flex items-center justify-between"
              style={{
                background: '#fff',
                border: '1.5px solid #E4E4E8',
                boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${activeCard.accentColor}10`, color: activeCard.accentColor }}
                >
                  {activeCard.icon}
                </div>
                <div>
                  <p className="text-[0.75rem] text-[#9191A0] font-medium leading-none mb-0.5">
                    Perfil selecionado
                  </p>
                  <p className="text-[0.875rem] font-semibold text-[#111113] leading-none">
                    {activeCard.label} — {activeCard.contextLabel}
                  </p>
                </div>
              </div>
              <span
                className="text-[0.75rem] font-semibold px-3 py-1.5 rounded-full whitespace-nowrap"
                style={{
                  background: `${activeCard.accentColor}10`,
                  color: activeCard.accentColor,
                }}
              >
                {activeCard.contextValue.split(' ').slice(0, 2).join(' ')}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="mt-8 flex justify-end"
        >
          <motion.button
            whileHover={{ scale: selected ? 1.02 : 1 }}
            whileTap={{ scale: selected ? 0.98 : 1 }}
            disabled={!selected}
            className="relative px-7 py-3 rounded-xl font-semibold text-sm tracking-tight transition-all duration-200"
            style={{
              background: selected ? '#FFC837' : '#E4E4E8',
              color: selected ? '#111113' : '#9191A0',
              boxShadow: selected
                ? '0 4px 20px rgba(255,200,55,0.3), 0 1px 4px rgba(0,0,0,0.08)'
                : 'none',
              cursor: selected ? 'pointer' : 'not-allowed',
            }}
          >
            Continuar
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
