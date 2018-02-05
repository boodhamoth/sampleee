import { Component,NgModule, OnInit, AfterViewInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { TransformerService } from './transformer.service';
import {UserData} from '../user-data';
import {DatePipe} from '@angular/common';
import {ServiceObj} from './service-obj';

declare var $:any;

@Component({
  selector: 'app-transformer',
  templateUrl: './transformer.component.html',
  styleUrls: ['./transformer.component.css'],
  providers: [TransformerService],
})
export class TransformerComponent implements OnInit, AfterViewInit {
  
  
 
  isValid:boolean;
  check:boolean=true;

  keyid:string ='1001';

  GetSummary=[];
  GetKeys=[];
  GetKeyDetails=[];

   ud :UserData= new UserData();
   serviceObj:ServiceObj = new ServiceObj();
  
 
  isbatchval() {
    
    if(this.ud.batchId!=null&&this.ud.batchId.length==0 ){
       return true;
    }else {
        return false;
    }
}


  issourcesys() {
    
 if(this.ud.sourceSystemName.length==0){
      return true;
 }else  {
       return false;
    
    }
}

isfromdateVal(){
  

  console.log(this.ud.fromDate.length);

  if(this.ud.fromDate.length==0){

    return false;
  
  }else{
    return true;
  }
}


 
  
  

  persons : [{
    fieldName: string,
    generatedData: string,
    targetedData : string
   
}];
address : [{
  fieldName: string,
  generatedData: string,
  targetedData : string
 
}];

telecommunication : [{
  fieldName: string,
  generatedData: string,
  targetedData : string
 
}];
elecommunication : [{
  fieldName: string,
  generatedData: string,
  targetedData : string
 
}];
socialmedia : [{
  fieldName: string,
  generatedData: string,
  targetedData : string
 
}];



  dropdownList = [];

    selectedItems = [];

    dropdownSettings = {};

    ngOnInit(){
       const d: Date=new Date();
      this.ud.fromDate=this.datepipe.transform(d,'dd/MM/yyyy');

      $('body').on('change','#fromDate',function(){

        $('#fromDate').trigger('click');
              });

      // this.transformerService.getKeys()
      // .subscribe(Keys => this.GetKeys = Keys);
      
      // this.transformerService.getKeyDetails()
      // .subscribe(KeyDetails => this.GetKeyDetails = KeyDetails);

      //this.transformerService.getbatchId(this.ud.batchVal);
       
     // this.transformerService.getKeyId(this.keyid);
    

        this.dropdownList = [

                              {"id":1,"itemName":"FX"},

                              {"id":2,"itemName":"FDM"},

                              {"id":3,"itemName":"FDFR"},

                              {"id":4,"itemName":"EACI"}

                             

                            ];

        this.selectedItems = [

                               
          

                            ];

        this.dropdownSettings = {

                                  singleSelection: false,

                                  //text:"",
                                  selectAllText:'Select All',

                                  unSelectAllText:'UnSelect All',

                                  enableSearchFilter: true,

                                  classes:"myclass custom-class"

                               };           

    }

    onItemSelect(item:any){

       
    }

    OnItemDeSelect(item:any){

        
    }

    onSelectAll(items: any){

        

    }

    onDeSelectAll(items: any){


    }

 

 


  isCollapsed:boolean = false;

  isCollapsedAdd:boolean = true;

  isCollapsedTele:boolean = true;

  isCollapsedSocio:boolean = true;

  isCollapsedElect:boolean = true;

  contacts= [

    {"keyid":"1001",

    "matched":"difference"

    },

    {"keyid":"1002",

    "matched":"same"

    },

    {"keyid":"1003",

    "matched":"same"

    },

    {"keyid":"1005",

    "matched":"difference"

    },

    {"keyid":"1006",

    "matched":"difference"

    },

    {"keyid":"1007",

    "matched":"same"

    },

    {"keyid":"1008",

    "matched":"difference"

    },

    {"keyid":"1009",

    "matched":"difference"

    },

    {"keyid":"1010",

    "matched":"same"

    },

    {"keyid":"1011",

    "matched":"difference"

    },

    {"keyid":"1012",

    "matched":"difference"

    },

    {"keyid":"1013",

    "matched":"same"

    }

];

  batchs = [{

     "id":"FX_23042018123044",

     "matched":"1000",

     "unmatched":"500"

  },

  {

    "id":"FX_23042018123043",

    "matched":"1500",

    "unmatched":"0"

},

{

  "id":"FX_23042018123042",

  "matched":"1400",

  "unmatched":"100"

},

{

  "id":"FX_23042018123041",

  "matched":"1300",

  "unmatched":"200"

},

{

  "id":"FX_23042018123040",

  "matched":"1200",

  "unmatched":"300"

},
{

  "id":"FX_23042018123049",

  "matched":"1900",

  "unmatched":"900"

}

 

]

 

constructor(private transformerService:TransformerService, public datepipe : DatePipe) { 
  

 
}


 

 

  ngAfterViewInit(){

    

    
 }
 
  
  reset()
  {

    this.ud.batchId = '';
    this.ud.sourceSystemName.length=0;
    this.ud.fromDate = '';
    this.ud.toDate = '';



  }
  

Search()

{
  console.log(this.ud);
 
this.transformerService.getSummary(this.ud)
  .subscribe(summaryDetails => this.serviceObj = summaryDetails);
this.selectedSearch=true;

}


changedate(date : any)
{
  console.log('datecheckkkkkkkkkk');

this.ud.fromDate=date;
console.log('datecheck'+this.ud.fromDate);
}

key: string = 'batchId'; //set default
 

key1: string = 'keyid';

 

  reverse: boolean = true;

 

  reverse1: boolean = true;

 

  selectedSearch:boolean=false;

 

  sort(key){

 

    this.key = key;

 

    this.reverse = !this.reverse;

 

}

 

sortKey(key1){

 

  this.key1 = key1;

 

  this.reverse1 = !this.reverse1;

 

}

 

//initializing p to one
 

pd: number = 1;

pg: number = 1;


 }