# Persisting Data
At the top of file

`import Cookies from 'universal-cookie';`

`const cookies = new Cookies();`

## Set a Cookie
`cookies.set(<some_cookie_name>, <some_string>);`

## Get a Cookie
This returns a javascript object that is contained in the cookie
<br></br>
`cookies.get(<some_cookie_name>);`
