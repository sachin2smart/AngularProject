import { Component } from '@angular/core';

@Component({
    selector: 'pm-products',
    moduleId:module.id,
    templateUrl: './product-list.component.html'
    
})
export class ProductListComponent {
    pageTitle: string = 'Product List';
    showImage:boolean=false;
    imageWidth:number=50;
    imageMargin:number=50;
    products: any[] =  [
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": '****',
            "imageUrl": "./app/product/Penguins.jpg"
            
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "https://static.pexels.com/photos/247932/pexels-photo-247932.jpeg"
           
        },

        {
            "productId": 7,
            "productName": "Penguin",
            "productCode": "PNG-0089",
            "releaseDate": "May 21, 2017",
            "description": "Three Penguins",
            "price": 9.0,
            "starRating": 5.0,
            "imageUrl": "https://static.pexels.com/photos/247932/pexels-photo-247932.jpeg"
           
        }
    ];
    toggleImage()
    {
        this.showImage = !this.showImage;
    }
}
