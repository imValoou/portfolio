import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

type Store = {
	lang: string;
};

const initialState: Store = {
	lang: 'en',
};

export const Store = signalStore(
	{ providedIn: 'root' },
	withState(initialState),
	withMethods((store) => ({
		setLang(lang: string) {
			patchState(store, () => ({
				lang: lang,
			}));
			return lang;
			console.log('Lang set to:', store.lang());
		},
	}))
);
