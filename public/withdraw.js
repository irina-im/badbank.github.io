function Withdraw(){
  const ctx = React.useContext(UserContext); 
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [balance, setBalance]   = React.useState(ctx.users[0].balance);
  const [withdrawal, setWithdrawal]     = React.useState('');
  

  function clearForm(){
    setWithdrawal('');
    setShow(true);
  }

  function validate(withdrawal){
    if (withdrawal <0) {
      setStatus('Error: Please enter a positive amount');
      return false;
    }

    let a = Math.abs(withdrawal);
    let b = Math.abs(ctx.users[0].balance);
    if (a > b) {
      setStatus('Error: Withdrawal amount exceeds your current balance. Please enter a different amount');
      setTimeout(() => setStatus(''),5000);
      return false;
    }
    return true;
  }

  function validateNan(withdrawal){
    if (isNaN(withdrawal)) { 
     setStatus('Error: Please enter a number');
     setTimeout(() => setStatus(''),4000);
     return "Enter a number";
    }
    return true;
  }
  
  function handleDeposit(){
    if (!validate(withdrawal, 'withdrawal')) return;
    ctx.users[0].balance -= Number(withdrawal);
    const balance = ctx.users[0].balance;
 
    setBalance(ctx.users[0].balance);

    ctx.users.push({withdrawal, balance});
    setShow(false);
    
    setStatus(''); // clear errors
    console.log(ctx.users[0].balance, withdrawal);
  }

  return (
    <Card
      bgcolor="primary"
      header={(<h4>Withdraw</h4>)}
      status={status}
      body={show ? (  
              <>
              Account Balance: ${balance}
              <label readOnly={false} onChange={e => setBalance()}> </label> <br/><br/>
              
              Withdrawal amount<br/>
              <div className="input-group">
                <span className="input-group-addon" >$</span>
                <input type="text" className="form-control" id="withdrawal" placeholder="Enter amount" value={withdrawal} onChange={e => {
                  validate(e.currentTarget.value);
                  validateNan(e.currentTarget.value);
                  setWithdrawal(e.currentTarget.value);}} /><br/>
              </div> <br/>
              <button type="submit" className="btn btn-light" disabled={withdrawal.length<1 || isNaN(withdrawal)} onClick={handleDeposit}>Withdraw</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              Withdrawn: ${withdrawal}<br/>
              Current balance: ${ctx.users[0].balance} <br/><br/>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Withdraw another amount</button>
              </>
            )}
    />
  )
}
