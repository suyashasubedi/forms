export class Reciepe{
    public name: string;
    public description : string;
    public imagePath  :string;

constructor(name :string, desc:string,imagePath:string){
this.name=name;
this.description=desc;
this.imagePath=imagePath;
//this is a new cretaed model which links to receiepe-detail.

}
}