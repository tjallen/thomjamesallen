export const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <>
    <h2 className="mt-1 mb-4 text-lg font-bold uppercase after:ml-1 after:text-neutral-700 after:content-['↘'] md:text-xl lg:text-2xl xl:text-3xl">
      {children}
    </h2>
  </>
);
