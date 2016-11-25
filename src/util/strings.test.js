import { titleCase } from './strings';

it('renders a title case', () => {
	const expected = 'My Title Case';
	expect(titleCase('my tiTle Case')).toEqual(expected);
});
