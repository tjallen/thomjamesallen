export const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <>
    <h2 className="text-heading mb-2 text-3xl font-bold uppercase after:ml-1 after:text-neutral-700 after:content-['↘']">
      {children}
    </h2>
  </>
);
