import {Summaryinfomodel} from  './summaryinfomodel';
import{ContactsInfoDetaislmodel} from  './contacts-info-model';
import{DetailedDataInfoModel} from  './detailed-data-info-model'
export class ServiceObj {

    summaryInfoLst : Summaryinfomodel[];
    keyInfoDetaisl: ContactsInfoDetaislmodel[];
     contactDetailsLst  : Map<string,DetailedDataInfoModel[]>;
}
