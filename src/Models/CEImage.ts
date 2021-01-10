class CEImage
{
    public imageObject : HTMLImageElement;

    constructor(source : string)
    {
        this.imageObject = new Image();
        this.imageObject.src = source;
    }
}

export default CEImage;