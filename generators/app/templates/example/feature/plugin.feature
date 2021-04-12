Feature: <%= pkgName %> Example

Scenario: Calculate an addition
Given I have my calculator
When I use the expression 7 plus 4
Then the result should be equal to 11
Given I have my calculator
When I do 22 + 8
Then I get 30
Given I have my calculator
When 5 + 5
Then 10
