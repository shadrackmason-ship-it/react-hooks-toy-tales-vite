function ToyCard({ toy, onLike, onDelete }) {
  const { id, name, image, likes } = toy;

  function handleLike() {
    const updatedToy = {
      ...toy,
      likes: likes + 1,
    };

    fetch(`http://localhost:3000/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then((r) => r.json())
      .then(onLike);
  }

  function handleDelete() {
    fetch(`http://localhost:3000/toys/${id}`, {
      method: "DELETE",
    }).then(() => onDelete(id));
  }

  return (
    <div className="card" data-testid="toy-card">
      <img src={image} alt={name} className="toy-image" />
      <h2>{name}</h2>

      {/* CRITICAL: spacing matters for tests */}
      <p>{toy.likes} Likes </p>

      {/* CRITICAL: exact match for test */}
      <button onClick={handleLike}>Like &lt;3</button>

      <button onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
