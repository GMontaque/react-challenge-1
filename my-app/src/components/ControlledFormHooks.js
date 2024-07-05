import React, {useState} from 'react'

function ConditionalRenderingFunctional(props) {

    const [name, setName] = useState("")
    const [option, setOption] = useState("general")
    const [textarea, setTextarea] = useState("")

    let handleSubmit = (e) =>{
        e.preventDefault();
        console.log(name, option, textarea)
    }

  return (
        <div>
            <h2>Please fill out the form below:</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id-name">Your Name:</label>
                    <input
                        value={name}
                        onChange={
                            (e) => setName(e.target.value)
                        }
                        id="id-name"
                        name="name"
                        type="text"
                    />
                </div>
                <div>
                    <label htmlFor="id-category">Query category:</label>
                    <select
                        id="id-category"
                        name="category"
                        value={option}
                        onChange={
                            (e) => setOption(e.target.value)
                        }
                    >
                        <option value="website">Website issue</option>
                        <option value="order">Order issue</option>
                        <option value="general">General inquiry</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="id-comments">Comments:</label>
                    <textarea
                        id="id-comments"
                        name="comments"
                        value={textarea}
                        onChange={
                            (e) => setTextarea(e.target.value)
                        }
                    />
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
  )
}

export default ConditionalRenderingFunctional
