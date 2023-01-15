export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "#FFFFFF",
  };

  return (
    <div onClick={props.onClick} style={styles} className="dice">
      {props.value}
    </div>
  );
}
