import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

export default function Login() {
  return (
    <section className="section flex min-h-[70vh] items-center justify-center">
      <Reveal className="w-full max-w-md rounded-2xl border border-ink-700 bg-ink-800 p-8">
        <h1 className="text-2xl font-bold">Welcome Back</h1>
        <p className="mt-2 text-sm text-offwhite/60">Log in to your DevixoAI account.</p>
        <form className="mt-6 space-y-4">
          <input type="email" placeholder="Email" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <button type="submit" className="btn-primary w-full justify-center">Log In</button>
        </form>
        <p className="mt-4 text-center text-sm text-offwhite/60">
          Don't have an account? <Link to="/register" className="text-saffron-400 hover:underline">Register</Link>
        </p>
      </Reveal>
    </section>
  );
}
