export const exportToCsv = async () => {
    const response = await fetch('/api/DumpTrucks/export/csv', { method: 'POST' });
    if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'dump_trucks.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        console.error('Failed to export data to CSV');
    }
};

export const exportToJson = async () => {
    const response = await fetch('https://localhost:7222/api/DumpTrucks/export/json', { method: 'POST' });
    if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'dump_trucks.json');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        console.error('Failed to export data to JSON');
    }
};