function AllData(){
  const [data, setData]         = React.useState('');

  React.useEffect(() => {
    // fetch all accounts from API
    fetch('/account/all')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(JSON.stringify(data));
      });
  }, []);

  const ctx = React.useContext(UserContext);  
  console.log(ctx.users);
  const all = <pre>{JSON.stringify(ctx.users, null, 2)}</pre>;
    
  return (
    <>
      <div className="card" style={{ backgroundColor: "royalblue", color: "white", width: '80rem'}}>
        <div className="card-body">
          <h4 className="card-title">All Data</h4>
          <label className="card-text">{data}</label>
          <label className="card-text">{all}</label>
        </div>
      </div>
    </>
  );
}

