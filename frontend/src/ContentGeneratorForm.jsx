import React,{useState} from 'react'
import "./ContentGeneratorForm.css"
function ContentGeneratorForm() {
    const [content, setContent] = useState('');
    const [type, setType] = useState('Shayari');
    const [subject,setSubject]=useState("")
    const handleInput = (e) => {
      let {value}=e.target
      setSubject({
       value
      })
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        let obj={
          type:type,
          subject:subject
        }
        const response = await fetch("https://chatgptintegratedapp.onrender.com/generate-content",{
    method:"POST",
    body:JSON.stringify(obj),
    headers:{
     "content-type":"application/json"
    }
})
let res = await response.json()
let data=res.content.split("\n\n")
setContent(data)
        // Make an API request to the backend to generate content based on user input
        // Update 'content' state with the generated content
      };
      console.log(content)
  return (
    <div id="container">
      <h3 id='story'>Story Generator</h3>
       <form id='form' onSubmit={handleSubmit}>
        <label>
          Content Type:
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="shayari">Shayari</option>
            <option value="quote">Quote</option>
            <option value="story">Story</option>
          </select>
        </label>
        <label id='inputlabel' htmlFor="">
          Content:
          <input  type="text" onChange={handleInput}/>
        </label>
        {/* Add customization options here */}
        <button type="submit">Generate Content</button>
      </form>
      <div id="generateddiv">
        <p id='generatedp'>Generated Content:</p>
        <div>{content}</div>
      </div>
    </div>
  )
}

export default ContentGeneratorForm
