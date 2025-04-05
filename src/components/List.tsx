export function List({ children }: { children: React.ReactNode }) {
  return (
    <ul className="ml-3 list-[square] space-y-2 pl-2 marker:text-gray-200">
      {children}
    </ul>
  );
}

export function ListItem({ children }: { children: React.ReactNode }) {
  return <li>{children}</li>;
}
