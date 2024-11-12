const Person = ({ name, age, hobbies }) => {
  const isAdult = age >= 18 ? "Please go vote!" : "You must be 18.";
  const displayName = name.length > 8 ? name.slice(0, 6) : name;
  return (
    <div>
      <p>Learn some information about this person:</p>
      <ul>
        <li>Name: {displayName}</li>
        <li>Age: {age}</li>
      </ul>
      <p>Hobbies:</p>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
      <h3>{isAdult}</h3>
    </div>
  );
};
