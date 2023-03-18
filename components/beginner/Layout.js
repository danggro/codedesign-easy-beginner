export default function Layout({ children }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen transition duration-500 bg-light dark:bg-dark">
      {children}
    </div>
  );
}
