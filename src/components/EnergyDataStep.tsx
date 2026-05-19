import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Zap } from 'lucide-react';

interface SimulationData {
  currentBill: number;
  finalBill: number;
  monthlySavings: number;
  annualSavings: number;
  savingsPercentage: number;
}

const AnimatedNumber = ({
  value,
  suffix = '',
  prefix = '',
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useMemo(() => {
    let timeout: NodeJS.Timeout;
    const step = value / 30;
    let current = 0;

    const animate = () => {
      current += step;
      if (current < value) {
        setDisplayValue(current);
        timeout = setTimeout(animate, 16);
      } else {
        setDisplayValue(value);
      }
    };

    animate();
    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <span>
      {prefix}
      {displayValue.toFixed(decimals)}
      {suffix}
    </span>
  );
};

interface ChartPoint {
  month: number;
  savings: number;
}

const MiniChart = ({ annualSavings }: { annualSavings: number }) => {
  const points: ChartPoint[] = Array.from({ length: 12 }, (_, i) => ({
    month: i + 1,
    savings: (annualSavings / 12) * (i + 1),
  }));

  const maxSavings = annualSavings;
  const chartHeight = 120;
  const chartWidth = 240;

  const pathD = points
    .map((point, i) => {
      const x = (i / 11) * chartWidth;
      const y = chartHeight - (point.savings / maxSavings) * chartHeight;
      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
    })
    .join(' ');

  return (
    <div className="relative w-full h-32 mb-4">
      <svg
        viewBox={`0 0 ${chartWidth} ${chartHeight}`}
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        {/* Gradient background */}
        <defs>
          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#16968D" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#16968D" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#16968D" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#16968D" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        {[0, 1, 2, 3].map((i) => (
          <line
            key={`grid-${i}`}
            x1="0"
            y1={(i / 3) * chartHeight}
            x2={chartWidth}
            y2={(i / 3) * chartHeight}
            stroke="#E4E4E8"
            strokeWidth="1"
            opacity="0.5"
          />
        ))}

        {/* Filled area under curve */}
        <path
          d={`${pathD} L ${chartWidth} ${chartHeight} L 0 ${chartHeight} Z`}
          fill="url(#chartGradient)"
        />

        {/* Line */}
        <motion.path
          d={pathD}
          stroke="url(#lineGradient)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Data points */}
        {points.map((point, i) => (
          <motion.circle
            key={`point-${i}`}
            cx={(i / 11) * chartWidth}
            cy={chartHeight - (point.savings / maxSavings) * chartHeight}
            r="3"
            fill="#16968D"
            opacity="0.6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: (i / 12) * 0.6,
              duration: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
        ))}
      </svg>

      {/* Labels */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between px-1 text-[0.65rem] text-[#9191A0] font-medium">
        <span>Jan</span>
        <span>Abr</span>
        <span>Jul</span>
        <span>Out</span>
        <span>Dez</span>
      </div>
    </div>
  );
};

interface InputFieldProps {
  label: string;
  value: number | string;
  onChange: (value: number) => void;
  prefix?: string;
  suffix?: string;
  placeholder?: string;
}

const InputField = ({
  label,
  value,
  onChange,
  prefix = '',
  suffix = '',
  placeholder = '',
}: InputFieldProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numValue = parseFloat(e.target.value) || 0;
    onChange(Math.max(0, numValue));
  };

  return (
    <div className="mb-6">
      <label className="block text-[0.8125rem] font-semibold text-[#111113] mb-2 tracking-tight">
        {label}
      </label>
      <div className="relative">
        {prefix && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9191A0] font-medium pointer-events-none">
            {prefix}
          </span>
        )}
        <input
          type="number"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full bg-white border-1.5 border-[#E4E4E8] rounded-xl px-4 py-3 transition-all duration-200 text-[#111113] placeholder-[#C3C3CB] focus:outline-none focus:border-[#16968D] focus:ring-2 focus:ring-[#16968D]/10 hover:border-[#D4D4DC]"
          style={{ paddingLeft: prefix ? '2.5rem' : '1rem' }}
        />
        {suffix && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9191A0] font-medium pointer-events-none">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
};

interface SimulationCardProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  suffix?: string;
  color: string;
  glowColor: string;
}

const SimulationCard = ({
  icon,
  label,
  value,
  suffix = '',
  color,
  glowColor,
}: SimulationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-2xl p-5 transition-all duration-200 hover:shadow-lg"
      style={{
        background: '#fff',
        border: '1.5px solid #E4E4E8',
        boxShadow: `0 0 0 2px ${glowColor}, 0 1px 4px rgba(0,0,0,0.04)`,
      }}
    >
      <div className="flex items-start justify-between mb-3">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{
            background: `${color}12`,
            color: color,
          }}
        >
          {icon}
        </div>
        <div
          className="text-[0.7rem] font-semibold px-2 py-1 rounded-md"
          style={{
            background: `${color}10`,
            color: color,
          }}
        >
          Live
        </div>
      </div>
      <p className="text-[0.8rem] text-[#9191A0] mb-1 font-medium">{label}</p>
      <p className="text-xl font-semibold tracking-tight" style={{ color: '#111113' }}>
        <AnimatedNumber value={value} suffix={suffix} decimals={2} />
      </p>
    </motion.div>
  );
};

