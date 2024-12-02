const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-center">
      {children}
    </div>
  );
};

export default layout;