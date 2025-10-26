export default function Footer() {
  return (
    <footer className="py-10 bg-neutral-950 text-gray-400 text-center border-t border-neutral-800">
      <p className="text-sm">
        © {new Date().getFullYear()} <span className="text-red-500 font-semibold">IronPulse</span>. 
        Tüm hakları saklıdır.
      </p>
    </footer>
  );
}
