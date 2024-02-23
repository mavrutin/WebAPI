Feature: Testing games endpoint with specific parameters

Scenario: Retrieve game with id 7 and title "Halo Infinite"
  Given url 'http://localhost:3000/games'
  And params {id:7, title:'Halo Infinite'}
  When method GET
  Then status 200
  

* match response.data[6].title == 'Halo Infinite'
* match response.data[6].genre == 'First-person shooter'
* match response.data[6].platform =='Xbox Series X/S, Xbox One, Microsoft Windows'
* match response.data[6].release_year == 2021
* match response.data[6].developer == '343 Industries'
* match response.data[6].price == '59.99'
* match response.data[6].rating == 8
* match response.data[6].review == 'Highly anticipated return of the iconic Halo series with new features'


