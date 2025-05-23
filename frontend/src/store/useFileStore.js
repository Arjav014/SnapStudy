import { create } from "zustand";
import { persist } from "zustand/middleware";

const useFileStore = create(
  persist(
    (set) => ({
      files: [],
      processedData: null,
      processingStage: null,

      addFile: (file) => set((state) => ({ files: [...state.files, file] })),
      removeFile: (id) =>
        set((state) => ({
          files: state.files.filter((file) => file.id !== id),
        })),
      clearFiles: () => set({ files: [] }),

      setProcessedData: (data) => set({ processedData: data }),
      clearProcessedData: () => set({ processedData: null }),
      setProcessingStage: (stage) => set({ processingStage: stage }),
    }),
    {
      name: "snapstudy-files", // key in localStorage
    }
  )
);

export default useFileStore;
