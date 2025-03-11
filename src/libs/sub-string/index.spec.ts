import { test, describe, expect } from 'vitest';
import { localizeDate } from '.';

test('localizeDate', ()=>{
    const date = new Date('2025-02-21T12:00:00');
    const expected = '2025년 02월 21일';
    const result = localizeDate(date);

    expect(result).toEqual(expected);

})