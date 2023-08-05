// import "../Adding_event_handlers/style.css"

function AlertButton({ message, children }) {
  return (
      <button onClick={() => alert(message)}>{children}</button>
  );
}

export default function Toolbar() {
  return (
    <div>
          <AlertButton message="playing!">Play Movies</AlertButton>
          <AlertButton message="Paused">Pause Movies</AlertButton>
          <AlertButton message="Uploading!">Upload Image</AlertButton>
          <AlertButton message="Cancelled">Cancel Uploading</AlertButton>
          <AlertButton message="Playing music">Play Music</AlertButton>
          <AlertButton message="Next Music">Next Music</AlertButton>
    </div>
  );
}

