var app = angular.module('angularPlayground');

app.controller('RepeatController', RepeatController);


function RepeatController() {
    this.repeatStatus = 'Working';
    //The cart is an array of items that we are adding from our view
    this.cart = [];
    //The store is what we are using to populate our page with
    this.store = {
        items: StoreData
    };
    //*** No Need to edit anything above this line ****

    this.name = "My BɼokƏn Cart!";

    this.getCount = function () {
        //return the length of our cart
        return this.cart.length;
    };

    /*
    * Write a calculateCartTotal function
    * make it assesible to our view
    * this function should return the total cost
    * of each item that is in our cart
    */

    this.calculateCartTotal = function () {
        var total = 0;
        for (var i = 0; i < this.cart.length; i++) {
            total += this.cart[i].price * this.cart[i].quantity;
            //console.log(i + " Item:"+this.cart[i].name+" Price:"+this.cart[i].price+" Quantity:"+this.cart[i].quantity + " RunningTotal:"+ total);
        }
        return total;
    };

    this.removeItemFromCart = function (item) {
        //Item gets passed in from our view when the user clicks the x button
        for (var i = 0; i < this.cart.length; i++) {
            if (item.name === this.cart[i].name &&
                item.color === this.cart[i].color &&
                item.size === this.cart[i].size &&
                item.quantity === this.cart[i].quantity &&
                item.price === this.cart[i].price) {
                //console.log("Delete " + i + " which is " + item.name + ":" + item.size + ":" + item.color);
                this.cart.splice(i, 1);
                break;
            }
        }
        /*
        * This function should be able to remove the passed in item
        * from our cart. You will have to first identify where the passed
        * in item is in the array. Then you will need to use the correct
        * Array.method to remove 1 item hint method(i, 1);
        */
    };

    this.addItemToCart = function (item) {
        //item gets passed in to this function from the view
        //console.log(item);
        var newItem = {
            name: item.name,
            color: item.selectedColor,
            size: item.selectedSize,
            quantity: 1,
            price: item.price,
        }
        //console.log(newItem);
        this.cart.push(newItem);
        /*
        Our cart demands that items being added to it must have the following properties
        var newItem = {
          name:'',
          color:'',
          size: '',
          quantity: 1,
          price:'',
        }
        console.log the item being passed in from the view 
        to figure out which properties from item need to be 
        remaped to the newItem object. 
        After building the newItem add it to the cart 
        */
    }
}