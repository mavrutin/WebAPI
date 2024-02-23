Feature: Changing Game details

Scenario: testing Put request to change the game details
  Given url 'http://localhost:3000/games/6'
  And request  '{"id": 6, "title": "Apart", "genre": "Platformer", "platform": "PlayStation 5", "release_year": 2021, "developer": "Insomniac Games", "price": "69.99", "rating": 9, "review": "Innovative platformer showcasing the power of the PS5 with dimensional rifts"}'
  And header Content-Type = 'application/json'
  When method put
  Then status 200