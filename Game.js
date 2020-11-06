

/**
	* @description Manages the boards and user interaction during gameplay (chip drop placement and turn switching)
	* @param rows {number} The number of rows the boards have
	* @param cols {number} The number of columns the boards have
	* @param turn {number} The turns indicate which player will play
	**/

    let currPlayer = 1; //1 for red chip player, 2 for yellow chip player
    let turn = 1;
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


    function testSuite()
    {
        console.log("=== CONNECT4 TEST SUITE ===")
        //contains tests that check each function's ability to correcrl execute a task.
        console.log("TEST 01_DROPCHIP")
        //test01_dropChip();

        console.log("TEST 02_UPDATEBOARD")
        test02_updateBoard();

        //console.log("TEST03_CHECKHORIZ")
        //test03_checkHoriz();

        //console.log("TEST04_CHECKVERT")
        //test04_checkVert();

        //console.log("TEST05_CHECKDIAGLTR")
        //test05_checkDiagLtR();

        //console.log("TEST06_CHECKDIAGRTL")
        //test06_checkDiagRtL();

        //console.log("TEST07_CHECKTIE")
        //test07_checkTie();

        //console.log("TEST08_GAMEOVER")
        //test08_gameOver();

        //console.log("TEST09_ENDTURN")
        //test09_endTurn();




    }

    // function test01_dropChip()
    // {
        
    // }

    function test02_updateBoard()
    {
        let testBoard0 = [
            [0, 0, 0, 0, 0, 0, 0], // 1 1 1 1 1 1 1 1
            [0, 0, 0, 0, 0, 0, 0], // 2 2 2 2 2 2 2 2
            [0, 0, 0, 0, 0, 0, 0], // 3 3 3 3 3 3 3 3
            [0, 0, 0, 0, 0, 0, 0], // 4 4 4 4 4 4 4 4
            [0, 0, 0, 0, 0, 0, 0]  // 5 5 5 5 5 5 5 5
          ];

        let testBoard1 = [
            [1, 0, 0, 0, 0, 0, 0], // 1 1 1 1 1 1 1 1
            [0, 0, 0, 0, 0, 0, 0], // 2 2 2 2 2 2 2 2
            [0, 0, 0, 0, 0, 0, 0], // 3 3 3 3 3 3 3 3
            [0, 0, 0, 0, 0, 0, 0], // 4 4 4 4 4 4 4 4
            [0, 0, 0, 0, 0, 0, 0]  // 5 5 5 5 5 5 5 5
          ];

        let testBoard2 = [
            [2, 0, 0, 0, 0, 0, 0], // 1 1 1 1 1 1 1 1
            [0, 0, 0, 0, 0, 0, 0], // 2 2 2 2 2 2 2 2
            [0, 0, 0, 0, 0, 0, 0], // 3 3 3 3 3 3 3 3
            [0, 0, 0, 0, 0, 0, 0], // 4 4 4 4 4 4 4 4
            [0, 0, 0, 0, 0, 0, 0]  // 5 5 5 5 5 5 5 5
          ];

        
        for (let col = 0; col < 7; col++)  //row was originally here, but in our win checks we are accessing col before row (?)
        {
            for (let row = 0; row < 6; row++) 
            {
                if (testBoard0[row][col]==0) // 0 for no color
                {
                    console.log("Slot not selected by either Player 1 or Player 2 remains unselected: PASSED.")
                } 
                else
                {
                    console.log("Slot not selected by either Player 1 or Player 2 remains unselected: FAILED.")
                }
            }
        }

        for (let col = 0; col < 7; col++)  //row was originally here, but in our win checks we are accessing col before row (?)
        {
            for (let row = 0; row < 6; row++) 
            {
                if (testBoard1[row][col]==1) //1 for yellow
                { 
                    console.log("Slot selected by either Player 1: PASSED.")
                } 
                else
                {
                    console.log("Slot selected by either Player 1: FAILED.")
                }
            }
        }

        for (let col = 0; col < 7; col++)  //row was originally here, but in our win checks we are accessing col before row (?)
        {
            for (let row = 0; row < 6; row++) 
            {
                if (testBoard2[row][col]==2) //1 for yellow
                { 
                    console.log("Slot selected by either Player 1: PASSED.")
                } 
                else
                {
                    console.log("Slot selected by either Player 1: FAILED.")
                }
            }
        }
    }

    function test03_checkHoriz()
    {
        let testBoard = [
            [1, 1, 1, 1, 1, 1, 1], // 1 1 1 1 1 1 1 1
            [0, 0, 0, 0, 0, 0, 0], // 2 2 2 2 2 2 2 2
            [0, 0, 0, 0, 0, 0, 0], // 3 3 3 3 3 3 3 3
            [0, 0, 0, 0, 0, 0, 0], // 4 4 4 4 4 4 4 4
            [0, 0, 0, 0, 0, 0, 0]  // 5 5 5 5 5 5 5 5
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
                            console.log("Horizon Win detected: PASSED.");
                        }
                        else
                        {
                            console.log("Horizon Win detected: FAILED.");
                        }
                        
                    }

                }

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
          turn = 1; 
          gameActive = true;
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
            }

            if (currPlayer == 1)
            {
                 for(let row = 5; row >= 0; row --)
                 {
                    if(board[row][chosenCol] == 0) 
                    {
                        board[row][chosenCol] = 1;
                        break;
                    }
                 }

                currPlayer = 2;
                //turn++;
                document.getElementById("colorTurn").innerHTML="Red Turn";
            }
            else 
            {
                 for(let row = 5; row >= 0; row --)
                 {
                    if(board[row][chosenCol] == 0) 
                    {
                        board[row][chosenCol] = 2;
                        break;
                    }
                 }

                currPlayer = 1;
                //turn++;
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
        turn++;
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

