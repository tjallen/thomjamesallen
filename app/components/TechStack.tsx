interface Props {
  showHeader?: boolean;
  items: Array<string>;
}

export function TechStack({ items, showHeader = true }: Props) {
  return (
    <div className="my-3">
      {showHeader && (
        <h3 className="font-bold uppercase leading-tight text-stone-500">
          Tech stack
        </h3>
      )}
      <ul className="flex flex-wrap">
        {items.map((item, index) => (
          <li
            className="py-1 px-3 font-bold text-stone-800 outline outline-2 -outline-offset-1 outline-stone-300 "
            key={`${item}_${index}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
