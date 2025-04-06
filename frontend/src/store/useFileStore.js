import { create } from "zustand";

const useFileStore = create((set) => ({
  files: [],
  combinedText: "",

  addFile: (newFile) =>
    set((state) => ({
      files: [...state.files, ...(Array.isArray(newFile) ? newFile : [newFile])],
    })),

  setCombinedText: (text) => set({ combinedText: text }),
}));

export default useFileStore;
