import { initializeApp } from 'firebase/app';
import {
	collection,
	Firestore,
	getDocs,
	getFirestore,
} from 'firebase/firestore';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';

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
	name: string;
	image: string;
};

export type Project = {
	id: string;
	name: string;
	description: string;
	image: string;
	stack: string[];
	longDescription: string;
};

export type Skill = {
	name: string;
	category: string;
};

let _passions: Passion[] = [];
let _projects: Project[] = [];
let _skills: Skill[] = [];

const loading = {
	projects: false,
	passions: false,
	skills: false,
};

export class FirestoreService {
	private db: Firestore;
	private storage: any;

	constructor() {
		this.db = db;
		this.storage = storage;
	}

	async getAllPassions(): Promise<Passion[]> {
		if (_passions.length > 0) return _passions;
		if (loading.passions) return [];
		loading.passions = true;
		try {
			const querySnapshot = await getDocs(
				collection(this.db, 'passions')
			);
			_passions = querySnapshot.docs.map(
				(doc) =>
					({
						id: doc.id,
						...doc.data(),
					} as Passion)
			);
			loading.passions = false;
			return _passions;
		} catch (error) {
			console.error(
				'Erreur lors de la récupération des passions:',
				error
			);
			loading.passions = false;
			throw error;
		}
	}

	async getAllProjects(): Promise<Project[]> {
		console.log('Loading projects...');
		if (_projects.length > 0) return _projects;
		if (loading.projects) return [];
		loading.projects = true;
		try {
			const querySnapshot = await getDocs(
				collection(this.db, 'projects')
			);
			const projects: Project[] = [];

			for (const doc of querySnapshot.docs) {
				const data = doc.data();
				const project: Project = {
					id: doc.id,
					name: data.name || '',
					description: data.description || '',
					image: data.image || '',
					stack: data.stack || [],
					longDescription: data.longDescription || '',
				};

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

				projects.push(project);
			}
			_projects = projects;
			loading.projects = false;
			return _projects;
		} catch (error) {
			console.error('Erreur lors de la récupération des projets:', error);
			loading.projects = false;
			throw error;
		}
	}

	async getAllSkills(): Promise<Skill[]> {
		if (_skills.length > 0) return _skills;
		if (loading.skills) return [];
		loading.skills = true;
		try {
			const querySnapshot = await getDocs(collection(this.db, 'skills'));
			_skills = querySnapshot.docs.map((doc) => doc.data() as Skill);
			loading.skills = false;
			return _skills;
		} catch (error) {
			console.error(
				'Erreur lors de la récupération des compétences:',
				error
			);
			loading.skills = false;
			throw error;
		}
	}

	async getImageUrl(imagePath: string): Promise<string> {
		console.log(imagePath);
		try {
			const imageRef = ref(this.storage, imagePath);
			const url = await getDownloadURL(imageRef);
			return url;
		} catch (error) {
			console.error("Erreur lors de la récupération de l'image:", error);
			throw error;
		}
	}
}

export const firestoreService = new FirestoreService();

export default firestoreService;
