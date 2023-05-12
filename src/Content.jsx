const Content = () => {
  const handleNameChange = () => {
    const names = ["Tohji", "Kensuke", "Shinji"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };

  const handleClick = () => {
    console.log("click!");
  };

  const handleClickTwo = (name) => {
    console.log(`${name} was clicked!`);
  };

  const handleClickThree = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {handleNameChange()}!</p>
      <button
        onClick={handleClick}
        className="bg-gray-500 w-96 p-3 block ml-auto mr-auto"
      >
        Click it
      </button>

      <button
        onClick={() => {
          handleClickTwo("John");
        }}
        className="bg-gray-700 w-96 p-3 block mt-3 ml-auto mr-auto"
      >
        Click it
      </button>

      <button
        onClick={(e) => {
          handleClickThree(e);
        }}
        className="bg-gray-900 w-96 p-3 block mt-3 ml-auto mr-auto"
      >
        Click it
      </button>
    </main>
  );
};

export default Content;
