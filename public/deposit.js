function Deposit(props){
  const ctx = React.useContext(UserContext);
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [balance, setBalance]   = React.useState('0');
  const [deposit, setDeposit]   = React.useState('');

  function clearForm(){
    setDeposit('');
    setShow(true);
  }

  function validate(deposit){
    if (deposit <0) {
      setStatus('Error: Please enter a positive amount');
      return false;
    }
    return true;
  }

  function validateNan(deposit){
    if (isNaN(deposit)) { 
     setStatus('Error: Please enter a number');
     setTimeout(() => setStatus(''),4000);
     return "Enter a number";
    }
    return true;
  }
  
  function handleDeposit(props){
    if (!validate(deposit, 'deposit')) return;
    ctx.users[0].balance += Number(deposit);
    const balance = ctx.users[0].balance;
 
    setBalance(ctx.users[0].balance);
    
    console.log(balance);

    ctx.users.push({deposit, balance});
    setShow(false);
    
    setStatus(''); // clear errors
    console.log(ctx.users[0].balance, deposit);
  }

  return (
    <Card
      bgcolor="primary"
      header={(<h4>Deposit</h4>)}
      status={status}
      body={show ? (  
        <>
        Account Balance: ${balance}
        <label readOnly={false} onChange={e => setBalance()}> </label> <br/><br/>
        
        Deposit amount<br/>
        <div className="input-group">
          <span className="input-group-addon" >$</span>
          <input type="text" className="form-control" id="deposit" placeholder="Enter amount" value={deposit} onChange={e => {
            validate(e.currentTarget.value);
            validateNan(e.currentTarget.value);
            setDeposit(e.currentTarget.value);}} /><br/>
        </div> <br/>
        <button type="submit" className="btn btn-light" disabled={deposit.length<1 || isNaN(deposit)} onClick={handleDeposit}>Deposit</button>
        </>
        ):(
        <>
        <h5>Success</h5>
        Deposited: ${deposit}<br/>
        Current balance: ${ctx.users[0].balance} <br/><br/>
        <button type="submit" className="btn btn-light" onClick={clearForm}>Add another amount</button>
        </>
      )}
    />
  )
}
