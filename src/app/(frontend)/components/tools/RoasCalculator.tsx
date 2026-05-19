'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import './roas-calculator.css';

type CogsMode = 'abs' | 'pct';
type Currency = '£' | '$' | '€';

const INPUT_IDS = [
  'aov',
  'vatPct',
  'cogs',
  'inbound',
  'txnPct',
  'pickPack',
  'packaging',
  'outbound',
  'warehouse',
  'returnRate',
  'profitPct',
] as const;

type InputId = (typeof INPUT_IDS)[number];

const DEFAULT_VALUES: Record<InputId, string> = {
  aov: '12.99',
  vatPct: '20',
  cogs: '11.30',
  inbound: '0',
  txnPct: '2.5',
  pickPack: '0',
  packaging: '0',
  outbound: '0',
  warehouse: '0',
  returnRate: '0',
  profitPct: '10',
};

const CURRENCIES: { sym: Currency; label: string }[] = [
  { sym: '£', label: '£ GBP' },
  { sym: '$', label: '$ USD' },
  { sym: '€', label: '€ EUR' },
];

function parseNum(value: string) {
  const v = parseFloat(value);
  return Number.isNaN(v) ? 0 : v;
}

export default function RoasCalculator() {
  const searchParams = useSearchParams();
  const [currency, setCurrency] = useState<Currency>('£');
  const [cogsMode, setCogsMode] = useState<CogsMode>('abs');
  const [values, setValues] = useState<Record<InputId, string>>(DEFAULT_VALUES);
  const [copyLabel, setCopyLabel] = useState('📋 Copy result');
  const [shareLabel, setShareLabel] = useState('🔗 Copy link');
  const [initializedFromUrl, setInitializedFromUrl] = useState(false);

  useEffect(() => {
    if (initializedFromUrl) return;

    const cur = searchParams.get('cur');
    if (cur === '£' || cur === '$' || cur === '€') setCurrency(cur);

    const mode = searchParams.get('cogsMode');
    if (mode === 'pct') setCogsMode('pct');

    const next = { ...DEFAULT_VALUES };
    let hasParams = false;
    INPUT_IDS.forEach((id) => {
      const param = searchParams.get(id);
      if (param !== null) {
        next[id] = param;
        hasParams = true;
      }
    });

    if (hasParams || cur || mode) setValues(next);
    setInitializedFromUrl(true);
  }, [searchParams, initializedFromUrl]);

  const setField = useCallback((id: InputId, value: string) => {
    setValues((prev) => ({ ...prev, [id]: value }));
  }, []);

  const fmt = useCallback(
    (n: number, opts: { abs?: boolean } = {}) => {
      if (!Number.isFinite(n)) return '—';
      const v = opts.abs ? Math.abs(n) : n;
      const s = v.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      return currency + s;
    },
    [currency],
  );

  const fmtPct = (n: number) => (Number.isFinite(n) ? (n * 100).toFixed(2) + '%' : '—');

  const setCogsModeWithConversion = useCallback(
    (mode: CogsMode) => {
      const aov = parseNum(values.aov);
      const cur = parseNum(values.cogs);

      if (mode === 'pct' && cur > aov) {
        setValues((prev) => ({
          ...prev,
          cogs: aov > 0 ? ((cur / aov) * 100).toFixed(2) : '35',
        }));
      } else if (mode === 'abs' && cur > 0 && cur < 100 && aov > 0) {
        setValues((prev) => ({
          ...prev,
          cogs: ((cur / 100) * aov).toFixed(2),
        }));
      }

      setCogsMode(mode);
    },
    [values.aov, values.cogs],
  );

  const results = useMemo(() => {
    const aov = parseNum(values.aov);
    const vatPct = parseNum(values.vatPct) / 100;
    const cogsRaw = parseNum(values.cogs);
    const cogs = cogsMode === 'pct' ? (cogsRaw / 100) * aov : cogsRaw;
    const inbound = parseNum(values.inbound);
    const txnPct = parseNum(values.txnPct) / 100;
    const pickPack = parseNum(values.pickPack);
    const packaging = parseNum(values.packaging);
    const outbound = parseNum(values.outbound);
    const warehouse = parseNum(values.warehouse);
    const returnRate = parseNum(values.returnRate) / 100;
    const profitPct = parseNum(values.profitPct) / 100;

    const netRev = aov > 0 ? aov / (1 + vatPct) : 0;
    const txnFees = aov * txnPct;
    const returnLoss = (cogs + outbound + packaging + pickPack) * returnRate;
    const totalCOD =
      cogs + inbound + txnFees + pickPack + packaging + outbound + warehouse + returnLoss;
    const cm = netRev - totalCOD;
    const cmPct = aov > 0 ? cm / aov : 0;
    const netProfitTarget = aov * profitPct;
    const targetCPA = cm - netProfitTarget;
    const breakevenMER = cm > 0 ? aov / cm : NaN;
    const targetMER = targetCPA > 0 ? aov / targetCPA : NaN;

    let dotClass = 'dot-good';
    let label = 'Healthy';
    let text = '';

    if (aov <= 0) {
      dotClass = 'dot-mute';
      label = 'Verdict';
      text = 'Enter your average order value to begin.';
    } else if (cm <= 0) {
      dotClass = 'dot-bad';
      label = 'Bleeding';
      text = `Your costs exceed your net revenue by ${fmt(cm, { abs: true })} per order. No ROAS will fix this — the unit economics need to change first.`;
    } else if (targetCPA <= 0) {
      dotClass = 'dot-bad';
      label = 'No room';
      text = `You have ${fmt(cm)} contribution margin, but your ${(profitPct * 100).toFixed(0)}% profit target leaves nothing for ads. Lower the target or fix costs.`;
    } else if (targetMER >= 4) {
      dotClass = 'dot-warn';
      label = 'Tight';
      text = `You need a ${targetMER.toFixed(2)}x blended MER. Achievable but you've left yourself little ad efficiency room. Most brands hit 2.5–3.5x sustainably.`;
    } else if (targetMER >= 2) {
      dotClass = 'dot-good';
      label = 'Workable';
      text = `A ${targetMER.toFixed(2)}x target MER is realistic with disciplined paid + organic. You have ${fmt(targetCPA)} per order to spend on ads.`;
    } else {
      dotClass = 'dot-good';
      label = 'Strong margin';
      text = `${fmt(targetCPA)} CPA headroom and a ${targetMER.toFixed(2)}x MER target — strong economics. Scale with confidence.`;
    }

    const breakdownRows: [string, number][] = [
      ['Net revenue (post-VAT)', netRev],
      ['– COGS', -cogs],
      ['– Inbound shipping', -inbound],
      ['– Transaction fees', -txnFees],
      ['– Pick & pack', -pickPack],
      ['– Packaging', -packaging],
      ['– Outbound shipping', -outbound],
      ['– Warehouse / 3PL', -warehouse],
      ['– Return loss', -returnLoss],
    ];

    return {
      targetMER,
      breakevenMER,
      targetCPA,
      cm,
      cmPct,
      netRev,
      dotClass,
      label,
      text,
      breakdownRows,
    };
  }, [values, cogsMode, fmt]);

  const buildShareUrl = () => {
    const p = new URLSearchParams();
    p.set('cur', currency);
    p.set('cogsMode', cogsMode);
    INPUT_IDS.forEach((id) => p.set(id, values[id]));
    return `${window.location.origin}/tools/roas-calculator?${p.toString()}`;
  };

  const handleShare = async () => {
    const url = buildShareUrl();
    try {
      await navigator.clipboard.writeText(url);
      setShareLabel('✓ Link copied');
      setTimeout(() => setShareLabel('🔗 Copy link'), 1800);
    } catch {
      window.prompt('Copy this link:', url);
    }
  };

  const handleCopy = async () => {
    const summary = [
      'My true unit economics (via Valar Digital):',
      `• AOV: ${fmt(parseNum(values.aov))}`,
      `• Contribution margin: ${fmt(results.cm)} (${fmtPct(results.cmPct)})`,
      `• Break-even MER: ${Number.isFinite(results.breakevenMER) ? results.breakevenMER.toFixed(2) + 'x' : '—'}`,
      `• Target CPA: ${results.targetCPA !== 0 ? fmt(results.targetCPA) : '—'}`,
      `• Target ROAS (MER): ${Number.isFinite(results.targetMER) ? results.targetMER.toFixed(2) + 'x' : 'Impossible'}`,
      '',
      'Run yours: ' + (typeof window !== 'undefined' ? `${window.location.origin}/tools` : '/tools'),
    ].join('\n');

    try {
      await navigator.clipboard.writeText(summary);
      setCopyLabel('✓ Copied');
      setTimeout(() => setCopyLabel('📋 Copy result'), 1800);
    } catch {
      window.prompt('Copy this:', summary);
    }
  };

  const targetMerDisplay = Number.isFinite(results.targetMER)
    ? `${results.targetMER.toFixed(2)}x`
    : 'Impossible';
  const breakevenMerDisplay = Number.isFinite(results.breakevenMER)
    ? `${results.breakevenMER.toFixed(2)}x`
    : '—';

  return (
    <div className="roas-calculator min-h-screen bg-white text-[#201F1E]">
      <section className="hero-bg border-b border-[#E8EEF6]">
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-14">
          <span className="badge">Unit Economics · For Shopify Brands</span>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-[64px] font-bold tracking-tight leading-[1.02] text-[#201F1E]">
            The ROAS number
            <br />
            your ads team
            <br />
            isn&apos;t <span className="text-primary">telling you</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg sm:text-xl text-text-light leading-relaxed">
            Most brands optimise for the ROAS Meta shows them. The real number — the one that
            decides whether you grow or burn cash — sits inside your unit economics. Plug in your
            costs. See your <span className="text-[#201F1E] font-medium">true break-even ROAS</span>{' '}
            and the <span className="text-[#201F1E] font-medium">target MER</span> you actually need.
          </p>

          <div className="mt-8 flex items-center gap-3 flex-wrap">
            <span className="text-sm text-text-light mr-1">Currency</span>
            <div className="inline-flex gap-2" role="group" aria-label="Currency">
              {CURRENCIES.map(({ sym, label }) => (
                <button
                  key={sym}
                  type="button"
                  className={`seg-btn ${currency === sym ? 'active' : ''}`}
                  onClick={() => setCurrency(sym)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12 grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 space-y-6">
          <div className="card p-6 sm:p-7">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-[11px] uppercase tracking-[0.14em] text-primary font-bold">
                01 · Your Order
              </h2>
              <span className="text-[11px] text-[#A4B3CD]">averages, per order</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-2 text-[#201F1E] font-medium">
                  Average order value{' '}
                  <span className="text-text-light text-xs font-normal">(incl. tax)</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light">
                    {currency}
                  </span>
                  <input
                    className="field w-full pl-8 pr-3 py-3 rounded-lg"
                    type="number"
                    step="0.01"
                    value={values.aov}
                    onChange={(e) => setField('aov', e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-2 text-[#201F1E] font-medium">VAT / sales tax</label>
                <div className="relative">
                  <input
                    className="field w-full pl-3 pr-9 py-3 rounded-lg"
                    type="number"
                    step="0.1"
                    value={values.vatPct}
                    onChange={(e) => setField('vatPct', e.target.value)}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-text-light">%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card p-6 sm:p-7">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-[11px] uppercase tracking-[0.14em] text-primary font-bold">
                02 · Cost of Delivery
              </h2>
              <span className="text-[11px] text-[#A4B3CD]">exclude VAT — you reclaim it</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm text-[#201F1E] font-medium">Cost of goods sold (COGS)</label>
                  <div className="inline-flex gap-1 text-xs">
                    <button
                      type="button"
                      className={`seg-btn !py-1 !px-2 ${cogsMode === 'abs' ? 'active' : ''}`}
                      onClick={() => setCogsModeWithConversion('abs')}
                    >
                      {currency}
                    </button>
                    <button
                      type="button"
                      className={`seg-btn !py-1 !px-2 ${cogsMode === 'pct' ? 'active' : ''}`}
                      onClick={() => setCogsModeWithConversion('pct')}
                    >
                      %
                    </button>
                  </div>
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light">
                    {cogsMode === 'abs' ? currency : ' '}
                  </span>
                  <input
                    className="field w-full pl-8 pr-3 py-3 rounded-lg"
                    type="number"
                    step="0.01"
                    value={values.cogs}
                    onChange={(e) => setField('cogs', e.target.value)}
                  />
                </div>
                <p className="text-xs text-text-light mt-2">
                  Industry rule of thumb: COGS = 25–40% of AOV for healthy brands.
                </p>
              </div>

              {(
                [
                  ['inbound', 'Inbound shipping', '(supplier → warehouse)'],
                  ['pickPack', 'Pick & pack', ''],
                  ['packaging', 'Packaging & inserts', ''],
                  ['outbound', 'Outbound shipping', '(to customer)'],
                  ['warehouse', 'Warehouse / 3PL', ''],
                ] as const
              ).map(([id, title, hint]) => (
                <div key={id}>
                  <label className="block text-sm mb-2 text-[#201F1E] font-medium">
                    {title}{' '}
                    {hint ? (
                      <span className="text-text-light text-xs font-normal">{hint}</span>
                    ) : null}
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light">
                      {currency}
                    </span>
                    <input
                      className="field w-full pl-8 pr-3 py-3 rounded-lg"
                      type="number"
                      step="0.01"
                      value={values[id]}
                      onChange={(e) => setField(id, e.target.value)}
                    />
                  </div>
                </div>
              ))}

              <div>
                <label className="block text-sm mb-2 text-[#201F1E] font-medium">Transaction fees</label>
                <div className="relative">
                  <input
                    className="field w-full pl-3 pr-9 py-3 rounded-lg"
                    type="number"
                    step="0.1"
                    value={values.txnPct}
                    onChange={(e) => setField('txnPct', e.target.value)}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-text-light">%</span>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm mb-2 text-[#201F1E] font-medium">
                  Return rate{' '}
                  <span className="text-text-light text-xs font-normal">
                    (refunds ÷ revenue, last 6mo)
                  </span>
                </label>
                <div className="relative">
                  <input
                    className="field w-full pl-3 pr-9 py-3 rounded-lg"
                    type="number"
                    step="0.1"
                    value={values.returnRate}
                    onChange={(e) => setField('returnRate', e.target.value)}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-text-light">%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card p-6 sm:p-7">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-[11px] uppercase tracking-[0.14em] text-primary font-bold">
                03 · Your Profit Target
              </h2>
              <span className="text-[11px] text-[#A4B3CD]">how much you keep, per order</span>
            </div>
            <div>
              <label className="block text-sm mb-2 text-[#201F1E] font-medium">Net profit per order</label>
              <div className="relative">
                <input
                  className="field w-full pl-3 pr-9 py-3 rounded-lg"
                  type="number"
                  step="0.5"
                  value={values.profitPct}
                  onChange={(e) => setField('profitPct', e.target.value)}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-text-light">%</span>
              </div>
              <p className="text-xs text-text-light mt-2">
                ~10% is healthy for mature DTC. Growing brands often run lower while reinvesting.
              </p>
            </div>
          </div>
        </div>

        <aside className="lg:col-span-2">
          <div className="lg:sticky lg:top-24 space-y-5">
            <div className="card-tint p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className={`pulse-dot ${results.dotClass}`} />
                <span className="text-[11px] uppercase tracking-[0.14em] text-text-light font-bold">
                  {results.label}
                </span>
              </div>
              <p className="text-[17px] leading-snug font-medium text-[#201F1E]">{results.text}</p>
            </div>

            <div className="card-primary p-7">
              <div className="text-[11px] uppercase tracking-[0.14em] text-[#48C8FF] font-bold">
                Target ROAS (MER)
              </div>
              <div className="mt-2 text-[56px] leading-none font-bold tracking-tight result-num">
                {targetMerDisplay}
              </div>
              <div className="text-sm text-white/70 mt-2">
                Total revenue ÷ total ad spend you need to clear, blended across all channels.
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="card p-5">
                <div className="text-[10px] uppercase tracking-[0.14em] text-primary font-bold">
                  Break-even MER
                </div>
                <div
                  className={`mt-2 text-[26px] leading-none font-bold result-num ${
                    Number.isFinite(results.breakevenMER) ? 'text-[#201F1E]' : 'text-[#D14343]'
                  }`}
                >
                  {breakevenMerDisplay}
                </div>
                <div className="text-[11px] text-text-light mt-2">Below this = burning cash.</div>
              </div>
              <div className="card p-5">
                <div className="text-[10px] uppercase tracking-[0.14em] text-primary font-bold">
                  Target CPA
                </div>
                <div
                  className={`mt-2 text-[26px] leading-none font-bold result-num ${
                    results.targetCPA > 0 ? 'text-[#201F1E]' : 'text-[#D14343]'
                  }`}
                >
                  {results.targetCPA !== 0 ? fmt(results.targetCPA) : '—'}
                </div>
                <div className="text-[11px] text-text-light mt-2">Max blended cost per order.</div>
              </div>
              <div className="card p-5">
                <div className="text-[10px] uppercase tracking-[0.14em] text-primary font-bold">
                  Contribution margin
                </div>
                <div
                  className={`mt-2 text-[26px] leading-none font-bold result-num ${
                    results.cm > 0 ? 'text-[#0F9D58]' : 'text-[#D14343]'
                  }`}
                >
                  {fmt(results.cm)}
                </div>
                <div
                  className={`text-[11px] mt-2 ${results.cmPct <= 0 ? 'text-[#D14343]' : 'text-text-light'}`}
                >
                  {fmtPct(results.cmPct)} of AOV.
                </div>
              </div>
              <div className="card p-5">
                <div className="text-[10px] uppercase tracking-[0.14em] text-primary font-bold">
                  Net revenue
                </div>
                <div className="mt-2 text-[26px] leading-none font-bold result-num text-[#201F1E]">
                  {fmt(results.netRev)}
                </div>
                <div className="text-[11px] text-text-light mt-2">After tax.</div>
              </div>
            </div>

            <details className="card p-5">
              <summary className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.14em] text-primary font-bold">
                  Cost breakdown
                </span>
                <span className="text-text-light text-xs">show ↓</span>
              </summary>
              <div className="mt-4 text-sm">
                {results.breakdownRows.map(([label, value]) => (
                  <div key={label} className="label-row">
                    <span className="text-text-light">{label}</span>
                    <span className="result-num text-[#201F1E] font-semibold">{fmt(value)}</span>
                  </div>
                ))}
                <div className="label-row pt-3 mt-2 border-t-2 !border-[#E8EEF6]">
                  <span className="font-semibold text-[#201F1E]">Contribution margin</span>
                  <span
                    className={`result-num font-bold ${results.cm > 0 ? 'text-[#0F9D58]' : 'text-[#D14343]'}`}
                  >
                    {fmt(results.cm)}
                  </span>
                </div>
              </div>
            </details>

            <div className="flex gap-2">
              <button type="button" className="flex-1 seg-btn !py-3 !rounded-xl" onClick={handleCopy}>
                {copyLabel}
              </button>
              <button type="button" className="flex-1 seg-btn !py-3 !rounded-xl" onClick={handleShare}>
                {shareLabel}
              </button>
            </div>
          </div>
        </aside>
      </section>

      <section className="border-t border-[#E8EEF6] hero-bg">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <span className="badge">Want us to move the numbers?</span>
          <h2 className="mt-5 text-3xl sm:text-5xl font-bold tracking-tight leading-[1.05] text-[#201F1E]">
            We don&apos;t just show the math.
            <br />
            We <span className="text-primary">scale</span> the brand.
          </h2>
          <p className="mt-5 text-text-light max-w-2xl mx-auto leading-relaxed text-lg">
            Valar is the embedded growth team behind brands like Podiumfig (scaled to $75M), Zima
            Dental (10+ regions, B2B + DTC), Soto Gardens, and The Ward Society (doubled revenue). If
            your numbers above look ugly — we&apos;ve fixed worse.
          </p>
          <Link href="/#calendar" className="btn-primary mt-9">
            Book a free audit <span>→</span>
          </Link>
          <div className="mt-4 text-xs text-text-light">No pitch deck. One call. Real numbers.</div>
        </div>
      </section>
    </div>
  );
}
