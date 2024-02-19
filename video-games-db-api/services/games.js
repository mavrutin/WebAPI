const db = require('./db');

const helper = require('../helper');

const config = require('../config');

async function getMultiple(page = 1){

  const offset = helper.getOffset(page, config.listPerPage);

  const rows = await db.query(

    `SELECT id, title, genre, platform, release_year, developer, price, rating, review

    FROM games LIMIT ${offset},${config.listPerPage}`

  );

  const data = helper.emptyOrRows(rows);

  const meta = {page};

  return {

    data,

    meta

  }

}

async function create(games){

  const result = await db.query(

    `INSERT INTO games 
(title, genre, platform, release_year, developer, price, rating, review)

    VALUES 

    ("${games.title}", "${games.genre}", "${games.platform}", ${games.release_year}, "${games.developer}", ${games.price}, ${games.rating}, "${games.review}")`

  );

  let message = 'Error in creating games';

  if (result.affectedRows) {

    message = 'games created successfully';

  }

  return {message};

}

async function update(id, games){

  const result = await db.query(

    `UPDATE games

    SET title="${games.title}", genre="${games.genre}", platform="${games.platform}", release_year=${games.release_year}, developer="${games.developer}", price=${games.price}, rating=${games.rating}, review="${games.review}"

    WHERE id=${id}` 

  );

  let message = 'Error in updating games';

  if (result.affectedRows) {

    message = 'games updated successfully';

  }

  return {message};

}

async function remove(id){

  const result = await db.query(

    `DELETE FROM games WHERE id=${id}`

  );

  let message = 'Error in deleting games';

  if (result.affectedRows) {

    message = 'games deleted successfully';

  }

  return {message};

}

module.exports = {

  getMultiple,

  create,

  update,

  remove

};

