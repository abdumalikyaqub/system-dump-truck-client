export const importFromCsv = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/DumpTrucks/import/csv', {
        method: 'POST',
        body: formData,
    });

    if (response.ok) {
        console.log('Data imported successfully');
    } else {
        console.error('Failed to import data from CSV');
    }
};

export const importFromJson = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('https://localhost:7222/api/DumpTrucks/import/json', {
        method: 'POST',
        body: formData,
    });

    if (response.ok) {
        console.log('Data imported successfully');
    } else {
        console.error('Failed to import data from JSON');
    }
};