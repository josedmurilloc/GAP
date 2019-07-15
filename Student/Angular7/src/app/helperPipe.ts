import { PipeTransform, Pipe } from '@angular/core';


@Pipe({
    name: 'filterPhase',
    pure: false
})
export class FilterPhasePipe implements PipeTransform {

    transform(items: any[], value): any {
        if (value > 80) {
            return value
                ? items.filter(item =>

                    item.Language_Arts > 80
                    && item.Science > 80
                    && item.SocialStudies > 80
                    && item.Math >80

                ) : items;
        }
        else {
            return value
                ? items.filter(item =>
                    item.StudentName.toUpperCase().indexOf(value.toUpperCase()) !== -1
                    || item.Language_Arts == value
                    || item.Science == value
                    || item.SocialStudies == value
                    || item.Math == value

                ) : items;
        }

    }
}

