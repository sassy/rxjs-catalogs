import { filterSample } from './filter';

test('test of filter', (done) => {
    const obj$ = filterSample()
    obj$.subscribe({
        next: (v) => {
            expect(v == 2 || v == 4);
        },
        complete: () => {
            done();
        },
    });
});