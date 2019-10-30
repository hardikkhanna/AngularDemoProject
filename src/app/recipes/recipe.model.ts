


export class Recipe{
    public name : String;
    public description : String;
    public imagePath : String;

    constructor(public first : String, public desc: String , public imagepath : String){
        this.name = first;
        this.description = desc;
        this.imagePath = imagepath;
    }
}

