import './styles.css'

export default function ProjectBox(props){
  console.log(props.icon)
  return(
    <div className="projectBox">
      <button onClick={props.onClick}>
        {props.name}
      </button>
    </div>
  );
}