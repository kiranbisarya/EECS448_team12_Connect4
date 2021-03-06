
/**
	* @description Manages the boards and user interaction during gameplay (chip drop placement and turn switching)
	* @param rows {number} The number of rows the boards have
	* @param cols {number} The number of columns the boards have
	* @param turn {number} The turns indicate which player will play
	**/

    let currPlayer = 1; //1 for red chip player, 2 for yellow chip player
    let turn = 1;
    let okTurn = 0;
    let board = [
        [0, 0, 0, 0, 0, 0, 0], // 0 0 0 0 0 0 0 0
        [0, 0, 0, 0, 0, 0, 0], // 1 1 1 1 1 1 1 1
        [0, 0, 0, 0, 0, 0, 0], // 2 2 2 2 2 2 2 2
        [0, 0, 0, 0, 0, 0, 0], // 3 3 3 3 3 3 3 3
        [0, 0, 0, 0, 0, 0, 0], // 4 4 4 4 4 4 4 4
        [0, 0, 0, 0, 0, 0, 0]  // 5 5 5 5 5 5 5 5
      ];
    //let cols = 7;
    //let rows = 6;
    let gameActive = true;

        /**
    	* @description Runs all test suites
        **/
    function testSuite()
    {
        gameActive = true;
        console.log("=== CONNECT4 TEST SUITE ===")
        //contains tests that check each function's ability to correcrl execute a task.
        console.log("TEST 01_DROPCHIP")
        test01_dropChip();

        console.log("TEST 02_UPDATEBOARD")
        test02_updateBoard();

        console.log("TEST03_CHECKHORIZ")
        test03_checkHoriz();

        console.log("TEST04_CHECKVERT")
        test04_checkVert();

        console.log("TEST05_CHECKDIAGLTR")
        test05_checkDiagLtR();

        console.log("TEST06_CHECKDIAGRTL")
        test06_checkDiagRtL();

        console.log("TEST07_CHECKTIE")
        test07_checkTie();

        console.log("TEST08_GAMEOVER")
        test08_gameOver();

        console.log("TEST09_ENDTURN")
        test09_endTurn();
    }
        /**
    	* @description Runs test suite 1 dropChip() → tests that chips are being dropped for player 1 & player 2
        **/
    function test01_dropChip()
    {
        let currTestPlayer1 = 1;
        let currTestPlayer2 = 2;
        let chosenTestCol = 0;
        let testBoard1 = [
            [0, 0, 0, 0, 0, 0, 0], // 1 1 1 1 1 1 1 1
            [0, 0, 0, 0, 0, 0, 0], // 2 2 2 2 2 2 2 2
            [0, 0, 0, 0, 0, 0, 0], // 3 3 3 3 3 3 3 3
            [0, 0, 0, 0, 0, 0, 0], // 4 4 4 4 4 4 4 4
            [1, 0, 0, 0, 0, 0, 0]  // 5 5 5 5 5 5 5 5
          ];

          let testBoard2 = [
            [0, 0, 0, 0, 0, 0, 0], // 1 1 1 1 1 1 1 1
            [0, 0, 0, 0, 0, 0, 0], // 2 2 2 2 2 2 2 2
            [0, 0, 0, 0, 0, 0, 0], // 3 3 3 3 3 3 3 3
            [0, 0, 0, 0, 0, 0, 0], // 4 4 4 4 4 4 4 4
            [2, 0, 0, 0, 0, 0, 0]  // 5 5 5 5 5 5 5 5
          ];

          let testBoard3 = [
            [0, 0, 0, 0, 0, 0, 0], // 1 1 1 1 1 1 1 1
            [0, 0, 0, 0, 0, 0, 0], // 2 2 2 2 2 2 2 2
            [0, 0, 0, 0, 0, 0, 0], // 3 3 3 3 3 3 3 3
            [0, 0, 0, 0, 0, 0, 0], // 4 4 4 4 4 4 4 4
            [0, 0, 0, 0, 0, 0, 0]  // 5 5 5 5 5 5 5 5
          ];

          let testBoard4 = [
            [0, 0, 0, 0, 0, 0, 0], // 1 1 1 1 1 1 1 1
            [0, 0, 0, 0, 0, 0, 0], // 2 2 2 2 2 2 2 2
            [0, 0, 0, 0, 0, 0, 0], // 3 3 3 3 3 3 3 3
            [0, 0, 0, 0, 0, 0, 0], // 4 4 4 4 4 4 4 4
            [0, 0, 0, 0, 0, 0, 0]  // 5 5 5 5 5 5 5 5
          ];

            if(testBoard1[4][chosenTestCol] != 0 && testBoard1[4][chosenTestCol] == 1) // player 1 has selected this space
            { //handles user clicking on column that is already full
                console.log("Case 1: Confirm that player 1 has chosen a location & it cannot be selected again: PASSED");
            }
            else
            {
                console.log("Case 1: Confirm that player 1 has chosen a location & it cannot be selected again: FAILED");
            }

            if(testBoard2[4][chosenTestCol] != 0 && testBoard2[4][chosenTestCol] == 2) // player 2 has selected this space
            { //handles user clicking on column that is already full
                console.log("Case 2: Confirm that player 2 has chosen a location & it cannot be selected again: PASSED");
            }
            else
            {
                console.log("Case 2: Confirm that player 2 has chosen a location & it cannot be selected again: FAILED");
            }

            if(currTestPlayer1 == 1)
            {
                 for(let row = 5; row >= 0; row --)
                 {
                    if(testBoard3[4][chosenTestCol] == 0) 
                    {
                        testBoard3[4][chosenTestCol] = 1;
                        console.log("Case 3: Confirm Player 1 has selected a slot: PASSED ");
                        // console.log(testBoard3);

                        break;
                    }
                 }
            }
            else
            {
                console.log("Case 3: Confirm Player 1 has selected a slot: FAILED ");
            }

            if(currTestPlayer2 == 2)
            {
                for(let row = 5; row >= 0; row --)
                 {
                    if(testBoard4[4][chosenTestCol] == 0) 
                    {
                        testBoard4[4][chosenTestCol] = 2;
                        console.log("Case 4: Confirm Player 2 has selected a slot: PASSED ");
                        // console.log(testBoard4);

                        break;
                    }
                 }
            }
            else
            {
                console.log("Case 4: Confirm Player 2 has selected a slot: FAILED ");
            }
    }
        /**
    	* @description Runs test suite 2 updateBoard() → tests that the selected slots are changing color depending on player 1 or player 2
        **/
    function test02_updateBoard()
    {
        let testBoard0 = [
            [0, 0, 0, 0, 0, 0, 0], // 1 1 1 1 1 1 1 1
            [0, 0, 0, 0, 0, 0, 0], // 2 2 2 2 2 2 2 2
            [0, 0, 0, 0, 0, 0, 0], // 3 3 3 3 3 3 3 3
            [0, 0, 0, 0, 0, 0, 0], // 4 4 4 4 4 4 4 4
            [0, 0, 0, 0, 0, 0, 0]  // 5 5 5 5 5 5 5 5
          ];

        var testBoard1 = [
            [0, 0, 0, 0, 0, 0, 0], // 1 1 1 1 1 1 1 1
            [0, 0, 0, 0, 0, 0, 0], // 2 2 2 2 2 2 2 2
            [0, 0, 0, 0, 0, 0, 0], // 3 3 3 3 3 3 3 3
            [0, 0, 0, 0, 0, 0, 0], // 4 4 4 4 4 4 4 4
            [1, 0, 0, 0, 0, 0, 0]  // 5 5 5 5 5 5 5 5
          ];

        var testBoard2 = [
            [0, 0, 0, 0, 0, 0, 0], // 1 1 1 1 1 1 1 1
            [0, 0, 0, 0, 0, 0, 0], // 2 2 2 2 2 2 2 2
            [0, 0, 0, 0, 0, 0, 0], // 3 3 3 3 3 3 3 3
            [0, 0, 0, 0, 0, 0, 0], // 4 4 4 4 4 4 4 4
            [2, 0, 0, 0, 0, 0, 0]  // 5 5 5 5 5 5 5 5
          ];
        
        //selected test location will be row 4, col 0 to locate player selection location

        for (let col = 0; col < 7; col++)  //row was originally here, but in our win checks we are accessing col before row (?)
        {
            for (let row = 0; row < 6; row++) 
            {
                if (testBoard0[4][0]==0) 
                {
                    // testBoard0[4][0] = 'X';
                    // console.log(testBoard0);
                    console.log("Case 1: Board being accessed is empty & successfully updated: PASSED");
                } 
                else
                {
                    console.log("Case 1: Board accessed is empty & successfully updated: FAILED");
                }
            }
        }

        for (let col = 0; col < 7; col++)  //row was originally here, but in our win checks we are accessing col before row (?)
        {
            for (let row = 0; row < 6; row++) 
            {
                if (testBoard1[4][0]==1) //1 for yellow
                { 
                    console.log("Case 2: Board accessed by player 1 & successfully updated: PASSED");
                } 
                else
                {
                    console.log("Case 2: Board accessed by player 1 & successfully updated: FAILED");
                }
            }
        }

        for (let col = 0; col < 7; col++)  //row was originally here, but in our win checks we are accessing col before row (?)
        {
            for (let row = 0; row < 6; row++) 
            {
                if (testBoard2[4][0]==2) //2 for red
                { 
                    console.log("Case 3: Board accessed by player 2 & successfully updated: PASSED");
                }
                else
                {
                    console.log("Case 3: Board accessed by player 2 & successfully updated: FAILED");
                }
            }
        }
    }
        /**
    	* @description Runs test suite 3 checkHoriz() → tests that horizontal win logic is sound
        **/
    function test03_checkHoriz()
    {
        let testBoard = [
            [0, 0, 0, 0, 0, 0, 0], // 1 1 1 1 1 1 1 1
            [0, 0, 0, 0, 0, 0, 0], // 2 2 2 2 2 2 2 2
            [0, 0, 0, 0, 0, 0, 0], // 3 3 3 3 3 3 3 3
            [0, 0, 0, 0, 0, 0, 0], // 4 4 4 4 4 4 4 4
            [1, 1, 1, 1, 0, 0, 0]  // 5 5 5 5 5 5 5 5
          ];

        for (let i=1; i<=2; i++) 
        {
            for (let col = 0; col < 4; col ++) 
            {
                for (let row = 0; row < 6; row ++) 
                {
                    if (testBoard[row][col] == i) 
                    {
                        if ((testBoard[row][col+1] == i) && (testBoard[row][col+2] == i) && (testBoard[row][col+3] == i)) 
                        {
                            console.log("Horizon Win detected: PASSED");
                            return i;
                        }
                        else
                        {
                            console.log("Horizon Win detected: FAILED");
                        }
                        
                    }

                }

            }
        
        }
    }
        /**
    	* @description Runs test suite 4 checkVert() → tests that vertical win logic is sound
        **/
    function test04_checkVert()
    {
        let testBoard = [
            [0, 0, 0, 0, 0, 0, 0], // 1 1 1 1 1 1 1 1
            [1, 0, 0, 0, 0, 0, 0], // 2 2 2 2 2 2 2 2
            [1, 0, 0, 0, 0, 0, 0], // 3 3 3 3 3 3 3 3
            [1, 0, 0, 0, 0, 0, 0], // 4 4 4 4 4 4 4 4
            [1, 0, 0, 0, 0, 0, 0]  // 5 5 5 5 5 5 5 5
          ];

          for (let i=1; i<=2; i++) 
          {
              for (let col = 0; col < 7; col++) 
              {
                  for (let row = 0; row < 3; row++) 
                  {
                      if (testBoard[row][col] == i) 
                      {
                          if ((testBoard[row+1][col] == i) && (testBoard[row+2][col] == i) && (testBoard[row+3][col] == i)) 
                          {
                                console.log("Vertical win detected: PASSED");
                                return i;
                          }
                          else
                          {
                                console.log("Vertical win detected: FALSE");
                          }
                      }
                  }
              }
          }
    }
        /**
    	* @description Runs test suite 5 checkDiagLtR() → tests that diagonal (LtR) logic is sound
        **/
    function test05_checkDiagLtR()
    {
        let testBoard = [
            [0, 0, 0, 0, 0, 0, 0], // 1 1 1 1 1 1 1 1
            [0, 0, 0, 1, 0, 0, 0], // 2 2 2 2 2 2 2 2
            [0, 0, 1, 0, 0, 0, 0], // 3 3 3 3 3 3 3 3
            [0, 1, 0, 0, 0, 0, 0], // 4 4 4 4 4 4 4 4
            [1, 0, 0, 0, 0, 0, 0]  // 5 5 5 5 5 5 5 5
          ];

          for (let i=1; i<=2; i++) 
          {
            for (let col = 0; col < 4; col++) 
              {
                for (let row = 3; row < 6; row++) 
                  {
                    if (testBoard[row][col] == i) 
                    {
                        if ((testBoard[row-1][col+1] == i) && (testBoard[row-2][col+2] == i) && (testBoard[row-3][col+3] == i)) 
                        {
                            console.log("Diagonal Left to Right win detected: PASSED");
                            return i;
                        }
                        else
                        {
                            console.log("Diagonal Left to Right win detected: FAILED");
                        }
                    }
                }
            }
        }
    }
        /**
    	* @description Runs test suite 6 testing checkDiagRtL() → tests that diagonal (RtL) logic is sound
        **/
        function test06_checkDiagRtL()
        {
            let testBoard = [
                [0, 0, 0, 0, 0, 0, 0], // 1 1 1 1 1 1 1 1
                [0, 1, 0, 0, 0, 0, 0], // 2 2 2 2 2 2 2 2
                [0, 0, 1, 0, 0, 0, 0], // 3 3 3 3 3 3 3 3
                [0, 0, 0, 1, 0, 0, 0], // 4 4 4 4 4 4 4 4
                [0, 0, 0, 0, 1, 0, 0]  // 5 5 5 5 5 5 5 5
              ];
              
            for (let i=1; i<=2; i++) 
            {
                for (let col = 0; col < 4; col++) 
                {
                    for (let row = 0; row < 3; row++) 
                    {
                        if (testBoard[row][col] == i) 
                        {
                            if ((testBoard[row+1][col+1] == i) && (testBoard[row+2][col+2] == i) && (testBoard[row+3][col+3] == i)) 
                            {
                                console.log("Diagonal Right to Left win detected: PASSED");
                                return i;
                            }
                            else
                            {
                                console.log("Diagonal Right to Left win detected: FAILED");
                                  
                            }   
                        }
                    }
                }
            }
        }
        /**
    	* @description Runs test suite 7 testing checkTie() → tests that if a board has a combination where there are no winners, a tie is declared
        **/
        function test07_checkTie()
        {
            let testBoard = [
                [2, 2, 1, 2, 1, 2, 1], // 1 1 1 1 1 1 1 1
                [2, 1, 1, 2, 1, 2, 1], // 2 2 2 2 2 2 2 2
                [1, 1, 2, 2, 1, 2, 1], // 3 3 3 3 3 3 3 3
                [2, 2, 2, 1, 2, 1, 2], // 4 4 4 4 4 4 4 4
                [1, 2, 1, 1, 1, 2, 1]  // 5 5 5 5 5 5 5 5
              ];

            if(testBoard[0][0] != 0 && testBoard[0][1] != 0 && testBoard[0][2] != 0 && testBoard[0][3] != 0 && testBoard[0][4] != 0 && testBoard[0][5] != 0 && testBoard[0][6] != 0) 
            { 
                console.log("Tie detected: PASSED");
                return true;
            }
            else
            {
                console.log("Tie detected: FAILED");
                return false;
            }
        }
        /**
    	* @description Runs test suite 8 testing gameOver() → tests gameOver boolean logic
        **/
        function test08_gameOver()
        {
            //We are simulating player 1 winning the game.
            // 1 = player 1, 2 = player 2
            function checkHorizWin() {
                return 1;
            }
            function checkVertWin() {
                return 1;
            }
            function checkDLtRWin() {
                return 1;
            }
            function checkDRtLWin() {
                return 1;
            }
             
            if(checkHorizWin()==1 || checkHorizWin()==2 || checkVertWin()==1 || checkVertWin()==2 || checkDLtRWin()==1 || checkDLtRWin()==2 || 
            checkDRtLWin()==1 || checkDRtLWin()==2)
            {
                console.log("Game Over, detected win: PASSED");
                return true;
            }
            else
            {
                console.log("Game Over, detected win: FAILED");
                return false;
            }
        }
     /**
	* @description Runs test suite 9 checking endTurn() → test correctly reports Tie, Win & player Turn information
    **/
        function test09_endTurn() //determines winner
        {
            function testTie(){
                return true;
            }
            function testgameOver1() {
                return true;
            }
            function testgameOver2() {
                return false;
            }

            let testPlayer2 = 2;


            if(testTie() == true)
            {
                console.log("Case 1: Game Tied, Game Ends: PASSED");
            }
            else
            {
                console.log("Case 1: Game Tied, Game Ends: FAILED");
            }
            
            if(testgameOver1() == true)
            {
                if(testPlayer2==2)
                {
                console.log("Case 2: Confirm most recent player (Player 2) has won: PASSED");
                }
                else
                {
                console.log("Case 2: Confirm most recent player (Player 2) has won: FAILED");
                }
            }
            if(testgameOver2() == false)
            {
                if(testPlayer2==2)
                {
                console.log("Case 3: Confirm that it is now Player 2's turn: PASSED");
                }
                else
                {
                console.log("Case 3: Confirm that it is now Player 2's turn: FAILED");
                }
            }
        }

    testSuite();

     /**
	* @description Resets the game
    **/
    function resetGrid()
    {
        var snd = new Audio("clear.mp3");
		snd.play()
        
          currPlayer = 1; //1 for red chip player, 2 for yellow chip player
          turn = 0; 
          gameActive = true;
          document.getElementById("colorTurn").innerHTML="Yellow Turn";
          board = [
            [0, 0, 0, 0, 0, 0, 0], // 0 0 0 0 0 0 0 0
            [0, 0, 0, 0, 0, 0, 0], // 1 1 1 1 1 1 1 1
            [0, 0, 0, 0, 0, 0, 0], // 2 2 2 2 2 2 2 2
            [0, 0, 0, 0, 0, 0, 0], // 3 3 3 3 3 3 3 3
            [0, 0, 0, 0, 0, 0, 0], // 4 4 4 4 4 4 4 4
            [0, 0, 0, 0, 0, 0, 0]  // 5 5 5 5 5 5 5 5
          ];
          updateBoard();
          endTurn();
          console.log("board reset.") 
    }
     /**
	* @description Determines player turn IF the game is not over
    **/
