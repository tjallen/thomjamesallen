export const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-bold uppercase after:text-cyan-300 after:content-['↘']">
    {children}
  </h2>
);
