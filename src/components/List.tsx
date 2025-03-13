export function List({ children }: { children: React.ReactNode }) {
  return (
    <ul className="list-disc pl-2 ml-3 space-y-2 marker:text-black/20">
      {children}
    </ul>
  );
}

export function ListItem({ children }: { children: React.ReactNode }) {
  return <li>{children}</li>;
}
