# Roulette table

- Add a route for making bets. (GET all bets, POST new bet)
- Bets should have an amount, betType, status (active/completed)
- Bet Type can be exact number, 1-18, 19-36, 1st 12, 2nd 12 or 3rd 12
- Create a Game route that handles a call that triggers a game. (Generate a number between 1 and 36)
- After the Game is calculated, check all active bets and calculate winnings accordingly (x2 of the amount that was bet), as well as put all active bets status to completed.
- Feel free to experiment with this one :)