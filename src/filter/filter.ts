import { Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';

export function filterSample(): Observable<number> {
    return of(1, 2, 3, 4)
    .pipe(
        filter(v => v % 2 == 0)
    );
}