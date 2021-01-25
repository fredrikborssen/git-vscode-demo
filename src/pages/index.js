import React ,{useState} from 'react'
import JSONDATA from '../Data/MOCK_DATA.json'
const Home = () => {
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <div>
            <h1>Welcome Home</h1>
            <div className="App">
                <input type="text" placeholder="Search..." onChange={event => {setSearchTerm(event.target.value)}}/>
                {JSONDATA.filter((val => {
                    if(searchTerm == "")
                    {
                        return val
                    } else if(val.first_name.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                        return val.first_name
                    }
                })).map((val, key)=> {
                    return (<div className="user" key={key}> {val.first_name} </div>);
                })
                }
            </div>
        </div>
    )
}

export default Home