export default function EnergyDataStep() {
  const [averageBill, setAverageBill] = useState(300);
  const [kwhValue, setKwhValue] = useState(1.5);
  const [discountPercent, setDiscountPercent] = useState(15);

  const simulation: SimulationData = useMemo(() => {
    const currentBill = averageBill;
    const discountAmount = (currentBill * discountPercent) / 100;
    const finalBill = currentBill - discountAmount;
    const monthlySavings = discountAmount;
    const annualSavings = monthlySavings * 12;
    const savingsPercentage = (monthlySavings / currentBill) * 100;

    return {
      currentBill,
      finalBill,
      monthlySavings,
      annualSavings,
      savingsPercentage,
    };
  }, [averageBill, kwhValue, discountPercent]);

  return (
    <div className="min-h-screen bg-[#F7F7F8] py-12 px-4">
      {/* Abstract branding element */}
      <div className="fixed top-0 right-0 w-96 h-96 opacity-5 pointer-events-none">
        <div
          className="w-full h-full rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, #FFC837 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#832472] opacity-80">
              Etapa 2
            </span>
            <span className="w-8 h-px bg-[#832472] opacity-30" />
          </div>
          <h1 className="text-[2rem] font-semibold tracking-tight text-[#111113] leading-tight mb-2">
            Dados Energéticos
          </h1>
          <p className="text-[#6B6B7A] text-[0.95rem] font-normal leading-relaxed">
            Insira os dados para gerar a simulação personalizada.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column - Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-1"
          >
            <div className="rounded-2xl border-1.5 border-[#E4E4E8] bg-white p-8 shadow-sm">
              <h3 className="text-base font-semibold text-[#111113] mb-8 tracking-tight">
                Parâmetros
              </h3>

              <InputField
                label="Média da Fatura (kWh)"
                value={averageBill}
                onChange={setAverageBill}
                suffix="kWh"
                placeholder="0"
              />

              <InputField
                label="Valor do kWh"
                value={kwhValue}
                onChange={setKwhValue}
                prefix="R$"
                placeholder="0.00"
              />

              <InputField
                label="Desconto Oferecido"
                value={discountPercent}
                onChange={setDiscountPercent}
                suffix="%"
                placeholder="0"
              />

              {/* Info callout */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="mt-8 pt-6 border-t border-[#E4E4E8]"
              >
                <p className="text-[0.8125rem] text-[#6B6B7A] leading-relaxed">
                  Os valores são recalculados em tempo real. Modifique os parâmetros para ver as estimativas atualizarem.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right column - Simulation panel (sticky) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2"
          >
            <div className="lg:sticky lg:top-6">
              <div className="rounded-2xl border-1.5 border-[#E4E4E8] bg-white p-8 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-base font-semibold text-[#111113] tracking-tight">
                    Simulação Dinâmica
                  </h3>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    className="w-5 h-5 rounded-full border-2 border-[#16968D] border-t-[#16968D]/30"
                  />
                </div>

                {/* Main simulation cards */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <SimulationCard
                    icon={<Zap size={18} strokeWidth={2} />}
                    label="Conta Atual (mensal)"
                    value={simulation.currentBill}
                    suffix=" R$"
                    color="#832472"
                    glowColor="rgba(131,36,114,0.12)"
                  />
                  <SimulationCard
                    icon={<Zap size={18} strokeWidth={2} />}
                    label="Conta Final (mensal)"
                    value={simulation.finalBill}
                    suffix=" R$"
                    color="#16968D"
                    glowColor="rgba(22,150,141,0.12)"
                  />
                </div>

                {/* Savings highlight */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25, duration: 0.4 }}
                  className="mb-8 rounded-2xl overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #16968D05 0%, #16968D02 100%)',
                    border: '1.5px solid rgba(22,150,141,0.15)',
                  }}
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp
                        size={16}
                        strokeWidth={2}
                        style={{ color: '#16968D' }}
                      />
                      <p className="text-[0.8rem] font-semibold text-[#16968D] uppercase tracking-wide">
                        Economia Estimada
                      </p>
                    </div>
                    <p className="text-[1.75rem] font-semibold tracking-tight text-[#111113] mb-1">
                      <AnimatedNumber
                        value={simulation.monthlySavings}
                        prefix="R$ "
                        decimals={2}
                      />
                      <span className="text-base text-[#9191A0] font-normal ml-1">/mês</span>
                    </p>
                    <p className="text-[0.8rem] text-[#6B6B7A]">
                      <AnimatedNumber
                        value={simulation.annualSavings}
                        prefix="R$ "
                        decimals={2}
                      />
                      <span className="ml-1">/ano</span>
                    </p>
                  </div>
                </motion.div>

                {/* Mini chart */}
                <div className="mb-8">
                  <p className="text-[0.8125rem] font-semibold text-[#111113] mb-4">
                    Evolução da Economia Anual
                  </p>
                  <MiniChart annualSavings={simulation.annualSavings} />
                </div>

                {/* Commercial context */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="pt-6 border-t border-[#E4E4E8]"
                >
                  <p className="text-[0.8125rem] leading-relaxed text-[#6B6B7A]">
                    Você poderá economizar aproximadamente{' '}
                    <span
                      className="font-semibold"
                      style={{ color: '#16968D' }}
                    >
                      R$ <AnimatedNumber value={simulation.annualSavings} decimals={2} />
                    </span>{' '}
                    por ano com energia por assinatura.
                  </p>
                </motion.div>
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-6 flex justify-end"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-7 py-3 rounded-xl font-semibold text-sm tracking-tight transition-all duration-200"
                  style={{
                    background: '#FFC837',
                    color: '#111113',
                    boxShadow: '0 4px 20px rgba(255,200,55,0.3), 0 1px 4px rgba(0,0,0,0.08)',
                  }}
                >
                  Continuar
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
