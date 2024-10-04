document.getElementById('patientForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const condition = document.getElementById('condition').value;
    const brainActivityData = document.getElementById('brainActivityData').value;

    const patientData = {
        name,
        age: parseInt(age),
        condition,
        brainActivityData
    };

    try {
        const response = await fetch('/api/patients', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(patientData)
        });

        if (response.ok) {
            const result = await response.json();
            alert(`Patient data submitted successfully: ${JSON.stringify(result)}`);
        } else {
            throw new Error('Failed to submit patient data');
        }
    } catch (error) {
        alert(error.message);
    }
});

document.getElementById('fetchEEGDataBtn').addEventListener('click', async () => {
    const patientId = document.getElementById('patientId').value;

    try {
        const response = await fetch(`/api/eegdata/patients/${patientId}`);

        if (!response.ok) {
            const errorText = await responce.text();
            throw new Error(`Failed to fetch EEG data: ${errorText}`);
        }

        const eegData = await response.json();
        document.getElementById('eegDataDisplay').innerText = JSON.stringify(eegData, null, 2);
    } catch (error) {
        alert(error.message);
    }
});
