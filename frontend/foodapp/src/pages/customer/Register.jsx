import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiUser, FiMail, FiLock, FiArrowRight } from 'react-icons/fi';
import { authAPI } from '../../services/api';
import { useAuth } from '../../context/AuthContext';

export default function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { loginUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (password.length < 6) { setError('Password must be at least 6 characters'); return; }
    setLoading(true);
    try {
      const res = await authAPI.registerUser({ fullName, email, password });
      loginUser(res.data.user);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center page-px py-10">
      <div className="w-full max-w-[420px] bg-bg-white rounded-3xl p-8 sm:p-10 animate-scale-in" style={{ boxShadow: '0 4px 32px rgba(28,28,43,.08)' }}>
        <div className="text-center mb-8">
          <h1 className="text-[28px] font-black text-primary mb-1 tracking-tight">cravv</h1>
          <p className="text-[14px] text-text-muted">Create your account</p>
        </div>

        {error && <div className="mb-5 p-3 rounded-xl bg-danger-light border border-danger/10 text-danger text-[13px] font-medium">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted text-[15px]" />
            <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full name" required
              className="w-full pl-11 pr-4 py-3.5 bg-bg border border-border-light rounded-2xl text-[14px] text-text placeholder:text-text-muted focus:border-primary/40 focus:bg-bg-white transition-all" />
          </div>
          <div className="relative">
            <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted text-[15px]" />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" required
              className="w-full pl-11 pr-4 py-3.5 bg-bg border border-border-light rounded-2xl text-[14px] text-text placeholder:text-text-muted focus:border-primary/40 focus:bg-bg-white transition-all" />
          </div>
          <div className="relative">
            <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted text-[15px]" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password (min 6 chars)" required
              className="w-full pl-11 pr-4 py-3.5 bg-bg border border-border-light rounded-2xl text-[14px] text-text placeholder:text-text-muted focus:border-primary/40 focus:bg-bg-white transition-all" />
          </div>
          <button type="submit" disabled={loading}
            className="w-full py-3.5 bg-primary text-text-inverse rounded-2xl font-bold text-[14px] hover:bg-primary-dark transition-colors disabled:opacity-50 flex items-center justify-center gap-2 mt-2"
            style={{ boxShadow: 'var(--shadow-btn)' }}>
            {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <>Create Account <FiArrowRight /></>}
          </button>
        </form>

        <div className="mt-7 text-center pt-5 border-t border-divider">
          <p className="text-[13px] text-text-muted">Already have an account? <Link to="/login" className="text-primary font-bold hover:underline">Login</Link></p>
        </div>
      </div>
    </div>
  );
}
