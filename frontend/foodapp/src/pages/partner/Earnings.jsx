import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { mockPartnerEarnings } from '../../services/mockData';

export default function Earnings() {
  const earnings = mockPartnerEarnings;
  const maxEarning = Math.max(...earnings.breakdown.map((d) => d.amount));

  return (
    <div className="min-h-screen bg-bg pb-8">
      <div className="bg-bg-white page-px py-4" style={{ boxShadow: 'var(--shadow-header)' }}>
        <div className="flex items-center gap-3">
          <Link to="/partner/dashboard" className="p-2 -ml-2 rounded-xl hover:bg-bg transition-colors">
            <FiArrowLeft className="text-[18px] text-text" />
          </Link>
          <h1 className="text-[16px] font-bold text-text">Earnings</h1>
        </div>
      </div>

      <div className="page-px mt-5">
        {/* Summary */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="bg-bg-white rounded-2xl p-5 animate-slide-up" style={{ boxShadow: 'var(--shadow-card)' }}>
            <p className="text-[10px] text-text-muted uppercase tracking-wider font-bold mb-1">Today</p>
            <p className="text-[24px] font-extrabold text-text leading-tight">₹{earnings.today.total}</p>
            <p className="text-[12px] text-text-muted mt-1">{earnings.today.trips} trips · {earnings.today.online}</p>
          </div>
          <div className="bg-primary-50 rounded-2xl p-5 animate-slide-up" style={{ animationDelay: '80ms', boxShadow: 'var(--shadow-card)' }}>
            <p className="text-[10px] text-primary uppercase tracking-wider font-bold mb-1">This Week</p>
            <p className="text-[24px] font-extrabold text-text leading-tight">₹{earnings.week.total}</p>
            <p className="text-[12px] text-text-muted mt-1">{earnings.week.trips} trips · {earnings.week.online}</p>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-bg-white rounded-2xl p-5 mb-5 animate-slide-up" style={{ animationDelay: '160ms', boxShadow: 'var(--shadow-card)' }}>
          <h3 className="text-[15px] font-extrabold text-text mb-5">Weekly Breakdown</h3>
          <div className="flex items-end justify-between gap-3 h-[160px]">
            {earnings.breakdown.map((day) => (
              <div key={day.day} className="flex flex-col items-center gap-1.5 flex-1">
                <span className="text-[10px] font-bold text-text-muted">{day.amount > 0 ? `₹${day.amount}` : '—'}</span>
                <div
                  className={`w-full max-w-[36px] rounded-lg transition-all ${day.amount > 0 ? 'bg-primary' : 'bg-bg'}`}
                  style={{ height: `${day.amount > 0 ? (day.amount / maxEarning) * 100 : 4}%`, minHeight: '4px' }}
                />
                <span className="text-[11px] font-semibold text-text-secondary">{day.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="bg-bg-white rounded-2xl p-5 animate-slide-up" style={{ animationDelay: '240ms', boxShadow: 'var(--shadow-card)' }}>
          <h3 className="text-[15px] font-extrabold text-text mb-3">💡 Tips to earn more</h3>
          <ul className="space-y-2.5">
            {[
              'Stay online during peak hours (12–2 PM, 7–10 PM)',
              'Accept more orders in high-demand areas',
              'Maintain high ratings for priority assignments',
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-2.5 text-[13px] text-text-secondary leading-snug">
                <span className="w-[6px] h-[6px] rounded-full bg-primary mt-1.5 flex-shrink-0" />
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
