// services/FirestoreService.ts
import { db } from "@/database/firebase";
import { 
  doc, 
  addDoc, 
  getDoc, 
  updateDoc, 
  collection, 
  query,
  where,
  getDocs, 
  deleteDoc 
} from 'firebase/firestore';

//interfaces
import { IUser, IGameResults, ILeaderboard } from "@/utils/interfaces/types";

export class DbService<T> {
  private collectionName: string;

  constructor(collectionName: string) {
    this.collectionName = collectionName;
  }

  /**
   * Adds a document to the collection and updates it with the autogenerated ID
   * 
   * @param data 
   * @returns Add status
   */
  async add(data: T): Promise<{ status: number }> {
    try {
      const docRef = await addDoc(collection(db, this.collectionName), data as any);
      const id = docRef.id;
      await updateDoc(docRef, { id }); // Assuming the document has an `id` field
      return { status: 200 };
    } catch (error) {
      console.error(`Error adding document in ${this.collectionName}: `, error);
      return { status: 500 };
    }
  }

  /**
   * 
   * @param id 
   * @returns Returns a document with the given id
   */
  async get(id: string): Promise<{ status: number; data: T | undefined }> {
    try {
      const docRef = doc(db, this.collectionName, id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return { status: 200, data: docSnap.data() as T };
      } else {
        return { status: 404, data: undefined };
      }
    } catch (error) {
      console.error(`Error retrieving document from ${this.collectionName}: `, error);
      return { status: 500, data: undefined };
    }
  }

  /**
   * 
   * @param id 
   * @param data 
   * @returns Updates a document with the given id
   */
  async update(id: string, data: Partial<T>): Promise<{ status: number }> {
    try {
      const docRef = doc(db, this.collectionName, id);
      await updateDoc(docRef, data);
      return { status: 200 };
    } catch (error) {
      console.error(`Error updating document in ${this.collectionName}: `, error);
      return { status: 500 };
    }
  }

  /**
   * 
   * @param id 
   * @returns Deletes a document with the given id
   */
  async delete(id: string): Promise<{ status: number }> {
    try {
      const docRef = doc(db, this.collectionName, id);
      await deleteDoc(docRef);
      return { status: 200 };
    } catch (error) {
      console.error(`Error deleting document from ${this.collectionName}: `, error);
      return { status: 500 };
    }
  }

  /**
   * 
   * @returns Returns an array of all documents in the collection
   * 
  */
  async getAll(): Promise<{ status: number; data: T[] }> {
    try {
      const colRef = collection(db, this.collectionName);
      const querySnapshot = await getDocs(query(colRef));
      const data = querySnapshot.docs.map(doc => doc.data() as T);
      return { status: 200, data };
    } catch (error) {
      console.error(`Error getting all documents from ${this.collectionName}: `, error);
      return { status: 500, data: [] };
    }
  }

  /**
   * 
   * @param ids 
   * @returns Returns an array of documents with the given ids
   */
  async getMany(ids: string[]): Promise<{ status: number; data: T[] }> {
    try {
      const data: T[] = [];
      for (const id of ids) {
        const docRef = doc(db, this.collectionName, id);
        const docSnapshot = await getDoc(docRef);
        if (docSnapshot.exists()) {
          data.push(docSnapshot.data() as T);
        }
      }
      return { status: 200, data };
    } catch (error) {
      console.error(`Error getting documents from ${this.collectionName}: `, error);
      return { status: 500, data: [] };
    }
  }

  //function that recieves a field and a value and returns the documents that have the item (id) in the field of type string[]
  async getByField(field: string, value: string): Promise<{ status: number; data: T[] }> {
    try {
      const colRef = collection(db, this.collectionName);
      const querySnapshot = await getDocs(query(colRef, where(field, 'array-contains', value)));
      const data = querySnapshot.docs.map(doc => doc.data() as T);
      return { status: 200, data };
    } catch (error) {
      console.error(`Error getting documents from ${this.collectionName}: `, error);
      return { status: 500, data: [] };
    }
  }

  async getByFieldEqual(field: string, value: string): Promise<{ status: number; data: T[] }> {
    try {
      const colRef = collection(db, this.collectionName);
      const querySnapshot = await getDocs(query(colRef, where(field, '==', value)));
      const data = querySnapshot.docs.map(doc => doc.data() as T);
      return { status: 200, data };
    } catch (error) {
      console.error(`Error getting documents from ${this.collectionName}: `, error);
      return { status: 500, data: [] };
    }
  }
}


//export services
export const participantService = new DbService<IUser>('users');
export const gameResultsService = new DbService<IGameResults>('game_results');
export const leaderboardService = new DbService<ILeaderboard>('leaderboard');