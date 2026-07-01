"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { loginUser, loginWithGoogle } from "../services/authService";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      await loginUser(email, password);
      setLoading(false);
      router.push("/");
    } catch (err) {
      setLoading(false);
      setError(err?.message || "Invalid email or password.");
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    setLoading(true);
    try {
      await loginWithGoogle();
      setLoading(false);
      router.push("/");
    } catch (err) {
      setLoading(false);
      setError(err?.message || "Google Sign-In failed.");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#F8FAFC] to-[#FFFFFF] font-sans antialiased text-[#334155] flex items-center justify-center p-4">
      {/* Decorative Background Elements */}
      <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full bg-[#1E3A8A]/5 blur-3xl -z-10"></div>
      <div className="absolute left-10 bottom-10 w-72 h-72 rounded-full bg-[#D4AF37]/5 blur-3xl -z-10"></div>

      <div className="w-full max-w-[460px] bg-white rounded-3xl p-8 md:p-10 shadow-[0_20px_50px_rgba(11,29,58,0.06)] border border-[#E2E8F0]/30 transition-all duration-300">

        {/* Brand Header */}
        <div className="flex flex-col items-center mb-8">
          <Link href="/" className="flex items-center gap-2 group mb-4">
            <span className="w-3.5 h-3.5 rounded-full bg-[#D4AF37] border-2 border-[#0B1D3A] group-hover:scale-110 transition-transform duration-300 shadow-[0_0_10px_rgba(212,175,55,0.5)]"></span>
            <span className="font-display text-2xl font-bold tracking-tight text-[#0B1D3A]">ARTH SUTRA</span>
          </Link>
          <h2 className="text-2xl font-bold text-[#0B1D3A]">Welcome Back</h2>
          <p className="text-sm text-[#64748B] mt-1 text-center">
            Access your strategic financial portal and insights
          </p>
        </div>

        {/* Error Message Box */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl text-red-700 text-sm animate-fade-in">
            {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-[#0B1D3A] uppercase tracking-wider mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="e.g. user@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-sm focus:outline-none focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A] transition-all duration-200"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#0B1D3A] uppercase tracking-wider mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-sm focus:outline-none focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A] transition-all duration-200"
              required
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${loading
                ? "bg-[#0B1D3A]/60 text-white cursor-not-allowed"
                : "bg-[#0B1D3A] text-white hover:bg-[#1E3A8A] hover:shadow-[0_8px_20px_rgb(30,58,138,0.2)] hover:-translate-y-0.5 active:translate-y-0"
                }`}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Signing In...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </div>
        </form>

        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-[#E2E8F0]/80"></div>
          <span className="flex-shrink mx-4 text-xs text-[#64748B] uppercase font-semibold">Or continue with</span>
          <div className="flex-grow border-t border-[#E2E8F0]/80"></div>
        </div>

        <button
          onClick={handleGoogleLogin}
          type="button"
          className="w-full py-3 border border-[#E2E8F0] rounded-xl hover:border-[#0B1D3A] hover:bg-[#F8FAFC]/50 transition-all duration-300 flex items-center justify-center gap-3 font-semibold text-sm shadow-sm hover:shadow active:scale-[0.98] cursor-pointer"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#EA4335"
              d="M12 5.04c1.66 0 3.2.57 4.38 1.69l3.27-3.27C17.67 1.54 15.02 1 12 1 7.24 1 3.23 3.67 1.25 7.62l3.86 3C6.03 7.64 8.78 5.04 12 5.04z"
            />
            <path
              fill="#4285F4"
              d="M23.49 12.27c0-.81-.07-1.59-.2-2.36H12v4.51h6.43c-.28 1.44-1.1 2.66-2.33 3.48l3.61 2.8c2.1-1.94 3.32-4.8 3.32-8.43z"
            />
            <path
              fill="#FBBC05"
              d="M5.11 14.62c-.24-.72-.37-1.5-.37-2.31s.13-1.59.37-2.31l-3.86-3C.49 8.52 0 10.2 0 12s.49 3.48 1.25 5l3.86-3z"
            />
            <path
              fill="#34A853"
              d="M12 23c3.24 0 5.97-1.07 7.96-2.91l-3.61-2.8c-1.01.67-2.3 1.07-3.61 1.07-3.22 0-5.97-2.6-6.89-5.58l-3.86 3C3.23 20.33 7.24 23 12 23z"
            />
          </svg>
          Google
        </button>

        <div className="mt-8 text-center text-sm border-t border-[#E2E8F0]/80 pt-6">
          <p className="text-[#64748B]">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="text-[#1E3A8A] font-semibold hover:text-[#0B1D3A] transition-colors duration-150 inline-block ml-1 hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;