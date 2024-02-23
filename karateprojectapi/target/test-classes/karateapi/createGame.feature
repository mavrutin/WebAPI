Feature: Posting Game

Scenario: Post a new game
  Given url 'http://localhost:3000/games'
  And request '{  "title": "Spider", "genre": "First-person shooter", "platform": "PlayStation 5, Microsoft Windows", "release_year": 2021, "developer": "ChronoForge Studios", "price": "59.99", "rating": 8, "review": "Prepare for an epic assault on the senses with Time Rift: Nexus Assault"}'
  And header Content-Type = 'application/json'
  When method post
  Then status 200