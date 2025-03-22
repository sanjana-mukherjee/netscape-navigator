export function List({ children }: { children: React.ReactNode }) {
  return (
    <ul className="list-[square] pl-2 ml-3 space-y-2 marker:text-gray-200">
      {children}
    </ul>
  );
}

export function ListItem({ children }: { children: React.ReactNode }) {
  return <li>{children}</li>;
}
