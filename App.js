import React, {useState, useEffect} from 'react';
import './app.css'


const App = () =>{

    const [question,setQuestion] = useState('')
    const [response,setResponse] = useState();
    const [responses,setResponses] = useState();

    useEffect(()=>{
        console.log(responses)

        let arr = [
            ["It is certain.","It is decidedly so.","Without a doubt.","Yes definitely.","You may rely on it."],
            ["As I see it, yes.", "Most likely.","Outlook good.","Yes.","Signs point to yes."],
            ["Reply hazy, try again.","Ask again later.","Ask again later.","Better not tell you now."," Cannot predict now.","Concentrate and ask again."],
           ["Don't count on it.","My reply is no.","My sources say no.","Outlook not so good.","Very doubtful."]
        ]
        

        setResponses(arr)

    },[])

    const randomizer = () =>{
        let type = Math.floor(Math.random() * 4);

        let res = Math.floor(Math.random() * responses[type].length);

        setResponse(responses[type][res])
        
    }

    return(
        <div className='main'>
            <div className='form'>
                <span>Welcome to Magic 8 Ball! <span>&#127921;</span></span>

                <div style={{"width":"50%", "display":"flex", "justifyContent":"space-evenly"}}>
                    <input placeholder='Enter a yes/no question' onChange={(e)=>{setQuestion(e.target.value);}} className='question'></input>
                    {question.length > 0 && <button className='inputButton' onClick={randomizer}>Shake!</button>}
                </div>

                <div>
                    {response}
                </div>


            </div>
        
        </div>
    )
}

export default App;