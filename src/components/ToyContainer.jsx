import ToyCard from "./ToyCard";

export default function ToyContainer({
  toys,
  updateToy,
  deleteToy,
  likeToy,
}) {
  return (
    <div className="toy-container">
      {toys.map((toy) => (
        <ToyCard
          key={toy.id}
          toy={toy}
          onUpdate={updateToy}
          onDelete={deleteToy}
          onLike={likeToy}
        />
      ))}
    </div>
  );
}