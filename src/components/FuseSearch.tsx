interface FuseSearchProps {
  query: string;
  setQuery: (value: string) => void;
}

export const FuseSearch = ({ query, setQuery }: FuseSearchProps) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 bg-white"
      />
    </div>
  );
};
