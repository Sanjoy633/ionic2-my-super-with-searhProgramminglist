import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ProgramDetailsPage } from '../program-details/program-details';

export class cPrograms{

question_id:string;
question:string;
in_c:string;
in_cplus:string;
in_java:string;


}
const programs:cPrograms[]=
[{"question_id":"1","question":"Factorial program in c using recursion.","in_c":"#include <stdio.h>\r\nlong int multiplyNumbers(int n);\r\n\r\nint main()\r\n{\r\n    int n;\r\n    printf(\"Enter a positive integer: \");\r\n    scanf(\"%d\", &n);\r\n    printf(\"Factorial of %d = %ld\", n, multiplyNumbers(n));\r\n    return 0;\r\n}\r\nlong int multiplyNumbers(int n)\r\n{\r\n    if (n >= 1)\r\n        return n*multiplyNumbers(n-1);\r\n    else\r\n        return 1;\r\n}\r\n","in_cplus":"#include <iostream.h>\r\n\r\nint factorial(int);\r\n\r\nvoid main(void) {\r\n\tint number;\r\n\t\r\n\tcout << \"Please enter a positive integer: \";\r\n\tcin >> number;\r\n\tif (number < 0)\r\n\t\tcout << \"That is not a positive integer.\\n\";\r\n\telse\r\n\t\tcout << number << \" factorial is: \" << factorial(number) << endl;\r\n}\r\n\r\nint factorial(int number) {\r\n\tint temp;\r\n\r\n\tif(number <= 1) return 1;\r\n\r\n\ttemp = number * factorial(number - 1);\r\n\treturn temp;\r\n}\r\n","in_java":"import java.util.Scanner;\r\nclass FactorialDemo{\r\n   public static void main(String args[]){\r\n      \/\/Scanner object for capturing the user input\r\n      Scanner scanner = new Scanner(System.in);\r\n      System.out.println(\"Enter the number:\");\r\n      \/\/Stored the entered value in variable\r\n      int num = scanner.nextInt();\r\n      \/\/Called the user defined function fact\r\n      int factorial = fact(num);\r\n      System.out.println(\"Factorial of entered number is: \"+factorial);\r\n   }\r\n   static int fact(int n)\r\n   {\r\n       int output;\r\n       if(n==1){\r\n         return 1;\r\n       }\r\n       \/\/Recursion: Function calling itself!!\r\n       output = fact(n-1)* n;\r\n       return output;\r\n   }\r\n}\r\n"}, {"question_id":"2","question":"Fibonacci series program in c using recursion.","in_c":"#include<stdio.h>\r\n \r\nint Fibonacci(int);\r\n \r\nmain()\r\n{\r\n   int n, i = 0, c;\r\n \r\n   scanf(\"%d\",&n);\r\n \r\n   printf(\"Fibonacci series\\n\");\r\n \r\n   for ( c = 1 ; c <= n ; c++ )\r\n   {\r\n      printf(\"%d\\n\", Fibonacci(i));\r\n      i++; \r\n   }\r\n \r\n   return 0;\r\n}\r\n \r\nint Fibonacci(int n)\r\n{\r\n   if ( n == 0 )\r\n      return 0;\r\n   else if ( n == 1 )\r\n      return 1;\r\n   else\r\n      return ( Fibonacci(n-1) + Fibonacci(n-2) );\r\n} \r\n","in_cplus":"#include<iostream>\r\n \r\nusing namespace std;\r\n \r\nint fibonacci(int n)\r\n{\r\n    if((n==1)||(n==0))\r\n    {\r\n        return(n);\r\n    }\r\n    else\r\n    {\r\n        return(fibonacci(n-1)+fibonacci(n-2));\r\n    }\r\n}\r\n \r\nint main()\r\n{\r\n    int n,i=0;\r\n    cout<<\"Input the number of terms for Fibonacci Series:\";\r\n    cin>>n;\r\n    cout<<\"\\nFibonacci Series is as follows\\n\";\r\n \r\n    while(i<n)\r\n    {\r\n        cout<<\" \"<<fibonacci(i);\r\n        i++;\r\n    }\r\n \r\n    return 0;\r\n}\r\n","in_java":"class FibonacciExample2{  \r\n static int n1=0,n2=1,n3=0;    \r\n static void printFibonacci(int count){    \r\n    if(count>0){    \r\n         n3 = n1 + n2;    \r\n         n1 = n2;    \r\n         n2 = n3;    \r\n         System.out.print(\" \"+n3);   \r\n         printFibonacci(count-1);    \r\n     }    \r\n }    \r\n public static void main(String args[]){    \r\n  int count=10;    \r\n  System.out.print(n1+\" \"+n2);\/\/printing 0 and 1    \r\n  printFibonacci(count-2);\/\/n-2 because 2 numbers are already printed   \r\n }  \r\n}  \r\n"}];
@Component({
  selector: 'program-list-page',
  templateUrl: 'program-list.html'
})
export class ProgramsListPage {
   searchQuery: string = '';
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  programs:Array<cPrograms>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    this.initializePrograms();
    
    
    /*for(let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }*/
  }

  itemTapped(event, item) {
    this.navCtrl.push(ProgramDetailsPage, {
      item: item
    });
  }

    programTapped(event, program) {
    this.navCtrl.push(ProgramDetailsPage, {
      program: program
    });
  }

initializePrograms(){
 
  this.programs=programs;
  
}

   getPrograms(ev: any) {
    // Reset items back to all of the items
    this.initializePrograms();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.programs = this.programs.filter((programs) => {
        return (programs.question.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
