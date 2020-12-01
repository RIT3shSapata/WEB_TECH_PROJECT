function handlesubmit(event){
    event.preventDefault();
    const data=new FormData(event.target);
    fetch('http://localhost:8080',{
      method:'POST',
      body:data
    })
  }
export default handlesubmit;