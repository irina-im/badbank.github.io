function Home(){
  return (
    <>
      <Card
        bgcolor="primary"
        txtcolor="white"
        header={(<h4>BadBank</h4>)}
        title="Welcome to BadBank!"
        text="Serving our customers since 2022"
        body={<img src="bank.png" className="img-fluid" alt="Responsive image"/>}
      />
      
      <div className="button" style={{ display:"flex" }}>
        <form action="#/CreateAccount">
          <button className="btn btn-light" style={{ marginLeft:"37px", borderColor:"black"}}>Create account</button>
        </form>
          <div className="button" >
            <form action="#/login">
              <button className="btn btn-light" style={{ marginLeft:"10px", borderColor:"black"}}>Log in</button>
            </form>
          </div>  
      </div>
    </> 
  );  
}
