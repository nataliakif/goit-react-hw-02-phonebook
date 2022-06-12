const Contacts = data => {
  console.log(data);
  return (
    <ul className="Contacts__list">
      <li className="">
        <p className="">{data.name}</p>
        <p className="">{data.number}</p>
        <button
          className=""
          type="button"

          //   onClick={e => {
          //     onDelete(e.target.id);
          //   }}
        >
          Delete
        </button>
      </li>
    </ul>
  );
};

export default Contacts;
