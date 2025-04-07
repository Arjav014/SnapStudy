export const getExtractedData = async (files) => {
  const filePaths = files.map((file) => file.path);

  try {
    const response = await fetch("http://localhost:3001/api/pdf/extract-text", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ filePaths }),
    });

    if (!response.ok) {
      throw new Error("Extraction failed");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error while extracting data:", error);
  }
};
