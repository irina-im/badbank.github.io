function LogOut(props){
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    const [user, setUser] = React.useState('');

    function handleLogOut(){
        firebase.auth().signOut();
        setUser({});
        setEmail('');
        setPassword('');
        setShow(false);
        setStatus(''); // clear errors
    }

    return (
        <>
        <Card
            bgcolor="primary"
            header={(<h4>Log out</h4>)}
            text="Click below to log out"
        />
        <form action="#/home">
            <button type="submit" className="btn btn-light" style={{ borderColor:"black"}} onClick={e => {
            handleLogOut(e.currentTarget.value);}}>Log out</button>
        </form>
        </>
        )}
