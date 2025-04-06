import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useFileStore = create(
  persist(
    (set) => ({
      files: [],
      addFile: (file) =>
        set((state) => ({ files: [...state.files, file] })),
      removeFile: (id) =>
        set((state) => ({
          files: state.files.filter((file) => file.id !== id),
        })),
      clearFiles: () => set({ files: [] }),
    }),
    {
      name: 'snapstudy-files', // key in localStorage
    }
  )
);

export default useFileStore;
