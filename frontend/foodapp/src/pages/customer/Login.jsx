import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMail, FiLock, FiArrowRight } from 'react-icons/fi';
import { authAPI } from '../../services/api';
import { useAuth } from '../../context/AuthContext';

export default function Login() {
  const [mode, setMode] = useState('email');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { loginUser } = useAuth();
  const navigate = useNavigate();

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await authAPI.loginUser({ email, password });
      loginUser(res.data.user);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSendOTP = (e) => {
    e.preventDefault();
    if (phone.length >= 10) setOtpSent(true);
  };

  const handleOTPChange = (i, v) => {
    if (v.length > 1) return;
    const n = [...otp]; n[i] = v; setOtp(n);
    if (v && i < 3) document.getElementById(`otp-${i + 1}`)?.focus();
  };
  const handleOTPKeyDown = (i, e) => {
    if (e.key === 'Backspace' && !otp[i] && i > 0) document.getElementById(`otp-${i - 1}`)?.focus();
  };

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center page-px py-10">
      <div className="w-full max-w-[420px] bg-bg-white rounded-3xl p-8 sm:p-10 animate-scale-in" style={{ boxShadow: '0 4px 32px rgba(28,28,43,.08)' }}>
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-[28px] font-black text-primary mb-1 tracking-tight">cravv</h1>
          <p className="text-[14px] text-text-muted">Login to your account</p>
        </div>

        {/* Toggle */}
        <div className="flex bg-bg rounded-2xl p-1 mb-6">
          <button
            onClick={() => { setMode('email'); setError(''); }}
            className={`flex-1 py-2.5 rounded-xl text-[13px] font-bold transition-all ${mode === 'email' ? 'bg-bg-white text-text shadow-sm' : 'text-text-muted'}`}
          >Email</button>
          <button
            onClick={() => { setMode('phone'); setError(''); setOtpSent(false); }}
            className={`flex-1 py-2.5 rounded-xl text-[13px] font-bold transition-all ${mode === 'phone' ? 'bg-bg-white text-text shadow-sm' : 'text-text-muted'}`}
          >Phone</button>
        </div>

        {error && (
          <div className="mb-5 p-3 rounded-xl bg-danger-light border border-danger/10 text-danger text-[13px] font-medium">{error}</div>
        )}

        {mode === 'email' && (
          <form onSubmit={handleEmailLogin} className="space-y-4">
            <div className="relative">
              <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted text-[15px]" />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" required
                className="w-full pl-11 pr-4 py-3.5 bg-bg border border-border-light rounded-2xl text-[14px] text-text placeholder:text-text-muted focus:border-primary/40 focus:bg-bg-white transition-all" />
            </div>
            <div className="relative">
              <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted text-[15px]" />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required
                className="w-full pl-11 pr-4 py-3.5 bg-bg border border-border-light rounded-2xl text-[14px] text-text placeholder:text-text-muted focus:border-primary/40 focus:bg-bg-white transition-all" />
            </div>
            <button type="submit" disabled={loading}
              className="w-full py-3.5 bg-primary text-text-inverse rounded-2xl font-bold text-[14px] hover:bg-primary-dark transition-colors disabled:opacity-50 flex items-center justify-center gap-2 mt-2"
              style={{ boxShadow: 'var(--shadow-btn)' }}>
              {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <>Login <FiArrowRight /></>}
            </button>
          </form>
        )}

        {mode === 'phone' && !otpSent && (
          <form onSubmit={handleSendOTP} className="space-y-4">
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted text-[13px] font-medium">🇮🇳 +91</div>
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))} placeholder="Phone number" required
                className="w-full pl-[76px] pr-4 py-3.5 bg-bg border border-border-light rounded-2xl text-[14px] text-text placeholder:text-text-muted focus:border-primary/40 focus:bg-bg-white transition-all" />
            </div>
            <button type="submit" className="w-full py-3.5 bg-primary text-text-inverse rounded-2xl font-bold text-[14px] hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
              style={{ boxShadow: 'var(--shadow-btn)' }}>Send OTP <FiArrowRight /></button>
          </form>
        )}

        {mode === 'phone' && otpSent && (
          <div className="space-y-5 animate-fade-in">
            <p className="text-[13px] text-text-secondary text-center">Enter 4-digit code sent to +91 {phone}</p>
            <div className="flex items-center justify-center gap-3">
              {otp.map((d, i) => (
                <input key={i} id={`otp-${i}`} type="text" inputMode="numeric" maxLength={1} value={d}
                  onChange={(e) => handleOTPChange(i, e.target.value)} onKeyDown={(e) => handleOTPKeyDown(i, e)}
                  className="w-[52px] h-[52px] text-center text-[18px] font-bold bg-bg border-2 border-border-light rounded-2xl text-text focus:border-primary transition-all" />
              ))}
            </div>
            <button onClick={() => navigate('/')} className="w-full py-3.5 bg-primary text-text-inverse rounded-2xl font-bold text-[14px] hover:bg-primary-dark transition-colors" style={{ boxShadow: 'var(--shadow-btn)' }}>Verify & Login</button>
            <button onClick={() => setOtpSent(false)} className="w-full text-[13px] text-text-muted hover:text-primary font-medium">Change number</button>
          </div>
        )}

        {/* Footer */}
        <div className="mt-7 text-center space-y-3 pt-5 border-t border-divider">
          <p className="text-[13px] text-text-muted">
            New to Cravv? <Link to="/register" className="text-primary font-bold hover:underline">Create account</Link>
          </p>
          <Link to="/partner/login" className="text-[13px] text-text-muted hover:text-primary font-medium block">
            Login as Delivery Partner →
          </Link>
        </div>
      </div>
    </div>
  );
}
