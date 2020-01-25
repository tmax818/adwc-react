import React from 'react';
import './Members.css';


function Members() {
  return (
    <div className="container">
    <h2 style={{textAlign: 'center'}}><br/>Login</h2>
<form name="login_form" method="post">
<table border="0" cellpadding="3" cellspacing="2" align="center">
    <tbody><tr>
        <td>Username:</td>
        <td><input type="name" name="username" value=""/></td>
    </tr>
    <tr>
        <td>Password:</td>
        <td><input type="password" name="password" value=""/></td>
    </tr>
    <tr>
        <td colspan="2"><input type="submit" name="submit" value="Login"/></td>
    </tr>
</tbody></table>
</form>

</div>
  );
}

export default Members;
