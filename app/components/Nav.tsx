interface Props {}

export function Nav({}: Props) {
  return (
    <nav className=" container relative mx-auto p-2 lg:p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <p>Thom Allen blah blah</p>
        </div>

        <div className="pt-2">
          <a href="https://github.com/tjallen">GH</a>
        </div>
      </div>
    </nav>
  );
}
