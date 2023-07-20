const { sql } = require('slonik')

const insertUser = (email, username, password) => sql.unsafe`
    INSERT INTO users (
        email, username, password
    )VALUES(
        ${email}, ${username}, ${password}
    );
    `
const selectByEmail = (email) => sql.unsafe`
    SELECT email, username, password
    FROM users
    WHERE email LIKE ${email};

`

const selectUser = (username) => sql.unsafe`

    SELECT username, password, id
    FROM users
    WHERE username LIKE ${username};

`;

    module.exports = {
        insertUser,
        selectByEmail,
        selectUser,
    }