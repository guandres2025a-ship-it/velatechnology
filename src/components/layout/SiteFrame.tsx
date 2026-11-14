import Navbar from "./Navbar";

export default function SiteFrame({ children }: { children: React.ReactNode }) {
  return <>
    <Navbar />
    {children}
    <footer className="site-footer">
      <a href="/" className="brand"><span className="vela-mark" aria-hidden="true"><span>V</span><i /></span><span><b>VELA</b><small>TECHNOLOGIES</small></span></a>
      <p>IDEAS CONNECTED. POSSIBILITIES UNLIMITED.</p>
      <span>© {new Date().getFullYear()} VELA Technologies</span>
    </footer>
  </>;
}