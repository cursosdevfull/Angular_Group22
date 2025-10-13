import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "reduce"
})
export class ReducePipe implements PipeTransform {
    transform(value: string, limit: number = 50, txt: string = '...'): string {
        const words = value.split(' ');
        if (words.length <= limit) {
            return value;
        }
        return words.slice(0, limit).join(' ') + txt
    }
}