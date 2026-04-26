import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

export default function PartnerLogin() {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();

  const handleSendOTP = (e) => {
    e.preventDefault();
    if (phone.length >= 10) setOtpSent(true);
  };

  const handleOTPChange = (i, v) => {
    if (v.length > 1) return;
    const n = [...otp]; n[i] = v; setOtp(n);
    if (v && i < 3) document.getElementById(`p-otp-${i + 1}`)?.focus();
  };
  const handleOTPKeyDown = (i, e) => {
    if (e.key === 'Backspace' && !otp[i] && i > 0) document.getElementById(`p-otp-${i - 1}`)?.focus();
  };

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center page-px py-10">
      <div className="w-full max-w-[420px] bg-bg-white rounded-3xl p-8 sm:p-10 animate-scale-in" style={{ boxShadow: '0 4px 32px rgba(28,28,43,.08)' }}>
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-[64px] h-[64px] rounded-2xl bg-primary-50 flex items-center justify-center text-[28px] mx-auto mb-4">🛵</div>
          <h1 className="text-[22px] font-extrabold text-text tracking-tight">Cravv Partner</h1>
          <p className="text-[14px] text-text-muted mt-1">Deliver food, earn money</p>
        </div>

        {!otpSent ? (
          <form onSubmit={handleSendOTP} className="space-y-4">
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted text-[13px] font-medium">🇮🇳 +91</div>
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))} placeholder="Phone number" required
                className="w-full pl-[76px] pr-4 py-3.5 bg-bg border border-border-light rounded-2xl text-[14px] text-text placeholder:text-text-muted focus:border-primary/40 focus:bg-bg-white transition-all" />
            </div>
            <button type="submit" className="w-full py-3.5 bg-primary text-text-inverse rounded-2xl font-bold text-[14px] hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
              style={{ boxShadow: 'var(--shadow-btn)' }}>Get OTP <FiArrowRight /></button>
          </form>
        ) : (
          <div className="space-y-5 animate-fade-in">
            <p className="text-[13px] text-text-secondary text-center">Enter OTP sent to +91 {phone}</p>
            <div className="flex items-center justify-center gap-3">
              {otp.map((d, i) => (
                <input key={i} id={`p-otp-${i}`} type="text" inputMode="numeric" maxLength={1} value={d}
                  onChange={(e) => handleOTPChange(i, e.target.value)} onKeyDown={(e) => handleOTPKeyDown(i, e)}
                  className="w-[52px] h-[52px] text-center text-[18px] font-bold bg-bg border-2 border-border-light rounded-2xl text-text focus:border-primary transition-all" />
              ))}
            </div>
            <button onClick={() => navigate('/partner/dashboard')} className="w-full py-3.5 bg-primary text-text-inverse rounded-2xl font-bold text-[14px] hover:bg-primary-dark transition-colors"
              style={{ boxShadow: 'var(--shadow-btn)' }}>Verify & Login</button>
            <button onClick={() => setOtpSent(false)} className="w-full text-[13px] text-text-muted hover:text-primary font-medium">Change number</button>
          </div>
        )}

        <div className="mt-7 text-center pt-5 border-t border-divider">
          <Link to="/login" className="text-[13px] text-text-muted hover:text-primary font-medium">← Login as Customer</Link>
        </div>
      </div>
    </div>
  );
}
