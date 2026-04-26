import { initializeApp } from 'firebase/app';
import {
	collection,
	Firestore,
	getDocs,
	getFirestore,
} from 'firebase/firestore';
import { FirebaseStorage, getDownloadURL, getStorage, ref } from 'firebase/storage';

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: 'portfolio-24da8.firebaseapp.com',
	projectId: 'portfolio-24da8',
	storageBucket: 'portfolio-24da8.appspot.com',
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
	measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app, 'gs://portfolio-24da8.firebasestorage.app');

export type Passion = {
	id: string;
	name: { en: string; fr: string };
	image: string;
};

export type Project = {
	id: string;
	name: string;
	description: { en: string; fr: string };
	longDescription: { en: string; fr: string };
	image: string;
	stack: string[];
};

export type Skill = {
	name: string;
	category: string;
};

export class FirestoreService {
	private db: Firestore;
	private storage: FirebaseStorage;
	private passionsPromise: Promise<Passion[]> | null = null;
	private projectsPromise: Promise<Project[]> | null = null;
	private skillsPromise: Promise<Skill[]> | null = null;

	constructor() {
		this.db = db;
		this.storage = storage;
	}

	getAllPassions(): Promise<Passion[]> {
		if (!this.passionsPromise) {
			this.passionsPromise = this._fetchPassions().catch((err) => {
				this.passionsPromise = null;
				throw err;
			});
		}
		return this.passionsPromise;
	}

	private async _fetchPassions(): Promise<Passion[]> {
		const querySnapshot = await getDocs(collection(this.db, 'passions'));
		const passions = querySnapshot.docs.map(
			(doc) => ({ id: doc.id, ...doc.data() }) as Passion
		);
		await Promise.all(
			passions.map(async (passion) => {
				if (passion.image) {
					passion.image = await this.getImageUrl(passion.image);
				}
			})
		);
		return passions;
	}

	getAllProjects(): Promise<Project[]> {
		if (!this.projectsPromise) {
			this.projectsPromise = this._fetchProjects().catch((err) => {
				this.projectsPromise = null;
				throw err;
			});
		}
		return this.projectsPromise;
	}

	private async _fetchProjects(): Promise<Project[]> {
		const querySnapshot = await getDocs(collection(this.db, 'projects'));
		const projects: Project[] = querySnapshot.docs.map((doc) => {
			const data = doc.data();
			return {
				id: doc.id,
				name: data.name || '',
				description: data.description || '',
				image: data.image || '',
				stack: data.stack || [],
				longDescription: data.longDescription || '',
			};
		});
		await Promise.all(
			projects.map(async (project) => {
				if (project.image) {
					try {
						project.image = await this.getImageUrl(project.image);
					} catch (error) {
						console.error(
							`Erreur lors du chargement de l'image pour le projet ${project.name}:`,
							error
						);
					}
				}
			})
		);
		return projects;
	}

	getAllSkills(): Promise<Skill[]> {
		if (!this.skillsPromise) {
			this.skillsPromise = this._fetchSkills().catch((err) => {
				this.skillsPromise = null;
				throw err;
			});
		}
		return this.skillsPromise;
	}

	private async _fetchSkills(): Promise<Skill[]> {
		const querySnapshot = await getDocs(collection(this.db, 'skills'));
		return querySnapshot.docs.map((doc) => doc.data() as Skill);
	}

	async getImageUrl(imagePath: string): Promise<string> {
		const imageRef = ref(this.storage, imagePath);
		return getDownloadURL(imageRef);
	}
}

export const firestoreService = new FirestoreService();

export default firestoreService;
