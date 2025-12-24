const List = ({ item }) => {
  const items = Array.isArray(item) ? item : [item];
  return (
    <ol className="list-disc list-inside pl-2 mb-2">
      {items.map((it, idx) => (
        <li key={idx} className="text-gray-700 mb-1">{it}</li>
      ))}
    </ol>
  );
};

export default List;