class ChessPiece{
    _type;
    _colour = 1;
    _position = []

    constructor(col, pos){
        this._colour = col;
        this._position = pos;
    }

    moveToPos(pos){
        if(this._validateSpot(pos)){
            this._position = pos;
            return true;
        } else {
            return false;
        }
        //check if patterne matches
        //update position
    }
    _validateSpot(pos){
        return false;
        //check if pattern matches
    }

    getPosition(){
        return this._position;
    }
    getType(){
        return this._type;
    }
}

class Pawn extends ChessPiece{
    #firstMove;
    _type = 'pawn'
    constructor(col, pos){
        super(col, pos);
        this.#firstMove = true;
    }

    moveToPos(pos){
        if(this._validateSpot(pos)){
            this._position = pos;
            this.#firstMove = false;
            return true;
        } else {
            return false;
        }
        //check if patterne matches
        //update position
    }

    _validateSpot(pos){
        //edit to consider first move
        let xDiff = Math.abs(this._position[0] - pos[0]);
        //tager ikke absolut af yDiff fordi det har betydning om den går op eller ned
        let yDiff = this._position[1] - pos[1];
        //kan ikke gå til siden (medmindre den tager en anden brik, det tjekker vi ikke efter nu)
        if(xDiff != 0){
            return false;
        } 
        //hvis brikken er hvis kan den gå i positiv y retning, ellers negativ
        let rightDir = this._colour == 1 ? -1 : 1;

        //hvis det er første gang den bevæger sig
        if(this.#firstMove){
            //hvis den gå en eller to felter i den rigtige retning
            if(yDiff === rightDir || yDiff === rightDir*2){
                return true;
            }
            //hvis det ikke første move
        } else{
            if(yDiff === rightDir){
                return true;
            }
        }

        return false;
    }
}


module.exports = Pawn;