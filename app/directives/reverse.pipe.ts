import {Pipe, PipeTransform} from "@angular/core";
@Pipe({
    name: 'reverse'
})
export class ReversePipe implements PipeTransform{
    public transform(value: any, args: any): any {
        if (!! value){
            let isArray: boolean = value instanceof Array;
            let isString: boolean=typeof value === 'string';
            let isNumber: boolean=typeof value === 'number';

            if (isArray){
                return (<Array<any>>value).reverse();
            }else if (isString || isNumber){

                let newVal: any = (value+'').split('').reverse().join('');
                if (isNumber) {
                    return parseFloat(newVal);
                }else {
                    return newVal;
                }
            }
        }

        return value;
    }
}