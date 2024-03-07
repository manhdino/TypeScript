// const anchor = document.querySelector('a');

// console.log(anchor.href) // Error possibly null
// because TS doesn't actually know anchor tag is null or not null
// because TS  doesn't have permission to access anchor<a></a> 
// in file index.html

//Solution: check befor access to attributes of anchor
// if(anchor){
//     console.log(anchor.href);
// }

// or 
// const anchor = document.querySelector('a')!;
// console.log(anchor.href);

// const form = document.querySelector('form')!; // HTMLFormElement

//because TS can't known ClassName like tag form 
//cause ClassName can be applied to multiple form
// const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);

// Take input field in the form
// const type = document.querySelector('#type') as HTMLSelectElement;
// const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
// const details = document.querySelector('#details') as HTMLInputElement;
// const amount = document.querySelector('#amount') as HTMLInputElement;

// form.addEventListener('submit', (e: Event) => {
//    e.preventDefault();
//    console.log(type.value,tofrom.value,details.value,amount.value);
// })


//classes

class Invoice { 
//   public client: string;
//   readonly details: string;
//   private amount: number;

//    constructor(client: string, details: string, amount: number){
//       this.client = client;
//       this.details = details;
//       this.amount = amount;
//    }

  constructor(  // if you using this way, you must pass access modifier for each property
    public client: string,
    readonly details: string,
    private amount: number
  ){}

   format(){
      this.amount = 20;
     // this.details = "Hello, world!";  // readonly access modifier
      return `${this.client} owes ${this.amount}$ for ${this.details}`;
   }
}

//create  a new Object
const invOne = new Invoice("Dinomanh","work on Dinomanh Website",300);
const invTwo = new Invoice("Nhat Minh","work on Nhat Minh Website",400);

console.log(invOne,invTwo);

let invoices: Invoice[] = []; // array of invoices objects 
invoices.push(invOne); 
invoices.push(invTwo);
console.log(invoices);

invOne.client = "Hoang Nam";
console.log(invOne)

invoices.forEach(inv=>{
   console.log(inv.client,inv.details,inv.format());
})

//access modifier: public, private, readonly: use when you have private properties but if it's private you can access to private properties
//That's why using readonly(access outside and inside but you can't change it outside)
// private: inside:change,read, outside: can't change,can't read
// readonly: inside:can't change, can read, outside:can't change,can read