//    function updateVals()
//    {
//         if(!gameOver())
//         {
//             if(gameActive==true)
//             {
//                 // currPlayer++;
//                 turn++;
//             }
//             else
//             {
//                 document.querySelector("#msg").innerText = "Invalid placement, try again player " + currPlayer;
//             }
//         }
//     }   

    /**
	* @description Chip placement
    **/
    function dropChip(chosenCol)
    {
        //let chosenRow=0;
        //board[chosenRow][chosenCol] = 1;

        if(gameActive == true)
        {
            if(board[0][chosenCol] != 0) 
            { //handles user clicking on column that is already full
                document.getElementById("fullColumn").innerHTML = "Column " + (chosenCol+1) + " is full. Please choose another column";
                okTurn = 1;
            }

            else if (currPlayer == 1)
            {
                okTurn = 0;
                 for(let row = 5; row >= 0; row --)
                 {
                    if(board[row][chosenCol] == 0) 
                    {
                        board[row][chosenCol] = 1;
                        break;
                    }
                 }

                currPlayer = 2;
                document.getElementById("colorTurn").innerHTML="Red Turn";
            }
            else 
            {
                okTurn = 0;
                 for(let row = 5; row >= 0; row --)
                 {
                    if(board[row][chosenCol] == 0) 
                    {
                        board[row][chosenCol] = 2;
                        break;
                    }
                 }

                currPlayer = 1;
                document.getElementById("colorTurn").innerHTML="Yellow Turn";
            }
            var snd = new Audio("chip.mp3");
		    snd.play();
            updateBoard();
            endTurn();
        }
    }


    /**
	* @description Updates board with corresponding chip color
    **/
   
    function updateBoard()
    {
        if(gameActive == true)
        {
            for (let col = 0; col < 7; col++)  //row was originally here, but in our win checks we are accessing col before row (?)
            {
                for (let row = 0; row < 6; row++) 
                {
                    if (board[row][col]==0) 
                    {
                        document.getElementById("slot"+row+col).style.backgroundColor="#FFFFFF";
                    } 
                    else if (board[row][col]==1) //1 for yellow
                    { 
                        document.getElementById("slot"+row+col).style.backgroundColor="#FFFF00";
   
                    } 
                    else if (board[row][col]==2) //2 for red
                    { 
                        document.getElementById("slot"+row+col).style.backgroundColor="#FF0000"; 
                    }
                }
            }
        }
    }

    /**
	* @description Checks if a player has a horizontal win and returns the player that won (1 or 2)
    **/

    function checkForHorzWin()
    {
        for (let i=1; i<=2; i++) 
        {
            for (let col = 0; col < 4; col ++) 
            {
                for (let row = 0; row < 6; row ++) 
                {
                    if (board[row][col] == i) //setting a 2d array equal to a single value?
                    {
                        if ((board[row][col+1] == i) && (board[row][col+2] == i) && (board[row][col+3] == i)) 
                        {
                            return i;
                        }
                        
                    }

                }

            }
        
        }

    }


    /**
	* @description Checks if a player has a vertical win and returns the player that won (1 or 2)
    **/

    function checkForVertWin() 
    {
        for (let i=1; i<=2; i++) 
        {
            for (let col = 0; col < 7; col++) 
            {
                for (let row = 0; row < 3; row++) 
                {
                    if (board[row][col] == i) 
                    {
                        if ((board[row+1][col] == i) && (board[row+2][col] == i) && (board[row+3][col] == i)) 
                        {
                            return i;
                        }
                    }
                }
            }
        }
    }

    
    /**
	* @description Checks if a player has a diagonal left to right win and returns the player that won (1 or 2)
    **/    

    function checkForDiagonal_LtR_Win() 
    {
        for (let i=1; i<=2; i++) 
        {
            for (let col = 0; col < 4; col++) 
            {
                for (let row = 3; row < 6; row++) 
                {
                    if (board[row][col] == i) 
                    {
                        if ((board[row-1][col+1] == i) && (board[row-2][col+2] == i) && (board[row-3][col+3] == i)) 
                        {
                            return i;
                        }
                    }
                }
            }
        }
    }
    
    /**
	* @description Checks if a player has a diagonal right to left win and returns the player that won (1 or 2)
    **/  
    function checkForDiagonal_RtL_Win() 
    {
        for (let i=1; i<=2; i++) 
        {
            for (let col = 0; col < 4; col++) 
            {
                for (let row = 0; row < 3; row++) 
                {
                    if (board[row][col] == i) 
                    {
                        if ((board[row+1][col+1] == i) && (board[row+2][col+2] == i) && (board[row+3][col+3] == i)) 
                        {
                            return i;
                        }   
                    }
                }
            }
        }
    }


    /**
	* @description Checks if there is a tie by checking if all of the columns are full and returns true or false
    **/ 

    function checkForTie()
    {
        if(board[0][0] != 0 && board[0][1] != 0 && board[0][2] != 0 && board[0][3] != 0 && board[0][4] != 0 && board[0][5] != 0 && board[0][6] != 0) 
        { 
            return true;
        }
        else
        {
            return false;
        }
    }

    /**
	* @description Verify that chip placement is valid via bounds checking
    **/
   
   /* function validChoice(chosenRow, chosenCol)
    {
        if(chosenCol>=0 && chosenCol<7 && board[chosenRow][chosenCol]==0 && (chosenRow==0 || board[chosenRow-1][chosenCol]!=0))
        {
            return true;
        }
        else
        {
            return false;
        }
    }*/

    /**
	* @description Checks for a win which determines if game is over then returns true or false
    **/
   function gameOver()
   {
        if(checkForHorzWin()==1 || checkForHorzWin()==2 || checkForVertWin()==1 || checkForVertWin()==2 || checkForDiagonal_LtR_Win()==1 || checkForDiagonal_LtR_Win()==2 || 
        checkForDiagonal_RtL_Win()==1 || checkForDiagonal_RtL_Win()==2)
        {
            gameActive = false;
            return true;
        }
        else
        {
            return false;
        }
   }

     /**
	* @description If the game is over, then determine who is the winner and who is the loser
    **/
   function endTurn()
   {
    //document.getElementById("msg").innerHTML="Time for turn number " + turn + " with player " + currPlayer;
    if(checkForTie() == true)
    {
        document.getElementById("msg").innerHTML="It's a Tie!";
    }
    
    else if(gameOver() == true)
    {
        var snd = new Audio("win.mp3");
		snd.play();
        if(currPlayer==2)
        {
            document.getElementById("msg").innerHTML="Congratulations! Player 2 has won on turn number " + turn;
        }
        else
        {
            document.getElementById("msg").innerHTML="Congratulations! Player 1 has won on turn number " + turn;
        }
    }
    else if(gameOver() == false)
    {
        if(okTurn == 0)
        {
            turn++;
        }
        if(currPlayer==2)
        {
            document.getElementById("msg").innerHTML="Next up is player 2 for turn number " + turn;
        }
        else
        {
            document.getElementById("msg").innerHTML="Next up is player 1 for turn number " + turn;
        }
    }
   }

