class TicTacToe {
    constructor() {
    this.symbol='x';
    this.turns=0;
    this.matrix=[[null,null,null],
                 [null,null,null],
                 [null,null,null]];
    }

    getCurrentPlayerSymbol() {

	 return this.symbol;
	
		
    }
//	should properly update class state (change current player, update marks storage etc.)		
    nextTurn(rowIndex, columnIndex) {
	if(!this.matrix[rowIndex][columnIndex])
        {this.matrix[rowIndex][columnIndex]=this.symbol;this.turns++;
	if(this.symbol==='x')
	  this.symbol='o'
	else
	this.symbol='x';}
	


    }
//should return true if game is finished (e.g. there is a winner or it is a draw)
    isFinished() {
        if(this.noMoreTurns()||this.getWinner()!==null)
        return true;
      else
        return false;

    }
//should return winner symbol (x or o) or null if there is no winner yet
    getWinner() {
        for(let i=0;i<3;i++){ 
             if(this.matrix[i][0]===this.matrix[i][1]&&this.matrix[i][1]===this.matrix[i][2]&&this.matrix[i][2]!==null)
             {
                return this.matrix[i][0];
             }
        }
        for(let i=0;i<3;i++){ 
             if(this.matrix[0][i]===this.matrix[1][i]&&this.matrix[1][i]===this.matrix[2][i]&&this.matrix[2][i]!==null)
             {
                return this.matrix[0][i];
             }
        }
             if(this.matrix[0][0]===this.matrix[1][1]&&this.matrix[1][1]===this.matrix[2][2]&&this.matrix[2][2]!==null)
             {
                return this.matrix[0][0];
             }
              if(this.matrix[2][0]===this.matrix[1][1]&&this.matrix[1][1]===this.matrix[0][2]&&this.matrix[2][0]!==null)
             {
                return this.matrix[2][0];
             }
             return null;

    
    }
//should return true if there is no more fields to place a x or o

    noMoreTurns() {
 if (this.turns === 9) 
             return true;
          else 
             return false;
        
    }
//should return true if there is no more turns and no winner
    isDraw() {
	if(!this.isFinished()||this.getWinner()!==null)
        return false;
       else
        return true;
    }
//should return matrix[row][col] value (if any) or null
    getFieldValue(rowIndex, colIndex) {
    return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
