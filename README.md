TBE
===

Easy to start telegram bot environment kit.
This works with nodejs

Deploy - heroku

Start
=====

- Clone 

`git clone https://gitlab.com/ceigh/tbe`

- Deps

`cd tbe`

`npm i`

- Configure
    - Change information in `package.json`
    - Change variables in `.env` file

- Structure

    You only need to make changes in:
 
    - `src/lib/docs.json` - define your help information
    - `src/lib/operations.js` - define your assistant methods
    - `src/lib/handlers` - commands module
    - `src/lib/queries` - callbacks from reply_keyboard module
    - `src/lib/db` - scripts to manually changes in database (if required)

License
=======

[MIT](/LICENSE)
