export const Footer = () => {
  return (
    <footer className="w-full py-12 px-6 flex flex-col items-center justify-center border-t border-white/10 z-10 relative bg-background/50 backdrop-blur-md">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="text-2xl font-bold tracking-tighter">
          ANKIT KUMAR
        </div>
        <p className="text-foreground/40 text-sm">
          &copy; {new Date().getFullYear()} Ankit Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
