import {
   addDoc,
   updateDoc,
   deleteDoc,
   getDoc,
   collection,
   doc,
   onSnapshot,
   query,
   orderBy,
   where,
   serverTimestamp,
} from "firebase/firestore";

import { db } from "@/services/firebase";

function stripHtml(html = "") {

   return html
      .replace(/<[^>]*>/g, "")
      .replace(/&nbsp;/g, " ")
      .trim();
}

function generatePreview(content = "") {

   return stripHtml(content).slice(0, 120);
}

export async function createNote(uid) {

   try {

      const docRef = await addDoc(
         collection(db, "users", uid, "notes"),
         {
            title: "",
            content: "",
            preview: "",

            isDraft: true,
            isArchived: false,
            isPinned: false,

            tags: [],

            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),

            updatedAtClient: Date.now(),
         }
      );

      return {
         success: true,
         noteId: docRef.id,
      };

   } catch (error) {

      return {
         success: false,
         error: error.message,
      };
   }
}

export async function updateNote(
   uid,
   noteId,
   data
) {

   try {

      const noteRef = doc(
         db,
         "users",
         uid,
         "notes",
         noteId
      );

      const preview = generatePreview(
         data.content || ""
      );

      await updateDoc(noteRef, {
         ...data,

         preview,

         isDraft: false,

         updatedAt: serverTimestamp(),
         updatedAtClient: Date.now(),
      });

      return {
         success: true,
      };

   } catch (error) {

      return {
         success: false,
         error: error.message,
      };
   }
}

export async function deleteNote(
   uid,
   noteId
) {

   try {

      const noteRef = doc(
         db,
         "users",
         uid,
         "notes",
         noteId
      );

      await deleteDoc(noteRef);

      return {
         success: true,
      };

   } catch (error) {

      return {
         success: false,
         error: error.message,
      };
   }
}

export async function getNoteById(
   uid,
   noteId
) {

   try {

      const noteRef = doc(
         db,
         "users",
         uid,
         "notes",
         noteId
      );

      const snapshot = await getDoc(noteRef);

      if (!snapshot.exists()) {

         return {
            success: false,
            error: "Nota não encontrada",
         };
      }

      return {
         success: true,

         note: {
            id: snapshot.id,
            ...snapshot.data(),
         },
      };

   } catch (error) {

      return {
         success: false,
         error: error.message,
      };
   }
}

export function listenNotes(
   uid,
   callback
) {

   const notesRef = collection(
      db,
      "users",
      uid,
      "notes"
   );

   const q = query(
      notesRef,

      where(
         "isArchived",
         "==",
         false
      ),

      orderBy(
         "updatedAtClient",
         "desc"
      )
   );

   const unsubscribe = onSnapshot(

      q,

      (snapshot) => {

         const notes = snapshot.docs.map(
            (doc) => ({
               id: doc.id,
               ...doc.data(),
            })
         );

         callback(notes);
      },

      (error) => {

         console.log(
            "Erro ao escutar notas:",
            error
         );
      }
   );

   return unsubscribe;
}

export function listenArchivedNotes(
   uid,
   callback
) {

   const notesRef = collection(
      db,
      "users",
      uid,
      "notes"
   );

   const q = query(
      notesRef,

      where(
         "isArchived",
         "==",
         true
      ),

      orderBy(
         "updatedAtClient",
         "desc"
      )
   );

   const unsubscribe = onSnapshot(

      q,

      (snapshot) => {

         const notes = snapshot.docs.map(
            (doc) => ({
               id: doc.id,
               ...doc.data(),
            })
         );

         callback(notes);
      },

      (error) => {

         console.log(
            "Erro ao escutar notas arquivadas:",
            error
         );
      }
   );

   return unsubscribe;
}

export async function archiveNote(
   uid,
   noteId,
   value = true
) {

   try {

      const noteRef = doc(
         db,
         "users",
         uid,
         "notes",
         noteId
      );

      await updateDoc(noteRef, {

         isArchived: value,

         updatedAt: serverTimestamp(),
         updatedAtClient: Date.now(),
      });

      return {
         success: true,
      };

   } catch (error) {

      return {
         success: false,
         error: error.message,
      };
   }
}

/* export async function removeEmptyDraft(

   uid,
   noteId,
   title,
   content

) {

   const emptyTitle =
      !title?.trim();

   const emptyContent =
      !stripHtml(content);

   if (
      emptyTitle &&
      emptyContent
   ) {

      await deleteNote(
         uid,
         noteId
      );
   }
} */