const Card = ({ name, image, prevPrice, currPrice }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md m-4 w-64 text-center border-red-700 border-2">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-lg"
      />
      <h2 className="text-xl font-bold mt-2">{name}</h2>
      <div className="mt-2">
        <span className="text-gray-500 line-through mr-2">${prevPrice}</span>
        <span className="text-green-600 font-bold">${currPrice}</span>
      </div>
    </div>
  );
};

export default Card;
