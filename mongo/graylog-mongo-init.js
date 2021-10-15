//Init MongoDB user for secure connection from Graylog
//https://docs.mongodb.com/manual/reference/method/
db = db.getSiblingDB('graylog');

db.createUser(
    {
        user: "mongoroot",
        pwd: "mongopass",
        customData: {
            testInfo: "This guy is the best!"
        },
        roles: [
            { role: "dbOwner", db: "graylog" }
        ],
    }
);
