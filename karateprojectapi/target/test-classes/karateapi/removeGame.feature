Feature: Deleting Game

Scenario:
    Delete a game
    Given url 'http://localhost:3000/games/9'
    And params  {id:9, title:'Returnal'}
    When method delete
    Then status 200

    
   