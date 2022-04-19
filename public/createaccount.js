function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  
  //var ctx = React.useContext(UserContext);  

  function validate(field, label){
    if (!field) {
      setStatus('Error: Enter ' + label);
      setTimeout(() => setStatus(''),4000);
      return false;
    }

    if (password.length < 6) {
      setStatus('Error: Password must be at least 6 characters');
      setTimeout(() => setStatus(''),2000);
      return false;
    }
    return true;
  }

  function handleCreate(){
    console.log(name,email,password);
    if (!validate(name,     'name'))     return;
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;

    //write to mongodb
    const url = `/account/create/${name}/${email}/${password}`;
    (async () => {
      var res = await fetch(url);
      var data = await res.json();
      console.log(data);
    })();
    
    //write to firebase
      const auth = firebase.auth();
      const promise = auth.createUserWithEmailAndPassword(
        email,
        password
      );
    promise.then((resp) => {
      console.log('User Signup + Login Response: ', resp);

    });
    promise.catch((e) => console.log(e.message));
    setShow(false);
    setStatus(''); // clear errors
  }

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="primary"
      header={(<h4>Create Account</h4>)}
      status={status}
      body={show ? (  
        <>
        Name<br/>
        <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
        Email address<br/>
        <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => {
          validate(e.currentTarget.value);
          setEmail(e.currentTarget.value);}}/><br/>
        Password (min 6 characters)<br/>
        <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => {
          validate(e.currentTarget.value);
          setPassword(e.currentTarget.value);}}/><br/>
        <button id="signup" type="submit" className="btn btn-light" onClick={e => {
          handleCreate(e.currentTarget.value);
          }} disabled={!name && !email && !password}>Create Account</button>
        </>
        ):(
        <>
        <h6>Account created. Select further steps above.</h6>
        <button type="submit" className="btn btn-light" style={{margin:"10px"}} onClick={clearForm}>Add another account</button>
        </>
      )}
    />
  )
}