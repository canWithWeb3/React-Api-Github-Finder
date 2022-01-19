import React, { useContext, useState } from 'react'
import AlertContext from '../context/alert/alertContext';
import GithubContext from '../context/github/githubContext';

const Search = () => {
  const {searchUsers, users, clearUsers} = useContext(GithubContext);
  const {setAlert} = useContext(AlertContext);

  const [keyword, setKeyword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if(keyword !== ""){
      searchUsers(keyword);
      setKeyword("");
    }else{
      setAlert("Boş bırakılamaz", "danger");
    }
  }

  return (
    <div className='container'>
      <form onSubmit={onSubmit}>
        <div className="input-group">
          <input value={keyword} onChange={(e) => setKeyword(e.target.value)} type="text" className="form-control" />
          <div className="input-group-append">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
      {
        users.length > 0 && (
          <button className='btn btn-secondary w-100 mt-3 btn-sm'
              onClick={(e) => clearUsers()}
            >Clear Users</button>
        )
      }
    </div>
  )
}

export default Search


// import React, {useState, useContext} from 'react'
// import GithubContext from '../context/github/githubContext'
// import AlertContext from '../context/alert/alertContext'

// const Search = () => {

//     const {searchUsers,clearUsers,users} = useContext(GithubContext)
//     const {setAlert} = useContext(AlertContext)
        
//     const [keyword,setKeyword] = useState('');   

//     const onChange = (e) => {
//         setKeyword(e.target.value);
//     }

//     const onSubmit = (e) => {
//         e.preventDefault();

//         if(keyword === '') {
//             setAlert('lütfen bir anahtar kelime giriniz.','danger');
//         } else {
//             searchUsers(keyword);
//             setKeyword('');
//         }      
//     }

    
//     return (
//         <div className="container my-3">

//             <form onSubmit={onSubmit}>
//                     <div className="input-group">
//                         <input type="text" value={keyword} onChange={onChange} className="form-control" />
//                         <div className="input-group-append">
//                             <button type="submit" className="btn btn-primary">Search</button>
//                         </div>
//                     </div>
//             </form>
//             {
//                 users.length>0 && <button onClick={clearUsers} className="btn btn-secondary btn-sm btn-block mt-2">Clear Results</button>
//             }
//             </div>
//     )
    
// }

// export default Search
