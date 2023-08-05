import "./style.css";

export default function Button() {
  function handleClick() {
    alert("You Clicked me..... This is using simple function");
  }

  return (
    <>
      <button id="btn" onClick={handleClick}>
        I don't do anything
      </button>

      {/* using Arrow Function */}
      {/* <button id="btn" onClick={() => alert("You clicked me..... This is using anonymous function i.e., () => {...}")}>
        I don't do anything
      </button> */}
    </>
  );
}
