import './styles.css'

export default function CentralBox(props){
  return(
    <div className="centralbox">
      <div>
        <h1>{props.name}</h1>
        <p>Freelancer, front-end <br/> developer with questionable <br/> hobbys</p>
        <div className="hiremebutton">
          <button>Hire me</button> 
        </div>
      </div>
      <div>
        <img src="./me.png" alt=""/>
      </div>
    </div>
  );
}