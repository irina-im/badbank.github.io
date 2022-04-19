function Login(props){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');

  // TODO: Use firebase.auth.GoogleAuthProvider() to implement Google sign in
  // Hint: the user email address is in the results user object: result.user.email
  function handleGoogleLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const gmail = encodeURI(result.user.email);
        console.log(gmail);
        fetch(`/account/login/${gmail}/${gmail}`)
        .then(response => response.text())
        .then(async (text) => {
            try {
                const data = JSON.parse(text);
                setUser(data);
                console.log('JSON:', data);
                console.log(`You are logged in using the following email: ${result.user.email}`);
                setEmail(result.user.email);
            } catch(err) {
              console.log(err);
                setStatus(text)
                console.log('err:', text);
                //create and log in
                const url = `/account/create/${gmail}/${gmail}/${gmail}`;
                await fetch(url);
                const res = await fetch(`/account/login/${gmail}/${gmail}`)
                const text = await res.text();
                const data = JSON.parse(text);
                setUser(data);
                console.log(`You are logged in using the following email: ${gmail}`);
                setEmail(gmail);
            }
      })
      .catch(function (error) {
        console.log(error.code);
        console.log(error.message);
      });
      setShow(false);
      setStatus(''); // clear errors

  });
}

  function handleLogin(){
    
    // login
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(
      email,
      password
    );
    promise.catch((e) => console.log(e.message));

    // login state
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      var loggedInStatus = '';
      setUser();
      if (firebaseUser) {
        console.log(firebaseUser);
        loggedInStatus = `Hi ${firebaseUser.email}!`;
        console.log({loggedInStatus});
        fetch(`/account/login/${email}/${password}`)
          .then(response => response.text())
          .then(text => {
            try {
            console.log('text:', text);
            const data = JSON.parse(text);
            console.log('JSON:', data);
            console.log(data.email);
            props.setUser(data);
            } catch(err) {
            setStatus(text)
            console.log('err:', text);
          }});
      } else {
        console.log("User is not logged in");
        loggedInStatus = "You are not yet logged in";
      }
    });
    setShow(false);
    setStatus(''); // clear errors
  }

  return (
    <Card
      bgcolor="primary"
      header={(<h4>Log in</h4>)}
      status={status}
      body={show ? (  
        <>
        Email address<br/>
        <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => {
          setEmail(e.currentTarget.value);}} /><br/>
        Password (min 6 characters)<br/>
        <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => {setPassword(e.currentTarget.value);}} /><br/>
        <button type="submit" className="btn btn-light" onClick={e => {
          handleLogin(e.currentTarget.value);}} disabled={!email && !password}>Log in</button>
        <br></br> <br></br>
        <label>--- OR ---</label>
        <br></br> <br></br>
        <button type="submit" className="btn btn-light" onClick={e => {
          handleGoogleLogin(e.currentTarget.value);}}>Log in with Google</button>
        </> 
        ):(
        <>
        <h5>You are logged in as {email}</h5>
        <form action="#/deposit">
          <button className="btn btn-light" style={{ margin:"10px"}}>Deposit</button>
        </form>
        <form action="#/withdraw">
          <button className="btn btn-light" style={{ margin:"10px"}}>Withdraw</button>
        </form>
        </>
      )}
    />
  )
}