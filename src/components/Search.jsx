import React from 'react'

const Search = () => {
  return (
    <div className='search'>
        <div className="searchForm">
            <input type="text" placeholder='Find a user' />
        </div>
        <div className="userChat">
            <img src="https://th.bing.com/th/id/R.cff2f93564b477fff346a7daa6a85e63?rik=njqs0CTrNEGLmA&riu=http%3a%2f%2fwww.hyperledger.org%2fwp-content%2fuploads%2f2016%2f08%2fhl_bg_banner.jpg&ehk=%2bEMeO6jkNgsgp3kUoA5iUsOrs891OArfwhDd38cVNOw%3d&risl=&pid=ImgRaw&r=0" alt="" />
            <div className="userChatInfo"><span>mily</span></div>
        </div>
    </div>
  )
}

export default Search