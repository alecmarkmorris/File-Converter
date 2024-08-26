const submitButton = document.getElementById("submit");
const optionSelected = document.getElementById("file-select")



submitButton.addEventListener("click", function(){
        
    uploadFile()
        alert(fileInput.value);
});


async function uploadFile() {
        const fileInput = document.getElementById('fileInput');
        const file = fileInput.files[0];
        
        if (!file) {
            alert('Please select a file');
            return;
        }
    
        const formData = new FormData();
        formData.append('file', file);
    
        try {
            const response = await fetch('https://python-api-jtjd.onrender.com/PDF2DOCX', {
                method: 'POST',
                body: formData
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            // Download the DOCX file
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'converted.docx'; // Filename for the downloaded file
            document.body.appendChild(a);
            a.click();
            a.remove();
        } catch (error) {
            console.error('Error:', error);
        }
    }
    