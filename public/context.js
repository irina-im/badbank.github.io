const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
const BrowserRouter = ReactRouterDOM.BrowserRouter;
const UserContext = React.createContext({users:[{
  name:'user',
  email:'user@domain.com',
  password:'password',
  balance:0}]});

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC79_oYaET-aU2Ug3v7ibkJEsq8PvX3fsc",
  authDomain: "badbank-d6623.firebaseapp.com",
  projectId: "badbank-d6623",
  storageBucket: "badbank-d6623.appspot.com",
  messagingSenderId: "600359067646",
  appId: "1:600359067646:web:96b6f83e4f4f0107a42aaf"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function Card(props){
  function classes(){
    const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
    const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
    return 'card mb-3 ' + bg + txt;
  }

  return (
    <div className={classes()} style={{maxWidth: "18rem"}}>
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        {props.title && (<h5 className="card-title">{props.title}</h5>)}
        {props.text && (<p className="card-text">{props.text}</p>)}
        {props.body}
        {/*props.status && (<div id='createStatus'>{props.status}</div>)*/}
      </div>
    </div>      
  );    
}
