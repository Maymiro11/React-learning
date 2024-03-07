import React from 'react'

const MailBox = ({boxUsers, boxtitle, mailBoxCount = 0}) => {
    

  return (
    <div>
        <h2>{boxtitle}</h2>
        {mailBoxCount === 0 ? (
            <p><b>Немає активних поштових скриньок</b></p>) : (
<p>Кількість активних поштових скриньок: {mailBoxCount}</p>
        )}
        
        
        <ul>
            {boxUsers.map((user) => {
                return <li key={user.id}>{user.userEmail}</li>
            })}
        </ul>
    </div>
  )
}

export default MailBox;